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

test('provider with no release review or monitoring scores as exposed and gets provider-first recommendation', () => {
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
  assert.equal(report.primaryRecommendation?.slug, 'provider-assurance-pack')
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
  assert.ok(report.primaryRecommendation)
  assert.ok(report.actionPlan.doNow.length > 0)
})
