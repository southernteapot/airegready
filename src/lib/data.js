export const REGULATIONS = [
  {
    id: 'eu-ai-act',
    slug: 'eu-ai-act',
    title: 'EU AI Act',
    desc: "The world's first comprehensive AI law. Classification-based requirements for AI systems by risk level.",
    tag: 'In Effect',
    icon: '\u{1F1EA}\u{1F1FA}',
  },
  {
    id: 'nist-rmf',
    slug: 'nist-ai-rmf',
    title: 'NIST AI RMF',
    desc: 'Voluntary U.S. framework for managing AI risks across the lifecycle. Increasingly referenced in policy.',
    tag: 'Framework',
    icon: '\u{1F3DB}\u{FE0F}',
  },
  {
    id: 'state-laws',
    slug: 'us-state-laws',
    title: 'U.S. State AI Laws',
    desc: 'A patchwork of state-level requirements from Colorado, Illinois, Texas, California, and more.',
    tag: 'Evolving',
    icon: '\u{2696}\u{FE0F}',
  },
  {
    id: 'exec-orders',
    slug: 'federal-policy',
    title: 'Executive Orders & Federal Policy',
    desc: 'Federal AI directives, OMB guidance, and agency-specific requirements for AI procurement and use.',
    tag: 'Active',
    icon: '\u{1F4DC}',
  },
  {
    id: 'sector',
    slug: 'sector-rules',
    title: 'Sector-Specific Rules',
    desc: 'HIPAA, FCRA, ECOA, SEC guidance \u2014 existing laws being applied to AI in healthcare, finance, and hiring.',
    tag: 'Cross-Cutting',
    icon: '\u{1F3E5}',
  },
  {
    id: 'global',
    slug: 'global',
    title: 'Global AI Governance',
    desc: "China's layered AI rules, Japan and South Korea's new laws, UK's sector-led approach, and international standards.",
    tag: 'Expanding',
    icon: '\u{1F310}',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'eu-ai-act-risk-classification',
    title: 'The EU AI Act Risk Classification: What You Actually Need to Know',
    category: 'EU AI Act',
    date: 'Mar 2026',
    readTime: '8 min read',
    excerpt:
      "The EU AI Act sorts AI systems into four risk tiers \u2014 but the details of what triggers 'high-risk' classification trip up most organizations. Here's the practical breakdown.",
    featured: true,
  },
  {
    slug: 'us-states-ai-hiring',
    title: '5 U.S. States Now Regulate AI in Hiring \u2014 Is Yours Next?',
    category: 'State Laws',
    date: 'Mar 2026',
    readTime: '6 min read',
    excerpt:
      "Colorado, Illinois, and others have passed laws governing automated employment decisions. A quick guide to what each requires and who's affected.",
    featured: false,
  },
  {
    slug: 'shadow-ai-compliance',
    title: 'Shadow AI Is Your Biggest Compliance Risk (And How to Fix It)',
    category: 'Governance',
    date: 'Feb 2026',
    readTime: '5 min read',
    excerpt:
      "Your employees are already using ChatGPT, Claude, and Copilot \u2014 whether you know it or not. Here's why that's a compliance problem and what to do about it.",
    featured: false,
  },
  {
    slug: 'nist-ai-rmf-practice',
    title: 'NIST AI RMF in Practice: From Framework to Action Plan',
    category: 'NIST',
    date: 'Feb 2026',
    readTime: '10 min read',
    excerpt:
      "NIST's AI Risk Management Framework is voluntary \u2014 but it's becoming the de facto standard. A step-by-step guide to actually implementing it.",
    featured: false,
  },
  {
    slug: 'federal-ai-preemption',
    title: 'The Federal Push to Preempt State AI Laws: What It Means for Compliance',
    category: 'Federal Policy',
    date: 'Mar 2026',
    readTime: '7 min read',
    excerpt:
      "The December 2025 executive order on AI preemption changed the game for state-level compliance. Here's what it means and why you shouldn't abandon state compliance yet.",
    featured: false,
  },
  {
    slug: 'eu-ai-act-compliance-checklist',
    title: 'EU AI Act Compliance Checklist: What to Do Before August 2026',
    category: 'EU AI Act',
    date: 'Mar 2026',
    readTime: '9 min read',
    excerpt:
      'The August 2026 deadline for Annex III high-risk compliance is approaching. A phased checklist to get your organization ready.',
    featured: false,
  },
  {
    slug: 'gpai-code-of-practice',
    title: 'The GPAI Code of Practice: What AI Model Providers Need to Know',
    category: 'EU AI Act',
    date: 'Mar 2026',
    readTime: '8 min read',
    excerpt:
      'The EU published its GPAI Code of Practice in July 2025. Here\u2019s what it requires, who it applies to, and how signing creates a compliance presumption.',
    featured: false,
  },
  {
    slug: 'ai-vendor-due-diligence',
    title: 'AI Vendor Due Diligence: 10 Questions to Ask Before You Buy',
    category: 'Governance',
    date: 'Mar 2026',
    readTime: '7 min read',
    excerpt:
      "You're liable for the AI tools you deploy, even if a vendor built them. Ten questions every buyer should ask \u2014 and red flags to watch for.",
    featured: false,
  },
  {
    slug: 'ai-compliance-startups',
    title: 'AI Compliance for Startups: Where to Start When Resources Are Limited',
    category: 'Governance',
    date: 'Mar 2026',
    readTime: '6 min read',
    excerpt:
      "You don't need a fifty-person governance team. Here's the minimum viable AI compliance program that actually works.",
    featured: false,
  },
  {
    slug: 'ai-risk-management-program',
    title: 'Building an AI Risk Management Program: A Practical Template',
    category: 'NIST',
    date: 'Feb 2026',
    readTime: '10 min read',
    excerpt:
      'A four-phase approach to building a formal AI risk management program, mapped to the NIST AI RMF functions.',
    featured: false,
  },
  {
    slug: 'ai-compliance-across-borders',
    title: 'AI Compliance Across Borders: Managing Multi-Jurisdictional Requirements',
    category: 'Global Governance',
    date: 'Mar 2026',
    readTime: '8 min read',
    excerpt:
      'Operating in the EU, US, and UK simultaneously? The highest-common-denominator strategy and practical steps for cross-border AI compliance.',
    featured: false,
  },
  {
    slug: 'ai-insurance-underwriting',
    title: 'AI in Insurance: What Underwriters Need to Know About Compliance',
    category: 'Sector Rules',
    date: 'Mar 2026',
    readTime: '7 min read',
    excerpt:
      'The NAIC model bulletin, proxy discrimination, and Colorado\u2019s insurance AI provisions. What insurers should audit now.',
    featured: false,
  },
  {
    slug: 'ai-literacy-requirement',
    title: 'The EU AI Act\u2019s AI Literacy Requirement: What It Actually Means',
    category: 'EU AI Act',
    date: 'Mar 2026',
    readTime: '6 min read',
    excerpt:
      'Article 4 requires AI literacy for all staff involved with AI systems. Who needs training, what it should cover, and how to build a program.',
    featured: false,
  },
  {
    slug: 'ai-incident-response',
    title: 'When AI Goes Wrong: Building an AI Incident Response Plan',
    category: 'Governance',
    date: 'Feb 2026',
    readTime: '8 min read',
    excerpt:
      'Discriminatory outcomes, hallucinations, model failures \u2014 you need a plan before something goes wrong. A six-phase framework.',
    featured: false,
  },
  {
    slug: 'iso-42001-explained',
    title: 'ISO 42001 Explained: The AI Management System Standard',
    category: 'Global Governance',
    date: 'Feb 2026',
    readTime: '7 min read',
    excerpt:
      'The first international AI management system standard. What certification involves, how it maps to the EU AI Act and NIST, and whether it\u2019s worth it.',
    featured: false,
  },
]

export const FAQ_ITEMS = [
  {
    q: 'What does "AI readiness" actually mean?',
    a: 'AI readiness means knowing how you use AI, what risks that creates, and what guardrails you need in place. It covers practical concerns \u2014 like choosing the right tools, setting policies, and understanding which regulations apply \u2014 not just theoretical frameworks. If you\u2019re using AI or planning to, readiness is about being intentional rather than reactive.',
  },
  {
    q: 'Who needs to think about AI readiness?',
    a: 'Anyone who develops, deploys, or uses AI \u2014 including solo operators, freelancers, startups, and small businesses using off-the-shelf tools like ChatGPT or Copilot. If AI touches your work, your customers, or decisions about people, you have readiness and regulatory considerations worth understanding. You don\u2019t need a big team to get started \u2014 but you do need a clear picture of what you\u2019re using and what\u2019s at stake.',
  },
  {
    q: 'Does the EU AI Act apply to U.S. companies?',
    a: "Yes, if your AI system affects people in the EU or if the output of your AI system is used in the EU. This is similar to how GDPR applies to U.S. companies that handle EU residents' data. Many U.S. companies are subject to the EU AI Act without realizing it.",
  },
  {
    q: "What's the penalty for non-compliance?",
    a: 'It varies by regulation. The EU AI Act can impose fines up to \u20AC35 million or 7% of global annual revenue. U.S. state laws vary \u2014 some carry civil penalties, others create private rights of action. The reputational and operational costs of enforcement actions often exceed the fines themselves.',
  },
  {
    q: 'Where should we start with AI?',
    a: 'Start with an inventory: what AI tools do you use, what data do they process, and what decisions do they influence? From there, put a basic acceptable use policy in place and identify the regulations that apply to your industry and geography. Our free AI Readiness Assessment above gives you a quick starting point.',
  },
  {
    q: 'We\u2019re a small team \u2014 do we really need AI policies?',
    a: 'Yes, but they can be lightweight. An acceptable use policy and a simple tool inventory puts you ahead of the curve. You don\u2019t need a 50-page governance manual \u2014 you need clear expectations about what tools are approved, what data can go into them, and who\u2019s responsible for reviewing AI outputs. Start simple and build from there.',
  },
  {
    q: 'Is there a single standard that covers everything?',
    a: 'Not yet. AI regulation is fragmented across jurisdictions and sectors. The NIST AI Risk Management Framework is the closest thing to a universal baseline, but it\'s voluntary. Most people dealing with AI end up touching multiple overlapping frameworks \u2014 which is why having a single resource that tracks all of them matters.',
  },
  {
    q: 'How is this different from hiring an AI consultant?',
    a: 'AIRegReady is a free self-service starting point. We help you understand the landscape, figure out what applies to you, and take practical first steps. Consultants and law firms are valuable for complex situations \u2014 but most people need to understand the right questions to ask before engaging one. We help you get to that point.',
  },
  {
    q: 'How fast is the regulatory landscape changing?',
    a: 'Extremely fast. New AI laws, amendments, and enforcement actions are appearing monthly. In 2025\u20132026 alone, dozens of U.S. states introduced AI-related legislation, the EU AI Act entered enforcement phases, Japan and South Korea passed comprehensive AI laws, and the federal policy landscape shifted significantly with a new administration. Staying current is a real challenge \u2014 and a core reason this resource exists.',
  },
]

export const QUESTIONS = [
  {
    id: 1,
    text: 'Which best describes you right now?',
    options: [
      { label: 'I\u2019m exploring AI on my own', value: 'solo-exploring' },
      { label: 'I use AI in freelance, contract, or side-income work', value: 'freelance' },
      { label: 'I\u2019m part of a small business or team using AI', value: 'small-team' },
      { label: 'I\u2019m a founder or operator introducing AI into a business', value: 'founder' },
      { label: 'I\u2019m part of a larger organization working with AI', value: 'larger-org' },
    ],
  },
  {
    id: 2,
    text: 'How are you currently using AI?',
    options: [
      { label: 'Not using it yet', value: 'not-using', score: 0 },
      { label: 'Experimenting occasionally', value: 'experimenting', score: 1 },
      { label: 'Using it in a few recurring workflows', value: 'recurring', score: 2 },
      { label: 'Using it regularly across important work', value: 'regular', score: 3 },
      { label: 'Building AI into products, services, or operations', value: 'building', score: 4 },
    ],
  },
  {
    id: 3,
    text: 'What are you using AI for?',
    subtitle: 'Select all that apply',
    multi: true,
    options: [
      { label: 'Writing, summarizing, brainstorming', value: 'writing', sensitivity: 0 },
      { label: 'Marketing or content production', value: 'marketing', sensitivity: 0 },
      { label: 'Internal operations or admin work', value: 'internal-ops', sensitivity: 0 },
      { label: 'Customer support or customer interactions', value: 'customer-support', sensitivity: 2 },
      { label: 'Software development or product features', value: 'software-dev', sensitivity: 2 },
      { label: 'Education or training', value: 'education', sensitivity: 2 },
      { label: 'Hiring or HR decisions', value: 'hiring', sensitivity: 4 },
      { label: 'Finance, credit, insurance, or pricing', value: 'finance', sensitivity: 4 },
      { label: 'Healthcare, mental health, or medical contexts', value: 'healthcare', sensitivity: 4 },
      { label: 'Legal or compliance work', value: 'legal', sensitivity: 4 },
      { label: 'Still exploring / not using it yet', value: 'exploring', sensitivity: 0 },
    ],
  },
  {
    id: 4,
    text: 'Does your AI use involve sensitive or confidential information?',
    options: [
      { label: 'No', value: 'no', score: 0 },
      { label: 'Maybe / not sure', value: 'maybe', score: 1 },
      { label: 'Yes, internal business information', value: 'internal', score: 2 },
      { label: 'Yes, customer/client/personal data', value: 'personal', score: 3 },
      { label: 'Yes, regulated or highly sensitive data', value: 'regulated', score: 4 },
    ],
  },
  {
    id: 5,
    text: 'Is AI being used to influence or make decisions about people or important outcomes?',
    options: [
      { label: 'No', value: 'no', score: 0 },
      { label: 'Only for low-stakes internal support', value: 'low-stakes', score: 1 },
      { label: 'Sometimes, with human review', value: 'with-review', score: 2 },
      { label: 'Yes, in important decisions or customer-facing workflows', value: 'important', score: 4 },
      { label: 'Not sure', value: 'unsure', score: 2 },
    ],
  },
  {
    id: 6,
    text: 'What do you currently have in place for AI use?',
    options: [
      { label: 'Nothing formal yet', value: 'nothing', score: 0 },
      { label: 'Informal common-sense rules only', value: 'informal', score: 1 },
      { label: 'Basic internal guidelines or policy', value: 'basic', score: 2 },
      { label: 'Review/approval process for some use cases or tools', value: 'review', score: 3 },
      { label: 'Clear ownership, policy, and review process', value: 'managed', score: 4 },
    ],
  },
  {
    id: 7,
    text: 'How do you decide which AI tools are okay to use?',
    options: [
      { label: 'We don\u2019t really have a process', value: 'none', score: 0 },
      { label: 'People choose tools ad hoc', value: 'ad-hoc', score: 1 },
      { label: 'We do informal review', value: 'informal-review', score: 2 },
      { label: 'We usually check privacy/security/terms first', value: 'check-first', score: 3 },
      { label: 'We have a documented review or approval process', value: 'documented', score: 4 },
    ],
  },
  {
    id: 8,
    text: 'What do you most want help with right now?',
    options: [
      { label: 'Figuring out where to start', value: 'where-to-start' },
      { label: 'Using AI more effectively', value: 'more-effective' },
      { label: 'Setting policies or guardrails', value: 'policies' },
      { label: 'Understanding risk and compliance', value: 'risk-compliance' },
      { label: 'Choosing tools and workflows', value: 'tools-workflows' },
      { label: 'Figuring out what to do next', value: 'what-next' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Assessment Scoring & Report Generation                             */
/* ------------------------------------------------------------------ */

function buildAnswerMap(answers) {
  const map = {}
  answers.forEach((a) => (map[a.qId] = a.values || a.value))
  return map
}

function buildScoreMap(answers) {
  const map = {}
  answers.forEach((a) => {
    if (a.score !== undefined) map[a.qId] = a.score
  })
  return map
}

function calcReadiness(answerMap, scoreMap) {
  let score = scoreMap[2] || 0
  const q3 = answerMap[3] || []
  if (q3.includes('software-dev')) score += 1
  if (answerMap[5] === 'important') score += 1
  score = Math.min(score, 5)

  let label
  if (score <= 1) label = 'Exploring'
  else if (score === 2) label = 'Early Use'
  else if (score === 3) label = 'Active Adoption'
  else if (score === 4) label = 'Operationalizing'
  else label = 'Higher-Impact Use'

  return { score, max: 5, label }
}

function calcGuardrails(scoreMap) {
  const score = (scoreMap[6] || 0) + (scoreMap[7] || 0)

  let label
  if (score <= 1) label = 'Ad Hoc'
  else if (score <= 3) label = 'Minimal Structure'
  else if (score <= 5) label = 'Basic Guardrails'
  else label = 'Managed'

  return { score, max: 8, label }
}

function calcRisk(scoreMap, guardrailScore) {
  const useCaseSens = scoreMap[3] || 0
  const dataSens = scoreMap[4] || 0
  const decisionImpact = scoreMap[5] || 0
  let score = useCaseSens + dataSens + decisionImpact
  if (guardrailScore <= 1 && (dataSens >= 3 || decisionImpact >= 3)) score += 1

  let label
  if (score <= 2) label = 'Low'
  else if (score <= 5) label = 'Moderate'
  else if (score <= 8) label = 'Elevated'
  else label = 'High'

  return { score, max: 13, label }
}

function getStandoutItems(readiness, guardrails, risk, answerMap, scoreMap) {
  const items = []
  const q3 = answerMap[3] || []

  if (readiness.score >= 3 && guardrails.score <= 2) {
    items.push('You\u2019re actively using AI, but your guardrails haven\u2019t caught up. Basic policies and review processes would reduce your exposure significantly.')
  }

  if (readiness.score <= 1 && risk.score <= 2) {
    items.push('You\u2019re early in AI adoption \u2014 that\u2019s actually an advantage. You have room to set simple habits and boundaries before things get complicated.')
  }

  if (readiness.score >= 2 && guardrails.score >= 4 && risk.score <= 5) {
    items.push('You have a reasonable foundation in place. Focus on tightening processes around your highest-impact use cases.')
  }

  if ((scoreMap[4] || 0) >= 3 && guardrails.score <= 2) {
    items.push('You\u2019re working with sensitive data but don\u2019t have much structure around AI use. This is your highest-priority gap.')
  }

  if ((scoreMap[5] || 0) >= 4) {
    items.push('AI is influencing important decisions or customer-facing workflows. Human review and documentation matter here.')
  }

  const highSens = q3.filter((v) => ['hiring', 'finance', 'healthcare', 'legal'].includes(v))
  if (highSens.length >= 2) {
    items.push('Several of your use cases fall in areas with specific regulatory attention. The frameworks section below is worth reviewing.')
  } else if (highSens.length === 1) {
    const labels = { hiring: 'hiring', finance: 'financial services', healthcare: 'healthcare', legal: 'legal work' }
    items.push('Your use of AI in ' + labels[highSens[0]] + ' puts you in a category with specific regulatory attention.')
  }

  if ((scoreMap[7] || 0) <= 1 && readiness.score >= 2) {
    items.push('You don\u2019t have a process for choosing AI tools. As usage grows, this becomes a data security and liability gap.')
  }

  if (guardrails.score >= 6 && risk.score <= 5) {
    items.push('Your current guardrails are solid relative to your risk level. Keep building on what you have.')
  }

  if ((answerMap[1] === 'solo-exploring' || answerMap[1] === 'freelance') && guardrails.score <= 1) {
    items.push('Even as a solo operator, a few simple rules about what data goes into AI tools and how you review outputs will save you headaches.')
  }

  return items.slice(0, 5)
}

function buildActionPlan(readiness, guardrails, risk, answerMap, scoreMap) {
  const doNow = []
  const next30 = []
  const later = []
  const q3 = answerMap[3] || []
  const q8 = answerMap[8]

  if (guardrails.score <= 1) {
    doNow.push('Write down which AI tools you currently use and what you use them for')
    if ((scoreMap[4] || 0) >= 2) doNow.push('Identify which AI tools have access to sensitive or personal data')
    next30.push('Draft a simple AI use policy covering approved tools, prohibited uses, and data rules')
  } else if (guardrails.score <= 3) {
    doNow.push('Document your current AI tools and what each is used for')
    next30.push('Formalize your informal guidelines into a written policy')
  }

  if ((scoreMap[7] || 0) <= 1 && readiness.score >= 1) {
    next30.push('Review the privacy and security terms of every AI tool you\u2019re currently using')
  }

  if ((scoreMap[5] || 0) >= 3) {
    doNow.push('List any AI-influenced decisions that affect people or important outcomes')
    next30.push('Add human review to your highest-impact AI-influenced workflows')
  }

  if ((scoreMap[4] || 0) >= 3 && guardrails.score <= 3) {
    if (!doNow.some((a) => a.includes('sensitive'))) doNow.push('Identify which workflows send sensitive data to AI tools')
    next30.push('Define clear rules for what data can and cannot go into AI tools')
  }

  if (q3.includes('hiring')) next30.push('Review AI-assisted hiring processes for bias risk and legal requirements')
  if (q3.includes('healthcare')) next30.push('Audit AI tools that touch protected health information for HIPAA compliance')
  if (q3.includes('finance')) next30.push('Review AI-driven financial decisions for fair lending and disclosure requirements')

  if (q8 === 'where-to-start' && !doNow.some((a) => a.includes('Write down'))) {
    doNow.push('Start with one or two specific use cases rather than trying to do everything at once')
  }
  if (q8 === 'policies' && !next30.some((a) => a.includes('policy'))) {
    next30.push('Create a basic acceptable use document and share it with your team or collaborators')
  }
  if (q8 === 'tools-workflows') next30.push('Evaluate your current AI tools against your actual needs \u2014 are you using the right ones?')
  if (q8 === 'risk-compliance') next30.push('Review the regulatory frameworks flagged in this assessment for relevance to your situation')

  later.push('Reassess your AI readiness as your usage changes or expands')
  if (risk.score >= 6) later.push('Consider a more formal AI governance review as your risk profile grows')
  if (guardrails.score <= 3 && readiness.score >= 3) later.push('As AI becomes more central to your work, assign clear ownership for AI policy decisions')

  return { doNow, next30, later }
}

function getApplicableFrameworks(answerMap, scoreMap, readiness, guardrails, risk) {
  const frameworks = []
  const q3 = answerMap[3] || []

  if (readiness.score >= 2 || guardrails.score >= 2) {
    frameworks.push({
      name: 'NIST AI Risk Management Framework',
      slug: 'nist-ai-rmf',
      why: 'The most widely referenced AI governance framework in the U.S. Useful for structuring how you think about AI risks, even informally.',
      priority: guardrails.score <= 3 ? 'Worth reviewing' : 'Good reference',
    })
  }

  const hasHighSens = q3.some((v) => ['hiring', 'finance', 'healthcare', 'legal'].includes(v))
  if (hasHighSens || q3.includes('software-dev') || risk.score >= 6) {
    frameworks.push({
      name: 'EU AI Act',
      slug: 'eu-ai-act',
      why: 'Worth watching if you serve EU users, operate in Europe, or build higher-risk AI use cases. The EU AI Act has extraterritorial reach.',
      priority: hasHighSens ? 'Worth watching' : 'On your radar',
    })
  }

  if (q3.includes('hiring') || q3.includes('customer-support') || (scoreMap[5] || 0) >= 2) {
    frameworks.push({
      name: 'U.S. State AI Laws',
      slug: 'us-state-laws',
      why: 'Multiple states now regulate AI in hiring, consumer interactions, and automated decisions about people.',
      priority: q3.includes('hiring') ? 'Worth reviewing' : 'Worth watching',
    })
  }

  if (q3.includes('healthcare')) {
    frameworks.push({
      name: 'Healthcare AI Rules (HIPAA, FDA)',
      slug: 'sector-rules',
      why: 'HIPAA, FDA, and HHS guidance apply when AI touches protected health information or clinical decisions.',
      priority: 'Worth reviewing',
    })
  }
  if (q3.includes('finance')) {
    frameworks.push({
      name: 'Financial Services AI Rules (FCRA, ECOA)',
      slug: 'sector-rules',
      why: 'FCRA, ECOA, and financial regulators have specific requirements for AI in lending, credit, insurance, and trading.',
      priority: 'Worth reviewing',
    })
  }
  if (q3.includes('legal')) {
    frameworks.push({
      name: 'Legal & Compliance AI Considerations',
      slug: 'sector-rules',
      why: 'Using AI in legal work raises questions about confidentiality, accuracy obligations, and unauthorized practice.',
      priority: 'Worth watching',
    })
  }

  if (answerMap[1] === 'larger-org' || (scoreMap[5] || 0) >= 4) {
    frameworks.push({
      name: 'Federal AI Policy & Executive Orders',
      slug: 'federal-policy',
      why: 'Relevant for larger organizations, government-adjacent work, or contexts with federal procurement requirements.',
      priority: 'On your radar',
    })
  }

  return frameworks
}

function getRecommendedReading(readiness, guardrails, risk, answerMap, scoreMap) {
  const readings = []
  const q3 = answerMap[3] || []

  if (q3.some((v) => ['hiring', 'finance', 'healthcare', 'legal'].includes(v))) {
    readings.push({ title: 'The EU AI Act Risk Classification: What You Actually Need to Know', href: '/blog/eu-ai-act-risk-classification', reason: 'How AI systems are categorized by risk level' })
  }
  if (q3.includes('hiring')) {
    readings.push({ title: '5 U.S. States Now Regulate AI in Hiring \u2014 Is Yours Next?', href: '/blog/us-states-ai-hiring', reason: 'State laws governing automated employment decisions' })
  }
  if (guardrails.score <= 2 && readiness.score >= 2) {
    readings.push({ title: 'AI Compliance for Startups: Where to Start When Resources Are Limited', href: '/blog/ai-compliance-startups', reason: 'Practical first steps when you don\u2019t have a big team' })
  }
  if (guardrails.score <= 3) {
    readings.push({ title: 'NIST AI RMF in Practice: From Framework to Action Plan', href: '/blog/nist-ai-rmf-practice', reason: 'A practical guide to implementing AI risk management' })
  }
  if ((scoreMap[7] || 0) <= 1) {
    readings.push({ title: 'AI Vendor Due Diligence: 10 Questions to Ask Before You Buy', href: '/blog/ai-vendor-due-diligence', reason: 'Key questions for evaluating AI tools' })
  }
  if (readiness.score >= 3) {
    readings.push({ title: 'Building an AI Risk Management Program: A Practical Template', href: '/blog/ai-risk-management-program', reason: 'A structured approach as AI use scales' })
  }

  if (readings.length < 3) {
    const fallbacks = [
      { title: 'Shadow AI Is Your Biggest Compliance Risk (And How to Fix It)', href: '/blog/shadow-ai-compliance', reason: 'Managing unofficial AI usage' },
      { title: 'When AI Goes Wrong: Building an AI Incident Response Plan', href: '/blog/ai-incident-response', reason: 'Planning for AI failures and problems' },
    ]
    for (const fb of fallbacks) {
      if (readings.length >= 4) break
      if (!readings.some((r) => r.href === fb.href)) readings.push(fb)
    }
  }

  const seen = new Set()
  return readings.filter((r) => { if (seen.has(r.href)) return false; seen.add(r.href); return true }).slice(0, 4)
}

export function getAssessmentReport(answers) {
  const answerMap = buildAnswerMap(answers)
  const scoreMap = buildScoreMap(answers)

  const readiness = calcReadiness(answerMap, scoreMap)
  const guardrails = calcGuardrails(scoreMap)
  const risk = calcRisk(scoreMap, guardrails.score)

  return {
    readiness,
    guardrails,
    risk,
    standout: getStandoutItems(readiness, guardrails, risk, answerMap, scoreMap),
    actionPlan: buildActionPlan(readiness, guardrails, risk, answerMap, scoreMap),
    frameworks: getApplicableFrameworks(answerMap, scoreMap, readiness, guardrails, risk),
    recommendedReading: getRecommendedReading(readiness, guardrails, risk, answerMap, scoreMap),
    answerMap,
    generatedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  }
}
