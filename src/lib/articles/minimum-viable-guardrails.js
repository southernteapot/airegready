export const minimumViableGuardrails = {
  slug: 'minimum-viable-guardrails',
  title: 'The Minimum Viable AI Guardrails for a Small Team',
  description:
    'You don\u2019t need a governance committee or a 40-page policy. Here are the guardrails that actually matter when you\u2019re a small team using AI.',
  category: 'Practical Guide',
  categorySlug: null,
  date: '2026-04-04',
  displayDate: 'April 4, 2026',
  readTime: '8 min read',
  featured: false,
  relatedRegulations: ['nist-ai-rmf'],

  sections: [
    {
      title: null,
      content:
        'Enterprise AI governance programs involve committees, review boards, risk registries, and multi-month implementation timelines. If you\u2019re a 5-person startup or a 15-person team, that\u2019s not realistic and it\u2019s not necessary.\n\nBut "we\u2019re too small for governance" isn\u2019t a real position either. You\u2019re using AI tools that handle data, generate outputs your clients see, and influence decisions. You need guardrails. They just need to be the right size.\n\nThis guide covers the minimum set of AI guardrails that actually matter for a small team \u2014 what to put in place, what to skip, and how to build from there.',
    },
    {
      title: '1. An AI Tool Inventory (30 Minutes)',
      content:
        'Before you can govern AI use, you need to know what\u2019s being used. This is surprisingly hard on a small team because people adopt tools individually and don\u2019t always mention it.\n\nCreate a shared document (spreadsheet, Notion page, whatever your team uses) with four columns:\n\n\u2022 **Tool name** \u2014 ChatGPT, Claude, Copilot, Midjourney, whatever it is\n\u2022 **Who uses it** \u2014 specific team members\n\u2022 **What for** \u2014 the specific tasks or workflows\n\u2022 **Data exposure** \u2014 what data goes in (none, internal content, client data, etc.)\n\nAsk everyone on the team to contribute. You\u2019ll be surprised by what shows up. This inventory is the foundation for everything else. Update it when people join, leave, or adopt new tools.',
    },
    {
      title: '2. Three Data Rules (15 Minutes)',
      content:
        'You don\u2019t need a comprehensive data classification framework. You need three rules everyone understands.\n\n**Rule 1: No client data in AI tools without explicit approval.** Client names, financials, personal information, health data, and anything covered by an NDA or contract stays out of AI tools. If there\u2019s a specific, approved exception, document it.\n\n**Rule 2: No credentials, passwords, or keys.** Ever. In any AI tool. No exceptions.\n\n**Rule 3: Opt out of training data.** For every AI tool on your inventory, check whether it uses your inputs to train models, and turn that off if possible. Most major tools (ChatGPT Team/Enterprise, Claude, Copilot Business) offer this. Free tiers often don\u2019t.\n\nPrint these three rules out. Pin them in Slack. Include them in onboarding. Three rules that everyone follows beats a 10-page data handling policy that nobody reads.',
    },
    {
      title: '3. An Output Review Norm (5 Minutes)',
      content:
        'AI generates content that looks confident and professional but may be wrong, biased, or inappropriate. Your team needs a shared understanding of when AI output needs a human check before it goes out.\n\nThe simplest approach: **anything that goes to a client, gets published, or influences an important decision gets reviewed by a human.** Internal brainstorming, drafts, and research assistance don\u2019t need the same level of scrutiny.\n\nThis doesn\u2019t need to be a formal approval process. It\u2019s just a team norm: before you send that AI-drafted email to a client, read it yourself. Before you publish that AI-generated blog post, fact-check it. Before you use AI analysis to make a business decision, verify the key claims.\n\nMost teams adopt this naturally. Making it explicit prevents the one time someone doesn\u2019t.',
    },
    {
      title: '4. A Tool Approval Process (10 Minutes)',
      content:
        'On a small team, the "tool approval process" can be one sentence: **check with [name] before using a new AI tool for work.**\n\nThat\u2019s it. The point isn\u2019t to create bureaucracy. It\u2019s to make sure that someone reviews the terms, checks the data handling, and adds the tool to your inventory before the whole team starts using it.\n\nFor a team of under 10, this can be one person (often the founder or CTO). For a slightly larger team, it might be two people who share the responsibility. The key is that the process exists and people know to follow it.\n\nThe alternative \u2014 everyone signing up for whatever AI tool they find \u2014 means you have unknown data exposure and no visibility into what your team is doing.',
    },
    {
      title: '5. One Person Who Owns It',
      content:
        'AI guardrails that nobody owns will decay within a month. Assign one person the responsibility to:\n\n\u2022 Keep the tool inventory current\n\u2022 Review new tool requests\n\u2022 Answer questions about what\u2019s okay and what\u2019s not\n\u2022 Update the rules when your AI usage changes\n\nOn a small team, this is often the founder, the CTO, or an operations lead. It doesn\u2019t need to be a full-time job. It\u2019s probably 30 minutes a month. But someone needs to be the point of contact.',
    },
    {
      title: 'What You Can Skip (For Now)',
      content:
        'Certain governance elements are valuable but not essential at the small-team stage. Skip these until you need them:\n\n\u2022 **Formal risk assessment frameworks.** Your inventory and data rules cover the basics. You can add risk scoring later.\n\u2022 **AI ethics committees.** You don\u2019t have enough people for a committee. One person with good judgment is enough.\n\u2022 **Regulatory compliance programs.** Unless you\u2019re in healthcare, finance, or another regulated sector with specific AI rules, your basic guardrails are sufficient. Monitor regulatory developments (that\u2019s what AIRegReady is for), but don\u2019t build a compliance program you don\u2019t need yet.\n\u2022 **Model documentation and auditing.** If you\u2019re building AI products, this matters. If you\u2019re using third-party AI tools, it doesn\u2019t. The vendor is responsible for their model documentation.\n\u2022 **Training programs.** A 10-minute walkthrough of your policy and rules is enough. You can build formal training when you\u2019re bigger.',
    },
    {
      title: 'How This Maps to Real Frameworks',
      content:
        'If you ever need to show a client, investor, or regulator that you have AI governance in place, these five guardrails map neatly to the NIST AI Risk Management Framework\u2019s four functions:\n\n\u2022 **Govern** \u2192 one owner, written rules, tool approval process\n\u2022 **Map** \u2192 AI tool inventory, use case documentation\n\u2022 **Measure** \u2192 data exposure tracking, output review norm\n\u2022 **Manage** \u2192 data rules, prohibited uses, regular inventory updates\n\nYou\u2019re not implementing NIST. But you\u2019re doing the practical equivalent of what it recommends, at a scale that fits your team. If someone asks whether you follow a governance framework, you can honestly say your practices are aligned with NIST AI RMF principles.',
    },
    {
      title: 'Getting Started Today',
      content:
        'You can put all five guardrails in place in an afternoon:\n\n1. Create the tool inventory and ask your team to fill it in\n2. Write down the three data rules and share them\n3. Agree on the output review norm\n4. Designate who approves new tools\n5. Assign one person to own it\n\nThat\u2019s your minimum viable AI governance. It\u2019s not comprehensive, it\u2019s not perfect, and it doesn\u2019t cover every edge case. But it covers the risks that actually matter at your stage, and it gives you a foundation to build on as your AI usage grows.',
    },
  ],

  takeaways: [
    'Five guardrails are enough for a small team: tool inventory, three data rules, output review norm, tool approval process, and one owner',
    'Three data rules (no client data, no credentials, opt out of training) cover most risks',
    'Skip formal frameworks, ethics committees, and compliance programs until you actually need them',
    'These five practices map to the NIST AI RMF if you ever need to demonstrate governance to a client or investor',
  ],

  sources: [
    {
      title: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence',
    },
  ],
}
