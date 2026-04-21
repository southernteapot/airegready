import { euAiAct } from './eu-ai-act.js'
import { nistAiRmf } from './nist-ai-rmf.js'
import { usStateLaws } from './us-state-laws.js'
import { federalPolicy } from './federal-policy.js'
import { sectorRules } from './sector-rules.js'
import { globalGovernance } from './global.js'

const regulations = {
  'eu-ai-act': euAiAct,
  'nist-ai-rmf': nistAiRmf,
  'us-state-laws': usStateLaws,
  'federal-policy': federalPolicy,
  'sector-rules': sectorRules,
  global: globalGovernance,
}

export function getAllRegulations() {
  return Object.values(regulations).map((r) => ({
    slug: r.slug,
    title: r.title,
    shortTitle: r.shortTitle || r.title,
    description: r.description,
    icon: r.icon,
    status: r.status,
    lastReviewed: r.lastReviewed,
    lastReviewedIso: r.lastReviewedIso || null,
  }))
}

export function getRegulation(slug) {
  return regulations[slug] || null
}

export function getAllRegulationSlugs() {
  return Object.keys(regulations)
}
