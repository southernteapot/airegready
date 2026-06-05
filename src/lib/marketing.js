export const stripCategories = [
  ['Policy kits', 'Internal rules for approved tools, sensitive data, human review, and staff expectations.'],
  ['Risk tools', 'Intake forms, impact worksheets, registers, and tiering prompts for AI use cases.'],
  ['Vendor review packets', 'Questionnaires and scoring guides for checking AI tools before adoption.'],
  ['Training materials', 'Staff-ready outlines, quizzes, attestations, and quick-reference cards.'],
  ['Jurisdiction guides', 'Plain-English trackers for AI laws, frameworks, and policy changes.'],
]

export const productCards = [
  {
    slug: 'ai-governance-starter-kit',
    title: 'AI Governance Starter Kit',
    kind: 'Kit',
    previewImage: '/assets/airegready-home-v3-starter-kit.avif',
    audience: 'Founders, new business owners, consultants, and lean teams starting from scattered AI use.',
    inside: [
      'AI use inventory',
      'acceptable use policy',
      'risk intake / impact assessment',
      'update tracker',
      'readiness checklist',
      '30-day setup plan',
      'green/yellow/red use rules',
      'tool approval mini-checklist',
      'team rollout message',
      'governance meeting agenda',
      'completion scorecard',
      'risk tiering decision tree',
      'risk register',
      'risk review notes',
    ],
    helps: 'Creates a first governance and risk assessment file that explains what AI is used, who owns it, what rules apply, and which higher-risk workflows need review.',
    cta: 'Buy for $19',
    purchaseUrl: 'https://airegready.gumroad.com/l/kfadzn',
    purchaseCta: 'Buy for $19',
    price: 19,
    priceCurrency: 'USD',
    faq: [
      {
        question: 'Is this legal advice?',
        answer:
          'No. This is an editable educational template packet for organizing your AI tools, internal rules, review steps, and update records. Use qualified professional review where your situation requires it.',
      },
      {
        question: 'Will this make us compliant?',
        answer:
          'No template can decide your legal obligations or guarantee an outcome. The kit helps you document current AI use, set internal rules, triage higher-risk workflows, and track changes over time.',
      },
      {
        question: 'Who is this for?',
        answer:
          'People starting or growing a business, solo founders, consultants, operators, nonprofits, schools, and small organizations already using AI or expecting to use it soon but missing a basic inventory, policy, intake path, and update log.',
      },
      {
        question: 'What exactly do I get?',
        answer:
          'Fourteen editable documents: core governance records, a readiness checklist, 30-day setup plan, staff-facing AI use rules, a tool approval mini-checklist, rollout aids, a completion scorecard, risk tiering, a risk register, and risk review notes. The download includes DOCX files, PDF reference copies, Markdown versions, a Start Here guide, and a legal-boundary notice.',
      },
      {
        question: 'How long does the first setup take?',
        answer:
          'The first pass is meant to be lightweight. A founder, operator, or lean team can usually start by listing active tools, assigning owners, marking sensitive-data rules, tiering higher-risk uses, and choosing first follow-up actions in one working session.',
      },
      {
        question: 'Couldn’t I just ask ChatGPT to make this?',
        answer:
          'You can generate generic policy text. The value here is the coherent packet: inventory, rules, intake and impact assessment, readiness checklist, setup plan, risk tiering, risk register, update tracking, rollout aids, editable formats, and consistent legal-boundary language in one place.',
      },
      {
        question: 'Are updates included?',
        answer:
          'The kit includes an update tracker so you can record vendor, model, prompt, workflow, and policy changes. Future AIRegReady product updates may be made available through Gumroad when the packet is revised.',
      },
      {
        question: 'What if my team uses vendor AI tools?',
        answer:
          'Start by listing those tools in the inventory and noting what data, workflows, and owners are involved. The kit includes a mini approval checklist for low-risk tools; if vendor approval is the main problem, the deeper Vendor AI Review Packet is still the better fit.',
      },
    ],
  },
  {
    slug: 'acceptable-use-policy-kit',
    title: 'Acceptable Use Policy Kit',
    kind: 'Kit',
    previewImage: '/assets/airegready-home-v3-starter-kit.avif',
    audience: 'Teams that need clear internal rules before staff use expands further.',
    inside: ['policy template', 'one-page summary', 'employee acknowledgment', 'GenAI appendix'],
    helps: 'Sets practical guardrails for tools, data, output review, confidentiality, and escalation.',
    cta: 'View contents',
  },
  {
    slug: 'ai-risk-assessment-toolkit',
    title: 'Advanced AI Risk Assessment Toolkit',
    kind: 'Kit',
    previewImage: '/assets/airegready-home-v3-hero-workspace.avif',
    audience: 'Organizations that already have starter controls and need deeper review for high-impact AI systems.',
    inside: ['advanced assessment workflow', 'control evidence review', 'residual risk scoring', 'review evidence log'],
    helps: 'Extends the starter packet for founders and teams that need deeper risk review beyond first-pass templates.',
    cta: 'Preview kit',
  },
  {
    slug: 'vendor-ai-review-packet',
    title: 'Vendor AI Review Packet',
    kind: 'Packet',
    previewImage: '/assets/airegready-home-v3-hero-workspace.avif',
    audience: 'Buyers, school leaders, consultants, and operations teams choosing AI tools.',
    inside: ['vendor questionnaire', 'scoring guide', 'procurement checklist', 'red flag list'],
    helps: 'Documents privacy, training data, retention, security, oversight, and contract questions.',
    cta: 'View contents',
  },
  {
    slug: 'ai-incident-response-plan',
    title: 'AI Incident Response Plan',
    kind: 'Plan',
    previewImage: '/assets/airegready-home-v3-hero-workspace.avif',
    audience: 'Teams that need a response path for harmful outputs, leaks, or AI system failures.',
    inside: ['response plan', 'severity matrix', 'notification worksheet', 'post-incident review'],
    helps: 'Defines who responds, what gets recorded, and how lessons feed back into governance.',
    cta: 'Coming soon',
  },
  {
    slug: 'ai-training-program-kit',
    title: 'AI Training Program Kit',
    kind: 'Kit',
    previewImage: '/assets/airegready-home-v3-starter-kit.avif',
    audience: 'Schools, nonprofits, startups, and businesses training staff on responsible AI use.',
    inside: ['training outline', 'facilitator guide', 'quiz', 'attestation', 'role cards'],
    helps: 'Creates a lightweight training record and gives staff plain-English operating rules.',
    cta: 'Preview kit',
  },
  {
    slug: 'jurisdiction-guide-library',
    title: 'Jurisdiction Guide Library',
    kind: 'Library',
    previewImage: '/assets/airegready-home-v3-regulation-library.avif',
    audience: 'Teams tracking multiple AI rules without hiring a full policy staff.',
    inside: ['topic briefs', 'readiness checklists', 'change logs', 'counsel review prompts'],
    helps: 'Organizes tracked topics into practical next steps without claiming legal conclusions.',
    cta: 'View library',
  },
  {
    slug: 'eu-ai-act-readiness-kit',
    title: 'EU AI Act Readiness Kit',
    kind: 'Kit',
    previewImage: '/assets/airegready-home-v3-regulation-library.avif',
    audience: 'Organizations that need to triage EU-facing AI systems and documentation gaps.',
    inside: ['classification worksheet', 'high-risk checklist', 'evidence tracker', 'GDPR crosswalk'],
    helps: 'Frames internal preparation questions for teams that may need qualified legal review.',
    cta: 'Preview kit',
  },
  {
    slug: 'colorado-ai-act-readiness-kit',
    title: 'Colorado AI Act Readiness Kit',
    kind: 'Kit',
    previewImage: '/assets/airegready-home-v3-regulation-library.avif',
    audience: 'U.S. teams watching state AI rules for consequential decision use cases.',
    inside: ['overview', 'readiness checklist', 'impact assessment template', 'update tracker'],
    helps: 'Helps teams organize questions, records, and review habits around a tracked state topic.',
    cta: 'View contents',
  },
  {
    slug: 'school-and-organization-ai-kit',
    title: 'School and Organization AI Kit',
    kind: 'Kit',
    previewImage: '/assets/airegready-home-v3-starter-kit.avif',
    audience: 'Schools, nonprofits, associations, and mission-driven operations teams.',
    inside: ['staff policy', 'student data guardrails', 'vendor review', 'training checklist'],
    helps: 'Creates practical rules for staff AI use, sensitive data, vendor adoption, and review.',
    cta: 'Coming soon',
  },
  {
    slug: 'founder-ai-governance-track',
    title: 'Founder AI Governance Track',
    kind: 'Track',
    previewImage: '/assets/airegready-home-v3-hero-workspace.avif',
    audience: 'Solo founders, startups, and small companies that need credible basics.',
    inside: ['minimum guardrails', 'SaaS AI checklist', 'customer FAQ', 'board update template'],
    helps: 'Builds a lightweight process for product, sales, vendor, and customer questions.',
    cta: 'Preview track',
  },
  {
    slug: 'consultant-client-delivery-pack',
    title: 'Consultant Client Delivery Pack',
    kind: 'Pack',
    previewImage: '/assets/airegready-home-v3-hero-workspace.avif',
    audience: 'Consultants who need educational deliverables and structured client workshops.',
    inside: ['client intake', 'workshop agenda', 'policy starter', 'resource handoff checklist'],
    helps: 'Supports repeatable client delivery while leaving legal advice to qualified counsel.',
    cta: 'Coming soon',
  },
]

export function isComingSoon(product) {
  return product.cta === 'Coming soon'
}

export function isProductAvailable(product) {
  return !isComingSoon(product)
}

export function getAvailableProducts() {
  return productCards.filter(isProductAvailable)
}

export function getRoadmapProducts() {
  return productCards.filter(isComingSoon)
}

export function getProductBySlug(slug) {
  return getAvailableProducts().find((product) => product.slug === slug)
}

export function getAvailableProductSlugs() {
  return getAvailableProducts().map((product) => product.slug)
}

export function getProductHref(product) {
  return `/catalog/${product.slug}`
}

export function isPurchasableProduct(product) {
  return Boolean(product.purchaseUrl && product.price && product.priceCurrency)
}

export function getProductOfferUrl(product) {
  return product.purchaseUrl || getProductHref(product)
}

export function getProductPriceLabel(product) {
  if (!isPurchasableProduct(product)) return null
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.priceCurrency,
    maximumFractionDigits: 0,
  }).format(product.price)
}

export const starterContents = [
  'AI use inventory',
  'Acceptable use policy',
  'Risk intake / impact assessment',
  'Risk tiering decision tree',
  'Risk register',
  '30-day setup plan',
]

export const assessmentRows = [
  ['Policy readiness', '72%', 'w-[72%]', 'Good baseline'],
  ['Vendor controls', '48%', 'w-[48%]', 'Needs review'],
  ['Training', '62%', 'w-[62%]', 'In progress'],
  ['Risk review', '40%', 'w-[40%]', 'Patchy'],
  ['Incident planning', '28%', 'w-[28%]', 'Missing'],
  ['Regulatory tracking', '56%', 'w-[56%]', 'Informal'],
]

export const trackedTopics = [
  'EU AI Act',
  'Colorado AI Act',
  'State AI legislation',
  'Federal AI policy',
  'NIST AI RMF',
  'Sector guidance',
  'School and workplace AI policies',
]

export const heroProofCards = [
  {
    icon: 'documents',
    title: '12 catalog packages',
    body: 'One paid 14-document starter kit is live, with preview resources and roadmap items kept separate.',
  },
  {
    icon: 'workflow',
    title: '6 framework areas tracked',
    body: 'EU AI Act, NIST AI RMF, state laws, federal policy, sector rules, and global governance.',
  },
  {
    icon: 'boundary',
    title: 'No-login assessment',
    body: 'The readiness assessment maps governance gaps to next steps without requiring an email.',
  },
]

export const heroWorkspaceItems = [
  {
    title: 'AI Governance Starter Kit',
    body: 'Governance and risk assessment',
    status: 'Ready to adapt',
    href: '/catalog/ai-governance-starter-kit',
  },
  {
    title: 'Vendor AI Review Packet',
    body: 'Questionnaire and scoring guide',
    status: 'Review packet',
    href: '/catalog/vendor-ai-review-packet',
  },
  {
    title: 'Regulation Update Tracker',
    body: 'EU, Colorado, states, NIST',
    status: 'Tracked updates',
    href: '/catalog#tracked-topics',
  },
]

export function getProductKind(productOrTitle) {
  if (typeof productOrTitle === 'object' && productOrTitle?.kind) return productOrTitle.kind

  const title = productOrTitle
  if (title.includes('Library')) return 'Library'
  if (title.includes('Packet')) return 'Packet'
  if (title.includes('Track')) return 'Track'
  if (title.includes('Pack')) return 'Pack'
  if (title.includes('Plan')) return 'Plan'
  if (title.includes('Program')) return 'Program'
  return 'Kit'
}
