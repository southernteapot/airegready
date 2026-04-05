export const aiUsePolicyStarter = {
  slug: 'ai-use-policy-starter',
  title: 'What to Put in an AI Use Policy (Even If It\u2019s Just One Page)',
  description:
    'A practical guide to writing your first AI use policy. Covers what to include, what to skip, and how to make it something people actually read.',
  category: 'Practical Guide',
  categorySlug: null,
  date: '2026-04-04',
  displayDate: 'April 4, 2026',
  readTime: '7 min read',
  featured: false,
  relatedRegulations: ['nist-ai-rmf'],

  sections: [
    {
      title: null,
      content:
        'You know you should have an AI use policy. Maybe a client asked about it, maybe you read something alarming about data leaks, or maybe you just realized that people on your team are using ChatGPT, Claude, and Copilot in ways nobody\u2019s talked about.\n\nThe good news: writing an AI use policy is not hard. The bad news: most people overthink it, write something nobody reads, or never start at all.\n\nThis guide walks you through what to include, what to skip, and how to write something useful in an afternoon.',
    },
    {
      title: 'Why Bother With a Written Policy?',
      content:
        'Three reasons.\n\n**Clarity.** People are already making decisions about what AI tools to use and what data to put into them. Without a policy, everyone is guessing. A written policy turns implicit assumptions into explicit rules.\n\n**Protection.** If something goes wrong \u2014 a data leak, a biased output, a confidentiality breach \u2014 having a policy in place shows you weren\u2019t negligent. You thought about the risks and communicated expectations. This matters to clients, partners, and regulators.\n\n**Scalability.** When it\u2019s just you or a small team, everyone can talk through decisions informally. That breaks down as you grow. A policy gives you a reference point that doesn\u2019t depend on everyone being in the room.',
    },
    {
      title: 'The Core Sections',
      content:
        'A useful AI use policy needs five things. You can cover all of them in one to two pages.\n\n**1. Approved tools.** Name the AI tools people are allowed to use. Be specific: "ChatGPT (Team plan), GitHub Copilot, and Grammarly" is better than "AI tools approved by management." If there are tools that are explicitly not approved, say so. If the answer is "check with [person] before using something new," say that.\n\n**2. Data rules.** This is the most important section. What data can go into AI tools and what can\u2019t? At minimum, define these categories: customer/client data (usually no), proprietary business information (probably no), personal data (no, unless the tool\u2019s privacy terms allow it), and general business content like drafts, brainstorms, and internal summaries (usually fine). Be specific about what "sensitive data" means in your context.\n\n**3. Output rules.** AI generates content, but it doesn\u2019t guarantee accuracy. Your policy should say when AI-generated content needs human review before it goes out \u2014 especially for anything customer-facing, published externally, or used in important decisions. A good default: all external-facing AI-generated content must be reviewed by a human before use.\n\n**4. Prohibited uses.** Name the things people should never do with AI. Common examples: making final hiring or firing decisions based solely on AI output, submitting AI-generated content as original work where that\u2019s not disclosed, using AI for tasks involving attorney-client privilege or legally protected information, and generating content that impersonates real people.\n\n**5. Who to ask.** Every policy needs a point of contact. Who do people go to when they\u2019re not sure whether a use case is okay? This can be a person, a Slack channel, or an email alias. The point is that people know where to get an answer rather than guessing.',
    },
    {
      title: 'What to Skip (For Now)',
      content:
        'Your first policy does not need to cover:\n\n\u2022 Detailed technical specifications of how AI models work\n\u2022 A comprehensive risk assessment framework\n\u2022 Training curricula for the whole team\n\u2022 Vendor evaluation matrices\n\u2022 Regulatory analysis by jurisdiction\n\nThese are all valuable things. They\u2019re also second-order concerns. The first-order concern is getting basic guardrails in place so people know what\u2019s okay and what\u2019s not. You can build on the policy later.',
    },
    {
      title: 'Mistakes People Make',
      content:
        '**Writing it like a legal document.** If your policy reads like a terms of service agreement, nobody will read it. Write it in plain English. Short sentences. Clear rules. If a new team member can\u2019t understand it in five minutes, it\u2019s too complicated.\n\n**Not sharing it.** A policy in a Google Doc that nobody knows about is not a policy. Send it to everyone. Mention it in onboarding. Pin it in Slack. The whole point is that people read it and follow it.\n\n**Making it too restrictive.** If your policy bans all AI use, people will use AI anyway and just not tell you. That\u2019s worse than having no policy at all because now you have unmanaged risk and no visibility into it. A good policy enables smart use while setting clear boundaries.\n\n**Never updating it.** AI tools change fast. Your policy should change too. Review it every quarter, or whenever you adopt a major new tool or use case.',
    },
    {
      title: 'A Starter Template',
      content:
        'Here\u2019s a structure you can copy and fill in:\n\n**AI Use Policy \u2014 [Your Name / Company Name]**\n*Last updated: [Date]*\n\n**Approved Tools:** [List specific tools and plans]\n\n**Data Rules:**\n\u2022 Do NOT put customer data, personal information, or confidential business data into AI tools\n\u2022 General business content (drafts, brainstorms, internal summaries) is fine for approved tools\n\u2022 When in doubt, ask [contact person] before using a tool with sensitive information\n\n**Output Review:**\n\u2022 AI-generated content for external use (client work, published content, official communications) must be reviewed by a human before sending\n\u2022 AI-generated code should go through normal code review\n\n**Prohibited Uses:**\n\u2022 [List your specific prohibitions]\n\n**Questions?** Contact [person/channel]\n\nThat\u2019s it. Fill it in, share it, and you\u2019re ahead of most people.',
    },
    {
      title: 'What Comes Next',
      content:
        'Once you have a basic policy in place, the natural next steps are reviewing the privacy terms of every AI tool you use, doing a lightweight risk review of your highest-impact AI use cases, and training your team on the policy (even a 15-minute walkthrough counts).\n\nBut don\u2019t let "next steps" delay getting the first version out. A simple policy shared today is more valuable than a perfect policy planned for next quarter.',
    },
  ],

  takeaways: [
    'A useful AI use policy needs five things: approved tools, data rules, output review requirements, prohibited uses, and a point of contact',
    'Write it in plain English, keep it to one or two pages, and actually share it with everyone',
    'Don\u2019t let perfect be the enemy of good \u2014 a simple policy now beats a comprehensive one never',
    'Review and update the policy quarterly or when your AI usage changes significantly',
  ],

  sources: [
    {
      title: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence',
    },
  ],
}
