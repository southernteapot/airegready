const DEFAULT_BASE_URL = 'http://127.0.0.1:3000'
const args = process.argv.slice(2)
const allowLive = args.includes('--live')
const baseUrlArg = args.find((arg) => !arg.startsWith('--')) ?? DEFAULT_BASE_URL

let baseUrl

try {
  baseUrl = new URL(baseUrlArg)
} catch {
  console.error(`Invalid base URL: ${baseUrlArg}`)
  process.exit(2)
}

const isLocal =
  baseUrl.hostname === 'localhost' ||
  baseUrl.hostname === '127.0.0.1' ||
  baseUrl.hostname === '::1'

if (!isLocal && !allowLive) {
  console.error(
    'Refusing to submit a live preview request without --live. Re-run with: npm run smoke:preview-request -- https://example.com --live'
  )
  process.exit(2)
}

const endpoint = new URL('/api/preview-request', baseUrl)

const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    origin: baseUrl.origin,
  },
  body: JSON.stringify({
    productSlug: 'ai-governance-starter-kit',
    email: 'preview-smoke@example.com',
    name: 'Preview Smoke Test',
    organizationType: 'startup',
    useCase: 'Smoke test for the AIRegReady preview request form endpoint.',
    sourcePath: '/catalog/ai-governance-starter-kit',
    subscribe: false,
  }),
})

const body = await response.text()

console.log(`${response.status} ${response.statusText}`)
console.log(body)

if (!response.ok) {
  process.exitCode = 1
}
