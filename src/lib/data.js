export const REGULATIONS = [
  {
    id: 'eu-ai-act',
    title: 'EU AI Act',
    desc: "The world's first comprehensive AI law. Classification-based requirements for AI systems by risk level.",
    tag: 'In Effect',
    icon: '\u{1F1EA}\u{1F1FA}',
  },
  {
    id: 'nist-rmf',
    title: 'NIST AI RMF',
    desc: 'Voluntary U.S. framework for managing AI risks across the lifecycle. Increasingly referenced in policy.',
    tag: 'Framework',
    icon: '\u{1F3DB}\u{FE0F}',
  },
  {
    id: 'state-laws',
    title: 'U.S. State AI Laws',
    desc: 'A patchwork of state-level requirements from Colorado, Illinois, Texas, California, and more.',
    tag: 'Evolving',
    icon: '\u{2696}\u{FE0F}',
  },
  {
    id: 'exec-orders',
    title: 'Executive Orders & Federal Policy',
    desc: 'Federal AI directives, OMB guidance, and agency-specific requirements for AI procurement and use.',
    tag: 'Active',
    icon: '\u{1F4DC}',
  },
  {
    id: 'sector',
    title: 'Sector-Specific Rules',
    desc: 'HIPAA, FCRA, ECOA, SEC guidance \u2014 existing laws being applied to AI in healthcare, finance, and hiring.',
    tag: 'Cross-Cutting',
    icon: '\u{1F3E5}',
  },
  {
    id: 'global',
    title: 'Global AI Governance',
    desc: "Canada's AIDA, China's AI regulations, UK's pro-innovation approach, and international standards.",
    tag: 'Expanding',
    icon: '\u{1F310}',
  },
]

export const BLOG_POSTS = [
  {
    title: 'The EU AI Act Risk Classification: What You Actually Need to Know',
    category: 'EU AI Act',
    date: 'Mar 2026',
    readTime: '8 min read',
    excerpt:
      "The EU AI Act sorts AI systems into four risk tiers \u2014 but the details of what triggers 'high-risk' classification trip up most organizations. Here's the practical breakdown.",
    featured: true,
  },
  {
    title: '5 U.S. States Now Regulate AI in Hiring \u2014 Is Yours Next?',
    category: 'State Laws',
    date: 'Mar 2026',
    readTime: '6 min read',
    excerpt:
      "Colorado, Illinois, and others have passed laws governing automated employment decisions. A quick guide to what each requires and who's affected.",
    featured: false,
  },
  {
    title: 'Shadow AI Is Your Biggest Compliance Risk (And How to Fix It)',
    category: 'Governance',
    date: 'Feb 2026',
    readTime: '5 min read',
    excerpt:
      "Your employees are already using ChatGPT, Claude, and Copilot \u2014 whether you know it or not. Here's why that's a compliance problem and what to do about it.",
    featured: false,
  },
  {
    title: 'NIST AI RMF in Practice: From Framework to Action Plan',
    category: 'NIST',
    date: 'Feb 2026',
    readTime: '10 min read',
    excerpt:
      "NIST's AI Risk Management Framework is voluntary \u2014 but it's becoming the de facto standard. A step-by-step guide to actually implementing it.",
    featured: false,
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Who needs to worry about AI compliance?',
    a: "Any organization that develops, deploys, or uses AI systems \u2014 including off-the-shelf tools like ChatGPT or Copilot. If AI influences decisions about people (hiring, lending, healthcare, benefits), your compliance obligations are significantly higher. Even companies 'just using' third-party AI tools can face liability.",
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
    q: 'Where should a company start with AI compliance?',
    a: 'Start with an inventory: what AI systems do you use, what data do they process, and what decisions do they influence? Then map those systems against the regulations that apply to your industry and geography. Our free Risk Assessment tool above gives you a quick starting point.',
  },
  {
    q: 'Is there a single standard that covers everything?',
    a: 'Not yet. AI regulation is fragmented across jurisdictions and sectors. The NIST AI Risk Management Framework is the closest thing to a universal baseline, but it\'s voluntary. Most organizations need to comply with multiple overlapping frameworks \u2014 which is exactly the problem AIRegReady is built to help solve.',
  },
  {
    q: 'How fast is the regulatory landscape changing?',
    a: 'Extremely fast. New AI laws, amendments, and enforcement actions are appearing monthly. In 2025\u20132026 alone, dozens of U.S. states introduced AI-related legislation, the EU AI Act entered enforcement phases, and multiple federal agencies issued new AI guidance. Staying current is a real challenge \u2014 and a core reason this resource exists.',
  },
]

export const QUESTIONS = [
  {
    id: 1,
    text: 'Does your organization develop or deploy AI systems?',
    options: [
      { label: 'Yes \u2014 we build AI systems', value: 'develop', risk: 3 },
      { label: 'Yes \u2014 we use third-party AI tools', value: 'deploy', risk: 2 },
      { label: 'Both \u2014 we build and use AI', value: 'both', risk: 4 },
      { label: 'Exploring / planning to adopt', value: 'exploring', risk: 1 },
    ],
  },
  {
    id: 2,
    text: 'What industry does your organization primarily operate in?',
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
    text: 'Does your AI make or influence decisions about people?',
    options: [
      { label: 'Yes \u2014 hiring, lending, insurance, or benefits', value: 'high-impact', risk: 5 },
      { label: 'Yes \u2014 content recommendations or personalization', value: 'moderate', risk: 3 },
      { label: 'No \u2014 internal operations only', value: 'internal', risk: 1 },
      { label: 'Not sure', value: 'unsure', risk: 3 },
    ],
  },
  {
    id: 4,
    text: 'Do you process personal data from EU residents?',
    options: [
      { label: 'Yes', value: 'yes', risk: 4 },
      { label: 'No', value: 'no', risk: 0 },
      { label: 'Not sure', value: 'unsure', risk: 2 },
    ],
  },
  {
    id: 5,
    text: 'How would you describe your current AI governance posture?',
    options: [
      { label: 'We have documented AI policies and oversight', value: 'mature', risk: 0 },
      { label: 'We have informal practices but nothing documented', value: 'developing', risk: 2 },
      { label: "We haven't started thinking about this", value: 'none', risk: 4 },
      { label: "We're not sure what's needed", value: 'unsure', risk: 3 },
    ],
  },
  {
    id: 6,
    text: 'Does your organization operate across multiple states or countries?',
    options: [
      { label: 'Multiple countries', value: 'international', risk: 4 },
      { label: 'Multiple U.S. states', value: 'multi-state', risk: 3 },
      { label: 'Single state only', value: 'single', risk: 1 },
    ],
  },
  {
    id: 7,
    text: 'Are you using generative AI (ChatGPT, Claude, Copilot, etc.)?',
    options: [
      { label: 'Yes \u2014 widely across the organization', value: 'wide', risk: 4 },
      { label: 'Yes \u2014 limited or pilot use', value: 'limited', risk: 2 },
      { label: 'No', value: 'no', risk: 0 },
      { label: 'Employees may be using it unofficially', value: 'shadow', risk: 5 },
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
      'Your AI compliance risk exposure appears relatively limited. Focus on building foundational policies and monitoring the regulatory landscape.'
  } else if (pct <= 55) {
    level = 'MODERATE'
    color = '#fbbf24'
    summary =
      'You face meaningful compliance obligations across several frameworks. Prioritize documenting your AI practices and assessing high-risk use cases.'
  } else if (pct <= 75) {
    level = 'HIGH'
    color = '#fb923c'
    summary =
      'Your organization has significant regulatory exposure. Immediate action on governance frameworks and compliance documentation is advisable.'
  } else {
    level = 'CRITICAL'
    color = '#f87171'
    summary =
      'Your risk profile indicates substantial, multi-jurisdictional compliance obligations. Comprehensive AI governance should be a top organizational priority.'
  }

  return { pct, level, color, regulations, summary }
}
