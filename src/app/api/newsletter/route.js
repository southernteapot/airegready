const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const BUTTONDOWN_API_URL = 'https://api.buttondown.com/v1/subscribers'
const GENERIC_SUCCESS = { success: true, message: 'Thanks for subscribing!' }
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const NO_STORE_HEADERS = { 'Cache-Control': 'no-store' }

export const runtime = 'nodejs'

const rateLimitStore = globalThis.__newsletterRateLimitStore ?? new Map()

if (!globalThis.__newsletterRateLimitStore) {
  globalThis.__newsletterRateLimitStore = rateLimitStore
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

async function subscribeViaButtondown(email) {
  const apiKey = process.env.BUTTONDOWN_API_KEY
  const isProduction = process.env.NODE_ENV === "production"
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 8000)

  if (!apiKey) {
    if (isProduction) {
      return {
        success: false,
        status: 503,
        error: 'Newsletter signup is temporarily unavailable. Please try again later.',
      }
    }

    console.warn(`[newsletter] BUTTONDOWN_API_KEY not set — logging only: ${email}`)
    return GENERIC_SUCCESS
  }

  let res
  try {
    res = await fetch(BUTTONDOWN_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      signal: controller.signal,
      body: JSON.stringify({ email_address: email }),
    })
  } catch (error) {
    if (error?.name === 'AbortError') {
      return {
        success: false,
        status: 504,
        error: 'Newsletter signup timed out. Please try again.',
      }
    }

    return {
      success: false,
      status: 502,
      error: 'Unable to reach the newsletter service. Please try again later.',
    }
  } finally {
    clearTimeout(timeoutId)
  }

  if (res.status === 201) {
    return GENERIC_SUCCESS
  }

  if (res.status === 409) {
    return { success: true, message: "You're already subscribed!" }
  }

  let detail = 'Unable to subscribe. Please try again.'
  try {
    const data = await res.json()
    if (data.detail) {
      detail = data.detail
    } else if (Array.isArray(data.email) && data.email.length > 0) {
      const first = data.email[0]
      detail = typeof first === 'string' ? first : first.msg || 'Invalid email address.'
    }
  } catch {
  }

  return { success: false, status: res.status, error: detail }
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
      { error: 'Too many signup attempts. Please try again in a few minutes.' },
      429,
      { 'Retry-After': String(rateLimit.retryAfter) }
    )
  }

  try {
    const body = await request.json()
    const { email, website } = body ?? {}

    if (typeof website === 'string' && website.trim()) {
      return json(GENERIC_SUCCESS, 200)
    }

    if (!email || typeof email !== 'string' || email.length > 254) {
      return json(
        { error: 'Email is required.' },
        400
      )
    }

    const trimmed = email.trim().toLowerCase()

    if (!EMAIL_RE.test(trimmed)) {
      return json(
        { error: 'Please enter a valid email address.' },
        400
      )
    }

    const result = await subscribeViaButtondown(trimmed)

    if (result.success) {
      return json(
        { success: true, message: result.message },
        200
      )
    }

    return json(
      { error: result.error },
      result.status >= 400 && result.status < 500 ? result.status : 502
    )
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }
}
