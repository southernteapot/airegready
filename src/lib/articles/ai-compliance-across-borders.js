export const aiComplianceAcrossBorders = {
  slug: 'ai-compliance-across-borders',
  title: 'AI Compliance Across Borders: Managing Multi-Jurisdictional Requirements',
  description:
    'Operating AI systems in multiple countries means navigating conflicting rules with no mutual recognition. Here\'s how to build a compliance strategy that works across the EU, US, and UK simultaneously.',
  category: 'Global Governance',
  categorySlug: 'global',
  date: '2026-03-12',
  displayDate: 'March 12, 2026',
  readTime: '8 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'If your company deploys AI systems in more than one country, you already have a multi-jurisdictional compliance problem. You may just not know it yet.\n\nThe EU AI Act, the patchwork of US state laws, and the UK\'s sector-led approach to AI regulation are all moving forward on different timelines, with different definitions, different risk thresholds, and different enforcement mechanisms. There is no mutual recognition agreement. There is no harmonized global standard. There is no shortcut.\n\nWhat there is: a practical strategy that lets you build one compliance program that satisfies the strictest requirements across all the jurisdictions you operate in. It\'s not simple, but it\'s doable.',
    },
    {
      title: 'Three Regimes, Three Philosophies',
      content:
        'The EU AI Act is the most comprehensive. It classifies AI systems by risk level — unacceptable, high, limited, minimal — and attaches specific obligations at each tier. High-risk systems face mandatory conformity assessments, technical documentation requirements, human oversight mandates, and ongoing monitoring obligations. The Act has extraterritorial reach: if your AI system affects people in the EU, the Act applies to you regardless of where you\'re headquartered.\n\nThe United States has no federal AI law. Instead, you get a growing list of state-level requirements. Colorado\'s SB 24-205 targets algorithmic discrimination in high-risk decisions. Illinois\'s AI Video Interview Act governs AI in hiring. NYC\'s Local Law 144 requires bias audits for automated employment decision tools. Texas, California, and several other states have their own bills in various stages. Each defines key terms differently. What counts as a "high-risk" system in Colorado is not the same as what counts in the EU.\n\nThe UK rejected the EU\'s horizontal approach in favor of sector-specific regulation. The Financial Conduct Authority, the ICO, Ofcom, and other regulators are each developing AI-specific guidance for their sectors. The UK\'s AI Safety Institute conducts pre-deployment testing on frontier models. There\'s no single AI law to comply with — instead, you\'re navigating existing laws (data protection, equality, consumer protection) as they\'re applied to AI by individual regulators.',
    },
    {
      title: 'Why "Just Follow EU Rules" Isn\'t Enough',
      content:
        'A common assumption is that the EU AI Act is the strictest regime, so complying with it automatically covers you everywhere. That\'s mostly true, but not entirely.\n\nUS state laws impose obligations the EU AI Act doesn\'t specifically require. NYC Local Law 144 mandates annual third-party bias audits for automated employment decision tools — the EU AI Act requires conformity assessments, but not the specific annual bias audit format NYC demands. Colorado\'s law requires deployers to notify consumers when AI is used in consequential decisions and to provide a right to appeal — the EU Act has transparency obligations, but the specific consumer notification and appeal mechanisms differ.\n\nThe UK\'s approach creates gaps in the other direction. UK sector regulators may require specific disclosures or risk assessments tailored to their sector that neither the EU Act nor US state laws contemplate. The FCA\'s expectations for AI in financial services, for instance, reflect the UK\'s particular regulatory culture and enforcement approach.\n\nAnd then there are data localization issues. The EU restricts personal data transfers outside the EEA absent adequate safeguards. If your AI system processes EU personal data — which it almost certainly does if it serves EU users — you need a lawful transfer mechanism (Standard Contractual Clauses, adequacy decisions, or Binding Corporate Rules) for any cross-border data flow. Training data, inference data, and log data all count.',
    },
    {
      title: 'The Highest Common Denominator Strategy',
      content:
        'The practical approach is to build your compliance baseline around the strictest applicable requirement for each obligation category, then layer on jurisdiction-specific requirements where they diverge.\n\nStart with the EU AI Act\'s risk classification framework as your foundation. It\'s the most structured and the most demanding. Classify every AI system against Annex III\'s high-risk categories. If a system qualifies as high-risk under the EU framework, treat it as high-risk everywhere.\n\nFor documentation, meet the EU\'s technical documentation requirements (Article 11), which are the most detailed. A documentation package that satisfies the EU AI Act will likely satisfy what US state regulators and UK sector regulators expect, though you may need to supplement it with jurisdiction-specific disclosures.\n\nFor bias and fairness testing, combine the EU\'s requirements with the most prescriptive US state requirements. If you operate in NYC, build annual third-party bias audits into your process. If you operate in Colorado, ensure your impact assessments meet SB 24-205\'s specific requirements. Don\'t treat these as separate programs — integrate them into a single testing and assessment cycle.\n\nFor transparency and notice, map out every jurisdiction\'s disclosure requirements and create a unified notice framework that satisfies all of them. This typically means telling people when AI is being used in decisions that affect them, explaining how the system works in accessible terms, and providing information about how to contest or appeal the decision.',
    },
    {
      title: 'ISO 42001 as a Bridge',
      content:
        'ISO/IEC 42001, the international standard for AI management systems, is the closest thing to a universal framework that exists right now. It doesn\'t replace any specific regulation, but it gives you a structured management system that maps reasonably well to multiple regulatory regimes.\n\nThe standard\'s Plan-Do-Check-Act cycle for AI governance aligns with the EU AI Act\'s ongoing monitoring requirements. Its risk assessment methodology is compatible with NIST AI RMF\'s functions. Its documentation and audit requirements create a foundation that satisfies multiple regulators\' expectations simultaneously.\n\nMore importantly, certification signals to regulators in every jurisdiction that you\'ve implemented systematic AI governance. It\'s not a compliance safe harbor anywhere, but it\'s credible evidence of organizational commitment that plays well whether you\'re talking to the EU AI Office, a state attorney general, or the ICO.\n\nIf you\'re operating across all three jurisdictions, getting ISO 42001 certified is one of the highest-leverage investments you can make.',
    },
    {
      title: 'Practical Steps for Multi-Jurisdictional Compliance',
      content:
        'Here\'s what a workable cross-border compliance program looks like in practice.',
      list: [
        'Map your AI footprint by jurisdiction. For every AI system, document where it\'s deployed, whose data it processes, and who it affects. This determines which regulations apply.',
        'Build a single risk classification framework based on the EU AI Act\'s tiers, supplemented by US state and UK sector-specific criteria. One classification exercise, not three separate ones.',
        'Create a unified documentation package for each AI system that meets the EU\'s Article 11 requirements, then add jurisdiction-specific supplements (bias audit reports for NYC, impact assessments for Colorado, sector disclosures for UK regulators).',
        'Implement a single bias testing program that covers all jurisdictions. Test against the broadest set of protected characteristics across all applicable laws.',
        'Establish data flow maps that show where personal data moves across borders and ensure lawful transfer mechanisms are in place for every flow.',
        'Designate a single compliance owner for each AI system who is responsible for tracking regulatory changes across all relevant jurisdictions.',
        'Build a regulatory monitoring function that tracks legislative and enforcement developments in every jurisdiction where you operate. AI regulation is evolving fast — what\'s compliant today may not be in six months.',
      ],
    },
    {
      title: 'The Cost of Getting It Wrong',
      content:
        'Multi-jurisdictional non-compliance compounds quickly. A single AI system that violates the EU AI Act, Colorado\'s SB 24-205, and a UK sector regulator\'s guidance doesn\'t face one enforcement action — it faces three. EU penalties alone can reach 35 million euros or 7% of global turnover. US state enforcement typically comes through attorney general actions with their own penalty structures. UK regulators have independent enforcement powers.\n\nBeyond fines, there\'s the operational disruption. If a regulator in one jurisdiction orders you to cease using an AI system, you may need to suspend it globally while you remediate — especially if the underlying issue (biased training data, inadequate documentation, insufficient human oversight) affects the system everywhere it\'s deployed.\n\nThe investment in building a coherent cross-border compliance program is real, but it\'s a fraction of the cost of managing three separate regulatory crises simultaneously.',
    },
  ],

  takeaways: [
    'There is no mutual recognition between AI regulatory regimes. Compliance in one jurisdiction does not guarantee compliance in another.',
    'Build your baseline around the strictest applicable requirement for each obligation category, then add jurisdiction-specific supplements where laws diverge.',
    'ISO 42001 certification provides a structured management system that maps to multiple regulatory regimes and signals organizational commitment to every regulator.',
    'Map your AI footprint by jurisdiction first — you can\'t comply with rules you don\'t know apply to you.',
  ],

  sources: [
    {
      title: 'EU AI Act — Full Text (EUR-Lex)',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
    },
    {
      title: 'Colorado SB 24-205 — Algorithmic Discrimination Prevention',
      url: 'https://leg.colorado.gov/bills/sb24-205',
    },
    {
      title: 'UK Government — A Pro-Innovation Approach to AI Regulation',
      url: 'https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach',
    },
    {
      title: 'ISO/IEC 42001:2023 — AI Management System Standard',
      url: 'https://www.iso.org/standard/81230.html',
    },
  ],

  relatedArticles: ['eu-ai-act-compliance-checklist', 'federal-ai-preemption'],
  relatedRegulations: ['global', 'eu-ai-act'],
}
