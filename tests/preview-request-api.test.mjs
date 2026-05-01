import test, { after } from 'node:test'
import assert from 'node:assert/strict'

import { POST } from '../src/app/api/preview-request/route.js'

const previousWebhookUrl = process.env.PREVIEW_REQUEST_WEBHOOK_URL
const previousWebhookToken = process.env.PREVIEW_REQUEST_WEBHOOK_TOKEN

delete process.env.PREVIEW_REQUEST_WEBHOOK_URL
delete process.env.PREVIEW_REQUEST_WEBHOOK_TOKEN

after(() => {
  if (previousWebhookUrl === undefined) {
    delete process.env.PREVIEW_REQUEST_WEBHOOK_URL
  } else {
    process.env.PREVIEW_REQUEST_WEBHOOK_URL = previousWebhookUrl
  }

  if (previousWebhookToken === undefined) {
    delete process.env.PREVIEW_REQUEST_WEBHOOK_TOKEN
  } else {
    process.env.PREVIEW_REQUEST_WEBHOOK_TOKEN = previousWebhookToken
  }
})

function previewRequest(body, client = '203.0.113.10') {
  return new Request('https://airegready.com/api/preview-request', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: 'https://airegready.com',
      'x-forwarded-host': 'airegready.com',
      'x-forwarded-for': client,
      'user-agent': `preview-request-test-${client}`,
    },
    body: JSON.stringify(body),
  })
}

async function withoutConsoleLog(callback) {
  const originalLog = console.log
  console.log = () => {}

  try {
    return await callback()
  } finally {
    console.log = originalLog
  }
}

test('preview request API accepts a valid catalog request', async () => {
  const response = await withoutConsoleLog(() =>
    POST(previewRequest({
      productSlug: 'ai-governance-starter-kit',
      email: 'lead@example.com',
      name: 'Example Lead',
      organizationType: 'startup',
      useCase: 'We need starter governance documents for staff AI use and vendor review.',
      sourcePath: '/catalog/ai-governance-starter-kit',
      subscribe: true,
    }))
  )

  assert.equal(response.status, 200)
  assert.equal((await response.json()).success, true)
})

test('preview request API rejects unknown catalog packages', async () => {
  const response = await POST(previewRequest({
    productSlug: 'missing-package',
    email: 'lead@example.com',
    useCase: 'We need starter governance documents for staff AI use.',
  }, '203.0.113.11'))

  assert.equal(response.status, 400)
})

test('preview request API rejects invalid email addresses', async () => {
  const response = await POST(previewRequest({
    productSlug: 'ai-governance-starter-kit',
    email: 'not-an-email',
    useCase: 'We need starter governance documents for staff AI use.',
  }, '203.0.113.12'))

  assert.equal(response.status, 400)
})

test('preview request API treats honeypot submissions as generic success', async () => {
  const response = await POST(previewRequest({
    productSlug: 'missing-package',
    email: 'bot@example.com',
    useCase: 'Automated spam payload should not matter.',
    website: 'https://example.com',
  }, '203.0.113.13'))

  assert.equal(response.status, 200)
  assert.equal((await response.json()).success, true)
})
