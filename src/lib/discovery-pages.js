export const discoveryPages = [
  {
    slug: 'ai-policy-template-small-business',
    eyebrow: 'AI policy template',
    title: 'AI Policy Template for Small Business Owners',
    description:
      'A practical guide to the written AI rules a founder, new business owner, consultant, or lean team should put in place before AI use spreads.',
    searchIntent:
      'You need a simple AI policy template for a small business, but you do not want a dense legal manual or a generic prompt response.',
    intro:
      'A useful AI policy does not have to be long. It needs to say which tools are approved, what data stays out of AI systems, when human review is required, and who owns updates when tools or workflows change.',
    checklistTitle: 'A basic AI policy should cover',
    checklist: [
      'Approved and prohibited AI tools',
      'Sensitive data that staff should not enter into AI systems',
      'Human review rules for customer-facing, financial, hiring, legal, health, or safety-related outputs',
      'Disclosure and escalation expectations when AI materially affects work product',
      'A staff acknowledgment path so the policy is actually distributed',
      'An update cadence for new tools, vendor changes, model changes, and new workflows',
    ],
    firstHour: [
      'List the AI tools already in use, including free accounts and built-in vendor features.',
      'Mark the tools that touch customer, employee, student, client, financial, health, or confidential data.',
      'Write three immediate rules: approved tools, prohibited data, and human review before external use.',
      'Assign one owner to keep the policy and tool list current.',
    ],
    kitFit:
      'The AI Governance Starter Kit includes an editable acceptable use policy, AI use inventory, tool approval checklist, rollout message, and update tracker so you can turn the policy into a working file.',
    related: [
      ['Free AI readiness checklist', '/checklist'],
      ['AI Governance Starter Kit', '/catalog/ai-governance-starter-kit'],
      ['First AI policy article', '/blog/first-ai-policy-for-new-business'],
      ['Acceptable Use Policy Kit preview', '/catalog/acceptable-use-policy-kit'],
    ],
    faq: [
      ['Can I use this as legal advice?', 'No. This is educational guidance for organizing internal rules. Have qualified counsel review legal obligations for your business, industry, and jurisdictions.'],
      ['How long should a first AI policy be?', 'For a very small business, a short policy is often more useful than a long manual. The first version should be clear enough that staff know which tools, data, outputs, and escalations are allowed.'],
    ],
  },
  {
    slug: 'chatgpt-policy-for-employees',
    eyebrow: 'Employee AI rules',
    title: 'ChatGPT Policy for Employees and Contractors',
    description:
      'Create practical employee rules for ChatGPT, Claude, Gemini, Copilot, and other AI tools without pretending a template guarantees compliance.',
    searchIntent:
      'You need staff-facing AI rules that explain what employees and contractors can do with generative AI tools at work.',
    intro:
      'Employee AI rules should be simple enough to follow during normal work. The goal is to prevent risky data sharing, unsupported reliance on AI outputs, unclear ownership, and scattered tool adoption.',
    checklistTitle: 'Employee AI rules should say',
    checklist: [
      'Which AI tools are approved for work use',
      'Which accounts, plugins, browser extensions, and vendor AI features require review first',
      'What confidential, customer, employee, student, financial, health, legal, or regulated data is off-limits',
      'When AI output must be fact-checked, edited, approved, or escalated',
      'How staff should label or disclose AI-assisted work when required by policy, contract, or context',
      'Where employees should send questions about a new tool or use case',
    ],
    firstHour: [
      'Write a one-page staff rule summary before drafting a longer policy.',
      'Separate low-risk brainstorming from higher-risk decisions about people, money, rights, services, or safety.',
      'Create a single intake path for new AI tools and material workflow changes.',
      'Send the rules with a short acknowledgment request so you have a record of distribution.',
    ],
    kitFit:
      'The Starter Kit includes staff-facing acceptable use language, a team rollout message, an approval mini-checklist, and a change tracker for new tools and workflows.',
    related: [
      ['AI acceptable use policy preview', '/catalog/acceptable-use-policy-kit'],
      ['AI Governance Starter Kit', '/catalog/ai-governance-starter-kit'],
      ['Free AI readiness checklist', '/checklist'],
    ],
    faq: [
      ['Should contractors be covered too?', 'Usually yes if they use your systems, customer information, business data, or work product. The exact contract language should be reviewed by qualified counsel.'],
      ['Do we need to ban all free AI tools?', 'Not always. A practical policy can allow low-risk use while restricting sensitive data, customer-facing outputs, and unreviewed vendor tools.'],
    ],
  },
  {
    slug: 'ai-use-inventory-template',
    eyebrow: 'AI inventory template',
    title: 'AI Use Inventory Template',
    description:
      'Build a working inventory of AI tools, owners, data use, risk tier, approval status, and review cadence before your AI stack becomes invisible.',
    searchIntent:
      'You need to know which AI tools are already being used, who owns them, and which ones deserve a closer review.',
    intro:
      'An AI inventory is the first governance file because it turns scattered AI use into something visible. Without it, policies, risk reviews, and vendor questions stay theoretical.',
    checklistTitle: 'Track these fields first',
    checklist: [
      'Tool or vendor name',
      'Business owner and regular users',
      'Workflow or task supported by the AI tool',
      'Data categories entered, uploaded, generated, or stored',
      'Customer-facing, internal-only, or decision-support status',
      'Risk tier, approval status, and next review date',
    ],
    firstHour: [
      'Start with the tools you already know: ChatGPT, Claude, Gemini, Copilot, transcription tools, support bots, CRM AI, and design or coding assistants.',
      'Ask where staff have used personal accounts or free trials for work tasks.',
      'Flag any tool that touches sensitive, regulated, confidential, customer, or employee data.',
      'Pick a review cadence for the highest-risk tools first.',
    ],
    kitFit:
      'The Starter Kit includes an editable AI Use Inventory plus risk tiering, a tool approval mini-checklist, and an update tracker so the inventory becomes a maintained operating record.',
    related: [
      ['AI Governance Starter Kit', '/catalog/ai-governance-starter-kit'],
      ['How to make an AI use inventory', '/blog/how-to-make-ai-use-inventory'],
      ['Free AI readiness checklist', '/checklist'],
    ],
    faq: [
      ['Is an AI inventory only for companies with employees?', 'No. Solo founders and consultants also benefit because vendor AI features, client data, and customer-facing workflows can spread quickly.'],
      ['How often should the inventory be updated?', 'Quarterly is a reasonable starting habit for many small organizations, with immediate updates when a new tool, vendor, model, or high-risk workflow is added.'],
    ],
  },
  {
    slug: 'ai-risk-assessment-template',
    eyebrow: 'AI risk assessment',
    title: 'AI Risk Assessment Template for New Tools and Workflows',
    description:
      'Use a first-pass AI risk assessment to review proposed AI tools, data use, decisions, oversight, vendor issues, and follow-up actions.',
    searchIntent:
      'You need a lightweight way to decide whether an AI tool or workflow is low risk, needs guardrails, or needs deeper review.',
    intro:
      'A first-pass AI risk assessment should not try to answer every legal question. It should surface the right facts: what the system does, what data it uses, who is affected, where humans review the output, and what could go wrong.',
    checklistTitle: 'A first-pass assessment should ask',
    checklist: [
      'What tool, model, vendor, or workflow is being proposed?',
      'What business purpose does it support?',
      'What data goes in, what output comes out, and where records are stored?',
      'Could it affect access to jobs, credit, housing, education, healthcare, insurance, public services, or other important opportunities?',
      'What human review, testing, logging, and escalation steps exist?',
      'What follow-up is needed from legal, privacy, security, HR, procurement, or leadership?',
    ],
    firstHour: [
      'Pick one real workflow instead of reviewing AI in the abstract.',
      'Describe the workflow in plain English, including users, affected people, data, output, and final decision maker.',
      'Classify it as green, yellow, or red based on impact and sensitivity.',
      'Record one decision: approve, approve with guardrails, pause, or send for deeper review.',
    ],
    kitFit:
      'The Starter Kit includes a risk intake and impact assessment, green/yellow/red use rules, a risk tiering decision tree, risk register, and risk review notes for first-pass documentation.',
    related: [
      ['AI Governance Starter Kit', '/catalog/ai-governance-starter-kit'],
      ['First-pass AI risk assessment article', '/blog/first-pass-ai-risk-assessment'],
      ['Advanced AI Risk Assessment Toolkit preview', '/catalog/ai-risk-assessment-toolkit'],
    ],
    faq: [
      ['Is this the same as a formal impact assessment?', 'No. This is a first-pass internal review structure. Higher-risk, regulated, consequential, or contract-sensitive uses may need a more formal process and qualified review.'],
      ['Should every AI tool get the same review?', 'No. Low-risk internal drafting may need lightweight rules, while tools affecting people, sensitive data, or important decisions deserve deeper review.'],
    ],
  },
  {
    slug: 'ai-governance-checklist',
    eyebrow: 'AI governance checklist',
    title: 'AI Governance Checklist for a New Business',
    description:
      'A practical AI governance checklist for founders, consultants, and new business owners who need inventory, policy, risk, vendor, and update habits.',
    searchIntent:
      'You want to get your AI use organized without building an enterprise governance program from scratch.',
    intro:
      'For a new business, AI governance starts with a few visible records and repeatable decisions. The point is to know what you use, set rules before mistakes happen, review higher-risk workflows, and keep the file current.',
    checklistTitle: 'Minimum viable AI governance includes',
    checklist: [
      'An AI use inventory',
      'A short acceptable use policy',
      'A first-pass risk intake form for new tools and material workflow changes',
      'A green/yellow/red rule set for low, medium, and high-risk AI use',
      'A basic vendor review habit for AI tools that touch important data or workflows',
      'An update tracker for model, prompt, workflow, vendor, and policy changes',
    ],
    firstHour: [
      'Open the free readiness checklist and mark what already exists.',
      'Create a starter inventory with every AI tool or vendor AI feature currently used.',
      'Write immediate rules for sensitive data and human review.',
      'Choose one higher-risk workflow to assess before expanding AI use further.',
    ],
    kitFit:
      'The Starter Kit is built for this exact stage: it combines governance basics with first-pass risk assessment tools so a founder, consultant, or lean team can create a working AI documentation packet.',
    related: [
      ['Free AI readiness checklist', '/checklist'],
      ['AI Governance Starter Kit', '/catalog/ai-governance-starter-kit'],
      ['First-pass risk assessment article', '/blog/first-pass-ai-risk-assessment'],
    ],
    faq: [
      ['Do new businesses need AI governance?', 'If AI tools touch customer data, client work, employee tasks, vendor systems, public content, or important decisions, basic governance records are useful even before the business is large.'],
      ['What should I do before buying a template packet?', 'Use the free checklist to identify gaps. If you are missing inventory, policy, risk intake, tiering, and update records, the Starter Kit is designed to fill those first files.'],
    ],
  },
]

export function getDiscoveryPage(slug) {
  return discoveryPages.find((page) => page.slug === slug)
}
