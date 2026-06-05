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
    audience: 'Founders, operators, and small teams starting from scattered AI use.',
    inside: ['AI use inventory', 'acceptable use policy', 'risk intake form', 'update tracker'],
    helps: 'Creates a first governance file that explains what AI is used, who owns it, and what review steps exist.',
    cta: 'Buy for $19',
    purchaseUrl: 'https://airegready.gumroad.com/l/kfadzn',
    purchaseCta: 'Buy for $19',
    price: 19,
    priceCurrency: 'USD',
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
    title: 'AI Risk Assessment Toolkit',
    kind: 'Kit',
    previewImage: '/assets/airegready-home-v3-hero-workspace.avif',
    audience: 'Organizations reviewing higher-impact AI use cases or customer-facing workflows.',
    inside: ['impact assessment', 'tiering decision tree', 'risk register', 'review notes'],
    helps: 'Turns risk conversations into structured records that can be revisited as systems change.',
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
  'Risk intake form',
  'Update tracker',
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
    body: 'Nine are available for preview requests now; three stay in the roadmap until contents are ready.',
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
    body: 'Policy, inventory, risk intake',
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
