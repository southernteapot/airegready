export const euAiActRiskClassification = {
  slug: 'eu-ai-act-risk-classification',
  title: 'The EU AI Act Risk Classification: What You Actually Need to Know',
  description:
    'A practical breakdown of the EU AI Act\'s four risk tiers, with specific examples of what qualifies as high-risk and the Annex III categories that catch most organizations off guard.',
  category: 'EU AI Act',
  categorySlug: 'eu-ai-act',
  date: '2026-03-15',
  displayDate: 'March 15, 2026',
  readTime: '8 min read',
  featured: true,

  sections: [
    {
      title: null,
      content:
        'The EU AI Act sorts AI systems into four risk tiers: unacceptable, high, limited, and minimal. Most people get that part. What they don\'t get is where the line falls between "high risk" and everything else — and that line is a lot closer than you think.\n\nIf you\'ve been assuming your system is low-risk because it doesn\'t do facial recognition or social scoring, you may want to read Article 6 more carefully. The high-risk category in Annex III is expansive, and it covers use cases that plenty of mid-market SaaS companies already ship.',
    },
    {
      title: 'The Four Tiers, Briefly',
      content:
        'Unacceptable risk means banned outright. Social credit scoring by governments, real-time biometric identification in public spaces (with narrow exceptions for law enforcement), manipulative AI that exploits vulnerable groups — these are prohibited. No compliance pathway exists because you simply cannot deploy them in the EU.\n\nHigh risk is the tier that matters most for businesses, and we\'ll spend the bulk of this article here.\n\nLimited risk covers systems that interact directly with people — chatbots, deepfake generators, emotion recognition tools. The main obligation is transparency: tell the user they\'re interacting with AI.\n\nMinimal risk is everything else. Spam filters, AI-powered video games, inventory optimization. No specific obligations under the Act, though general EU data protection rules still apply.',
    },
    {
      title: 'High-Risk Is Broader Than You Expect',
      content:
        'Article 6 defines two paths to high-risk classification. The first is straightforward: if your AI system is itself a regulated product (like a medical device or vehicle component), or if it\'s a safety component of such a product, it\'s high-risk. This tracks with existing EU product safety law.\n\nThe second path is Annex III, and this is where things get interesting. Annex III lists eight categories of AI systems that are automatically high-risk regardless of what product they\'re embedded in:',
      list: [
        'Biometric identification and categorization of people',
        'Management and operation of critical infrastructure (energy grids, water supply, traffic systems)',
        'Education and vocational training — systems that determine access to education or evaluate students',
        'Employment, worker management, and access to self-employment — hiring tools, task allocation, performance monitoring',
        'Access to essential private and public services — credit scoring, insurance pricing, emergency dispatch prioritization',
        'Law enforcement — risk assessments, polygraphs, crime prediction',
        'Migration, asylum, and border control — application processing, risk screening',
        'Administration of justice and democratic processes — tools that help judges research case law or assist in dispute resolution',
      ],
    },
    {
      title: 'Where Organizations Get Tripped Up',
      content:
        'Category 4 — employment — catches more companies than any other. If you use AI to screen resumes, rank candidates, schedule interviews based on predicted fit, monitor employee productivity, or decide who gets promoted, that\'s a high-risk system. Full stop. It doesn\'t matter that you bought it from a vendor. The Act places obligations on both providers (the company that built the tool) and deployers (the company that uses it).\n\nCategory 5 is the other common surprise. Credit decisioning is obvious, but "access to essential services" also covers insurance underwriting, benefits eligibility screening, and even systems that prioritize emergency service calls. If your AI system determines whether someone gets a service they need, there\'s a good chance it falls here.\n\nThere\'s also a subtlety in Article 6(3) that people miss. A system listed in Annex III can be excluded from high-risk classification if it doesn\'t pose a "significant risk of harm" to health, safety, or fundamental rights. But the burden is on you to document why, and the European Commission can add new categories to Annex III through delegated acts. Betting on this exception is risky.',
    },
    {
      title: 'What High-Risk Classification Actually Requires',
      content:
        'Once your system is classified as high-risk, you\'re looking at a real compliance program. The major obligations include:',
      list: [
        'A risk management system that runs throughout the AI system\'s lifecycle — not a one-time assessment',
        'Data governance requirements for training, validation, and testing data sets',
        'Technical documentation detailed enough for authorities to assess compliance',
        'Automatic logging so the system\'s operation can be traced after the fact',
        'Transparency obligations — deployers need to understand what the system does and its limitations',
        'Human oversight measures so a person can intervene or override the system',
        'Accuracy, robustness, and cybersecurity standards appropriate to the system\'s purpose',
      ],
    },
    {
      title: 'How to Determine Your Classification',
      content:
        'Start with Article 5. If your system does anything on the prohibited list, stop — you can\'t deploy it. Next, check whether your system is a product or safety component covered by the EU product safety legislation listed in Annex I. If so, it\'s high-risk through that path.\n\nThen go through the eight Annex III categories one by one. Be honest about what your system actually does, not what your marketing materials say it does. A "workforce analytics dashboard" that recommends terminations is an employment decision tool.\n\nIf none of those apply, check the transparency obligations for limited-risk systems. Does your system generate synthetic content? Does it interact directly with humans? If yes, you still have disclosure duties.\n\nDocument your analysis. Even if you conclude your system is minimal-risk, having a written record of how you reached that conclusion is worth its weight if a regulator ever asks.',
    },
    {
      title: 'Timeline and Enforcement',
      content:
        'The prohibited AI practices ban took effect in February 2025. High-risk obligations for systems covered by existing EU product safety legislation apply from August 2025. The full high-risk requirements for Annex III systems — along with limited-risk transparency obligations — apply from August 2026. That deadline is less than six months away.\n\nPenalties run up to 35 million euros or 7% of global annual turnover for prohibited AI violations, and up to 15 million euros or 3% of turnover for other violations. These aren\'t theoretical numbers designed to sit in a footnote. The EU has shown with GDPR enforcement that it will use the tools it has.',
    },
  ],

  takeaways: [
    'The high-risk category under Annex III is broader than most organizations realize — employment tools, credit scoring, education systems, and insurance underwriting all qualify.',
    'Both providers (builders) and deployers (users) of high-risk systems have compliance obligations under the Act.',
    'The Article 6(3) exception for "no significant risk" exists but is narrow and not something to rely on without thorough documentation.',
    'Full Annex III compliance requirements take effect August 2026 — start your risk classification analysis now.',
  ],

  sources: [
    {
      title: 'EU AI Act — Full Text (EUR-Lex)',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
    },
    {
      title: 'European Commission — AI Act Overview and Risk Classification',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    },
    {
      title: 'EU AI Act — Annex III High-Risk AI Systems',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689#anx_III',
    },
  ],

  relatedArticles: ['us-states-ai-hiring', 'nist-ai-rmf-practice'],
  relatedRegulations: ['eu-ai-act', 'global'],
}
