import { euAiAct } from './eu-ai-act'
import { nistAiRmf } from './nist-ai-rmf'
import { usStateLaws } from './us-state-laws'
import { federalPolicy } from './federal-policy'
import { sectorRules } from './sector-rules'
import { globalGovernance } from './global'

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
  }))
}

export function getRegulation(slug) {
  return regulations[slug] || null
}

export function getAllRegulationSlugs() {
  return Object.keys(regulations)
}
