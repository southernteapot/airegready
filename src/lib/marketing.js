export const stripCategories = [
  ['Policy kits', 'Internal rules for approved tools, sensitive data, human review, and staff expectations.'],
  ['Risk tools', 'Intake forms, impact worksheets, registers, and tiering prompts for AI use cases.'],
  ['Vendor review packets', 'Questionnaires and scoring guides for checking AI tools before adoption.'],
  ['Training materials', 'Staff-ready outlines, quizzes, attestations, and quick-reference cards.'],
  ['Jurisdiction guides', 'Plain-English trackers for AI laws, frameworks, and policy changes.'],
]

export const productCards = [
  {
    title: 'AI Governance Starter Kit',
    audience: 'Founders, operators, and small teams starting from scattered AI use.',
    inside: ['AI use inventory', 'acceptable use policy', 'risk intake form', 'update tracker'],
    helps: 'Creates a first governance file that explains what AI is used, who owns it, and what review steps exist.',
    cta: 'Preview kit',
  },
  {
    title: 'Acceptable Use Policy Kit',
    audience: 'Teams that need clear internal rules before staff use expands further.',
    inside: ['policy template', 'one-page summary', 'employee acknowledgment', 'GenAI appendix'],
    helps: 'Sets practical guardrails for tools, data, output review, confidentiality, and escalation.',
    cta: 'View contents',
  },
  {
    title: 'AI Risk Assessment Toolkit',
    audience: 'Organizations reviewing higher-impact AI use cases or customer-facing workflows.',
    inside: ['impact assessment', 'tiering decision tree', 'risk register', 'review notes'],
    helps: 'Turns risk conversations into structured records that can be revisited as systems change.',
    cta: 'Preview kit',
  },
  {
    title: 'Vendor AI Review Packet',
    audience: 'Buyers, school leaders, consultants, and operations teams choosing AI tools.',
    inside: ['vendor questionnaire', 'scoring guide', 'procurement checklist', 'red flag list'],
    helps: 'Documents privacy, training data, retention, security, oversight, and contract questions.',
    cta: 'View contents',
  },
  {
    title: 'AI Incident Response Plan',
    audience: 'Teams that need a response path for harmful outputs, leaks, or AI system failures.',
    inside: ['response plan', 'severity matrix', 'notification worksheet', 'post-incident review'],
    helps: 'Defines who responds, what gets recorded, and how lessons feed back into governance.',
    cta: 'Coming soon',
  },
  {
    title: 'AI Training Program Kit',
    audience: 'Schools, nonprofits, startups, and businesses training staff on responsible AI use.',
    inside: ['training outline', 'facilitator guide', 'quiz', 'attestation', 'role cards'],
    helps: 'Creates a lightweight training record and gives staff plain-English operating rules.',
    cta: 'Preview kit',
  },
  {
    title: 'Jurisdiction Guide Library',
    audience: 'Teams tracking multiple AI rules without hiring a full policy staff.',
    inside: ['topic briefs', 'readiness checklists', 'change logs', 'counsel review prompts'],
    helps: 'Organizes tracked topics into practical next steps without claiming legal conclusions.',
    cta: 'View library',
  },
  {
    title: 'EU AI Act Readiness Kit',
    audience: 'Organizations that need to triage EU-facing AI systems and documentation gaps.',
    inside: ['classification worksheet', 'high-risk checklist', 'evidence tracker', 'GDPR crosswalk'],
    helps: 'Frames internal preparation questions for teams that may need qualified legal review.',
    cta: 'Preview kit',
  },
  {
    title: 'Colorado AI Act Readiness Kit',
    audience: 'U.S. teams watching state AI rules for consequential decision use cases.',
    inside: ['overview', 'readiness checklist', 'impact assessment template', 'update tracker'],
    helps: 'Helps teams organize questions, records, and review habits around a tracked state topic.',
    cta: 'View contents',
  },
  {
    title: 'School and Organization AI Kit',
    audience: 'Schools, nonprofits, associations, and mission-driven operations teams.',
    inside: ['staff policy', 'student data guardrails', 'vendor review', 'training checklist'],
    helps: 'Creates practical rules for staff AI use, sensitive data, vendor adoption, and review.',
    cta: 'Coming soon',
  },
  {
    title: 'Founder AI Governance Track',
    audience: 'Solo founders, startups, and small companies that need credible basics.',
    inside: ['minimum guardrails', 'SaaS AI checklist', 'customer FAQ', 'board update template'],
    helps: 'Builds a lightweight process for product, sales, vendor, and customer questions.',
    cta: 'Preview track',
  },
  {
    title: 'Consultant Client Delivery Pack',
    audience: 'Consultants who need educational deliverables and structured client workshops.',
    inside: ['client intake', 'workshop agenda', 'policy starter', 'resource handoff checklist'],
    helps: 'Supports repeatable client delivery while leaving legal advice to qualified counsel.',
    cta: 'Coming soon',
  },
]

export const starterContents = [
  'AI use inventory',
  'Acceptable use policy',
  'Risk intake form',
  'Vendor review checklist',
  'Training outline',
  'Incident response worksheet',
  'Governance meeting agenda',
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
    title: 'Editable resource kits',
    body: 'Policies, worksheets, checklists, meeting agendas, training outlines, and update logs.',
  },
  {
    icon: 'workflow',
    title: 'Governance workflow',
    body: 'Inventory AI use, assess risk, review vendors, train staff, and record internal decisions.',
  },
  {
    icon: 'boundary',
    title: 'Educational boundary',
    body: 'Plain-English starting points for internal governance work, not legal advice or compliance guarantees.',
  },
]

export const heroWorkspaceItems = [
  {
    title: 'AI Governance Starter Kit',
    body: 'Policy, inventory, risk intake',
    status: 'Ready to adapt',
    href: '/catalog#starter-kit',
  },
  {
    title: 'Vendor AI Review Packet',
    body: 'Questionnaire and scoring guide',
    status: 'Review packet',
    href: '/catalog#kit-catalog',
  },
  {
    title: 'Regulation Update Tracker',
    body: 'EU, Colorado, states, NIST',
    status: 'Tracked updates',
    href: '/catalog#tracked-topics',
  },
]

export function getProductKind(title) {
  if (title.includes('Library')) return 'Library'
  if (title.includes('Packet')) return 'Packet'
  if (title.includes('Track')) return 'Track'
  if (title.includes('Pack')) return 'Pack'
  if (title.includes('Plan')) return 'Plan'
  if (title.includes('Program')) return 'Program'
  return 'Kit'
}
