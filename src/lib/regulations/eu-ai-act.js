export const euAiAct = {
  id: 'eu-ai-act',
  slug: 'eu-ai-act',
  title: 'EU AI Act',
  shortTitle: 'EU AI Act',
  description:
    'The world\'s first comprehensive AI law, establishing a risk-based regulatory framework for artificial intelligence systems placed on the European market.',
  icon: '\u{1F1EA}\u{1F1FA}',
  status: 'In Effect',
  lastReviewed: 'March 2026',

  keyFacts: [
    {
      label: 'Official Name',
      value: 'Regulation (EU) 2024/1689 of the European Parliament and of the Council',
    },
    {
      label: 'Adopted',
      value: 'June 13, 2024',
    },
    {
      label: 'Entry into Force',
      value: 'August 1, 2024',
    },
    {
      label: 'Full Enforcement',
      value: 'August 2, 2027',
    },
    {
      label: 'Regulator',
      value: 'European AI Office + national competent authorities',
    },
    {
      label: 'Scope',
      value: 'Extraterritorial \u2014 applies to any AI system whose output is used in the EU',
    },
    {
      label: 'Maximum Fine',
      value: '\u20AC35 million or 7% of global annual turnover',
    },
    {
      label: 'Approach',
      value: 'Risk-based classification with four tiers',
    },
  ],

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content:
        'The EU AI Act \u2014 formally Regulation (EU) 2024/1689 \u2014 is the world\'s first comprehensive law regulating artificial intelligence. Adopted by the European Parliament and Council on June 13, 2024, and published in the Official Journal of the European Union on July 12, 2024, it entered into force on August 1, 2024. The regulation establishes a harmonized legal framework for AI across all 27 EU member states, replacing the previous patchwork of national approaches.\n\nThe core philosophy is a **risk-based approach**. Rather than regulating AI technology itself, the Act classifies AI systems by the level of risk they pose to health, safety, and fundamental rights. Systems that pose minimal risk face almost no regulation, while those posing unacceptable risk are banned outright. Everything in between is subject to obligations proportional to the risk level.\n\nThis matters beyond Europe. Because the Act applies to anyone placing AI systems on the EU market or whose AI output is used in the EU, it has global reach similar to GDPR. Companies headquartered in the United States, China, or anywhere else must comply if their AI systems touch the European market. For many organizations, the EU AI Act will effectively set the global baseline for AI compliance.\n\nThe Act also creates the **European AI Office**, a new body within the European Commission responsible for overseeing general-purpose AI models and coordinating enforcement across member states. National competent authorities in each member state handle enforcement for other AI systems, with the AI Office providing guidance and ensuring consistency.\n\nEnforcement is phased in gradually between 2025 and 2027. The prohibited AI practices took effect in February 2025. Rules for general-purpose AI (GPAI) models apply from August 2025. High-risk AI system obligations kick in by August 2026, and full enforcement \u2014 including all remaining provisions \u2014 begins August 2027. This phased timeline gives organizations a window to assess their AI systems and build compliance programs, but that window is closing.',
    },
    {
      id: 'who-it-applies-to',
      title: 'Who It Applies To',
      content:
        'The EU AI Act casts a wide net. It applies to multiple actors in the AI value chain, not just the companies that build AI systems. The regulation defines several distinct roles, each carrying specific obligations. Understanding which role your organization fills is the first step toward compliance.\n\nImportantly, the Act has **extraterritorial scope** (Article 2). It applies to providers who place AI systems on the EU market or put them into service in the EU, regardless of where the provider is established. It applies to deployers located within the EU. And it applies to providers and deployers located outside the EU if the output produced by their AI system is used within the EU. If you sell an AI product to European customers, or your AI system produces results that European businesses or consumers rely on, the Act likely applies to you.\n\nThere are limited exemptions. AI systems developed and used exclusively for military, defense, or national security purposes are excluded. AI systems used solely for scientific research and development are also exempt, as are AI components in free and open-source software \u2014 unless they fall into the high-risk or prohibited categories. Personal, non-professional use of AI is not covered.',
      items: [
        {
          term: 'Provider',
          description:
            'Any natural or legal person that develops an AI system or general-purpose AI model, or has one developed on its behalf, and places it on the market or puts it into service under its own name or trademark. Providers bear the heaviest obligations \u2014 they must ensure the system meets all applicable requirements before it reaches the market. This includes large AI companies, startups shipping AI products, and enterprises that build internal AI tools deployed in the EU.',
        },
        {
          term: 'Deployer',
          description:
            'Any natural or legal person that uses an AI system under its authority, except where the AI system is used in the course of a personal, non-professional activity. Deployers are the organizations and individuals that actually use AI systems in their operations. A bank using an AI credit-scoring tool, a hospital using AI-assisted diagnostic software, or an HR department using AI for resume screening \u2014 all are deployers. Deployers must use systems in accordance with instructions, monitor for risks, and in many cases conduct fundamental rights impact assessments.',
        },
        {
          term: 'Importer',
          description:
            'Any natural or legal person established in the EU that places an AI system on the market that bears the name or trademark of a non-EU provider. Importers serve as gatekeepers, ensuring that AI systems entering the EU from third countries meet the Act\'s requirements. Before placing a system on the market, importers must verify that the provider has carried out the appropriate conformity assessment and that the system bears the required CE marking.',
        },
        {
          term: 'Distributor',
          description:
            'Any natural or legal person in the supply chain, other than the provider or importer, that makes an AI system available on the EU market. Distributors must verify that the system bears the required CE marking and is accompanied by the correct documentation. If a distributor has reason to believe a system does not conform to the Act, it must not make the system available until it is brought into conformity.',
        },
        {
          term: 'Authorized Representative',
          description:
            'A natural or legal person located in the EU who has received and accepted a written mandate from a non-EU provider to act on its behalf for the purposes of the regulation. Non-EU providers of high-risk AI systems must appoint an authorized representative before placing their systems on the EU market. The representative serves as the point of contact for EU authorities and must be able to provide documentation and cooperate with market surveillance activities.',
        },
      ],
    },
    {
      id: 'risk-classification',
      title: 'Risk Classification',
      content:
        'The entire regulatory structure of the EU AI Act revolves around a four-tier risk classification system. Every AI system falls into one of these categories, and the obligations that apply depend on which tier the system lands in. Getting the classification right is critical \u2014 miscategorize your system and you could face either unnecessary compliance costs or significant penalties.\n\nThe classification is based on the **intended purpose** of the AI system and the context in which it operates, not on the underlying technology. The same machine learning model could be minimal risk in one application and high risk in another. A language model used for casual chatbot interactions is a different regulatory proposition than the same model used to assess creditworthiness or triage medical symptoms.\n\nArticle 6 and Annex III are the key provisions for high-risk classification. An AI system is considered high risk if it is used as a safety component of a product covered by EU harmonization legislation (like medical devices or machinery) and requires a third-party conformity assessment, or if it falls into one of the specific use cases listed in Annex III. Providers can also conduct a self-assessment under certain conditions to determine whether their system truly presents a significant risk in practice.\n\nThe risk tiers are summarized below. Understanding where your AI system falls is the foundation of your compliance strategy.',
      table: {
        headers: ['Risk Level', 'Description', 'Examples'],
        rows: [
          [
            'Unacceptable',
            'AI practices that are outright banned because they pose a clear threat to people\'s safety, livelihoods, or fundamental rights. These systems cannot be placed on the EU market or used in the EU under any circumstances (with narrow law enforcement exceptions).',
            'Social scoring by governments; real-time remote biometric identification in public spaces (with limited exceptions); AI that manipulates behavior to cause harm; systems that exploit vulnerabilities of specific groups (age, disability); emotion recognition in workplace and education settings; untargeted scraping of facial images for facial recognition databases',
          ],
          [
            'High',
            'AI systems that pose significant risks to health, safety, or fundamental rights. These are permitted but subject to strict requirements including conformity assessments, risk management systems, data quality standards, and human oversight. Most of the Act\'s detailed obligations target this tier.',
            'AI in critical infrastructure (energy, transport, water); educational and vocational training tools that determine access; employment and worker management AI (recruitment, promotion, termination decisions); access to essential private and public services (credit scoring, insurance pricing); law enforcement (risk assessment, evidence evaluation); migration and border control; administration of justice and democratic processes; biometric identification and categorization',
          ],
          [
            'Limited',
            'AI systems that interact with people or generate content, requiring transparency obligations so users know they are interacting with AI or viewing AI-generated content. The main requirement is disclosure and labeling \u2014 users must be informed.',
            'Chatbots and conversational AI; deepfake generators and AI-generated images or video; emotion recognition systems (outside the banned contexts); biometric categorization systems (outside the banned contexts)',
          ],
          [
            'Minimal',
            'The vast majority of AI systems fall here. These pose little to no risk and can be developed and used freely with no specific regulatory obligations. The Act encourages voluntary codes of conduct for these systems.',
            'AI-powered spam filters; AI in video games; inventory management systems; AI-assisted text editing and grammar tools; recommendation algorithms for content (unless they manipulate behavior)',
          ],
        ],
      },
    },
    {
      id: 'prohibited-practices',
      title: 'Prohibited AI Practices',
      content:
        'Article 5 of the EU AI Act bans a specific set of AI practices outright. These prohibitions took effect on February 2, 2025 \u2014 the first provisions of the Act to become enforceable. Violations carry the highest penalties: up to \u20AC35 million or 7% of global annual turnover, whichever is higher.\n\nThe banned practices reflect the EU\'s position that certain uses of AI are fundamentally incompatible with European values and fundamental rights. These are not merely restricted or conditional \u2014 they are prohibited.\n\n**Social scoring by public authorities.** AI systems used by governments to evaluate or classify people based on their social behavior or personal characteristics, leading to detrimental or unfavorable treatment that is unjustified or disproportionate. Think China\'s social credit system \u2014 the EU has decided that approach is incompatible with democratic society.\n\n**Manipulation and deception.** AI systems that deploy subliminal techniques, purposefully manipulative techniques, or deceptive techniques to materially distort a person\'s behavior in a way that causes or is likely to cause significant harm. This goes beyond simple persuasion \u2014 it targets AI designed to manipulate people without their awareness or in ways they cannot resist.\n\n**Exploitation of vulnerabilities.** AI systems that exploit the vulnerabilities of specific groups of people due to their age, disability, or social or economic situation to materially distort their behavior in a way likely to cause significant harm. For example, AI-powered toy features designed to encourage dangerous behavior in children, or predatory AI targeting elderly people.\n\n**Real-time remote biometric identification in publicly accessible spaces for law enforcement.** This is the most debated prohibition. Using AI to identify people in real time via biometric data (primarily facial recognition) in public spaces for law enforcement purposes is banned, but with three narrow exceptions: searching for specific victims of abduction, trafficking, or sexual exploitation; preventing a specific, substantial, and imminent threat to life or a foreseeable terrorist attack; and identifying suspects of serious criminal offenses listed in the regulation. Even these exceptions require prior judicial or independent administrative authorization, except in cases of urgency.\n\n**Emotion recognition in workplace and education.** AI systems that infer emotions of employees in the workplace or students in educational institutions are banned, except where the system is intended to be used for medical or safety reasons (such as monitoring a truck driver\'s alertness).\n\n**Biometric categorization using sensitive characteristics.** AI systems that categorize people individually based on biometric data to infer sensitive attributes such as race, political opinions, trade union membership, religious beliefs, sex life, or sexual orientation. Law enforcement may have limited exceptions for categorizing already lawfully obtained biometric data.\n\n**Untargeted scraping for facial recognition.** AI systems that create or expand facial recognition databases through untargeted scraping of facial images from the internet or CCTV footage. This directly targets practices like those used by Clearview AI.\n\nOrganizations should audit their current and planned AI systems against these prohibitions immediately. Since these rules are already in force, continued use of a prohibited system is an active violation carrying severe financial consequences.',
    },
    {
      id: 'high-risk-requirements',
      title: 'High-Risk AI System Requirements',
      content:
        'If your AI system is classified as high risk, it must meet a comprehensive set of requirements before it can be placed on the EU market or put into service. These requirements are detailed in Articles 8 through 15 and Chapter 3 of the Act. They represent the bulk of the regulation\'s compliance burden and apply primarily to providers, though deployers also have significant responsibilities.\n\nThe obligations are designed to ensure that high-risk AI systems are safe, transparent, and subject to meaningful human control throughout their lifecycle. Compliance is not a one-time event \u2014 providers must maintain these standards as long as the system is on the market, including through updates and modifications.\n\nProviders of high-risk AI systems must complete a **conformity assessment** before placing the system on the market. For most high-risk systems, this can be done through an internal self-assessment procedure. However, some categories \u2014 particularly biometric identification systems and AI used as safety components of regulated products \u2014 require assessment by a notified body (an accredited third party). After successful assessment, the provider affixes the **CE marking** and registers the system in the EU database.\n\nDeployers of high-risk AI systems also face obligations. They must use the system in accordance with the provider\'s instructions, ensure human oversight by individuals with appropriate competence and authority, monitor the system\'s operation and report serious incidents, and \u2014 for public bodies and private entities providing public services \u2014 conduct a **fundamental rights impact assessment** before deployment.\n\nThe key requirements for high-risk AI systems are:',
      list: [
        '**Risk Management System (Article 9):** Providers must establish and maintain a continuous, iterative risk management process throughout the AI system\'s lifecycle. This includes identifying and analyzing known and reasonably foreseeable risks, estimating and evaluating risks that may emerge during use, adopting risk mitigation measures, and testing to ensure risks are effectively managed. The risk management system must be documented and regularly updated.',
        '**Data Governance (Article 10):** Training, validation, and testing datasets must meet specific quality criteria. Data must be relevant, sufficiently representative, and as free of errors as possible. Providers must consider the geographical, contextual, behavioral, and functional characteristics of the intended use environment. Where special categories of personal data (e.g., race, health data) are processed for bias detection, strict conditions apply under Article 10(5).',
        '**Technical Documentation (Article 11):** Before a high-risk AI system is placed on the market, the provider must draw up detailed technical documentation demonstrating compliance. This includes a general description of the system, design specifications, development process details, monitoring and testing procedures, and information about the datasets used. The documentation must be kept up to date throughout the system\'s lifecycle.',
        '**Record-Keeping and Logging (Article 12):** High-risk AI systems must include automatic logging capabilities that enable tracing the system\'s operation throughout its lifecycle. Logs must record the period of each use, the reference database used, input data for which a match was found, and the identification of the natural persons involved in verification of results. Logs must be retained for a period appropriate to the system\'s intended purpose.',
        '**Transparency and Information to Deployers (Article 13):** High-risk AI systems must be designed to be sufficiently transparent to enable deployers to interpret the system\'s output and use it appropriately. Systems must come with instructions for use in an appropriate digital format, including the provider\'s identity, the system\'s characteristics and capabilities, its level of accuracy and known limitations, and any circumstances that may lead to risks.',
        '**Human Oversight (Article 14):** High-risk AI systems must be designed to allow effective oversight by natural persons during the period of use. Human oversight measures must enable individuals to fully understand the system\'s capabilities and limitations, correctly interpret its output, decide not to use the system or disregard its output in any particular situation, and intervene on its operation or interrupt it via a "stop" button or similar procedure.',
        '**Accuracy, Robustness, and Cybersecurity (Article 15):** High-risk AI systems must achieve an appropriate level of accuracy, robustness, and cybersecurity throughout their lifecycle. Accuracy levels and relevant metrics must be declared in the accompanying instructions of use. Systems must be resilient against errors, faults, and inconsistencies, and protected against unauthorized third-party manipulation of training data or model components (data poisoning, adversarial examples).',
      ],
    },
    {
      id: 'gpai',
      title: 'General-Purpose AI Models',
      content:
        'Chapter V of the EU AI Act introduces rules specifically for **general-purpose AI (GPAI) models** \u2014 AI models trained on broad data at scale that can perform a wide range of tasks. This category captures foundation models and large language models like GPT, Claude, Gemini, Llama, and Mistral. The GPAI rules apply from August 2, 2025.\n\nThe regulation distinguishes between GPAI models generally and those that pose **systemic risk**. A GPAI model is presumed to have systemic risk if the cumulative amount of computation used for its training exceeds 10^25 floating point operations (FLOPs), or if the European Commission designates it based on other criteria such as the number of registered business users, the degree of market reach, or the extent of downstream integration.\n\nAll GPAI model providers must comply with a baseline set of obligations, regardless of whether their model poses systemic risk. These requirements focus on transparency and documentation, recognizing that GPAI models are building blocks used by downstream providers who need adequate information to meet their own compliance obligations.\n\n**Baseline obligations for all GPAI models (Article 53):**\n\nProviders must draw up and keep up to date technical documentation of the model, including the training and testing process and evaluation results. They must provide information and documentation to downstream providers who integrate the GPAI model into their own AI systems, enabling those providers to understand the model\'s capabilities and limitations and comply with their obligations. Providers must establish a policy to comply with EU copyright law, particularly regarding the text and data mining opt-out mechanism under the Copyright Directive. They must also publish a sufficiently detailed summary of the training data content, following a template provided by the AI Office.\n\n**Additional obligations for systemic risk models (Article 55):**\n\nProviders of GPAI models with systemic risk face additional requirements. They must perform model evaluations, including conducting and documenting adversarial testing to identify and mitigate systemic risks. They must assess and mitigate possible systemic risks, including their sources. They must track, document, and report serious incidents and possible corrective measures to the AI Office and relevant national authorities without undue delay. And they must ensure an adequate level of cybersecurity protection for the model and its physical infrastructure.\n\nThe **AI Office** is the primary regulator for GPAI models, rather than national competent authorities. This centralized approach reflects the reality that GPAI models are developed by a relatively small number of providers but have far-reaching impact across the EU. The AI Office can request documentation, conduct evaluations, and require providers to take corrective measures.\n\nProviders of GPAI models may demonstrate compliance through adherence to **codes of practice** drawn up by the AI Office in consultation with industry, civil society, and academia. The AI Office published an initial draft of the GPAI Code of Practice in late 2024, with final versions expected by mid-2025. Compliance with an approved code of practice creates a presumption of conformity with the relevant obligations.\n\nFor providers of open-source GPAI models, certain obligations are simplified. If a model is released under a free and open-source license and its parameters (including weights, architecture, and usage information) are publicly available, the provider is exempt from several documentation and information-sharing requirements. However, this exemption does **not** apply to GPAI models with systemic risk \u2014 open-source or not, systemic risk models must comply with the full set of obligations.',
    },
    {
      id: 'penalties',
      title: 'Penalties and Enforcement',
      content:
        'The EU AI Act establishes a three-tiered fine structure calibrated to the severity of the violation. For companies, fines are calculated as the higher of a fixed amount or a percentage of total worldwide annual turnover, ensuring that penalties are meaningful for organizations of all sizes.\n\nMember states must designate national competent authorities to oversee enforcement within their jurisdictions. These authorities have the power to conduct market surveillance, investigate complaints, request access to documentation and source code, order corrective actions, and impose fines. The European AI Office oversees GPAI model compliance directly.\n\nThere are important accommodations for smaller organizations. For **SMEs and startups**, the regulation specifies that fines are calculated at the lower of the fixed amount or the percentage of turnover \u2014 the opposite of the rule for larger companies. This means a startup with modest revenue faces a proportionate fine rather than the full fixed amount. The Act also provides for regulatory sandboxes (Articles 57-62) where SMEs and startups can test innovative AI systems under regulatory supervision before full market deployment.',
      table: {
        headers: ['Violation Type', 'Maximum Fine'],
        rows: [
          [
            'Prohibited AI practices (Article 5 violations)',
            '\u20AC35 million or 7% of total worldwide annual turnover, whichever is higher',
          ],
          [
            'Non-compliance with high-risk AI system obligations, GPAI model obligations, and other key requirements',
            '\u20AC15 million or 3% of total worldwide annual turnover, whichever is higher',
          ],
          [
            'Supplying incorrect, incomplete, or misleading information to authorities or notified bodies',
            '\u20AC7.5 million or 1.5% of total worldwide annual turnover, whichever is higher',
          ],
        ],
      },
    },
    {
      id: 'practical-steps',
      title: 'Practical Steps for Compliance',
      content:
        'The phased enforcement timeline gives organizations a progressively narrowing window to prepare. Prohibited practices are already enforceable as of February 2025. GPAI model rules apply from August 2025. High-risk obligations begin in August 2026. Organizations should be building their compliance programs now, not waiting for their specific deadline.\n\nBelow are concrete steps organizations should take to prepare, whether they are providers, deployers, or both. The earlier you start, the more manageable the process. Organizations that treated GDPR preparation as a last-minute scramble learned that lesson the hard way.',
      list: [
        '**Inventory your AI systems.** Create a comprehensive register of every AI system your organization develops, deploys, or distributes. Include internal tools, third-party integrations, and AI components embedded in other products. For each system, document its intended purpose, the data it processes, who it affects, and where it is deployed.',
        '**Classify each system by risk tier.** Using the Act\'s criteria (Article 6 and Annex III), determine whether each AI system is unacceptable, high risk, limited risk, or minimal risk. Pay particular attention to AI used in HR decisions, credit assessments, critical infrastructure, law enforcement support, or education \u2014 these are likely high risk. If you have any systems that fall into the prohibited category, stop using them immediately.',
        '**Check your prohibited practices exposure.** Audit your current AI systems against the Article 5 prohibitions. This is urgent since these rules are already in force. Pay special attention to any employee monitoring, customer manipulation, or biometric identification use cases.',
        '**Assess GPAI model dependencies.** If your organization develops or fine-tunes general-purpose AI models, determine whether they meet the systemic risk threshold (10^25 FLOPs or Commission designation). If you use third-party GPAI models, ensure your providers can supply the documentation and information you need for your own compliance.',
        '**Build your risk management system.** For each high-risk AI system, establish the continuous risk management process required by Article 9. Document known risks, foreseeable misuse scenarios, and your mitigation measures. This is not a one-time assessment but an ongoing process that must be updated throughout the system\'s lifecycle.',
        '**Audit your training data.** Review the datasets used to train and validate your AI systems against the data governance requirements of Article 10. Document data sources, assess representativeness, identify potential biases, and establish procedures for data quality management. This is often the most time-consuming compliance task.',
        '**Implement human oversight mechanisms.** Design workflows that allow qualified humans to monitor, interpret, and override high-risk AI system outputs. Ensure that the people in oversight roles have the training, authority, and tools to intervene effectively. A human-in-the-loop process only counts if the human can actually understand and act on the system\'s outputs.',
        '**Prepare technical documentation.** Begin drafting the technical documentation required for high-risk systems under Article 11 and GPAI models under Article 53. This includes system descriptions, design specifications, training methodology, evaluation results, and known limitations. Treat this as living documentation that evolves with the system.',
        '**Establish incident reporting procedures.** Set up internal processes for identifying, documenting, and reporting serious incidents to the relevant authorities. Under the Act, providers of high-risk AI systems must report serious incidents within defined timeframes. Having a clear incident response plan prevents delays when something goes wrong.',
        '**Engage with the AI Pact.** The European Commission launched the AI Pact, a voluntary initiative encouraging organizations to commit to implementing the Act\'s requirements ahead of the legal deadlines. Joining the AI Pact signals good faith to regulators and provides early access to guidance and best practices from the AI Office.',
        '**Monitor regulatory guidance.** The European AI Office and national authorities will publish implementing acts, standards, codes of practice, and guidance documents throughout 2025 and 2026. Stay current with these developments, as they will provide critical detail on how specific obligations should be implemented in practice. Subscribe to updates from the AI Office and your relevant national competent authority.',
      ],
    },
  ],

  timeline: [
    {
      date: 'April 2021',
      event:
        'European Commission publishes the initial proposal for the AI Act (COM/2021/206), launching the legislative process.',
    },
    {
      date: 'June 2023',
      event:
        'European Parliament adopts its negotiating position on the AI Act, adding provisions for general-purpose AI models and foundation models.',
    },
    {
      date: 'December 2023',
      event:
        'European Parliament and Council reach a political agreement on the final text of the AI Act after marathon trilogue negotiations.',
    },
    {
      date: 'March 2024',
      event:
        'European Parliament formally approves the AI Act by a vote of 523 to 46, with 49 abstentions.',
    },
    {
      date: 'May 2024',
      event:
        'Council of the European Union formally adopts the AI Act, completing the legislative process.',
    },
    {
      date: 'June 13, 2024',
      event:
        'The AI Act is signed into law as Regulation (EU) 2024/1689 of the European Parliament and of the Council.',
    },
    {
      date: 'July 12, 2024',
      event: 'The AI Act is published in the Official Journal of the European Union.',
    },
    {
      date: 'August 1, 2024',
      event:
        'The AI Act enters into force, starting the phased enforcement timeline.',
    },
    {
      date: 'February 2, 2025',
      event:
        'Prohibited AI practices (Article 5) become enforceable. AI literacy obligations also apply from this date.',
    },
    {
      date: 'August 2, 2025',
      event:
        'Obligations for general-purpose AI (GPAI) model providers take effect. The governance framework for the European AI Office and national competent authorities also applies.',
    },
    {
      date: 'August 2, 2026',
      event:
        'Requirements for high-risk AI systems listed in Annex III become enforceable, including conformity assessments, risk management, data governance, and human oversight obligations.',
    },
    {
      date: 'August 2, 2027',
      event:
        'Full enforcement of all remaining provisions, including obligations for high-risk AI systems embedded in products already covered by EU harmonization legislation (Annex I).',
    },
  ],

  sources: [
    {
      title: 'EU AI Act \u2014 Full Text (EUR-Lex)',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
      description:
        'The complete official text of Regulation (EU) 2024/1689 as published in the Official Journal of the European Union.',
    },
    {
      title: 'European Approach to Artificial Intelligence',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence',
      description:
        'The European Commission\'s policy page on AI, including information about the European AI Office and implementation updates.',
    },
    {
      title: 'AI Pact',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-pact',
      description:
        'The voluntary initiative by the European Commission encouraging organizations to commit to implementing the AI Act\'s principles ahead of the legal deadlines.',
    },
    {
      title: 'EU AI Act Explorer (aiactexplorer.com)',
      url: 'https://artificialintelligenceact.eu/',
      description:
        'A community-maintained, searchable version of the AI Act text with article-by-article navigation and cross-references.',
    },
    {
      title: 'European Commission \u2014 AI Act Implementation',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-act-implementation',
      description:
        'Official implementation page with guidance documents, timelines, and updates on delegated and implementing acts.',
    },
  ],

  relatedRegulations: ['nist-ai-rmf', 'global'],
}
