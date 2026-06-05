export const firstAiPolicyForNewBusiness = {
  slug: 'first-ai-policy-for-new-business',
  title: 'Your First AI Policy for a New Business: What to Write Before It Gets Messy',
  description:
    'A practical founder-focused guide to writing the first AI policy for a new business, covering tool approval, sensitive data, human review, and updates.',
  category: 'Practical Guide',
  categorySlug: null,
  date: '2026-06-05',
  displayDate: 'June 5, 2026',
  readTime: '8 min read',
  featured: false,
  relatedRegulations: ['nist-ai-rmf'],

  sections: [
    {
      title: null,
      content:
        'A new business does not need to start with a 90-page AI governance manual. It does need a written answer to a few basic questions before AI use becomes invisible: which tools are allowed, what data stays out, when a human has to review the output, and who updates the rules when things change.\n\nThat first policy can be short. A one-page policy that people actually read is better than a formal document nobody opens. If you want the shorter landing-page version, start with the [AI policy template for small business owners](/ai-policy-template-small-business). This article gives the deeper working version.',
    },
    {
      title: 'Start With What Is Already Happening',
      content:
        'Most founders do not introduce AI through a clean procurement process. It usually starts with ChatGPT for drafting, Claude for summarizing, Copilot for code, a transcription tool for meetings, AI features inside a CRM, or image generation for marketing.\n\nThat is normal. The mistake is pretending those tools are not part of the business yet. Your first policy should begin with a simple inventory: what tools are being used, who uses them, what work they support, and whether any customer, client, employee, student, financial, health, legal, or confidential information touches the tool.',
    },
    {
      title: 'The Five Rules Your First Policy Needs',
      content:
        'A first AI policy should be plain enough that a contractor, assistant, or new employee can understand it in a few minutes. Cover these five rules first.',
      list: [
        '**Approved tools:** name the tools and account types that are allowed for work use.',
        '**Prohibited data:** define the information that should not be pasted, uploaded, summarized, or processed through AI tools without review.',
        '**Human review:** require review before AI output is used externally or relied on for important decisions.',
        '**Escalation:** tell people where to ask before trying a new tool, plugin, browser extension, or higher-risk workflow.',
        '**Updates:** assign an owner and cadence for revisiting tools, vendors, prompts, models, workflows, and policy language.',
      ],
    },
    {
      title: 'Do Not Make the First Version Too Broad',
      content:
        'A common failure mode is trying to solve every AI risk in one document. That usually creates vague language and no operating process.\n\nKeep the first version focused on behavior. What should someone do before they put data into an AI tool? What should they do before sending AI-assisted work to a customer? What should they do when a vendor adds a new AI feature? What should they do if the output seems wrong, biased, unsafe, confidential, or out of scope?',
    },
    {
      title: 'A Practical Starter Structure',
      content:
        'Here is a structure that works for a very small business or solo founder preparing to hire contractors or staff.',
      table: {
        headers: ['Section', 'What it should answer'],
        rows: [
          ['Purpose', 'Why the business uses AI and why written rules exist.'],
          ['Approved tools', 'Which tools are allowed and whether personal accounts are permitted.'],
          ['Data rules', 'What information is never allowed in AI tools without review.'],
          ['Output review', 'When AI-assisted work must be checked before use.'],
          ['Prohibited uses', 'Uses that are off-limits or require leadership/legal review.'],
          ['New tool review', 'How to ask before adopting a new AI tool or vendor feature.'],
          ['Owner and updates', 'Who maintains the policy and how often it is reviewed.'],
        ],
      },
    },
    {
      title: 'What to Do After the Policy Exists',
      content:
        'The policy is only one part of the file. Pair it with an AI use inventory, a first-pass risk intake form, and an update tracker. Otherwise the policy becomes a static PDF while the business keeps adding new tools.\n\nThe [AI Governance Starter Kit](/catalog/ai-governance-starter-kit) is built for that first operating file: inventory, acceptable use policy, intake and impact assessment, readiness checklist, setup plan, risk tiering, risk register, review notes, rollout message, and update tracking in editable formats.',
    },
  ],

  takeaways: [
    'A first AI policy should answer tool approval, data rules, human review, escalation, and update ownership.',
    'Start from actual AI use, not an abstract policy wish list.',
    'A short policy people can follow is better than a long policy nobody uses.',
    'Pair the policy with an inventory and update tracker so it stays connected to real tools and workflows.',
  ],

  sources: [
    {
      title: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    },
  ],
}
