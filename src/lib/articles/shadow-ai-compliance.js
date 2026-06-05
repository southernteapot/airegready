export const shadowAiCompliance = {
  slug: 'shadow-ai-compliance',
  title: 'Shadow AI Is Your Biggest Compliance Risk (And How to Fix It)',
  description:
    'Employees are using ChatGPT, Claude, and Copilot without organizational oversight. Here\'s why that\'s a compliance problem and what practical steps actually work to address it.',
  category: 'Governance',
  categorySlug: 'federal-policy',
  date: '2026-02-20',
  displayDate: 'February 20, 2026',
  readTime: '5 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'Your employees are already using AI. The question is whether you know about it.\n\nA 2025 survey by Salesforce found that more than half of workers using generative AI at work had no formal approval to do so. They\'re pasting customer data into ChatGPT to draft emails. They\'re feeding proprietary code into Copilot to debug it. They\'re uploading confidential contracts to Claude to summarize key terms. None of this shows up in your IT inventory. None of it is governed by your policies — because you probably don\'t have policies that cover it.\n\nThis is shadow AI, and it\'s the gap between what your compliance program assumes is happening and what\'s actually happening on the ground.',
    },
    {
      title: 'Why This Is a Compliance Problem',
      content:
        'Shadow AI creates risk in at least four distinct areas, any one of which can trigger regulatory exposure.\n\n**Data privacy violations.** When an employee pastes personal data into a third-party AI tool, that data is being processed — and often stored — by a company you have no data processing agreement with. Under GDPR, that\'s a transfer to an unauthorized processor. Under CCPA, it may be a sale or sharing of personal information you didn\'t disclose. Under HIPAA, if it\'s health information, it\'s a breach. The employee didn\'t mean to violate privacy law. They just wanted a faster way to write a summary. The law doesn\'t care about intent.\n\n**Regulatory obligations you can\'t meet.** The EU AI Act, Colorado\'s SB 26-189 (effective January 1, 2027 for covered ADMT), NYC\'s Local Law 144, and similar state rules all impose obligations on organizations that deploy AI systems — things like notices, bias audits, data-correction workflows, vendor documentation, and human review. You can\'t comply with requirements for systems you don\'t know exist. If an HR manager starts using an AI tool to screen resumes and you haven\'t registered it, assessed it, or disclosed it to candidates, you may create compliance exposure the moment it touches an applicant.\n\n**Intellectual property exposure.** Most generative AI tools have terms of service that grant the provider some rights to inputs, or at minimum don\'t guarantee confidentiality. If an engineer pastes proprietary source code into a publicly available AI assistant, that code may end up in training data. Trade secret protection requires reasonable efforts to maintain secrecy. Using a public AI tool with no confidentiality agreement undermines that argument.\n\n**Accuracy and liability.** AI outputs are not reliable. They hallucinate facts, generate plausible-sounding nonsense, and produce work that looks polished but is wrong. If an employee uses AI-generated analysis in a client deliverable, a regulatory filing, or a legal document without verification, the organization is liable for the errors. You can\'t manage that risk if you don\'t know it\'s happening.',
    },
    {
      title: 'The Scale of the Problem',
      content:
        'Shadow AI is harder to detect than traditional shadow IT. Installing unauthorized software usually requires admin access or leaves a footprint on company devices. Using a web-based AI tool requires nothing more than a browser tab. There\'s no software to install, no network traffic pattern that stands out, no license to track.\n\nAnd the incentives are strong. Employees who use AI tools report significant productivity gains. They\'re not going to stop because you sent a memo. They\'ll just stop telling you about it.',
    },
    {
      title: 'Practical Steps That Work',
      content:
        'The goal is not to ban AI use — that ship has sailed, and it would be counterproductive anyway. The goal is to bring it under governance so you can meet your compliance obligations and manage the real risks. Here\'s what that looks like in practice.\n\n**1. Publish an acceptable use policy.** Be specific. Don\'t write a ten-page document full of legalese. State clearly what categories of data employees may and may not enter into AI tools (customer PII: no; internal brainstorming: yes). Name the approved tools. Explain why the restrictions exist. People follow rules they understand.\n\n**2. Build an AI inventory.** Require teams to register any AI tool they use, whether it\'s a standalone product or a feature embedded in existing software. Make the registration process easy — a simple form, not a procurement committee. Include vendor tools, browser extensions, and integrations. Update it quarterly.\n\n**3. Provide approved alternatives.** If you ban employees from using ChatGPT but don\'t offer them a sanctioned tool that does similar things, you\'re guaranteeing shadow use. Enterprise versions of major AI platforms (ChatGPT Enterprise, Claude for Business, Microsoft 365 Copilot) offer data protection agreements, access controls, and audit logs. The cost is almost always less than the cost of a single compliance incident.\n\n**4. Train people, not just once.** Short, practical training that covers what employees can and can\'t do with AI tools, with real examples. Repeat it. Build it into onboarding. Make it relevant to each team\'s actual workflow — the risks for engineering are different from the risks for customer support.\n\n**5. Implement technical controls where possible.** DLP (data loss prevention) tools can flag or block sensitive data from being pasted into external AI services. Network-level controls can restrict access to unapproved tools on managed devices. These aren\'t foolproof — mobile devices and personal laptops create gaps — but they reduce the surface area.\n\n**6. Assign ownership.** Someone needs to own the AI governance function. In smaller organizations, that might be the head of IT or compliance. In larger ones, it might warrant a dedicated role. The point is that AI governance doesn\'t happen by committee. Someone needs to be responsible for maintaining the inventory, updating policies, and responding to new regulatory requirements.',
    },
    {
      title: 'Get Ahead of It',
      content:
        'Shadow AI is not a future problem. It\'s a current one, and it\'s growing every quarter as AI tools become more capable and more integrated into everyday work. The organizations that address it now — with sensible policies, approved tools, and lightweight governance — will be in a far better position than those that pretend it isn\'t happening.\n\nThe fix doesn\'t require a massive budget or a twelve-month project. It requires acknowledging reality and putting reasonable guardrails in place. Start with the policy. Build the inventory. Give people approved tools. That covers 80% of the risk.',
    },
  ],

  takeaways: [
    'More than half of employees using AI at work have no formal approval — and most organizations have no visibility into this usage.',
    'Shadow AI creates compliance exposure across data privacy, AI-specific regulations, intellectual property, and accuracy/liability.',
    'Banning AI tools is ineffective. Providing approved alternatives with proper governance is the realistic approach.',
    'Start with an acceptable use policy and an AI tool inventory — these two steps address the majority of the risk.',
  ],

  sources: [
    {
      title:
        'Salesforce — More Than Half of Generative AI Adopters Use Unapproved Tools at Work',
      url: 'https://www.salesforce.com/news/stories/ai-at-work-research/',
    },
    {
      title: 'NIST AI Risk Management Framework — Governance Function',
      url: 'https://airc.nist.gov/AI_RMF_Interactivity/GOVERN',
    },
    {
      title:
        'IAPP — Managing Shadow AI: Privacy and Compliance Considerations',
      url: 'https://iapp.org/resources/article/managing-shadow-ai/',
    },
  ],

  relatedArticles: ['nist-ai-rmf-practice', 'us-states-ai-hiring'],
  relatedRegulations: ['federal-policy', 'us-state-laws'],
}
