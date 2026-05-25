import { euAiActRiskClassification } from './eu-ai-act-risk-classification.js'
import { euAiActComplianceChecklist } from './eu-ai-act-compliance-checklist.js'
import { usStatesAiHiring } from './us-states-ai-hiring.js'
import { shadowAiCompliance } from './shadow-ai-compliance.js'
import { nistAiRmfPractice } from './nist-ai-rmf-practice.js'
import { aiVendorDueDiligence } from './ai-vendor-due-diligence.js'
import { federalAiPreemption } from './federal-ai-preemption.js'
import { aiComplianceStartups } from './ai-compliance-startups.js'
import { gpaiCodeOfPractice } from './gpai-code-of-practice.js'
import { aiRiskManagementProgram } from './ai-risk-management-program.js'
import { aiComplianceAcrossBorders } from './ai-compliance-across-borders.js'
import { aiInsuranceUnderwriting } from './ai-insurance-underwriting.js'
import { aiLiteracyRequirement } from './ai-literacy-requirement.js'
import { aiIncidentResponse } from './ai-incident-response.js'
import { iso42001Explained } from './iso-42001-explained.js'
import { aiUsePolicyStarter } from './ai-use-policy-starter.js'
import { evaluatingAiTools } from './evaluating-ai-tools.js'
import { aiSideProjects } from './ai-side-projects.js'
import { minimumViableGuardrails } from './minimum-viable-guardrails.js'
import { californiaTfaiaExplained } from './california-tfaia-explained.js'
import { texasTraigaGuide } from './texas-traiga-guide.js'
import { coloradoAiActCountdown } from './colorado-ai-act-countdown.js'
import { euAiActDigitalOmnibusDelay } from './eu-ai-act-digital-omnibus-delay.js'
import { dojAiTaskForceThreeMonths } from './doj-ai-task-force-three-months.js'
import { xaiSuesColoradoAiAct } from './xai-sues-colorado-ai-act.js'
import { euAiActDigitalOmnibusAgreement } from './eu-ai-act-digital-omnibus-agreement.js'
import { coloradoSb26189AdmtRewrite } from './colorado-sb26-189-admt-rewrite.js'
import { aiCompanionChatbotLaws } from './ai-companion-chatbot-laws.js'
import { regulatorsAiMadeTheMistake } from './regulators-ai-made-the-mistake.js'

const articles = {
  'regulators-ai-made-the-mistake': regulatorsAiMadeTheMistake,
  'colorado-sb26-189-admt-rewrite': coloradoSb26189AdmtRewrite,
  'ai-companion-chatbot-laws': aiCompanionChatbotLaws,
  'eu-ai-act-digital-omnibus-agreement': euAiActDigitalOmnibusAgreement,
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
  'xai-sues-colorado-ai-act': xaiSuesColoradoAiAct,
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
