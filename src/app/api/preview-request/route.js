import { getProductBySlug, getProductKind } from '../../../lib/marketing.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 4
const NO_STORE_HEADERS = { 'Cache-Control': 'no-store' }
const GENERIC_SUCCESS = {
  success: true,
  message: 'Thanks. Your preview request has been received.',
}

export const runtime = 'nodejs'

const rateLimitStore = globalThis.__previewRequestRateLimitStore ?? new Map()

if (!globalThis.__previewRequestRateLimitStore) {
  globalThis.__previewRequestRateLimitStore = rateLimitStore
}

function json(data, status = 200, extraHeaders = {}) {
  return Response.json(data, {
    status,
    headers: {
      ...NO_STORE_HEADERS,
      ...extraHeaders,
    },
  })
}

function cleanText(value, maxLength) {
  if (typeof value !== 'string') return ''
  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength)
}

function cleanLongText(value, maxLength) {
  if (typeof value !== 'string') return ''
  return value.trim().replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').slice(0, maxLength)
}

function getClientIdentifier(request) {
  const forwardedFor = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')
  const firstIp = forwardedFor?.split(',')[0]?.trim()
  const realIp = request.headers.get('x-real-ip')?.trim()
  const userAgent = request.headers.get('user-agent')?.slice(0, 120) || 'unknown-agent'
  return `${firstIp || realIp || 'unknown-ip'}:${userAgent}`
}

function takeRateLimitToken(key) {
  const now = Date.now()
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true }
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    }
  }

  current.count += 1
  return { allowed: true }
}

function hasTrustedOrigin(request) {
  const origin = request.headers.get('origin')
  if (!origin) return true

  try {
    const originUrl = new URL(origin)
    if (!['http:', 'https:'].includes(originUrl.protocol)) {
      return false
    }

    const requestHost = request.headers.get('x-forwarded-host') || request.headers.get('host')
    if (requestHost && originUrl.host === requestHost) {
      return true
    }

    return ['localhost', '127.0.0.1'].includes(originUrl.hostname)
  } catch {
    return false
  }
}

function isSafeInternalPath(value) {
  return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && value.length <= 180
}

async function getWorkerEnv() {
  try {
    const { getCloudflareContext } = await import('@opennextjs/cloudflare')
    return getCloudflareContext()?.env || null
  } catch {
    return null
  }
}

function buildLeadEmailText(lead) {
  return [
    'New preview request from airegready.com',
    '',
    `Package: ${lead.productTitle} (${lead.productKind})`,
    `Email: ${lead.email}`,
    `Name: ${lead.name || '-'}`,
    `Organization type: ${lead.organizationType || '-'}`,
    `Subscribe to updates: ${lead.subscribe ? 'yes' : 'no'}`,
    `Source page: ${lead.sourcePath}`,
    `Time: ${lead.timestamp}`,
    '',
    'Use case:',
    lead.useCase,
  ].join('\n')
}

async function sendLeadEmail(lead) {
  const env = await getWorkerEnv()
  const binding = env?.PREVIEW_REQUEST_EMAIL
  const to = env?.PREVIEW_REQUEST_EMAIL_TO || process.env.PREVIEW_REQUEST_EMAIL_TO
  const from =
    env?.PREVIEW_REQUEST_EMAIL_FROM ||
    process.env.PREVIEW_REQUEST_EMAIL_FROM ||
    'previews@airegready.com'

  if (!binding || typeof binding.send !== 'function' || !to) {
    return { success: true, mode: 'not-configured' }
  }

  try {
    await binding.send({
      to,
      from,
      subject: `Preview request: ${lead.productTitle}`,
      text: buildLeadEmailText(lead),
    })
    return { success: true, mode: 'email' }
  } catch (error) {
    console.error(
      JSON.stringify({ event: 'preview_request_email_failed', message: error?.message || 'unknown' })
    )
    return {
      success: false,
      status: 502,
      error: 'Unable to send the preview request. Please try again later.',
    }
  }
}

async function postToWebhook(payload) {
  const webhookUrl = process.env.PREVIEW_REQUEST_WEBHOOK_URL
  if (!webhookUrl) return { success: true, mode: 'log-only' }

  let url
  try {
    url = new URL(webhookUrl)
  } catch {
    return {
      success: false,
      status: 500,
      error: 'Preview request notifications are not configured correctly.',
    }
  }

  if (!['http:', 'https:'].includes(url.protocol)) {
    return {
      success: false,
      status: 500,
      error: 'Preview request notifications are not configured correctly.',
    }
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 8000)
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.PREVIEW_REQUEST_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.PREVIEW_REQUEST_WEBHOOK_TOKEN}`
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      cache: 'no-store',
      signal: controller.signal,
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      return {
        success: false,
        status: 502,
        error: 'Unable to send the preview request. Please try again later.',
      }
    }

    return { success: true, mode: 'webhook' }
  } catch (error) {
    return {
      success: false,
      status: error?.name === 'AbortError' ? 504 : 502,
      error:
        error?.name === 'AbortError'
          ? 'Preview request timed out. Please try again.'
          : 'Unable to send the preview request. Please try again later.',
    }
  } finally {
    clearTimeout(timeoutId)
  }
}

export async function POST(request) {
  if (!hasTrustedOrigin(request)) {
    return json({ error: 'Invalid request origin.' }, 403)
  }

  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return json({ error: 'Expected an application/json request.' }, 415)
  }

  const rateLimit = takeRateLimitToken(getClientIdentifier(request))
  if (!rateLimit.allowed) {
    return json(
      { error: 'Too many preview requests. Please try again in a few minutes.' },
      429,
      { 'Retry-After': String(rateLimit.retryAfter) }
    )
  }

  try {
    const body = await request.json()
    const {
      email,
      name,
      organizationType,
      useCase,
      productSlug,
      sourcePath,
      subscribe,
      website,
    } = body ?? {}

    if (typeof website === 'string' && website.trim()) {
      return json(GENERIC_SUCCESS, 200)
    }

    const product = getProductBySlug(cleanText(productSlug, 80))
    if (!product) {
      return json({ error: 'Please choose a valid catalog package.' }, 400)
    }

    const trimmedEmail = cleanText(email, 254).toLowerCase()
    if (!trimmedEmail || !EMAIL_RE.test(trimmedEmail)) {
      return json({ error: 'Please enter a valid email address.' }, 400)
    }

    const trimmedUseCase = cleanLongText(useCase, 1200)
    if (trimmedUseCase.length < 12) {
      return json({ error: 'Please add a short note about your use case.' }, 400)
    }

    const lead = {
      event: 'preview_request',
      productSlug: product.slug,
      productTitle: product.title,
      productKind: getProductKind(product),
      email: trimmedEmail,
      name: cleanText(name, 120) || null,
      organizationType: cleanText(organizationType, 80) || null,
      useCase: trimmedUseCase,
      subscribe: subscribe === true,
      sourcePath: isSafeInternalPath(sourcePath) ? sourcePath : `/catalog/${product.slug}`,
      timestamp: new Date().toISOString(),
    }

    console.log(JSON.stringify(lead))

    const emailResult = await sendLeadEmail(lead)
    if (!emailResult.success) {
      return json({ error: emailResult.error }, emailResult.status)
    }

    const webhookResult = await postToWebhook(lead)
    if (!webhookResult.success) {
      return json({ error: webhookResult.error }, webhookResult.status)
    }

    return json(GENERIC_SUCCESS, 200)
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }
}
