import test from 'node:test'
import assert from 'node:assert/strict'

import { getApplicableQuestions, getAssessmentReport } from '../src/lib/assessment.js'

test('provider branch asks provider-specific questions instead of deployer vendor review by default', () => {
  const ids = getApplicableQuestions({
    1: 'small-team',
    3: 'provider',
  }).map((question) => question.id)

  assert.deepEqual(ids, [1, 2, 3, 4, 5, 6, 7, 10, 11, 13, 14, 15, 17])
})

test('combined deployer-provider branch includes both vendor and provider controls', () => {
  const ids = getApplicableQuestions({
    1: 'larger-org',
    3: 'both',
  }).map((question) => question.id)

  assert.deepEqual(ids, [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17])
})

test('provider with no release review or monitoring scores as exposed and gets the starter kit recommended once', () => {
  const report = getAssessmentReport([
    { qId: 1, value: 'small-team' },
    { qId: 2, value: 'tx' },
    { qId: 3, value: 'provider' },
    { qId: 4, values: ['software-dev'], score: 1 },
    { qId: 5, value: 'public', score: 0 },
    { qId: 6, value: 'no', score: 0 },
    { qId: 7, value: 'us-customers', score: 1 },
    { qId: 10, value: 'nothing', score: 0 },
    { qId: 11, value: 'none', score: 0 },
    { qId: 13, value: 'none', score: 0 },
    { qId: 14, value: 'none', score: 0 },
    { qId: 15, value: 'none', score: 0 },
    { qId: 17, value: 'provider' },
  ])

  assert.equal(report.shortTrack, false)
  assert.ok(report.preparedness.score < 40)
  assert.notEqual(report.risk.label, 'Low')
  assert.equal(report.primaryRecommendation?.slug, 'ai-governance-starter-kit')
  assert.equal(report.primaryRecommendation?.href, '/catalog/ai-governance-starter-kit')
  assert.equal(
    report.productRecommendations.filter((item) => item.slug === 'ai-governance-starter-kit').length,
    1
  )
  assert.ok(report.actionPlan.doNow.length > 0)
})

test('not-yet users get a short-track report with an offer and action plan', () => {
  const report = getAssessmentReport([
    { qId: 1, value: 'small-team' },
    { qId: 2, value: 'co' },
    { qId: 3, value: 'not-yet' },
    { qId: 7, value: 'us-multi', score: 2 },
    { qId: 17, value: 'pilot' },
  ])

  assert.equal(report.shortTrack, true)
  assert.equal(report.preparedness, undefined)
  assert.ok(report.summary.includes('early enough'))
  assert.equal(report.primaryRecommendation?.slug, 'ai-governance-starter-kit')
  assert.equal(report.primaryRecommendation?.href, '/catalog/ai-governance-starter-kit')
  assert.equal(report.primaryRecommendation?.ctaLabel, 'View $19 kit')
  assert.ok(report.actionPlan.doNow.length > 0)
})

test('small team internal rollout still recommends AI Governance Starter Kit first', () => {
  const report = getAssessmentReport([
    { qId: 1, value: 'small-team' },
    { qId: 2, value: 'tx' },
    { qId: 3, value: 'deployer' },
    { qId: 4, values: ['writing', 'internal-ops'], score: 0 },
    { qId: 5, value: 'internal', score: 1 },
    { qId: 6, value: 'no', score: 0 },
    { qId: 7, value: 'internal-only', score: 0 },
    { qId: 10, value: 'nothing', score: 0 },
    { qId: 11, value: 'none', score: 0 },
    { qId: 12, value: 'none', score: 0 },
    { qId: 14, value: 'none', score: 0 },
    { qId: 17, value: 'policy' },
  ])

  assert.equal(report.shortTrack, false)
  assert.equal(report.primaryRecommendation?.slug, 'ai-governance-starter-kit')
  assert.equal(report.primaryRecommendation?.href, '/catalog/ai-governance-starter-kit')
  assert.equal(report.primaryRecommendation?.ctaLabel, 'View $19 kit')
})

test('solo commercial AI launch path recommends Solo Builder AI Launch Kit first', () => {
  const report = getAssessmentReport([
    { qId: 1, value: 'solo' },
    { qId: 2, value: 'tx' },
    { qId: 3, value: 'provider' },
    { qId: 4, values: ['software-dev', 'marketing'], score: 2 },
    { qId: 5, value: 'personal', score: 3 },
    { qId: 6, value: 'no', score: 0 },
    { qId: 7, value: 'us-customers', score: 1 },
    { qId: 8, value: 'none', score: 0 },
    { qId: 9, value: 'sometimes', score: 1 },
    { qId: 13, value: 'none', score: 0 },
    { qId: 14, value: 'none', score: 0 },
    { qId: 15, value: 'none', score: 0 },
    { qId: 17, value: 'provider' },
  ])

  assert.equal(report.shortTrack, false)
  assert.equal(report.primaryRecommendation?.slug, 'solo-builder-ai-launch-kit')
  assert.equal(report.primaryRecommendation?.href, '/catalog/solo-builder-ai-launch-kit')
  assert.equal(report.primaryRecommendation?.ctaLabel, 'View $14 kit')
  assert.ok(report.productRecommendations.some((item) => item.slug === 'ai-governance-starter-kit'))
})

test('solo personal AI user gets the starter kit plus the free checklist, not commercial launch products', () => {
  const report = getAssessmentReport([
    { qId: 1, value: 'solo' },
    { qId: 2, value: 'fl' },
    { qId: 3, value: 'deployer' },
    { qId: 4, values: ['writing'], score: 0 },
    { qId: 5, value: 'internal', score: 1 },
    { qId: 6, value: 'no', score: 0 },
    { qId: 7, value: 'internal-only', score: 0 },
    { qId: 8, value: 'informal', score: 1 },
    { qId: 9, value: 'sometimes', score: 1 },
    { qId: 17, value: 'understand' },
  ])

  assert.equal(report.shortTrack, false)
  assert.equal(report.primaryRecommendation?.slug, 'ai-governance-starter-kit')
  assert.ok(report.productRecommendations.some((item) => item.slug === 'ai-readiness-checklist'))
  assert.ok(!report.productRecommendations.some((item) => item.slug === 'solo-builder-ai-launch-kit'))
})

test('solo consultant focused on vendor tools sees the Vendor AI Review Packet', () => {
  const report = getAssessmentReport([
    { qId: 1, value: 'solo' },
    { qId: 2, value: 'ny' },
    { qId: 3, value: 'deployer' },
    { qId: 4, values: ['writing', 'internal-ops'], score: 0 },
    { qId: 5, value: 'personal', score: 3 },
    { qId: 6, value: 'no', score: 0 },
    { qId: 7, value: 'internal-only', score: 0 },
    { qId: 8, value: 'none', score: 0 },
    { qId: 9, value: 'no', score: 0 },
    { qId: 17, value: 'vendor' },
  ])

  assert.ok(report.productRecommendations.some((item) => item.slug === 'vendor-ai-review-packet'))
})

test('higher-risk solo AI workflows keep broader risk resources ahead of Solo Builder', () => {
  const report = getAssessmentReport([
    { qId: 1, value: 'solo' },
    { qId: 2, value: 'ca' },
    { qId: 3, value: 'provider' },
    { qId: 4, values: ['healthcare', 'software-dev'], score: 4 },
    { qId: 5, value: 'regulated', score: 4 },
    { qId: 6, value: 'consequential', score: 4 },
    { qId: 7, value: 'us-customers', score: 1 },
    { qId: 8, value: 'none', score: 0 },
    { qId: 9, value: 'sometimes', score: 1 },
    { qId: 13, value: 'none', score: 0 },
    { qId: 14, value: 'none', score: 0 },
    { qId: 15, value: 'none', score: 0 },
    { qId: 17, value: 'impact' },
  ])

  assert.equal(report.primaryRecommendation?.slug, 'ai-governance-starter-kit')
  assert.equal(report.primaryRecommendation?.priority, 'Start here')
  assert.notEqual(report.primaryRecommendation?.slug, 'solo-builder-ai-launch-kit')
})
