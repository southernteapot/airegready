import { euAiActRiskClassification } from './eu-ai-act-risk-classification'
import { euAiActComplianceChecklist } from './eu-ai-act-compliance-checklist'
import { usStatesAiHiring } from './us-states-ai-hiring'
import { shadowAiCompliance } from './shadow-ai-compliance'
import { nistAiRmfPractice } from './nist-ai-rmf-practice'
import { aiVendorDueDiligence } from './ai-vendor-due-diligence'
import { federalAiPreemption } from './federal-ai-preemption'
import { aiComplianceStartups } from './ai-compliance-startups'
import { gpaiCodeOfPractice } from './gpai-code-of-practice'
import { aiRiskManagementProgram } from './ai-risk-management-program'
import { aiComplianceAcrossBorders } from './ai-compliance-across-borders'
import { aiInsuranceUnderwriting } from './ai-insurance-underwriting'
import { aiLiteracyRequirement } from './ai-literacy-requirement'
import { aiIncidentResponse } from './ai-incident-response'
import { iso42001Explained } from './iso-42001-explained'
import { aiUsePolicyStarter } from './ai-use-policy-starter'
import { evaluatingAiTools } from './evaluating-ai-tools'
import { aiSideProjects } from './ai-side-projects'
import { minimumViableGuardrails } from './minimum-viable-guardrails'
import { californiaTfaiaExplained } from './california-tfaia-explained'
import { texasTraigaGuide } from './texas-traiga-guide'
import { coloradoAiActCountdown } from './colorado-ai-act-countdown'
import { euAiActDigitalOmnibusDelay } from './eu-ai-act-digital-omnibus-delay'
import { dojAiTaskForceThreeMonths } from './doj-ai-task-force-three-months'

const articles = {
  'eu-ai-act-risk-classification': euAiActRiskClassification,
  'eu-ai-act-compliance-checklist': euAiActComplianceChecklist,
  'us-states-ai-hiring': usStatesAiHiring,
  'shadow-ai-compliance': shadowAiCompliance,
  'nist-ai-rmf-practice': nistAiRmfPractice,
  'ai-vendor-due-diligence': aiVendorDueDiligence,
  'federal-ai-preemption': federalAiPreemption,
  'ai-compliance-startups': aiComplianceStartups,
  'gpai-code-of-practice': gpaiCodeOfPractice,
  'ai-risk-management-program': aiRiskManagementProgram,
  'ai-compliance-across-borders': aiComplianceAcrossBorders,
  'ai-insurance-underwriting': aiInsuranceUnderwriting,
  'ai-literacy-requirement': aiLiteracyRequirement,
  'ai-incident-response': aiIncidentResponse,
  'iso-42001-explained': iso42001Explained,
  'ai-use-policy-starter': aiUsePolicyStarter,
  'evaluating-ai-tools': evaluatingAiTools,
  'ai-side-projects': aiSideProjects,
  'minimum-viable-guardrails': minimumViableGuardrails,
  'california-tfaia-explained': californiaTfaiaExplained,
  'texas-traiga-guide': texasTraigaGuide,
  'colorado-ai-act-countdown': coloradoAiActCountdown,
  'eu-ai-act-digital-omnibus-delay': euAiActDigitalOmnibusDelay,
  'doj-ai-task-force-three-months': dojAiTaskForceThreeMonths,
}

export function getAllArticles() {
  return Object.values(articles)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      category: a.category,
      date: a.date,
      displayDate: a.displayDate,
      readTime: a.readTime,
      featured: a.featured,
    }))
}

export function getArticle(slug) {
  return articles[slug] || null
}

export function getAllArticleSlugs() {
  return Object.keys(articles)
}

export function getArticlesForRegulation(regulationSlug, limit = 3) {
  return Object.values(articles)
    .filter((a) => a.relatedRegulations && a.relatedRegulations.includes(regulationSlug))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      category: a.category,
      displayDate: a.displayDate,
      readTime: a.readTime,
    }))
}
