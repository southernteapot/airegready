export const euAiActComplianceChecklist = {
  slug: 'eu-ai-act-compliance-checklist',
  title: 'EU AI Act Compliance Checklist: What to Do Before August 2026',
  description:
    'A phased, practical checklist for organizations preparing to meet the EU AI Act\'s Annex III high-risk compliance deadline in August 2026, covering system inventory, documentation, conformity assessment, and supply chain obligations.',
  category: 'EU AI Act',
  categorySlug: 'eu-ai-act',
  date: '2026-03-25',
  displayDate: 'March 25, 2026',
  readTime: '9 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'August 2, 2026 is the date the EU AI Act\'s full high-risk requirements kick in for Annex III AI systems. That\'s roughly four months from now. If you\'re reading this and haven\'t started your compliance program, you\'re behind — but you\'re not out of time. Not quite.\n\nThis article is a practical checklist organized by urgency. It won\'t repeat what the Act says — we\'ve covered the [risk classification system](/blog/eu-ai-act-risk-classification) in detail already. Instead, this is about what to do and in what order, so you can walk into August with a defensible compliance posture even if you\'re starting from a standing position.',
    },
    {
      title: 'Phase 1: Do This Now (Weeks 1-2)',
      content:
        'These are the foundational steps. Everything else depends on getting them right.\n\n**Build your AI system inventory.** You cannot comply with requirements for systems you don\'t know about. Catalog every AI system your organization builds, deploys, or uses as a third-party tool. Include vendor products, embedded AI features in existing software, and tools employees adopted without formal procurement. For each system, record what it does, what data it processes, who it affects, and who in your organization owns it.\n\nDon\'t overthink the format — a spreadsheet works. What matters is completeness. Send a survey to every department head. Check procurement records. Review your SaaS stack. Shadow AI is real, and the systems you don\'t know about are the ones most likely to be high-risk.\n\n**Assign a compliance owner.** Someone needs to be accountable for this program. Not a committee — a person with authority to make decisions and a budget to execute them. In smaller organizations, this might be your general counsel or head of IT. In larger ones, consider a dedicated AI governance lead. The worst outcome is diffused responsibility where everyone assumes someone else is handling it.\n\n**Get the legal text in front of decision-makers.** Executives who haven\'t read the enforcement provisions tend to underinvest in compliance. The penalty structure — up to 35 million euros or 7% of global turnover for prohibited practices, 15 million or 3% for other violations — gets attention. So does the fact that the EU has already stood up the [AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office) to coordinate enforcement across member states.',
    },
    {
      title: 'Phase 2: Next 60 Days (Weeks 3-10)',
      content:
        'With your inventory in hand and ownership assigned, move into classification and gap analysis.\n\n**Classify every system against the Act\'s risk tiers.** For each system in your inventory, determine whether it falls under Article 5 (prohibited), Annex III (high-risk), limited risk, or minimal risk. Be rigorous. An AI tool that "assists with" hiring decisions is still an employment decision tool under Category 4 of Annex III. A system that "supports" credit evaluations is still a high-risk system under Category 5.\n\nDocument your classification rationale for every system. If you conclude a system is not high-risk, write down why. Regulators will expect to see this analysis.\n\n**Conduct a gap analysis against the Article 9-15 requirements.** For each high-risk system, assess your current compliance against the Act\'s specific obligations:',
      list: [
        'Article 9 — Risk management system: Do you have a documented, ongoing risk management process for each high-risk system? Not a one-time assessment — a living process that runs throughout the system\'s lifecycle.',
        'Article 10 — Data governance: Can you demonstrate that your training, validation, and testing datasets meet the Act\'s quality requirements? Are they relevant, representative, and free of errors to the extent possible?',
        'Article 11 — Technical documentation: Do you have documentation detailed enough for authorities to assess compliance? This includes system design, development methodology, data specifications, and performance metrics.',
        'Article 12 — Record-keeping: Does your system automatically log events to a level that enables traceability? Can you reconstruct what the system did and why?',
        'Article 13 — Transparency: Can deployers understand the system\'s capabilities, limitations, and intended use? Is there clear documentation for users?',
        'Article 14 — Human oversight: Are there mechanisms for human intervention, override, or shutdown? Is it clear who has authority to exercise them?',
        'Article 15 — Accuracy, robustness, and cybersecurity: Do you have documented performance metrics, resilience testing, and security measures appropriate to the system\'s risk level?',
      ],
    },
    {
      title: 'Phase 2 (Continued): Documentation and Conformity Assessment',
      content:
        '**Start building your technical documentation.** Article 11 and Annex IV define what needs to be in the technical file. It\'s comprehensive — general description of the system, detailed description of development process, information about training data, testing and validation procedures, and more. If you\'re building from scratch, expect this to take several weeks per system.\n\nThe documentation isn\'t just for regulators. It\'s how you demonstrate compliance to customers, auditors, and — if things go wrong — courts. Treat it like you\'re writing for a technically literate reviewer who has never seen your system before.\n\n**Determine your conformity assessment pathway.** Most Annex III high-risk systems can use self-assessment through internal controls (Annex VI). But certain biometric systems require third-party conformity assessment through a notified body (Annex VII). Know which pathway applies to each of your systems now, because if you need a notified body, you need to get in the queue. Capacity is limited and demand will spike as the deadline approaches.\n\n**Register in the EU database.** Article 71 requires providers and deployers of high-risk systems to register those systems in the EU database before placing them on the market or putting them into service. The database infrastructure is being rolled out by the AI Office. Don\'t leave this until the last week of July.',
    },
    {
      title: 'Phase 3: Before August 2 (Weeks 11-18)',
      content:
        'The final phase is about operationalizing your compliance program so it survives contact with reality.\n\n**Implement ongoing monitoring.** Compliance isn\'t a state you achieve — it\'s a process you maintain. Set up post-market monitoring for each high-risk system (Article 72). Define metrics to track, alerting thresholds, and response procedures. Build this into your operational workflows, not a separate compliance silo that gets checked once a year.\n\n**Establish your incident reporting process.** Article 73 requires providers to report serious incidents to market surveillance authorities. Define what constitutes a serious incident for your systems, who is responsible for reporting, and what the escalation path looks like. Practice it before you need it.\n\n**Train your teams.** Article 4 requires that staff involved in operating or using high-risk AI systems have sufficient AI literacy. This isn\'t a vague aspiration — it\'s a legal obligation. Training should cover what the system does, its known limitations, how to interpret its outputs, and when to escalate to human decision-makers.\n\n**Finalize your quality management system.** Article 17 requires providers to have a documented quality management system covering all the high-risk requirements. If you already have ISO 9001 or similar, you have a foundation to build on. If not, you need to create one.',
    },
    {
      title: 'Supply Chain Obligations: Provider vs. Deployer',
      content:
        'One of the most misunderstood aspects of the Act is how obligations split between providers and deployers. Getting this wrong can mean you\'re not doing the compliance work that actually applies to you.\n\n**Providers** are the organizations that develop or place a high-risk AI system on the market. They bear the heaviest obligations: risk management, data governance, technical documentation, conformity assessment, EU database registration, and post-market monitoring.\n\n**Deployers** are the organizations that use a high-risk AI system under their authority. Your obligations are different but still significant: using the system according to the provider\'s instructions, ensuring human oversight, monitoring the system in operation, keeping logs, conducting a fundamental rights impact assessment for certain systems, and informing affected individuals that they\'re subject to a high-risk AI system.\n\nHere\'s the critical point: **if you modify a high-risk system or use it in a way the provider didn\'t intend, you may become the provider** under Article 25. That means the full provider obligations fall on you. Using an AI tool "off-label" isn\'t just a practical risk — it\'s a legal status change.\n\nFor vendor-supplied systems, your due diligence should include confirming that the provider will meet its obligations under the Act. Get contractual commitments. Ask for the technical documentation and the EU declaration of conformity. If a vendor can\'t provide these, that\'s a red flag you need to address before August.',
    },
    {
      title: 'Common Mistakes',
      content:
        'Having watched organizations start their EU AI Act compliance programs over the past year, certain mistakes come up repeatedly.\n\n**Assuming vendor compliance covers you.** It doesn\'t. Even if your AI vendor is fully compliant as a provider, you still have deployer obligations. Human oversight, monitoring, impact assessments, and transparency to affected individuals are your responsibility.\n\n**Classifying systems optimistically.** When in doubt, classify up. The cost of treating a borderline system as high-risk and complying with the requirements is far less than the cost of misclassifying it and facing enforcement action. The Article 6(3) exception for systems that don\'t pose "significant risk" is narrow and not well-tested yet.\n\n**Treating compliance as a one-time project.** The Act requires ongoing risk management, continuous monitoring, and regular updates to documentation. If your plan ends on August 2, your plan is incomplete.\n\n**Forgetting about general-purpose AI.** If you use or provide general-purpose AI models (think foundation models and large language models), there\'s a separate set of obligations under Articles 51-56 that apply to GPAI providers. These include technical documentation, transparency obligations, and — for models with systemic risk — adversarial testing and incident reporting requirements.\n\n**Ignoring the extraterritorial scope.** The Act applies to any organization that places an AI system on the EU market or whose AI system\'s output is used in the EU, regardless of where the organization is based. If you have EU customers, the Act likely applies to you.',
    },
  ],

  takeaways: [
    'The August 2, 2026 deadline for full Annex III high-risk compliance is roughly four months away. Start with an AI system inventory and a compliance owner.',
    'Classify every system against the Act\'s risk tiers and document your rationale. When in doubt, classify up.',
    'Deployers have real obligations under the Act even when using vendor-supplied systems. Vendor compliance does not cover your deployer responsibilities.',
    'If you modify a high-risk system or use it outside the provider\'s intended purpose, you may become the provider under Article 25 and inherit the full set of provider obligations.',
    'Build ongoing monitoring and incident reporting into your operations now. Compliance is a process, not a deadline.',
  ],

  sources: [
    {
      title: 'EU AI Act — Full Text (EUR-Lex)',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
    },
    {
      title:
        'European Commission — AI Act Implementation and Guidance',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    },
    {
      title: 'European AI Office — Establishment and Functions',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-office',
    },
  ],

  relatedArticles: ['eu-ai-act-risk-classification', 'nist-ai-rmf-practice'],
  relatedRegulations: ['eu-ai-act', 'global'],
}
