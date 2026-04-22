export const ASSESSMENT_SCHEMA_VERSION = 2

const TEAM_ENTITIES = ['small-team', 'mid-size', 'larger-org']
const DEPLOYER_ROLES = ['deployer', 'both']
const PROVIDER_ROLES = ['provider', 'both']
const HIGH_SENSITIVITY_USES = ['hiring', 'finance', 'healthcare', 'legal', 'education']

const STATE_NAMES = {
  al: 'Alabama', ak: 'Alaska', az: 'Arizona', ar: 'Arkansas', ca: 'California',
  co: 'Colorado', ct: 'Connecticut', de: 'Delaware', dc: 'the District of Columbia',
  fl: 'Florida', ga: 'Georgia', hi: 'Hawaii', id: 'Idaho', il: 'Illinois',
  in: 'Indiana', ia: 'Iowa', ks: 'Kansas', ky: 'Kentucky', la: 'Louisiana',
  me: 'Maine', md: 'Maryland', ma: 'Massachusetts', mi: 'Michigan', mn: 'Minnesota',
  ms: 'Mississippi', mo: 'Missouri', mt: 'Montana', ne: 'Nebraska', nv: 'Nevada',
  nh: 'New Hampshire', nj: 'New Jersey', nm: 'New Mexico', ny: 'New York',
  nc: 'North Carolina', nd: 'North Dakota', oh: 'Ohio', ok: 'Oklahoma', or: 'Oregon',
  pa: 'Pennsylvania', ri: 'Rhode Island', sc: 'South Carolina', sd: 'South Dakota',
  tn: 'Tennessee', tx: 'Texas', ut: 'Utah', vt: 'Vermont', va: 'Virginia',
  wa: 'Washington', wv: 'West Virginia', wi: 'Wisconsin', wy: 'Wyoming',
}

const USE_CASE_LABELS = {
  writing: 'writing and brainstorming',
  marketing: 'marketing and content',
  'internal-ops': 'internal operations',
  'customer-support': 'customer interactions',
  'software-dev': 'software development',
  hiring: 'hiring and HR',
  finance: 'financial or credit decisions',
  healthcare: 'healthcare contexts',
  legal: 'legal or compliance work',
  education: 'education or services for children',
}

const MARKET_LABELS = {
  'internal-only': 'mostly internal work or internal team use',
  'us-customers': 'U.S. customers, applicants, or consumers',
  'us-multi': 'people across multiple U.S. states',
  eu: 'EU or UK users, customers, or applicants',
  'public-sector': 'government or public-sector clients or constituents',
  unsure: 'a market footprint that is not fully mapped yet',
}

const OFFER_CATALOG = {
  governanceStarter: {
    slug: 'governance-starter-stack',
    name: 'Governance Starter Stack',
    why: 'Best first purchase when AI use has outpaced written rules, ownership, and training.',
    includes: [
      'AI Acceptable Use Policy',
      'AI System Inventory',
      'AI Employee Training Program',
      'AI Governance Framework',
    ],
    ctaLabel: 'Email about this stack',
    learnHref: '/blog/ai-use-policy-starter',
    learnLabel: 'See the policy guidance',
  },
  vendorReview: {
    slug: 'vendor-review-pack',
    name: 'Vendor Review Pack',
    why: 'Best fit when teams are adopting third-party AI tools faster than procurement and contract review can keep up.',
    includes: [
      'AI Vendor Risk Assessment',
      'AI Procurement Checklist Lite',
      'AI DPA Standalone',
      'AI Subprocessor Management Procedure',
    ],
    ctaLabel: 'Email about this pack',
    learnHref: '/blog/ai-vendor-due-diligence',
    learnLabel: 'Read the due diligence guide',
  },
  providerAssurance: {
    slug: 'provider-assurance-pack',
    name: 'Provider Assurance Pack',
    why: 'Best fit when you build or ship AI-enabled features and need release review, documentation, and incident handling.',
    includes: [
      'AI Model Card Templates',
      'AI Update Log Template',
      'AI Incident Response Plan',
      'AI System Inventory',
    ],
    ctaLabel: 'Email about this pack',
    learnHref: '/blog/ai-compliance-startups',
    learnLabel: 'Read the startup guide',
  },
  disclosure: {
    slug: 'customer-disclosure-pack',
    name: 'Customer Disclosure Pack',
    why: 'Best fit when customers, applicants, or consumers interact with AI or are affected by AI-assisted decisions.',
    includes: [
      'Customer AI Disclosure Templates',
      'AI FAQ for Customers',
      'Customer Notice Templates',
    ],
    ctaLabel: 'Email about this pack',
    learnHref: '/regulations/eu-ai-act',
    learnLabel: 'Review transparency obligations',
  },
  impactOversight: {
    slug: 'high-impact-oversight-pack',
    name: 'High-Impact Oversight Pack',
    why: 'Best fit for high-stakes use cases touching sensitive data, regulated workflows, or decisions about people.',
    includes: [
      'AI Impact Assessment',
      'AI Risk Register Template',
      'AI Incident Response Plan',
      'AI Complaint Handling Procedure',
    ],
    ctaLabel: 'Email about this pack',
    learnHref: '/blog/ai-incident-response',
    learnLabel: 'Read the incident guide',
  },
  founderTrack: {
    slug: 'founder-small-team-track',
    name: 'Founder & Small-Team Track',
    why: 'Best fit when you want lightweight templates before AI use, vendor sprawl, and customer commitments get harder to unwind.',
    includes: [
      'AI for SaaS Startups Pack',
      'AI Acceptable Use Policy',
      'AI System Inventory',
    ],
    ctaLabel: 'Email about this track',
    learnHref: '/blog/ai-side-projects',
    learnLabel: 'Read the solo starting guide',
  },
  coloradoKit: {
    slug: 'colorado-ai-act-readiness-kit',
    name: 'Colorado AI Act Readiness Kit',
    why: 'Best fit when Colorado consumers or applicants may be affected by your AI use.',
    includes: [
      'Colorado AI Act Checklist',
      'Impact Assessment Template',
      'Colorado-specific Readiness Materials',
    ],
    ctaLabel: 'Email about this kit',
    learnHref: '/blog/colorado-ai-act-countdown',
    learnLabel: 'See Colorado obligations',
  },
  californiaKit: {
    slug: 'california-ai-readiness-kit',
    name: 'California AI Readiness Kit',
    why: 'Best fit when California exposure makes transparency, claims review, or training-data questions more concrete.',
    includes: [
      'California AI Checklist',
      'California Readiness Materials',
      'State-specific Templates',
    ],
    ctaLabel: 'Email about this kit',
    learnHref: '/blog/california-tfaia-explained',
    learnLabel: 'See California obligations',
  },
  texasKit: {
    slug: 'texas-traiga-readiness-kit',
    name: 'Texas TRAIGA Readiness Kit',
    why: 'Best fit when Texas operations or customers make state-specific documentation worth buying now.',
    includes: [
      'Texas TRAIGA Checklist',
      'Texas Readiness Materials',
      'State-specific Templates',
    ],
    ctaLabel: 'Email about this kit',
    learnHref: '/blog/texas-traiga-guide',
    learnLabel: 'See Texas obligations',
  },
}

export const QUESTIONS = [
  {
    id: 1,
    text: 'Which best describes you?',
    subtitle: "We'll tailor the rest of the assessment based on this.",
    options: [
      { label: 'Solo - freelancer, consultant, or individual', value: 'solo' },
      { label: 'Small team (2-20 people)', value: 'small-team' },
      { label: 'Mid-size (20-200 people)', value: 'mid-size' },
      { label: 'Larger organization (200+)', value: 'larger-org' },
    ],
  },
  {
    id: 2,
    text: 'Where is your organization primarily based?',
    subtitle: 'We ask about market exposure separately so this stays focused on your home base.',
    type: 'dropdown',
    options: [
      { label: 'Alabama', value: 'al' },
      { label: 'Alaska', value: 'ak' },
      { label: 'Arizona', value: 'az' },
      { label: 'Arkansas', value: 'ar' },
      { label: 'California', value: 'ca' },
      { label: 'Colorado', value: 'co' },
      { label: 'Connecticut', value: 'ct' },
      { label: 'Delaware', value: 'de' },
      { label: 'District of Columbia', value: 'dc' },
      { label: 'Florida', value: 'fl' },
      { label: 'Georgia', value: 'ga' },
      { label: 'Hawaii', value: 'hi' },
      { label: 'Idaho', value: 'id' },
      { label: 'Illinois', value: 'il' },
      { label: 'Indiana', value: 'in' },
      { label: 'Iowa', value: 'ia' },
      { label: 'Kansas', value: 'ks' },
      { label: 'Kentucky', value: 'ky' },
      { label: 'Louisiana', value: 'la' },
      { label: 'Maine', value: 'me' },
      { label: 'Maryland', value: 'md' },
      { label: 'Massachusetts', value: 'ma' },
      { label: 'Michigan', value: 'mi' },
      { label: 'Minnesota', value: 'mn' },
      { label: 'Mississippi', value: 'ms' },
      { label: 'Missouri', value: 'mo' },
      { label: 'Montana', value: 'mt' },
      { label: 'Nebraska', value: 'ne' },
      { label: 'Nevada', value: 'nv' },
      { label: 'New Hampshire', value: 'nh' },
      { label: 'New Jersey', value: 'nj' },
      { label: 'New Mexico', value: 'nm' },
      { label: 'New York', value: 'ny' },
      { label: 'North Carolina', value: 'nc' },
      { label: 'North Dakota', value: 'nd' },
      { label: 'Ohio', value: 'oh' },
      { label: 'Oklahoma', value: 'ok' },
      { label: 'Oregon', value: 'or' },
      { label: 'Pennsylvania', value: 'pa' },
      { label: 'Rhode Island', value: 'ri' },
      { label: 'South Carolina', value: 'sc' },
      { label: 'South Dakota', value: 'sd' },
      { label: 'Tennessee', value: 'tn' },
      { label: 'Texas', value: 'tx' },
      { label: 'Utah', value: 'ut' },
      { label: 'Vermont', value: 'vt' },
      { label: 'Virginia', value: 'va' },
      { label: 'Washington', value: 'wa' },
      { label: 'West Virginia', value: 'wv' },
      { label: 'Wisconsin', value: 'wi' },
      { label: 'Wyoming', value: 'wy' },
      { label: 'Outside the U.S.', value: 'intl' },
    ],
  },
  {
    id: 3,
    text: 'How are you using AI today?',
    options: [
      { label: 'I use off-the-shelf tools (ChatGPT, Claude, Copilot, etc.)', value: 'deployer' },
      { label: 'I build AI into products or services I offer', value: 'provider' },
      { label: 'Both - I use off-the-shelf tools and build AI into what I offer', value: 'both' },
      { label: "I'm not using AI yet - still figuring it out", value: 'not-yet' },
    ],
  },
  {
    id: 4,
    text: 'What are you using AI for?',
    subtitle: 'Select all that apply.',
    multi: true,
    appliesTo: (a) => a[3] !== 'not-yet',
    options: [
      { label: 'Writing, summarizing, brainstorming', value: 'writing', sensitivity: 0 },
      { label: 'Marketing, content, or advertising', value: 'marketing', sensitivity: 1 },
      { label: 'Internal operations or admin work', value: 'internal-ops', sensitivity: 0 },
      { label: 'Customer support or customer-facing interactions', value: 'customer-support', sensitivity: 2 },
      { label: 'Software development or product features', value: 'software-dev', sensitivity: 1 },
      { label: 'Hiring, HR, or employment decisions', value: 'hiring', sensitivity: 3 },
      { label: 'Finance, credit, insurance, or pricing', value: 'finance', sensitivity: 3 },
      { label: 'Healthcare, mental health, or medical contexts', value: 'healthcare', sensitivity: 3 },
      { label: 'Legal or compliance work', value: 'legal', sensitivity: 3 },
      { label: 'Education or services for children', value: 'education', sensitivity: 3 },
      { label: 'Something else', value: 'other', sensitivity: 1 },
    ],
  },
  {
    id: 5,
    text: 'What kind of data touches your AI workflows most often?',
    subtitle: 'Pick the highest-sensitivity answer that is true most of the time.',
    appliesTo: (a) => a[3] !== 'not-yet',
    options: [
      { label: 'Nothing sensitive - public info only', value: 'public', score: 0 },
      { label: 'Internal business information', value: 'internal', score: 1 },
      { label: 'Customer or personal data', value: 'personal', score: 3 },
      { label: 'Regulated data (health, financial, legal)', value: 'regulated', score: 4 },
      { label: 'Not sure', value: 'unsure', score: 2 },
    ],
  },
  {
    id: 6,
    text: 'Is AI influencing decisions about people?',
    subtitle: 'Hiring, credit, eligibility, pricing, support outcomes, or anything similar.',
    appliesTo: (a) => a[3] !== 'not-yet',
    options: [
      { label: 'No', value: 'no', score: 0 },
      { label: 'Only low-stakes internal choices', value: 'low-stakes', score: 1 },
      { label: 'Sometimes, with human review', value: 'with-review', score: 2 },
      { label: 'Yes, in consequential decisions', value: 'consequential', score: 4 },
      { label: 'Not sure', value: 'unsure', score: 2 },
    ],
  },
  {
    id: 7,
    text: 'Who is affected by your AI or AI-enabled work?',
    subtitle: 'This changes which obligations matter first.',
    options: [
      { label: 'Mostly internal work or internal team use', value: 'internal-only', score: 0 },
      { label: 'U.S. customers, applicants, or consumers', value: 'us-customers', score: 1 },
      { label: 'People across multiple U.S. states', value: 'us-multi', score: 2 },
      { label: 'EU/EEA or UK users, customers, or applicants', value: 'eu', score: 3 },
      { label: 'Government or public-sector clients / constituents', value: 'public-sector', score: 2 },
      { label: 'Not sure', value: 'unsure', score: 2 },
    ],
  },
  {
    id: 8,
    text: 'Do you have personal rules for AI use?',
    appliesTo: (a) => a[1] === 'solo' && a[3] !== 'not-yet',
    options: [
      { label: 'No rules - I just use it', value: 'none', score: 0 },
      { label: 'I keep confidential info out of prompts', value: 'informal', score: 1 },
      { label: 'I have a short written rule set I follow', value: 'written', score: 2 },
      { label: 'My client agreements and workflow address AI use', value: 'contracts', score: 3 },
    ],
  },
  {
    id: 9,
    text: 'How consistently do you review AI output before using it?',
    appliesTo: (a) => a[1] === 'solo' && a[3] !== 'not-yet',
    options: [
      { label: 'I often trust the output as-is', value: 'no', score: 0 },
      { label: 'I review it for higher-visibility work', value: 'sometimes', score: 1 },
      { label: 'I always review anything client-facing', value: 'client-facing', score: 2 },
      { label: 'I use a documented review checklist', value: 'documented', score: 3 },
    ],
  },
  {
    id: 10,
    text: "What's in place for team AI use?",
    appliesTo: (a) => TEAM_ENTITIES.includes(a[1]) && a[3] !== 'not-yet',
    options: [
      { label: 'Nothing formal - everyone figures it out', value: 'nothing', score: 0 },
      { label: 'Informal guidance in chat or docs', value: 'informal', score: 1 },
      { label: 'Written acceptable use policy', value: 'policy', score: 2 },
      { label: 'Written policy plus intake / approval path', value: 'approval', score: 3 },
      { label: 'Defined roles, policy, approval, and review', value: 'managed', score: 4 },
    ],
  },
  {
    id: 11,
    text: 'Has your team had AI training?',
    subtitle: 'Think practical training on good use, bad use, and escalation.',
    appliesTo: (a) => TEAM_ENTITIES.includes(a[1]) && a[3] !== 'not-yet',
    options: [
      { label: 'No training', value: 'none', score: 0 },
      { label: 'Informal tips or docs shared', value: 'informal', score: 1 },
      { label: 'One-time structured training', value: 'once', score: 2 },
      { label: 'Ongoing training with updates', value: 'ongoing', score: 3 },
    ],
  },
  {
    id: 12,
    text: 'How do you vet third-party AI tools before they get used?',
    appliesTo: (a) => TEAM_ENTITIES.includes(a[1]) && DEPLOYER_ROLES.includes(a[3]),
    options: [
      { label: 'No process - people use what they want', value: 'none', score: 0 },
      { label: 'Ad-hoc checks', value: 'ad-hoc', score: 1 },
      { label: 'We review privacy, security, and terms', value: 'review', score: 2 },
      { label: 'Documented review and approval process', value: 'documented', score: 3 },
    ],
  },
  {
    id: 13,
    text: 'Before an AI feature or workflow ships, what review happens?',
    subtitle: 'Think tests, evals, human sign-off, and release checklists.',
    appliesTo: (a) => PROVIDER_ROLES.includes(a[3]),
    options: [
      { label: 'No formal review before release', value: 'none', score: 0 },
      { label: 'Manual spot checks by the builder', value: 'manual', score: 1 },
      { label: 'Repeatable pre-release checklist or eval', value: 'repeatable', score: 2 },
      { label: 'Documented evaluation, sign-off, and release review', value: 'documented', score: 3 },
    ],
  },
  {
    id: 14,
    text: 'Can you list which AI systems are in use, who owns them, and where they are used?',
    subtitle: 'Inventory matters for both in-house features and third-party tools.',
    appliesTo: (a) => a[3] !== 'not-yet' && (TEAM_ENTITIES.includes(a[1]) || PROVIDER_ROLES.includes(a[3])),
    options: [
      { label: "Not reliably - we'd have to ask around", value: 'none', score: 0 },
      { label: 'There is a rough list, but it drifts', value: 'rough', score: 1 },
      { label: 'Named owners and a current inventory exist', value: 'current', score: 2 },
      { label: 'Inventory plus change log / version history', value: 'versioned', score: 3 },
    ],
  },
  {
    id: 15,
    text: 'If an AI feature goes wrong, what happens next?',
    subtitle: 'Monitoring, escalation, logging, rollback, or customer remediation.',
    appliesTo: (a) => PROVIDER_ROLES.includes(a[3]),
    options: [
      { label: 'No clear monitoring or rollback plan', value: 'none', score: 0 },
      { label: 'Issues are handled ad hoc when someone notices', value: 'ad-hoc', score: 1 },
      { label: 'Basic monitoring and escalation exist', value: 'basic', score: 2 },
      { label: 'Documented incident response, logging, and rollback exist', value: 'documented', score: 3 },
    ],
  },
  {
    id: 16,
    text: 'Does leadership review AI risks, incidents, or major changes on a set cadence?',
    appliesTo: (a) => a[1] === 'larger-org' && a[3] !== 'not-yet',
    options: [
      { label: 'No regular visibility', value: 'none', score: 0 },
      { label: 'Occasional updates', value: 'occasional', score: 1 },
      { label: 'Standing review cadence', value: 'cadence', score: 2 },
      { label: 'Formal governance with evidence trail', value: 'formal', score: 3 },
    ],
  },
  {
    id: 17,
    text: "What's your top priority right now?",
    subtitle: 'This decides which recommendation we put first.',
    options: [
      { label: 'Basic rules and acceptable use', value: 'policy' },
      { label: 'Reviewing vendors or tools', value: 'vendor' },
      { label: 'Customer or employee disclosures', value: 'disclosure' },
      { label: 'Training for people using AI', value: 'training' },
      { label: 'Release review, testing, or monitoring', value: 'provider' },
      { label: 'Impact assessments or oversight for high-stakes use', value: 'impact' },
      { label: 'Understanding what applies to me', value: 'understand' },
      { label: 'Piloting AI safely before rollout', value: 'pilot' },
    ],
  },
]

function buildAnswerMap(answers) {
  const map = {}
  answers.forEach((answer) => {
    map[answer.qId] = answer.values || answer.value
  })
  return map
}

function buildScoreMap(answers) {
  const map = {}
  answers.forEach((answer) => {
    if (answer.score !== undefined) map[answer.qId] = answer.score
  })
  return map
}

function questionById(qId) {
  return QUESTIONS.find((question) => question.id === qId)
}

function scoreOf(answerMap, qId) {
  const question = questionById(qId)
  if (!question) return 0
  const value = answerMap[qId]
  if (!value || typeof value !== 'string') return 0
  const option = question.options.find((candidate) => candidate.value === value)
  return option?.score ?? 0
}

function maxScoreOf(qId) {
  const question = questionById(qId)
  if (!question) return 0
  return Math.max(...question.options.map((option) => option.score ?? 0), 0)
}

function getUseCaseSensitivity(answerMap) {
  const values = answerMap[4] || []
  const question = questionById(4)
  const total = values.reduce((sum, value) => {
    const option = question?.options.find((candidate) => candidate.value === value)
    return sum + (option?.sensitivity || 0)
  }, 0)
  return Math.min(total, 6)
}

function locationPhrase(location, prefix = 'based in') {
  if (!location) return ''
  if (location === 'intl') return 'based outside the U.S.'
  const name = STATE_NAMES[location]
  return name ? `${prefix} ${name}` : ''
}

function marketPhrase(market) {
  const label = MARKET_LABELS[market]
  return label ? `Your AI affects ${label}.` : ''
}

function entityLabel(entity) {
  return {
    solo: 'solo operator',
    'small-team': 'small team',
    'mid-size': 'mid-size company',
    'larger-org': 'larger organization',
  }[entity] || 'organization'
}

function roleLabel(role) {
  return {
    deployer: 'using off-the-shelf AI tools',
    provider: 'building AI into what you offer',
    both: 'using off-the-shelf tools and building AI into what you offer',
  }[role] || ''
}

function priorityLabel(priority) {
  return {
    policy: 'Basic rules and acceptable use',
    vendor: 'Reviewing vendors or tools',
    disclosure: 'Customer or employee disclosures',
    training: 'Training for people using AI',
    provider: 'Release review, testing, or monitoring',
    impact: 'Impact assessments or high-stakes oversight',
    understand: 'Understanding what applies',
    pilot: 'Piloting AI safely before rollout',
  }[priority] || 'Understanding what applies'
}

function pushUnique(items, value) {
  if (value && !items.includes(value)) items.push(value)
}

function buildOfferEmailLink(name, answerMap) {
  const entity = entityLabel(answerMap[1])
  const role = roleLabel(answerMap[3]) || 'exploring AI use'
  const location = locationPhrase(answerMap[2], 'based in') || 'based outside the U.S.'
  const priority = priorityLabel(answerMap[17])
  const body = [
    'I completed the AI readiness assessment and want to ask about:',
    `- ${name}`,
    '',
    'Context:',
    `- Entity: ${entity}`,
    `- Location: ${location}`,
    `- Role: ${role}`,
    `- Priority: ${priority}`,
  ].join('\n')

  return `mailto:bdclark1@gmail.com?subject=${encodeURIComponent(`Assessment recommendation: ${name}`)}&body=${encodeURIComponent(body)}`
}

function createOffer(key, answerMap, badge) {
  const offer = OFFER_CATALOG[key]
  if (!offer) return null
  return {
    ...offer,
    href: buildOfferEmailLink(offer.name, answerMap),
    priority: badge,
  }
}

function getGuardrailQuestionIds(answerMap) {
  const entity = answerMap[1]
  const role = answerMap[3]
  const ids = []

  if (entity === 'solo') {
    ids.push(8, 9)
  } else if (TEAM_ENTITIES.includes(entity)) {
    ids.push(10, 11, 14)
  }

  if (TEAM_ENTITIES.includes(entity) && DEPLOYER_ROLES.includes(role)) {
    ids.push(12)
  }

  if (PROVIDER_ROLES.includes(role)) {
    ids.push(13, 15)
    if (entity === 'solo') ids.push(14)
  }

  if (entity === 'larger-org') ids.push(16)

  return ids.filter((value, index, array) => array.indexOf(value) === index)
}

function calcReadiness(answerMap) {
  const role = answerMap[3]
  if (role === 'not-yet') return { score: 0, max: 5, label: 'Exploring' }

  let score = 1
  const useCases = answerMap[4] || []
  const marketScore = scoreOf(answerMap, 7)
  const dataScore = scoreOf(answerMap, 5)
  const decisionScore = scoreOf(answerMap, 6)

  if (PROVIDER_ROLES.includes(role)) score += 1
  if (useCases.length >= 2 || useCases.includes('customer-support') || useCases.includes('software-dev')) score += 1
  if (dataScore >= 3 || decisionScore >= 2) score += 1
  if (marketScore >= 2) score += 1

  score = Math.min(score, 5)

  let label = 'Exploring'
  if (score === 2) label = 'Internal Use'
  else if (score === 3) label = 'Operational Use'
  else if (score === 4) label = 'Customer-Facing'
  else if (score === 5) label = 'Higher-Impact'

  return { score, max: 5, label }
}

function calcGuardrails(answerMap, scoreMap) {
  const ids = getGuardrailQuestionIds(answerMap)
  const raw = ids.reduce((sum, qId) => sum + (scoreMap[qId] || 0), 0)
  const max = ids.reduce((sum, qId) => sum + maxScoreOf(qId), 0)
  const ratio = max > 0 ? raw / max : 0

  let label = 'Ad Hoc'
  if (ratio > 0.25 && ratio <= 0.55) label = 'Patchy'
  else if (ratio > 0.55 && ratio <= 0.8) label = 'Structured'
  else if (ratio > 0.8) label = 'Managed'

  return { score: raw, max, ratio, label }
}

function calcRisk(answerMap, scoreMap, guardrails) {
  const role = answerMap[3]
  const dataScore = scoreMap[5] || 0
  const decisionScore = scoreMap[6] || 0
  const marketScore = scoreMap[7] || 0
  const providerGap = PROVIDER_ROLES.includes(role) && ((scoreMap[13] || 0) <= 1 || (scoreMap[15] || 0) <= 1)
  const vendorGap = DEPLOYER_ROLES.includes(role) && TEAM_ENTITIES.includes(answerMap[1]) && (scoreMap[12] || 0) <= 1

  let score = getUseCaseSensitivity(answerMap) + dataScore + decisionScore + marketScore
  if (PROVIDER_ROLES.includes(role)) score += 1
  if (guardrails.ratio <= 0.25 && (dataScore >= 3 || decisionScore >= 2 || PROVIDER_ROLES.includes(role))) score += 1
  if (providerGap) score += 2
  if (vendorGap && dataScore >= 1) score += 1

  score = Math.min(score, 20)

  let label = 'Low'
  if (score > 4 && score <= 8) label = 'Moderate'
  else if (score > 8 && score <= 13) label = 'Elevated'
  else if (score > 13) label = 'High'

  return { score, max: 20, label }
}

function calcPreparedness(guardrails, risk) {
  const guardrailsPct = guardrails.ratio * 60
  const riskPct = (1 - Math.min(risk.score / risk.max, 1)) * 40
  const score = Math.round(guardrailsPct + riskPct)

  let label = 'Exposed'
  if (score >= 80) label = 'Well Prepared'
  else if (score >= 60) label = 'On Track'
  else if (score >= 40) label = 'Needs Work'
  else if (score >= 25) label = 'At Risk'

  return { score, max: 100, label }
}

function buildWhoYouAre(answerMap) {
  const entity = entityLabel(answerMap[1])
  const location = locationPhrase(answerMap[2])
  const role = roleLabel(answerMap[3])
  const useCases = answerMap[4] || []
  const namedUses = useCases.map((value) => USE_CASE_LABELS[value]).filter(Boolean)
  const useSentence = namedUses.length > 0
    ? ` for ${namedUses.slice(0, 2).join(' and ')}${namedUses.length > 2 ? ` (and ${namedUses.length - 2} other${namedUses.length - 2 === 1 ? '' : 's'})` : ''}`
    : ''

  const dataLabel = {
    public: 'only non-sensitive information',
    internal: 'internal business information',
    personal: 'customer or personal data',
    regulated: 'regulated data (health, financial, or legal)',
    unsure: 'data you are not fully sure about',
  }[answerMap[5]]

  const decisionLabel = {
    no: 'AI is not influencing decisions about people.',
    'low-stakes': 'AI only touches low-stakes internal choices.',
    'with-review': 'AI informs decisions but a human reviews them.',
    consequential: 'AI is influencing consequential decisions about people.',
    unsure: "It is not fully clear whether AI is influencing decisions about people.",
  }[answerMap[6]]

  const firstSentence = [`You're a ${entity}`]
  if (location) firstSentence.push(location)
  if (role) firstSentence.push(role + useSentence)

  return [
    `${firstSentence.join(', ')}.`,
    dataLabel ? `Your AI touches ${dataLabel}.` : null,
    marketPhrase(answerMap[7]),
    decisionLabel || null,
  ].filter(Boolean).join(' ')
}

function buildSummary(answerMap, readiness, guardrails, risk) {
  const role = answerMap[3]
  const providerEval = scoreOf(answerMap, 13)
  const providerMonitoring = scoreOf(answerMap, 15)
  const vendorReview = scoreOf(answerMap, 12)

  if (guardrails.label === 'Ad Hoc' && risk.label === 'High') {
    return 'AI use is creating exposure faster than your controls are catching up.'
  }
  if (PROVIDER_ROLES.includes(role) && (providerEval <= 1 || providerMonitoring <= 1)) {
    return 'You are shipping or supporting AI-enabled work without a reliable release-review and incident loop yet.'
  }
  if (DEPLOYER_ROLES.includes(role) && vendorReview <= 1 && guardrails.ratio <= 0.55) {
    return 'People can adopt AI tools faster than your organization can review privacy, security, and contractual risk.'
  }
  if (guardrails.label === 'Managed' && risk.label !== 'High') {
    return 'Your control structure is mostly keeping pace with your current AI footprint.'
  }
  if (risk.label === 'Elevated' || risk.label === 'High') {
    return 'The combination of where AI shows up, what data it touches, and who it affects deserves tighter oversight.'
  }
  return 'You have a usable baseline, but a few targeted controls would make the program more defensible.'
}

function getPeerContext(answerMap, guardrails) {
  const entity = answerMap[1]
  const level = guardrails.label

  if (entity === 'solo') {
    if (level === 'Ad Hoc' || level === 'Patchy') {
      return 'This is a normal starting point for solo operators. The win is putting a few repeatable rules in place before client or customer pressure forces it.'
    }
    return "You're ahead of most solo operators. The next job is keeping your process simple enough that you actually keep using it."
  }

  if (entity === 'small-team') {
    if (level === 'Ad Hoc' || level === 'Patchy') {
      return 'Small teams usually hit the same wall: real AI usage appears before ownership, policy, and review exist.'
    }
    return 'You have more structure than most teams your size. The next step is proving it is repeatable, not just informal.'
  }

  if (entity === 'mid-size') {
    if (level === 'Ad Hoc' || level === 'Patchy') {
      return 'Mid-size companies in this range usually have real contract, privacy, and governance exposure even if they have not named it yet.'
    }
    return 'You have a baseline program. Tightening evidence, ownership, and release discipline is usually the next upgrade.'
  }

  if (entity === 'larger-org') {
    if (level === 'Ad Hoc' || level === 'Patchy') {
      return 'At this size, ad hoc AI use is usually a visibility problem before it is anything else. Inventory and reporting are the leverage points.'
    }
    return 'You have the shape of a formal program. The next risk is drift between policy and what teams actually ship or buy.'
  }

  return null
}

function getGaps(answerMap, readiness, guardrails) {
  const items = []
  const entity = answerMap[1]
  const role = answerMap[3]
  const useCases = answerMap[4] || []
  const dataScore = scoreOf(answerMap, 5)
  const decisionScore = scoreOf(answerMap, 6)
  const market = answerMap[7]
  const hasHighSens = useCases.some((value) => HIGH_SENSITIVITY_USES.includes(value))
  const hasCustomerFacing = useCases.includes('customer-support') || market === 'eu' || market === 'us-multi'

  if (entity === 'solo') {
    if (scoreOf(answerMap, 8) <= 1 && dataScore >= 1) {
      pushUnique(items, 'You do not yet have a written personal rule set for what can go into AI tools and when to stop using them.')
    }
    if (scoreOf(answerMap, 9) <= 1 && (hasCustomerFacing || dataScore >= 2)) {
      pushUnique(items, 'AI output review is still too informal for the visibility and data sensitivity in your work.')
    }
  } else {
    if (scoreOf(answerMap, 10) <= 1) {
      pushUnique(items, 'Team AI use is ahead of a written policy, intake path, and named ownership.')
    }
    if (scoreOf(answerMap, 11) <= 1) {
      pushUnique(items, 'People are using AI without practical training on what is allowed, what needs review, and what to escalate.')
    }
    if (scoreOf(answerMap, 14) <= 1) {
      pushUnique(items, 'You cannot quickly say which AI systems are in use, who owns them, and where they are used.')
    }
  }

  if (TEAM_ENTITIES.includes(entity) && DEPLOYER_ROLES.includes(role) && scoreOf(answerMap, 12) <= 1) {
    pushUnique(items, 'Third-party AI tools can enter workflows before privacy, security, contractual, and data-use checks happen.')
  }

  if (PROVIDER_ROLES.includes(role) && scoreOf(answerMap, 13) <= 1) {
    pushUnique(items, 'AI-enabled features or workflows can ship without a repeatable release review or evaluation gate.')
  }

  if (PROVIDER_ROLES.includes(role) && scoreOf(answerMap, 15) <= 1) {
    pushUnique(items, 'If an AI issue shows up in production, monitoring, escalation, and rollback are still too dependent on luck.')
  }

  if (decisionScore >= 2) {
    pushUnique(items, 'AI is influencing outcomes about people. That pushes human oversight, appeals, documentation, and disclosures to the front of the line.')
  }

  if (hasHighSens && guardrails.label === 'Ad Hoc') {
    pushUnique(items, 'Higher-sensitivity use cases are running with too little structure around them.')
  }

  if (dataScore >= 3 && guardrails.ratio <= 0.55) {
    pushUnique(items, 'Sensitive data is flowing through AI without enough documented control around tool choice, review, or monitoring.')
  }

  if (hasCustomerFacing && market !== 'internal-only') {
    pushUnique(items, 'Customer-facing AI almost always needs clearer user disclosure, escalation, or fallback paths than teams expect.')
  }

  if (market === 'eu' && scoreOf(answerMap, 11) <= 1 && entity !== 'solo') {
    pushUnique(items, 'EU or UK exposure raises the bar on literacy, documentation, and evidence. Your current operating rhythm will not be enough for long.')
  }

  return items.slice(0, 5)
}

function buildActionPlan(answerMap, readiness, guardrails, risk) {
  const doNow = []
  const next30 = []
  const later = []
  const entity = answerMap[1]
  const role = answerMap[3]
  const market = answerMap[7]
  const useCases = answerMap[4] || []
  const dataScore = scoreOf(answerMap, 5)
  const decisionScore = scoreOf(answerMap, 6)
  const hasCustomerFacing = useCases.includes('customer-support') || market === 'eu' || market === 'us-multi'
  const hasHighSens = useCases.some((value) => HIGH_SENSITIVITY_USES.includes(value))

  if (entity === 'solo') {
    if (scoreOf(answerMap, 8) <= 1) {
      pushUnique(doNow, 'Write a one-page personal AI rule set covering sensitive data, approved tools, review expectations, and stop-conditions.')
    }
    if (scoreOf(answerMap, 9) <= 1) {
      pushUnique(doNow, 'Use a repeatable output-review checklist for anything client-facing, public-facing, or high-risk.')
    }
  } else {
    if (scoreOf(answerMap, 10) <= 1) {
      pushUnique(doNow, 'Publish a written AI acceptable-use policy and give teams one intake / approval path for new AI use.')
    }
    if (scoreOf(answerMap, 11) <= 1) {
      pushUnique(next30, 'Run structured AI training so people know what is allowed, what needs review, and where to escalate questions.')
    }
    if (scoreOf(answerMap, 14) <= 1) {
      pushUnique(doNow, 'Build a current AI inventory with owners, purpose, affected users, and tool / model provenance.')
    }
  }

  if (TEAM_ENTITIES.includes(entity) && DEPLOYER_ROLES.includes(role) && scoreOf(answerMap, 12) <= 1) {
    pushUnique(doNow, 'Pause new vendor adoption until each AI tool passes a documented privacy, security, terms, and data-use review.')
  }

  if (PROVIDER_ROLES.includes(role) && scoreOf(answerMap, 13) <= 1) {
    pushUnique(doNow, 'Add a pre-release review for AI-enabled features: test cases, failure checks, human sign-off, and documented go / no-go criteria.')
  }

  if (PROVIDER_ROLES.includes(role) && scoreOf(answerMap, 15) <= 1) {
    pushUnique(next30, 'Create monitoring, logging, escalation, and rollback steps for AI incidents before the next launch or major model change.')
  }

  if (hasCustomerFacing || decisionScore >= 2) {
    pushUnique(doNow, 'Add user-facing disclosures and a human escalation path anywhere AI touches customer, applicant, or consumer outcomes.')
  }

  if (hasHighSens || dataScore >= 3 || decisionScore >= 3) {
    pushUnique(next30, 'Document one formal impact assessment for your highest-risk AI workflow and decide who approves it.')
  }

  if (market === 'eu') {
    pushUnique(next30, 'Map your current controls to EU-facing obligations around literacy, transparency, and higher-risk use.')
  }

  if (answerMap[2] === 'co' || answerMap[2] === 'ca' || answerMap[2] === 'tx') {
    pushUnique(later, 'Translate your baseline controls into the state-specific evidence you would need if questions come from regulators or customers.')
  }

  if (entity === 'larger-org' && scoreOf(answerMap, 16) <= 1) {
    pushUnique(next30, 'Set a standing leadership review cadence for AI usage, incidents, approvals, and major changes.')
  }

  if (guardrails.ratio > 0.55 && risk.score <= 8) {
    pushUnique(later, 'Move from one-time cleanup to recurring evidence: periodic vendor review, control testing, and documented updates as AI use expands.')
  } else {
    pushUnique(later, 'Once the baseline controls exist, tighten evidence so you can show what was approved, trained, reviewed, and changed over time.')
  }

  if (doNow.length < 2) {
    pushUnique(doNow, 'Name one accountable owner for AI policy, inventory, and exceptions so decisions stop getting diffused.')
  }
  if (next30.length < 2) {
    pushUnique(next30, 'Choose one framework to organize the program - NIST AI RMF is usually the cleanest starting point in the U.S.')
  }
  if (later.length < 2) {
    pushUnique(later, 'Review the highest-risk workflow again after one quarter and update your controls based on what actually happened in practice.')
  }

  return {
    doNow: doNow.slice(0, 3),
    next30: next30.slice(0, 3),
    later: later.slice(0, 3),
  }
}

function getApplicableFrameworks(answerMap, scoreMap, readiness, guardrails) {
  const frameworks = []
  const market = answerMap[7]
  const location = answerMap[2]
  const role = answerMap[3]
  const useCases = answerMap[4] || []

  if (readiness.score >= 2 || guardrails.ratio >= 0.2) {
    frameworks.push({
      name: 'NIST AI Risk Management Framework',
      slug: 'nist-ai-rmf',
      why: 'The cleanest U.S. baseline for organizing AI governance, vendor review, and risk-management work.',
      priority: guardrails.ratio <= 0.55 ? 'Start here' : 'Good reference',
    })
  }

  if (location === 'tx') {
    frameworks.push({
      name: 'Texas TRAIGA',
      slug: 'us-state-laws',
      why: 'Texas operations or customers mean the Responsible AI Governance Act belongs in your working set now.',
      priority: 'Applies to you',
    })
  }

  if (location === 'ca') {
    frameworks.push({
      name: 'California AI Laws',
      slug: 'us-state-laws',
      why: 'California exposure raises questions around transparency, training data, and customer-facing AI that deserve state-specific review.',
      priority: 'Applies to you',
    })
  }

  if (location === 'co') {
    frameworks.push({
      name: 'Colorado AI Act (SB24-205)',
      slug: 'us-state-laws',
      why: 'Colorado makes consequential-decision use cases and consumer notices much more concrete for deployers and developers.',
      priority: 'Applies to you',
    })
  }

  if (market === 'eu' || location === 'intl' || PROVIDER_ROLES.includes(role)) {
    frameworks.push({
      name: 'EU AI Act',
      slug: 'eu-ai-act',
      why: market === 'eu' || location === 'intl'
        ? 'EU or UK user exposure makes the EU AI Act and literacy requirements immediately relevant.'
        : 'Providers should track the EU AI Act early because it sets the documentation and oversight bar customers increasingly expect.',
      priority: market === 'eu' || location === 'intl' ? 'Applies to you' : 'On your radar',
    })
  }

  if (market === 'us-multi' || useCases.includes('hiring') || useCases.includes('customer-support') || scoreOf(answerMap, 6) >= 2) {
    frameworks.push({
      name: 'U.S. State AI Laws',
      slug: 'us-state-laws',
      why: 'Multi-state consumer, hiring, and customer-facing use tends to pull you into a patchwork of state-level AI rules.',
      priority: 'Worth reviewing',
    })
  }

  if (market === 'public-sector' || answerMap[1] === 'larger-org') {
    frameworks.push({
      name: 'Federal AI Policy & Executive Orders',
      slug: 'federal-policy',
      why: 'Government-adjacent work and larger organizations usually need to understand the federal posture even before it becomes contract language.',
      priority: 'Worth watching',
    })
  }

  if (useCases.includes('healthcare')) {
    frameworks.push({
      name: 'Healthcare AI Rules (HIPAA, FDA, HHS)',
      slug: 'sector-rules',
      why: 'Healthcare use cases quickly pull in privacy, medical-device, and clinical decision obligations.',
      priority: 'Sector-specific',
    })
  }

  if (useCases.includes('finance')) {
    frameworks.push({
      name: 'Financial Services AI Rules (FCRA, ECOA)',
      slug: 'sector-rules',
      why: 'Credit, lending, insurance, and pricing uses need a tighter discrimination, disclosure, and documentation posture.',
      priority: 'Sector-specific',
    })
  }

  if (useCases.includes('legal')) {
    frameworks.push({
      name: 'Legal & Compliance AI Considerations',
      slug: 'sector-rules',
      why: 'Legal workflows raise confidentiality, supervision, accuracy, and unauthorized-practice questions very quickly.',
      priority: 'Sector-specific',
    })
  }

  return frameworks.filter((framework, index, array) =>
    array.findIndex((candidate) => candidate.name === framework.name) === index
  )
}

function getRecommendedReading(answerMap, scoreMap, readiness, guardrails) {
  const readings = []
  const market = answerMap[7]
  const entity = answerMap[1]
  const role = answerMap[3]
  const useCases = answerMap[4] || []

  if (PROVIDER_ROLES.includes(role)) {
    readings.push({
      title: 'AI Compliance for Startups: Where to Start When Resources Are Limited',
      href: '/blog/ai-compliance-startups',
      reason: 'Good starting point when you build AI features but do not yet have a heavyweight program.',
    })
  }

  if (PROVIDER_ROLES.includes(role) && market === 'eu') {
    readings.push({
      title: 'The GPAI Code of Practice: What AI Model Providers Need to Know',
      href: '/blog/gpai-code-of-practice',
      reason: 'Useful context if provider obligations and upstream model responsibilities may touch you.',
    })
  }

  if (TEAM_ENTITIES.includes(entity) && scoreOf(answerMap, 11) <= 1) {
    readings.push({
      title: "The EU AI Act's AI Literacy Requirement: What It Actually Means",
      href: '/blog/ai-literacy-requirement',
      reason: 'Practical framing for what useful AI training looks like.',
    })
  }

  if (TEAM_ENTITIES.includes(entity) && DEPLOYER_ROLES.includes(role) && scoreOf(answerMap, 12) <= 1) {
    readings.push({
      title: 'AI Vendor Due Diligence: 10 Questions to Ask Before You Buy',
      href: '/blog/ai-vendor-due-diligence',
      reason: 'Best match for vendor-review gaps.',
    })
  }

  if (guardrails.ratio <= 0.45 && entity !== 'solo') {
    readings.push({
      title: 'The Minimum Viable AI Guardrails for a Small Team',
      href: '/blog/minimum-viable-guardrails',
      reason: 'A lean way to get out of ad hoc mode without building an enterprise bureaucracy.',
    })
  }

  if (market === 'eu' || useCases.some((value) => HIGH_SENSITIVITY_USES.includes(value))) {
    readings.push({
      title: 'The EU AI Act Risk Classification: What You Actually Need to Know',
      href: '/blog/eu-ai-act-risk-classification',
      reason: 'Helpful for understanding which use cases move from ordinary governance into higher-risk territory.',
    })
  }

  if (answerMap[2] === 'tx') {
    readings.push({
      title: 'Texas TRAIGA in Effect: What the Responsible AI Governance Act Actually Requires',
      href: '/blog/texas-traiga-guide',
      reason: 'Texas-specific context for your operating environment.',
    })
  }

  if (answerMap[2] === 'ca') {
    readings.push({
      title: "California's TFAIA Explained: What the Frontier AI Transparency Act Actually Requires",
      href: '/blog/california-tfaia-explained',
      reason: 'California-specific context for your operating environment.',
    })
  }

  if (answerMap[2] === 'co') {
    readings.push({
      title: "Colorado's AI Act Takes Effect June 30: What Developers and Deployers Need to Do Now",
      href: '/blog/colorado-ai-act-countdown',
      reason: 'Colorado-specific context for your operating environment.',
    })
  }

  if (scoreOf(answerMap, 15) <= 1 && PROVIDER_ROLES.includes(role)) {
    readings.push({
      title: 'When AI Goes Wrong: Building an AI Incident Response Plan',
      href: '/blog/ai-incident-response',
      reason: 'Best match for monitoring and incident-response gaps.',
    })
  }

  if (readings.length < 4) {
    const fallbacks = [
      {
        title: 'What to Put in an AI Use Policy (Even If It\'s Just One Page)',
        href: '/blog/ai-use-policy-starter',
        reason: 'Policy basics without unnecessary overhead.',
      },
      {
        title: 'NIST AI RMF in Practice: From Framework to Action Plan',
        href: '/blog/nist-ai-rmf-practice',
        reason: 'A practical path from framework language to an actual operating rhythm.',
      },
      {
        title: 'Shadow AI Is Your Biggest Compliance Risk (And How to Fix It)',
        href: '/blog/shadow-ai-compliance',
        reason: 'Relevant whenever AI adoption is ahead of visibility.',
      },
    ]

    for (const fallback of fallbacks) {
      if (readings.length >= 4) break
      if (!readings.some((reading) => reading.href === fallback.href)) readings.push(fallback)
    }
  }

  return readings.slice(0, 4)
}

function getProductRecommendations(answerMap, readiness, guardrails, risk) {
  const candidates = []
  const role = answerMap[3]
  const entity = answerMap[1]
  const location = answerMap[2]
  const market = answerMap[7]
  const priority = answerMap[17]
  const dataScore = scoreOf(answerMap, 5)
  const decisionScore = scoreOf(answerMap, 6)
  const useCases = answerMap[4] || []
  const hasHighSens = useCases.some((value) => HIGH_SENSITIVITY_USES.includes(value))
  const hasCustomerFacing = useCases.includes('customer-support') || market === 'eu' || market === 'us-multi'

  function addCandidate(key, score) {
    if (score > 0) candidates.push({ key, score, order: candidates.length })
  }

  addCandidate(
    'governanceStarter',
    (guardrails.ratio <= 0.45 ? 4 : 0) +
      (scoreOf(answerMap, 10) <= 1 ? 2 : 0) +
      (scoreOf(answerMap, 11) <= 1 ? 1 : 0) +
      ((priority === 'policy' || priority === 'training') ? 2 : 0)
  )

  addCandidate(
    'vendorReview',
    (TEAM_ENTITIES.includes(entity) && DEPLOYER_ROLES.includes(role) && scoreOf(answerMap, 12) <= 1 ? 4 : 0) +
      (DEPLOYER_ROLES.includes(role) && dataScore >= 2 ? 1 : 0) +
      (priority === 'vendor' ? 2 : 0)
  )

  addCandidate(
    'providerAssurance',
    (PROVIDER_ROLES.includes(role) && scoreOf(answerMap, 13) <= 1 ? 3 : 0) +
      (PROVIDER_ROLES.includes(role) && scoreOf(answerMap, 15) <= 1 ? 3 : 0) +
      (PROVIDER_ROLES.includes(role) && scoreOf(answerMap, 14) <= 1 ? 1 : 0) +
      (priority === 'provider' ? 2 : 0)
  )

  addCandidate(
    'disclosure',
    (hasCustomerFacing ? 3 : 0) +
      (decisionScore >= 2 ? 2 : 0) +
      ((market === 'eu' || priority === 'disclosure') ? 2 : 0)
  )

  addCandidate(
    'impactOversight',
    (hasHighSens ? 3 : 0) +
      (dataScore >= 3 ? 2 : 0) +
      (decisionScore >= 3 ? 3 : 0) +
      ((priority === 'impact' || risk.score >= 10) ? 2 : 0)
  )

  addCandidate(
    'founderTrack',
    ((entity === 'solo' || entity === 'small-team') ? 1 : 0) +
      ((priority === 'understand' || priority === 'pilot') ? 2 : 0) +
      (guardrails.ratio <= 0.45 ? 1 : 0)
  )

  if (location === 'co') {
    addCandidate('coloradoKit', (hasCustomerFacing || decisionScore >= 2 || risk.score >= 9 ? 4 : 2))
  }
  if (location === 'ca') {
    addCandidate('californiaKit', (market !== 'internal-only' || PROVIDER_ROLES.includes(role) ? 3 : 1))
  }
  if (location === 'tx') {
    addCandidate('texasKit', (market !== 'internal-only' || risk.score >= 8 ? 3 : 1))
  }

  const ranked = candidates
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .filter((candidate, index, array) => array.findIndex((entry) => entry.key === candidate.key) === index)
    .slice(0, 3)

  if (ranked.length === 0) ranked.push({ key: 'governanceStarter', score: 1 })

  return ranked
    .map((candidate, index) =>
      createOffer(
        candidate.key,
        answerMap,
        index === 0 ? 'Start here' : index === 1 ? 'Next best fit' : 'Also consider'
      )
    )
    .filter(Boolean)
}

function buildShortTrackActionPlan(answerMap) {
  const doNow = []
  const next30 = []
  const later = []
  const entity = answerMap[1]
  const market = answerMap[7]

  pushUnique(doNow, 'Choose one workflow where better speed, accuracy, or consistency would matter enough to measure.')
  pushUnique(doNow, 'Write a short rule set before adoption starts: what data can go into AI, who reviews output, and which tools are off-limits.')
  if (entity !== 'solo') {
    pushUnique(doNow, 'Name one owner for pilots so approvals, vendor checks, and follow-up do not get diffused.')
  }

  pushUnique(next30, 'Pilot one tool or use case with a success metric instead of opening the door to broad, informal experimentation.')
  pushUnique(next30, 'Build a starter inventory from day one so you know which tools, models, and teams are involved.')
  if (market === 'eu' || market === 'us-multi' || market === 'public-sector') {
    pushUnique(next30, 'Check the rules for the markets you plan to serve before the first customer-facing rollout.')
  }

  pushUnique(later, 'Once the pilot works, add training, vendor review, and escalation paths before usage spreads across the organization.')
  pushUnique(later, 'Review the pilot after 30-60 days and decide whether to scale it, pause it, or replace it.')

  return {
    doNow: doNow.slice(0, 3),
    next30: next30.slice(0, 3),
    later: later.slice(0, 3),
  }
}

function buildShortTrackRecommendations(answerMap) {
  const location = answerMap[2]
  const entity = answerMap[1]
  const priority = answerMap[17]
  const offers = []

  if (entity === 'solo' || entity === 'small-team' || priority === 'pilot') {
    pushUnique(offers, createOffer('founderTrack', answerMap, 'Start here'))
  }

  pushUnique(
    offers,
    createOffer(
      'governanceStarter',
      answerMap,
      offers.length === 0 ? 'Start here' : 'Next best fit'
    )
  )

  if (location === 'co') pushUnique(offers, createOffer('coloradoKit', answerMap, 'State-specific'))
  if (location === 'ca') pushUnique(offers, createOffer('californiaKit', answerMap, 'State-specific'))
  if (location === 'tx') pushUnique(offers, createOffer('texasKit', answerMap, 'State-specific'))

  return offers.filter(Boolean).slice(0, 3)
}

function buildShortTrackReading(answerMap) {
  const readings = [
    {
      title: 'How to Evaluate an AI Tool Before You Commit',
      href: '/blog/evaluating-ai-tools',
      reason: 'A good starting point before you buy or standardize on anything.',
    },
    {
      title: 'What to Put in an AI Use Policy (Even If It\'s Just One Page)',
      href: '/blog/ai-use-policy-starter',
      reason: 'The cleanest way to set guardrails before habits form.',
    },
  ]

  if (answerMap[1] === 'solo') {
    readings.unshift({
      title: 'AI for Side Projects: Where to Start Without Overthinking It',
      href: '/blog/ai-side-projects',
      reason: 'A practical guide for solo builders and operators.',
    })
  } else {
    readings.unshift({
      title: 'AI Compliance for Startups: Where to Start When Resources Are Limited',
      href: '/blog/ai-compliance-startups',
      reason: 'Useful if you need a realistic first operating model, not an enterprise fantasy.',
    })
  }

  if (answerMap[7] === 'eu') {
    readings.push({
      title: 'The EU AI Act Risk Classification: What You Actually Need to Know',
      href: '/blog/eu-ai-act-risk-classification',
      reason: 'Worth understanding before anything customer-facing touches EU users.',
    })
  }

  return readings.slice(0, 4)
}

function buildShortTrackReport(answerMap) {
  const entity = entityLabel(answerMap[1])
  const location = locationPhrase(answerMap[2], 'in')
  const market = marketPhrase(answerMap[7])
  const recommendations = buildShortTrackRecommendations(answerMap)
  const [primaryRecommendation, ...secondaryRecommendations] = recommendations

  return {
    shortTrack: true,
    whoYouAre: `You're a ${entity}${location ? ` ${location}` : ''}, not using AI yet.`,
    summary: 'You are early enough to put sane rules, ownership, and tool-selection discipline in place before AI habits calcify.',
    actionPlan: buildShortTrackActionPlan(answerMap),
    recommendedReading: buildShortTrackReading(answerMap),
    productRecommendations: recommendations,
    primaryRecommendation,
    secondaryRecommendations,
    marketContext: market,
    answerMap,
    generatedAt: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}

export function isShortTrack(answerMap) {
  return answerMap && answerMap[3] === 'not-yet'
}

export function getApplicableQuestions(answerMap) {
  return QUESTIONS.filter((question) => !question.appliesTo || question.appliesTo(answerMap))
}

export function getAssessmentReport(answers) {
  const answerMap = buildAnswerMap(answers)
  const scoreMap = buildScoreMap(answers)

  if (isShortTrack(answerMap)) {
    return buildShortTrackReport(answerMap)
  }

  const readiness = calcReadiness(answerMap)
  const guardrails = calcGuardrails(answerMap, scoreMap)
  const risk = calcRisk(answerMap, scoreMap, guardrails)
  const preparedness = calcPreparedness(guardrails, risk)
  const productRecommendations = getProductRecommendations(answerMap, readiness, guardrails, risk)
  const [primaryRecommendation, ...secondaryRecommendations] = productRecommendations

  return {
    shortTrack: false,
    whoYouAre: buildWhoYouAre(answerMap),
    summary: buildSummary(answerMap, readiness, guardrails, risk),
    preparedness,
    readiness,
    guardrails,
    risk,
    peerContext: getPeerContext(answerMap, guardrails),
    gaps: getGaps(answerMap, readiness, guardrails),
    actionPlan: buildActionPlan(answerMap, readiness, guardrails, risk),
    primaryRecommendation,
    secondaryRecommendations,
    productRecommendations,
    frameworks: getApplicableFrameworks(answerMap, scoreMap, readiness, guardrails),
    recommendedReading: getRecommendedReading(answerMap, scoreMap, readiness, guardrails),
    answerMap,
    generatedAt: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
