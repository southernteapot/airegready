import test from 'node:test'
import assert from 'node:assert/strict'

import { POST } from '../src/app/api/assessment-complete/route.js'

test('assessment completion API accepts short-track telemetry', async () => {
  const request = new Request('https://airegready.com/api/assessment-complete', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      shortTrack: true,
      entity: 'small-team',
      location: 'co',
      role: 'not-yet',
      marketExposure: 'us-multi',
      priority: 'pilot',
      primaryRecommendation: 'founder-small-team-track',
      timestamp: '2026-04-22T12:00:00.000Z',
    }),
  })

  const response = await POST(request)
  assert.equal(response.status, 200)
})

test('assessment completion API accepts full telemetry shape', async () => {
  const request = new Request('https://airegready.com/api/assessment-complete', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      shortTrack: false,
      entity: 'mid-size',
      location: 'tx',
      role: 'provider',
      marketExposure: 'eu',
      priority: 'provider',
      readiness: 'Customer-Facing',
      guardrails: 'Patchy',
      risk: 'Elevated',
      frameworkCount: 3,
      primaryRecommendation: 'provider-assurance-pack',
      timestamp: '2026-04-22T12:00:00.000Z',
    }),
  })

  const response = await POST(request)
  assert.equal(response.status, 200)
})

test('assessment completion API rejects payloads without timestamp', async () => {
  const request = new Request('https://airegready.com/api/assessment-complete', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ shortTrack: true }),
  })

  const response = await POST(request)
  assert.equal(response.status, 400)
})
