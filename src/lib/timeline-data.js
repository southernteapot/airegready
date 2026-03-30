import { euAiAct } from './regulations/eu-ai-act'
import { nistAiRmf } from './regulations/nist-ai-rmf'
import { usStateLaws } from './regulations/us-state-laws'
import { federalPolicy } from './regulations/federal-policy'
import { sectorRules } from './regulations/sector-rules'
import { globalGovernance } from './regulations/global'

const sources = [
  { data: euAiAct, source: 'EU AI Act', sourceSlug: 'eu-ai-act' },
  { data: nistAiRmf, source: 'NIST AI RMF', sourceSlug: 'nist-ai-rmf' },
  { data: usStateLaws, source: 'U.S. State Laws', sourceSlug: 'us-state-laws' },
  { data: federalPolicy, source: 'Federal Policy', sourceSlug: 'federal-policy' },
  { data: sectorRules, source: 'Sector Rules', sourceSlug: 'sector-rules' },
  { data: globalGovernance, source: 'Global Governance', sourceSlug: 'global' },
]

function parseDate(dateStr) {
  // Handle ranges like "2024–2025" or "2023 – 2024" — use the start year
  const rangeMatch = dateStr.match(/^(\d{4})\s*[\u2013\-]\s*\d{4}$/)
  if (rangeMatch) {
    return new Date(parseInt(rangeMatch[1], 10), 0, 1)
  }

  // Handle year-only like "2025"
  const yearOnly = dateStr.match(/^(\d{4})$/)
  if (yearOnly) {
    return new Date(parseInt(yearOnly[1], 10), 0, 1)
  }

  // Handle "Early 2026" or similar
  const earlyMatch = dateStr.match(/^Early\s+(\d{4})$/i)
  if (earlyMatch) {
    return new Date(parseInt(earlyMatch[1], 10), 1, 1)
  }

  // Handle "Month YYYY" or "Month Day, YYYY"
  const parsed = new Date(dateStr)
  if (!isNaN(parsed.getTime())) {
    return parsed
  }

  // Fallback
  return new Date(0)
}

export const timelineEvents = sources
  .flatMap(({ data, source, sourceSlug }) =>
    (data.timeline || []).map((entry) => ({
      date: entry.date,
      event: entry.event,
      source,
      sourceSlug,
      parsedDate: parseDate(entry.date),
    }))
  )
  .sort((a, b) => a.parsedDate - b.parsedDate)
