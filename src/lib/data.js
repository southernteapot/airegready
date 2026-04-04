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
    a: 'Any organization that develops, deploys, or uses AI systems \u2014 including startups and small businesses using off-the-shelf tools like ChatGPT or Copilot. If AI touches your operations, your customers, or decisions about people, you have readiness and regulatory considerations worth understanding. You don\u2019t need a big team to get started \u2014 but you do need a clear picture of what you\u2019re using and what\u2019s at stake.',
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
    a: 'Yes, but they can be lightweight. An acceptable use policy and a simple tool inventory puts you ahead of most organizations. You don\u2019t need a 50-page governance manual \u2014 you need clear expectations about what tools are approved, what data can go into them, and who\u2019s responsible for reviewing AI outputs. Start simple and build from there.',
  },
  {
    q: 'Is there a single standard that covers everything?',
    a: 'Not yet. AI regulation is fragmented across jurisdictions and sectors. The NIST AI Risk Management Framework is the closest thing to a universal baseline, but it\'s voluntary. Most organizations need to comply with multiple overlapping frameworks \u2014 which is why having a single resource that tracks all of them matters.',
  },
  {
    q: 'How is this different from hiring an AI consultant?',
    a: 'AIRegReady is a free self-service starting point. We help you understand the landscape, figure out what applies to you, and take practical first steps. Consultants and law firms are valuable for complex situations \u2014 but most organizations need to understand the right questions to ask before engaging one. We help you get to that point.',
  },
  {
    q: 'How fast is the regulatory landscape changing?',
    a: 'Extremely fast. New AI laws, amendments, and enforcement actions are appearing monthly. In 2025\u20132026 alone, dozens of U.S. states introduced AI-related legislation, the EU AI Act entered enforcement phases, Japan and South Korea passed comprehensive AI laws, and the federal policy landscape shifted significantly with a new administration. Staying current is a real challenge \u2014 and a core reason this resource exists.',
  },
]

export const QUESTIONS = [
  {
    id: 1,
    text: 'Where are you on the AI adoption journey?',
    options: [
      { label: 'We build or develop AI products or tools', value: 'develop', risk: 3 },
      { label: 'We use third-party AI tools (ChatGPT, Copilot, etc.)', value: 'deploy', risk: 2 },
      { label: 'Both \u2014 we build and use AI', value: 'both', risk: 4 },
      { label: 'Exploring \u2014 researching or planning to adopt AI', value: 'exploring', risk: 1 },
      { label: 'Individual \u2014 researching AI readiness for personal interest', value: 'individual', risk: 1 },
      { label: 'Not using AI currently', value: 'none', risk: 0 },
    ],
  },
  {
    id: 2,
    text: 'What industry do you work in?',
    options: [
      { label: 'Healthcare', value: 'healthcare', risk: 4 },
      { label: 'Financial services', value: 'finance', risk: 4 },
      { label: 'Government / public sector', value: 'government', risk: 3 },
      { label: 'Technology / SaaS', value: 'tech', risk: 2 },
      { label: 'Education', value: 'education', risk: 2 },
      { label: 'Other', value: 'other', risk: 1 },
    ],
  },
  {
    id: 3,
    text: 'Will AI influence decisions about people?',
    options: [
      { label: 'Yes \u2014 hiring, lending, insurance, or benefits', value: 'high-impact', risk: 5 },
      { label: 'Yes \u2014 customer recommendations or personalization', value: 'moderate', risk: 3 },
      { label: 'No \u2014 internal productivity only', value: 'internal', risk: 1 },
      { label: 'Not sure yet', value: 'unsure', risk: 3 },
    ],
  },
  {
    id: 4,
    text: 'Do you serve customers in the EU or handle EU personal data?',
    options: [
      { label: 'Yes', value: 'yes', risk: 4 },
      { label: 'No', value: 'no', risk: 0 },
      { label: 'Not sure', value: 'unsure', risk: 2 },
    ],
  },
  {
    id: 5,
    text: 'Do you have AI policies, guidelines, or guardrails in place?',
    options: [
      { label: 'Yes \u2014 documented and shared with the team', value: 'mature', risk: 0 },
      { label: 'Partially \u2014 informal practices but nothing written down', value: 'developing', risk: 2 },
      { label: 'No \u2014 haven\u2019t started on this yet', value: 'none', risk: 4 },
      { label: 'Not sure what we need', value: 'unsure', risk: 3 },
    ],
  },
  {
    id: 6,
    text: 'Where do you operate?',
    options: [
      { label: 'Multiple countries', value: 'international', risk: 4 },
      { label: 'Multiple U.S. states', value: 'multi-state', risk: 3 },
      { label: 'Single state only', value: 'single', risk: 1 },
    ],
  },
  {
    id: 7,
    text: 'How is your team using generative AI tools (ChatGPT, Claude, Copilot, etc.)?',
    options: [
      { label: 'Widely \u2014 approved tools across the organization', value: 'wide', risk: 4 },
      { label: 'Limited \u2014 pilots or specific team use', value: 'limited', risk: 2 },
      { label: 'Not yet', value: 'no', risk: 0 },
      { label: 'Informally \u2014 employees may be using tools without oversight', value: 'shadow', risk: 5 },
    ],
  },
]

export function getRiskProfile(answers) {
  const total = answers.reduce((sum, a) => sum + a.risk, 0)
  const max = answers.length * 5
  const pct = Math.round((total / max) * 100)

  const regulations = []
  const answerMap = {}
  answers.forEach((a) => (answerMap[a.qId] = a.value))

  if (answerMap[4] === 'yes' || answerMap[6] === 'international')
    regulations.push('EU AI Act')
  if (answerMap[3] === 'high-impact')
    regulations.push('U.S. State AI Laws (CO, IL, TX)')
  if (answerMap[2] === 'healthcare') regulations.push('HIPAA AI Guidance')
  if (answerMap[2] === 'finance')
    regulations.push('FCRA / ECOA / SEC AI Guidance')
  if (answerMap[2] === 'government')
    regulations.push('Federal AI Executive Orders & OMB Guidance')
  regulations.push('NIST AI Risk Management Framework')
  if (answerMap[7] === 'wide' || answerMap[7] === 'shadow')
    regulations.push('Generative AI Use Policies')

  let level, color, summary
  if (pct <= 30) {
    level = 'LOW'
    color = '#4ade80'
    summary =
      'You\u2019re in a good starting position. Focus on building foundational policies and staying current as the landscape evolves.'
  } else if (pct <= 55) {
    level = 'MODERATE'
    color = '#fbbf24'
    summary =
      'You have some readiness gaps to address. Prioritize documenting your AI practices and reviewing higher-risk use cases.'
  } else if (pct <= 75) {
    level = 'HIGH'
    color = '#fb923c'
    summary =
      'Significant readiness gaps. Governance frameworks and compliance documentation should be near-term priorities.'
  } else {
    level = 'CRITICAL'
    color = '#f87171'
    summary =
      'Major readiness gaps across multiple areas. Comprehensive AI governance should be a top organizational priority.'
  }

  return { pct, level, color, regulations, summary }
}

/* ------------------------------------------------------------------ */
/*  Detailed Report Generator                                         */
/* ------------------------------------------------------------------ */

const REGULATION_DETAILS = {
  'EU AI Act': {
    slug: 'eu-ai-act',
    whyApplies: {
      euData:
        'You indicated that you process personal data from EU residents. The EU AI Act applies to any AI system whose output affects individuals in the EU, regardless of where the provider is established.',
      international:
        'You operate internationally, which likely means your AI systems affect individuals in EU member states. The EU AI Act has extraterritorial reach similar to GDPR.',
    },
    actions: [
      'Classify each AI system by EU AI Act risk tier (unacceptable, high-risk, limited, minimal)',
      'Review whether any systems fall under Annex III high-risk categories',
      'Assess General-Purpose AI (GPAI) obligations if you develop or deploy foundation models',
    ],
  },
  'U.S. State AI Laws (CO, IL, TX)': {
    slug: 'us-state-laws',
    whyApplies: {
      default:
        'Your AI systems make or influence high-impact decisions about people (hiring, lending, insurance, or benefits). Multiple U.S. states now regulate automated decision-making in these areas, including Colorado, Illinois, and Texas.',
    },
    actions: [
      'Audit AI-driven employment and lending decisions for bias and adverse impact',
      'Implement adverse action notice procedures where AI influences consequential decisions',
      'Map which state laws apply based on where affected individuals are located',
    ],
  },
  'HIPAA AI Guidance': {
    slug: 'sector-rules',
    whyApplies: {
      default:
        'You operate in healthcare, where AI systems that process protected health information (PHI) are subject to HIPAA requirements and recent HHS guidance on AI in clinical and administrative settings.',
    },
    actions: [
      'Conduct a HIPAA risk assessment covering all AI systems that touch PHI',
      'Review AI vendor business associate agreements for AI-specific provisions',
      'Evaluate FDA Software as a Medical Device (SaMD) classification for clinical AI tools',
    ],
  },
  'FCRA / ECOA / SEC AI Guidance': {
    slug: 'sector-rules',
    whyApplies: {
      default:
        'You operate in financial services, where AI-driven decisions are subject to FCRA, ECOA, and sector-specific guidance from the SEC, CFPB, and prudential regulators on model risk management.',
    },
    actions: [
      'Review AI lending and credit models for ECOA fair lending compliance and disparate impact',
      'Implement model risk management practices per SR 11-7 and OCC guidance',
      'Assess CFPB requirements for algorithmic lending disclosures and adverse action explanations',
    ],
  },
  'Federal AI Executive Orders & OMB Guidance': {
    slug: 'federal-policy',
    whyApplies: {
      default:
        'You operate in the government or public sector, where federal AI executive orders, OMB memoranda, and agency-specific AI policies create direct compliance obligations for AI procurement, deployment, and oversight.',
    },
    actions: [
      'Review current executive orders on AI and assess which directives apply to your operations',
      'Ensure AI procurements comply with OMB guidance on responsible AI use in government',
      'Implement AI impact assessments for public-facing AI systems as required by federal policy',
    ],
  },
  'NIST AI Risk Management Framework': {
    slug: 'nist-ai-rmf',
    whyApplies: {
      default:
        'The NIST AI RMF is the leading voluntary framework for AI risk management in the United States and is increasingly referenced in regulations, contracts, and procurement requirements. It applies to all organizations using or developing AI.',
    },
    actions: [
      'Map your current AI practices to the NIST AI RMF core functions (Govern, Map, Measure, Manage)',
      'Identify gaps between your current governance posture and the framework requirements',
      'Establish AI risk measurement and monitoring processes aligned with NIST guidance',
    ],
  },
  'Generative AI Use Policies': {
    slug: 'us-state-laws',
    whyApplies: {
      wide: 'Generative AI is widely used across your organization, creating risks around data leakage, intellectual property, hallucinated outputs, and unauthorized commitments. Formal policies are essential.',
      shadow:
        'You indicated that employees may be using generative AI tools unofficially. Shadow AI usage is one of the most significant and fastest-growing compliance risks, creating uncontrolled data exposure and liability.',
    },
    actions: [
      'Conduct an inventory of all generative AI tools in use, including unofficial employee usage',
      'Draft and implement an acceptable use policy covering approved tools, prohibited uses, and data handling',
      'Establish review processes for AI-generated content before external distribution or decision-making',
    ],
  },
}

function getRegulationPriority(regName, answerMap) {
  if (regName === 'EU AI Act') {
    if (answerMap[4] === 'yes' && answerMap[6] === 'international') return 'High'
    if (answerMap[4] === 'yes') return 'High'
    return 'Medium'
  }
  if (regName === 'U.S. State AI Laws (CO, IL, TX)') {
    if (answerMap[3] === 'high-impact' && answerMap[6] === 'multi-state') return 'High'
    return 'High'
  }
  if (regName === 'HIPAA AI Guidance') {
    if (answerMap[3] === 'high-impact') return 'High'
    return 'Medium'
  }
  if (regName === 'FCRA / ECOA / SEC AI Guidance') {
    if (answerMap[3] === 'high-impact') return 'High'
    return 'High'
  }
  if (regName === 'Federal AI Executive Orders & OMB Guidance') {
    return 'Medium'
  }
  if (regName === 'Generative AI Use Policies') {
    if (answerMap[7] === 'shadow') return 'High'
    return 'Medium'
  }
  return 'Low'
}

function getWhyApplies(regName, answerMap) {
  const detail = REGULATION_DETAILS[regName]
  if (!detail) return ''

  if (regName === 'EU AI Act') {
    if (answerMap[4] === 'yes') return detail.whyApplies.euData
    if (answerMap[6] === 'international') return detail.whyApplies.international
  }
  if (regName === 'Generative AI Use Policies') {
    if (answerMap[7] === 'shadow') return detail.whyApplies.shadow
    if (answerMap[7] === 'wide') return detail.whyApplies.wide
  }
  return detail.whyApplies.default || ''
}

function buildActionPlan(answerMap, pct) {
  const immediate = []
  const shortTerm = []
  const ongoing = []

  // Governance posture actions
  if (answerMap[5] === 'none' || answerMap[5] === 'unsure') {
    immediate.push('Establish an AI governance framework with a designated AI risk owner')
    immediate.push('Draft an internal AI acceptable use policy covering all current AI tools')
    shortTerm.push('Conduct a formal AI risk assessment across all business units')
  } else if (answerMap[5] === 'developing') {
    immediate.push('Document existing informal AI practices into a formal governance policy')
    shortTerm.push('Assign a dedicated AI compliance lead or working group')
  }

  // Shadow AI actions
  if (answerMap[7] === 'shadow') {
    immediate.push('Conduct an emergency AI tool inventory to identify all unofficial AI usage')
    immediate.push('Issue interim guidance to employees on prohibited AI uses pending formal policy')
    shortTerm.push('Deploy technical controls to monitor and manage AI tool access')
  }

  // Wide generative AI use
  if (answerMap[7] === 'wide') {
    immediate.push('Review data handling practices for all generative AI tools in use')
    shortTerm.push('Implement output review processes for AI-generated content used externally')
    ongoing.push('Maintain an approved AI tools list and review it quarterly')
  }

  // Healthcare-specific
  if (answerMap[2] === 'healthcare') {
    immediate.push('Inventory all AI systems that process or have access to protected health information')
    shortTerm.push('Review AI vendor contracts for HIPAA business associate agreement coverage')
    shortTerm.push('Evaluate whether any clinical AI tools require FDA SaMD classification')
    ongoing.push('Monitor HHS and OCR guidance on AI in healthcare settings')
  }

  // Finance-specific
  if (answerMap[2] === 'finance') {
    immediate.push('Identify all AI models used in lending, underwriting, or credit decisions')
    shortTerm.push('Conduct a fair lending analysis on AI-driven decision models for ECOA compliance')
    shortTerm.push('Review model risk management practices against SR 11-7 requirements')
    ongoing.push('Monitor CFPB enforcement actions and guidance on algorithmic decision-making')
  }

  // Government-specific
  if (answerMap[2] === 'government') {
    shortTerm.push('Map AI procurement and deployment against current federal AI executive orders')
    shortTerm.push('Implement AI impact assessments for all public-facing AI systems')
    ongoing.push('Track OMB and agency-specific AI policy updates')
  }

  // High-impact decisions
  if (answerMap[3] === 'high-impact') {
    immediate.push('Identify all AI systems involved in consequential decisions about individuals')
    shortTerm.push('Implement bias testing and audit procedures for high-impact AI decision systems')
    shortTerm.push('Establish adverse action notice procedures where AI influences decisions about people')
    ongoing.push('Conduct periodic disparate impact analyses on AI decision outputs')
  }

  // EU data processing
  if (answerMap[4] === 'yes') {
    immediate.push('Classify all AI systems under the EU AI Act risk tier framework')
    shortTerm.push('Assess GPAI obligations if you develop, fine-tune, or deploy foundation models')
    shortTerm.push('Review data governance practices for EU AI Act compliance')
    ongoing.push('Monitor EU AI Office enforcement guidance and implementing acts')
  } else if (answerMap[4] === 'unsure') {
    immediate.push('Determine whether any AI system outputs affect individuals in the EU')
    shortTerm.push('Conduct a data flow analysis to identify EU personal data processing')
  }

  // Multi-state operations
  if (answerMap[6] === 'multi-state') {
    shortTerm.push('Map applicable state AI laws based on where affected individuals are located')
    ongoing.push('Track new state AI legislation in jurisdictions where you operate')
  }

  // International operations
  if (answerMap[6] === 'international') {
    shortTerm.push('Conduct a jurisdiction-by-jurisdiction AI regulatory mapping exercise')
    ongoing.push('Monitor international AI governance developments including ISO/IEC AI standards')
  }

  // Developer-specific
  if (answerMap[1] === 'develop' || answerMap[1] === 'both') {
    shortTerm.push('Implement AI system documentation practices covering design, training data, and testing')
    ongoing.push('Integrate compliance checkpoints into your AI development lifecycle')
  }

  // Deployer-specific
  if (answerMap[1] === 'deploy') {
    shortTerm.push('Review AI vendor documentation and compliance representations for all third-party tools')
    ongoing.push('Establish a vendor AI due diligence process for new AI tool procurement')
  }

  // Universal ongoing items
  ongoing.push('Subscribe to regulatory updates and review AI compliance posture quarterly')
  if (pct > 55) {
    ongoing.push('Consider engaging external counsel for a formal AI compliance program review')
  }

  return { immediate, shortTerm, ongoing }
}

function getRecommendedReading(answerMap) {
  const readings = []

  if (answerMap[4] === 'yes' || answerMap[6] === 'international') {
    readings.push({
      title: 'The EU AI Act Risk Classification: What You Actually Need to Know',
      href: '/blog/eu-ai-act-risk-classification',
      reason: 'Understand how the EU AI Act categorizes AI systems by risk level',
    })
    readings.push({
      title: 'EU AI Act Compliance Checklist: What to Do Before August 2026',
      href: '/blog/eu-ai-act-compliance-checklist',
      reason: 'A phased checklist for meeting the upcoming high-risk compliance deadline',
    })
  }

  if (answerMap[3] === 'high-impact') {
    readings.push({
      title: '5 U.S. States Now Regulate AI in Hiring — Is Yours Next?',
      href: '/blog/us-states-ai-hiring',
      reason: 'Learn which state laws govern automated employment decisions',
    })
  }

  if (answerMap[7] === 'shadow' || answerMap[7] === 'wide') {
    readings.push({
      title: 'Shadow AI Is Your Biggest Compliance Risk (And How to Fix It)',
      href: '/blog/shadow-ai-compliance',
      reason: 'Practical steps to manage unofficial AI usage in your organization',
    })
  }

  if (answerMap[5] === 'none' || answerMap[5] === 'unsure' || answerMap[5] === 'developing') {
    readings.push({
      title: 'NIST AI RMF in Practice: From Framework to Action Plan',
      href: '/blog/nist-ai-rmf-practice',
      reason: 'Step-by-step guide to implementing the AI risk management framework',
    })
  }

  if (answerMap[1] === 'deploy' || answerMap[1] === 'both') {
    readings.push({
      title: 'AI Vendor Due Diligence: 10 Questions to Ask Before You Buy',
      href: '/blog/ai-vendor-due-diligence',
      reason: 'Essential questions for evaluating AI vendor compliance posture',
    })
  }

  if (readings.length < 3) {
    const fallbacks = [
      {
        title: 'Building an AI Risk Management Program: A Practical Template',
        href: '/blog/ai-risk-management-program',
        reason: 'A four-phase approach to building a formal AI risk management program',
      },
      {
        title: 'AI Compliance for Startups: Where to Start When Resources Are Limited',
        href: '/blog/ai-compliance-startups',
        reason: 'Minimum viable AI compliance when you have limited resources',
      },
      {
        title: 'The GPAI Code of Practice: What AI Model Providers Need to Know',
        href: '/blog/gpai-code-of-practice',
        reason: 'Key obligations for general-purpose AI model providers under the EU AI Act',
      },
    ]
    for (const fb of fallbacks) {
      if (readings.length >= 4) break
      if (!readings.some((r) => r.href === fb.href)) {
        readings.push(fb)
      }
    }
  }

  return readings.slice(0, 4)
}

export function getDetailedReport(answers) {
  const profile = getRiskProfile(answers)
  const answerMap = {}
  answers.forEach((a) => (answerMap[a.qId] = a.value))

  // Build detailed regulation cards
  const regulationCards = profile.regulations.map((regName) => {
    const detail = REGULATION_DETAILS[regName]
    return {
      name: regName,
      slug: detail ? detail.slug : null,
      whyApplies: getWhyApplies(regName, answerMap),
      priority: getRegulationPriority(regName, answerMap),
      actions: detail ? detail.actions : [],
    }
  })

  // Sort: High priority first, then Medium, then Low
  const priorityOrder = { High: 0, Medium: 1, Low: 2 }
  regulationCards.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])

  const actionPlan = buildActionPlan(answerMap, profile.pct)
  const recommendedReading = getRecommendedReading(answerMap)

  return {
    ...profile,
    regulationCards,
    actionPlan,
    recommendedReading,
    answerMap,
    generatedAt: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
