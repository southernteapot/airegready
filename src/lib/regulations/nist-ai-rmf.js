export const nistAiRmf = {
  id: 'nist-ai-rmf',
  slug: 'nist-ai-rmf',
  title: 'NIST AI Risk Management Framework',
  shortTitle: 'NIST AI RMF',
  description:
    'The NIST AI Risk Management Framework (AI RMF 1.0) is a voluntary U.S. framework for managing risks throughout the AI lifecycle, rapidly becoming the de facto standard for AI governance in federal procurement, state regulation, and industry practice.',
  icon: '\u{1F3DB}\u{FE0F}',
  status: 'Framework',
  lastReviewed: 'March 2026',
  lastReviewedIso: '2026-03-01',

  keyFacts: [
    { label: 'Published By', value: 'National Institute of Standards and Technology (NIST), U.S. Department of Commerce' },
    { label: 'Document Number', value: 'NIST AI 100-1' },
    { label: 'Publication Date', value: 'January 26, 2023' },
    { label: 'Status', value: 'Voluntary framework (Version 1.0)' },
    { label: 'Companion Document', value: 'NIST AI RMF Playbook (AI 100-1)' },
    { label: 'Generative AI Profile', value: 'NIST AI 600-1 (July 2024)' },
    { label: 'Core Functions', value: 'Govern, Map, Measure, Manage' },
    { label: 'Scope', value: 'All AI systems, all sectors, all organization sizes' },
  ],

  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content:
        'The NIST AI Risk Management Framework (AI RMF 1.0), formally designated as NIST AI 100-1, is a comprehensive guide for organizations seeking to manage the risks associated with artificial intelligence systems. Published on January 26, 2023, by the National Institute of Standards and Technology — a non-regulatory agency within the U.S. Department of Commerce — the framework provides a structured, flexible approach to AI risk management that can be adopted by any organization regardless of size, sector, or level of AI maturity.\n\nNIST developed the AI RMF through an unusually open and collaborative process. Over two years, NIST gathered input from more than 240 organizations through requests for information, public workshops, and multiple rounds of public comment on draft versions. The result is a framework that reflects broad consensus across industry, academia, civil society, and government about what responsible AI governance looks like in practice.\n\nThe framework matters because it fills a critical gap. While many organizations recognize that AI systems carry risks — from biased outputs to security vulnerabilities to accountability failures — most lack a structured way to identify, assess, and manage those risks. The AI RMF provides that structure without being prescriptive. It does not mandate specific technical solutions or compliance checkboxes. Instead, it offers a set of functions, categories, and subcategories that organizations can adapt to their own context.\n\nPerhaps most importantly, the AI RMF is rapidly evolving from "voluntary guidance" into something closer to an expected baseline. Federal procurement increasingly references NIST standards, state legislatures are building AI laws that point to the framework, and companies are adopting it as a common language for AI governance. Understanding the AI RMF is no longer optional for organizations that build, deploy, or procure AI systems.',
    },
    {
      id: 'who-it-applies-to',
      title: 'Who It Applies To',
      content:
        'The AI RMF is designed to apply to any organization involved in the design, development, deployment, evaluation, or use of AI systems. This includes technology companies building AI products, enterprises deploying AI tools in their operations, government agencies procuring AI systems, and organizations of any size in any sector. The framework is intentionally sector-neutral and technology-neutral — it applies whether you are working with machine learning, natural language processing, computer vision, or any other AI technology.\n\nWhile the framework is technically voluntary, calling it "optional" increasingly misses the point. Several forces are making the AI RMF a practical necessity for many organizations.\n\n**Federal procurement.** The Office of Management and Budget (OMB) has issued guidance requiring federal agencies to implement AI governance practices that align with NIST standards when acquiring and using AI systems. If your organization sells AI products or services to the federal government, familiarity with the AI RMF is becoming a prerequisite, not a differentiator.\n\n**State legislation.** Colorado\'s SB 24-205, one of the most comprehensive state AI laws in the country, explicitly references NIST AI risk management frameworks as a benchmark for reasonable compliance practices. Organizations that can demonstrate alignment with the AI RMF have a clearer path to meeting Colorado\'s requirements — and similar state laws are likely to follow the same pattern.\n\n**Contractual requirements.** Large enterprises and government contractors are increasingly requiring their vendors and partners to demonstrate AI risk management practices. The AI RMF provides a recognized, credible framework to meet these expectations. When a customer asks "how do you manage AI risk?" the AI RMF gives you a structured answer.\n\n**International alignment.** The AI RMF was designed with awareness of international AI governance efforts, including the OECD AI Principles and the EU AI Act. Organizations operating across borders will find that the AI RMF aligns well with global expectations, making it easier to build a single governance approach that satisfies multiple regulatory regimes.',
    },
    {
      id: 'core-functions',
      title: 'Core Functions',
      content:
        'The AI RMF is organized around four core functions that provide the backbone of AI risk management. These functions are not meant to be followed in strict sequence — they are interconnected and iterative, reflecting the reality that AI risk management is an ongoing process rather than a one-time exercise. Each function contains categories and subcategories that provide more detailed guidance.\n\nThe Govern function is unique in that it is cross-cutting: it informs and is informed by the other three functions. Together, these four functions create a comprehensive approach to identifying, assessing, and managing AI risks throughout the entire AI lifecycle.',
      items: [
        {
          term: 'Govern',
          description:
            'The Govern function is the foundation of the entire framework and is cross-cutting, meaning it applies to and connects with all other functions. It addresses the organizational culture, structure, policies, and accountability mechanisms needed to support effective AI risk management. This includes establishing clear roles and responsibilities, creating governance policies and processes, building organizational awareness of AI risks, and ensuring that risk management is embedded in the organization\'s broader enterprise risk strategy — not siloed within the technical team. The Govern function emphasizes that AI risk management is not just a technical challenge; it requires leadership commitment, workforce training, stakeholder engagement, and robust documentation practices. Without strong governance, the other functions lack the organizational support to be effective.',
        },
        {
          term: 'Map',
          description:
            'The Map function focuses on establishing the context for AI risk management. Before you can assess or manage risks, you need to understand the environment in which the AI system operates. This means identifying and documenting the intended purpose and use cases of the AI system, the stakeholders who will be affected, the potential benefits and harms, the data requirements, and the legal and regulatory landscape. The Map function also involves understanding the limitations of the AI system, including known failure modes and the conditions under which performance may degrade. This contextual understanding is essential for framing risks accurately — a facial recognition system used for photo organization carries very different risks than one used for law enforcement.',
        },
        {
          term: 'Measure',
          description:
            'The Measure function is about employing quantitative, qualitative, or mixed-method tools, techniques, and methodologies to assess, analyze, and monitor AI risks and their associated impacts. This includes testing and evaluating AI systems against the trustworthy characteristics identified in the framework, tracking metrics related to system performance and fairness, conducting impact assessments, and performing ongoing monitoring after deployment. The Measure function recognizes that AI risk measurement is still an evolving field — some risks are easier to quantify than others. It encourages organizations to use the best available methods while acknowledging their limitations, and to invest in developing better measurement approaches over time.',
        },
        {
          term: 'Manage',
          description:
            'The Manage function addresses the allocation of resources and actions to address the risks identified through the Map and Measure functions. It involves prioritizing risks based on their potential impact and likelihood, developing and implementing response strategies, communicating risks to stakeholders, and continuously monitoring the effectiveness of risk management actions. The Manage function also covers incident response planning, so organizations are prepared to act quickly when AI systems cause unexpected harm. This function completes the risk management cycle by ensuring that organizations are not just identifying risks but are actively doing something about them — and learning from the results.',
        },
      ],
    },
    {
      id: 'key-characteristics',
      title: 'Characteristics of Trustworthy AI',
      content:
        'The AI RMF identifies seven key characteristics that contribute to trustworthy AI systems. These characteristics are not independent — they interact with and sometimes create tension with each other. For example, increasing the explainability of a model may reduce its accuracy, or enhancing security may impact usability. The framework acknowledges these trade-offs and encourages organizations to balance them based on the specific context and use case of each AI system.\n\nThese characteristics draw on extensive research and align with principles identified by organizations worldwide, including the OECD, the European Commission, and various industry groups. They serve as the benchmark against which AI risks are assessed within the Measure function of the framework.',
      list: [
        '**Valid and Reliable** — AI systems should perform consistently and correctly under expected conditions, producing accurate and reproducible results. Validation involves confirming the system meets its intended requirements, while reliability means it maintains performance over time and across different conditions.',
        '**Safe** — AI systems should not endanger human life, health, property, or the environment under defined conditions of use. Safety considerations should address both normal operation and foreseeable misuse or failure scenarios.',
        '**Secure and Resilient** — AI systems should withstand adversarial attacks, unexpected inputs, and other disruptions while maintaining functionality. This includes cybersecurity protections as well as resilience against data poisoning, model manipulation, and prompt injection attacks.',
        '**Accountable and Transparent** — Organizations should maintain clear accountability for AI system outcomes and provide meaningful transparency about how systems work, their limitations, and the data they use. Transparency does not require revealing proprietary algorithms but does require sufficient disclosure for stakeholders to make informed decisions.',
        '**Explainable and Interpretable** — Stakeholders should be able to understand the reasons behind AI system outputs at a level appropriate to the context. Explainability refers to the ability to describe how a system works in human-understandable terms, while interpretability refers to the meaning of the system\'s output in the context of its designed purpose.',
        '**Privacy-Enhanced** — AI systems should protect individual privacy throughout the data lifecycle, from collection through processing, use, and disposal. This includes technical measures like de-identification and differential privacy, as well as organizational practices around data governance and consent.',
        '**Fair, with Harmful Bias Managed** — AI systems should be designed and used in ways that are equitable, and organizations should proactively identify and manage harmful biases. The framework distinguishes between statistical bias (a technical concept) and harmful bias that causes systematic, unfair disadvantage to individuals or groups. Fairness is highly context-dependent and requires ongoing attention rather than a one-time fix.',
      ],
    },
    {
      id: 'genai-profile',
      title: 'Generative AI Profile (NIST AI 600-1)',
      content:
        'In July 2024, NIST published the Generative AI Profile, formally designated as NIST AI 600-1, as a companion resource to the AI RMF. The profile recognizes that generative AI systems — large language models, image generators, code assistants, and similar technologies — introduce risks that the original AI RMF addressed only in general terms. The Generative AI Profile maps these specific risks to the existing AI RMF functions and categories, providing targeted guidance without creating an entirely separate framework.\n\nThe Generative AI Profile identifies a dozen categories of risks that are unique to or significantly amplified by generative AI systems. These are not theoretical concerns — they reflect real-world incidents and known failure modes that have emerged as generative AI adoption has accelerated.\n\n**Confabulation (Hallucination).** Generative AI systems can produce outputs that are factually incorrect, fabricated, or inconsistent but presented with apparent confidence. This risk is particularly dangerous in high-stakes contexts like healthcare, legal advice, and financial analysis where users may rely on AI outputs without verification.\n\n**CBRN Information.** Large language models may provide information related to chemical, biological, radiological, and nuclear threats. The profile addresses the risk that generative AI could lower barriers to accessing dangerous knowledge, even when safety guardrails are in place.\n\n**Child Sexual Abuse Material (CSAM).** Image generation models can potentially produce illegal content, and the profile addresses the need for robust safeguards and content filtering at both the training data and output stages.\n\n**Data Privacy.** Generative AI systems are typically trained on massive datasets that may include personal information, and they can sometimes reproduce or reveal training data through carefully crafted prompts. The profile addresses both the privacy risks in training data and the potential for privacy violations in system outputs.\n\n**Environmental Impact.** Training and running large generative AI models requires significant computational resources, with associated energy consumption and environmental costs. The profile encourages organizations to consider these impacts as part of their risk management processes.\n\n**Intellectual Property.** Generative AI systems raise complex questions about copyright, training data rights, and the ownership of AI-generated content. The profile addresses both the risk of infringing on others\' intellectual property and the challenges of protecting one\'s own IP in the context of generative AI.\n\nThe profile also addresses risks related to information integrity (deepfakes, misinformation), information security (prompt injection, jailbreaking), dangerous or violent content, and the homogenization of outputs that can reduce diversity in information ecosystems. It provides actionable guidance organized within the familiar Govern, Map, Measure, Manage structure, so organizations already using the AI RMF can integrate generative AI risk management into their existing processes.\n\n**Cyber AI Profile (NIST IR 8596).** In December 2025, NIST released a preliminary draft of the Cyber AI Profile (NIST IR 8596), which provides guidance on managing AI-related cybersecurity risks. The Cyber AI Profile is aligned with the NIST Cybersecurity Framework (CSF) 2.0 and addresses the intersection of AI and cybersecurity — both the risks AI systems pose and the cybersecurity threats AI systems face. The comment period for the preliminary draft closed on January 30, 2026. NIST is also developing SP 800-53 "Control Overlays for Securing AI Systems" (COSAiS) to complement the Cyber AI Profile, providing specific security controls for AI systems mapped to the existing SP 800-53 control catalog.',
    },
    {
      id: 'implementation',
      title: 'Implementing the Framework',
      content:
        'The AI RMF is designed to be adaptable, and NIST provides several companion resources to help organizations put it into practice. Implementation does not require adopting every element at once — the framework explicitly supports incremental adoption based on an organization\'s maturity, resources, and risk profile.\n\nThe primary companion resource is the **NIST AI RMF Playbook** (also part of the AI 100-1 documentation), which provides suggested actions and guidance for each subcategory in the framework. The Playbook is not a checklist to complete — it is a set of practical recommendations that organizations can select from based on their specific needs.\n\nNIST also supports **community profiles**, which are tailored implementations of the AI RMF for specific sectors, use cases, or risk contexts. These profiles allow industry groups or communities of practice to create shared interpretations of the framework that reflect their unique requirements. The Generative AI Profile (AI 600-1) is one example of this approach.\n\nFor organizations starting from scratch, the following steps provide a practical path to implementation:',
      list: [
        '**Assess your current state.** Before adopting the framework, understand what AI risk management practices you already have in place. Many organizations already have elements of AI governance without a formal structure — data quality processes, model validation procedures, or incident response plans. Identifying these existing practices helps you avoid starting from zero.',
        '**Start with Govern.** The Govern function is the foundation. Establish leadership buy-in, define roles and responsibilities for AI risk management, and create policies that set expectations. Without governance in place, the other functions will lack organizational support.',
        '**Inventory your AI systems.** You cannot manage risk for systems you do not know about. Create a comprehensive inventory of AI systems in development and production, including third-party AI tools and APIs your organization uses. Document the purpose, data inputs, and stakeholders for each system.',
        '**Prioritize by risk.** Not all AI systems carry the same risk. Focus your initial efforts on systems that affect people\'s rights, safety, or access to critical resources. A recommendation algorithm for internal document search carries different risks than an AI system used in hiring or healthcare decisions.',
        '**Map context for high-priority systems.** For your highest-risk systems, work through the Map function to document the intended purpose, affected stakeholders, potential harms, data requirements, and regulatory landscape. This context is essential for accurate risk assessment.',
        '**Establish measurement practices.** Implement testing, evaluation, and monitoring processes aligned with the Measure function. Start with the trustworthy characteristics most relevant to your systems and expand over time. Track metrics and document results.',
        '**Build response and monitoring capabilities.** Develop plans for how you will respond to identified risks, aligned with the Manage function. This includes incident response procedures, escalation paths, and processes for continuous monitoring after deployment.',
        '**Document everything.** Documentation serves multiple purposes: it supports internal learning, enables accountability, facilitates regulatory engagement, and helps demonstrate due diligence. Record your risk assessments, decisions, trade-offs, and the rationale behind them.',
        '**Iterate and improve.** The AI RMF is designed for continuous improvement. Revisit your risk assessments as systems evolve, new risks emerge, or the regulatory landscape changes. Treat AI risk management as an ongoing practice, not a project with an end date.',
      ],
    },
    {
      id: 'relationship-to-regulation',
      title: 'Relationship to Regulation',
      content:
        'The NIST AI RMF occupies an unusual position in the regulatory landscape: it is a voluntary framework published by a non-regulatory agency, yet it is increasingly embedded in actual legal and regulatory requirements. Understanding this dynamic is critical for organizations that are trying to determine how much effort to invest in AI RMF alignment.\n\n**Federal policy and procurement.** Executive Order 14110, signed by President Biden in October 2023, directed federal agencies to use NIST frameworks and guidance when managing AI risks. While EO 14110 was revoked in January 2025, the Office of Management and Budget subsequently issued **OMB M-25-21** ("Accelerating Federal Use of AI through Innovation, Governance, and Public Trust") in April 2025, replacing the earlier Biden-era M-24-10. The new guidance shifts from a risk-focused framework toward one emphasizing innovation and removing bureaucratic barriers to federal AI adoption, but the NIST AI RMF remains referenced as a compliance framework. A companion memo, M-25-22, covers AI procurement. For any organization that sells to or works with the federal government, familiarity with the AI RMF remains a practical necessity.\n\n**State legislation.** Colorado\'s SB 24-205, the Colorado AI Act, is one of the most significant state-level AI laws in the United States. The law explicitly recognizes that deployers and developers who follow established AI risk management frameworks — with NIST\'s AI RMF specifically referenced — can use that compliance as an affirmative defense or evidence of reasonable care. This creates a strong practical incentive: organizations that adopt the AI RMF have a measurable legal advantage when operating in Colorado. Other states are watching Colorado closely, and similar references to NIST are likely to appear in future state legislation.\n\n**EU AI Act alignment.** While the EU AI Act has its own risk management requirements, the NIST AI RMF aligns closely with the EU\'s approach in many areas. Both frameworks emphasize risk-based governance, transparency, accountability, and human oversight. Organizations that implement the AI RMF will find significant overlap with EU AI Act requirements, particularly for the risk management system required under Articles 9 and 17. This alignment is not accidental — NIST engaged with international counterparts during the framework\'s development.\n\n**Industry standards.** The AI RMF is influencing emerging industry standards, including ISO/IEC 42001 (AI Management Systems) and sector-specific AI governance frameworks. Organizations that adopt the AI RMF are building capabilities that will transfer to these standards as they mature.\n\nThe practical reality is that "voluntary" means organizations are not subject to penalties solely for failing to adopt the AI RMF. But in a regulatory environment where multiple laws reference or align with NIST, where federal contracts expect NIST compliance, and where courts may look to recognized frameworks as evidence of reasonable care, the distinction between "voluntary" and "required" is narrower than it appears on paper.',
    },
    {
      id: 'practical-steps',
      title: 'What Organizations Should Do Now',
      content:
        'Regardless of whether your organization is directly subject to AI-specific regulation today, the AI RMF provides a practical and defensible approach to AI governance. The following steps are appropriate for most organizations using or developing AI systems.',
      list: [
        '**Designate AI governance ownership.** Assign clear responsibility for AI risk management within your organization. This does not require creating a new department — it may be a cross-functional working group, a designated individual within an existing risk or compliance function, or an expansion of your CTO\'s mandate. What matters is that someone is accountable.',
        '**Download and read the actual documents.** The AI RMF (NIST AI 100-1) is 72 pages, and the Playbook is available as an interactive web resource. These are accessible, well-written documents — not impenetrable regulatory text. Start with Part 2 of the AI RMF, which contains the core functions and categories.',
        '**Map the AI RMF to your existing practices.** Most organizations are not starting from zero. Map what you already do — security reviews, data governance, model validation, bias testing — to the AI RMF\'s categories and subcategories. This gives you a gap analysis that shows where your current practices are strong and where you need to build.',
        '**Conduct a risk assessment of your AI portfolio.** Use the Map function to document the risks associated with your highest-impact AI systems. Consider who is affected, what could go wrong, what data is involved, and what regulatory requirements apply. Write this down.',
        '**If you use generative AI, review NIST AI 600-1.** The Generative AI Profile addresses risks specific to large language models and other generative systems. If your organization uses or builds on generative AI, this document provides targeted guidance on risks like confabulation, data privacy, and content safety.',
        '**Build AI risk management into procurement.** When purchasing AI tools or services from vendors, ask about their AI risk management practices. Require vendors to document how their systems align with AI RMF principles. Include AI risk management requirements in vendor contracts.',
        '**Establish documentation practices.** Start documenting your AI risk management decisions, assessments, and rationale now. If regulations tighten or you face a legal challenge, this documentation will demonstrate that your organization took AI risk management seriously and acted in good faith.',
        '**Monitor the regulatory landscape.** AI regulation is evolving rapidly at the federal, state, and international levels. Many emerging laws reference or align with the NIST AI RMF. Organizations that have already adopted the framework will be better positioned to adapt to new requirements as they emerge.',
        '**Engage with NIST resources.** NIST maintains an active AI risk management community, including the [NIST AI RMF Playbook](https://airc.nist.gov/AI_RMF_Interactivity/Playbook), community profiles, and ongoing workshops and public comment opportunities. Participating in these processes helps you stay current and contribute to the framework\'s evolution.',
      ],
    },
  ],

  timeline: [
    {
      date: 'July 2021',
      event:
        'NIST issues a Request for Information (RFI) seeking public input on AI risk management, beginning the development process that would lead to the AI RMF.',
    },
    {
      date: 'March 2022',
      event:
        'NIST publishes the initial draft of the AI Risk Management Framework for public comment, receiving extensive feedback from more than 240 organizations.',
    },
    {
      date: 'August 2022',
      event:
        'NIST releases a second draft of the AI RMF incorporating public feedback, with additional workshops and comment periods to refine the framework.',
    },
    {
      date: 'January 26, 2023',
      event:
        'NIST publishes the AI Risk Management Framework 1.0 (NIST AI 100-1), the final version of the voluntary framework for managing AI risks.',
    },
    {
      date: 'January 2023',
      event:
        'Alongside the AI RMF, NIST releases the companion AI RMF Playbook, providing practical guidance and suggested actions for each subcategory of the framework.',
    },
    {
      date: 'October 30, 2023',
      event:
        'President Biden signs Executive Order 14110 on Safe, Secure, and Trustworthy AI, directing federal agencies to use NIST frameworks for AI risk management.',
    },
    {
      date: 'July 2024',
      event:
        'NIST publishes the Generative AI Profile (NIST AI 600-1), a companion resource addressing risks specific to generative AI systems including large language models and image generators.',
    },
    {
      date: 'June 2025',
      event:
        'U.S. AI Safety Institute renamed to Center for AI Standards and Innovation (CAISI) by the Trump administration. Secretary of Commerce Howard Lutnick announced the rebranding. CAISI continues to operate within NIST.',
    },
    {
      date: '2024–2025',
      event:
        'NIST continues to develop community profiles, crosswalks to international standards, and updated guidance. State legislatures increasingly reference NIST AI frameworks in new AI legislation.',
    },
    {
      date: 'December 2025',
      event:
        'NIST releases preliminary draft Cyber AI Profile (NIST IR 8596), providing guidance on managing AI-related cybersecurity risks aligned with the NIST Cybersecurity Framework 2.0.',
    },
  ],

  sources: [
    {
      title: 'NIST AI Risk Management Framework (AI RMF 1.0)',
      url: 'https://airc.nist.gov/AI_RMF_Interactivity/ai-rmf',
      description:
        'The official interactive version of the AI RMF 1.0 document (NIST AI 100-1), including all core functions, categories, and subcategories.',
    },
    {
      title: 'NIST AI RMF Playbook',
      url: 'https://airc.nist.gov/AI_RMF_Interactivity/Playbook',
      description:
        'Companion resource providing suggested actions and practical guidance for each subcategory of the AI RMF.',
    },
    {
      title: 'NIST AI 600-1: Generative AI Profile',
      url: 'https://airc.nist.gov/Docs/1',
      description:
        'The Generative AI Profile, published July 2024, mapping generative AI-specific risks to the AI RMF framework.',
    },
    {
      title: 'NIST Artificial Intelligence Portal',
      url: 'https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence',
      description:
        'NIST\'s central hub for AI-related standards, frameworks, and guidance including resources related to Executive Order 14110.',
    },
    {
      title: 'Executive Order 14110 on Safe, Secure, and Trustworthy AI',
      url: 'https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/',
      description:
        'The October 2023 executive order directing federal agencies to use NIST frameworks for AI risk management.',
    },
    {
      title: 'Colorado SB 24-205 (Colorado AI Act)',
      url: 'https://leg.colorado.gov/bills/sb24-205',
      description:
        'Colorado state legislation that references NIST AI risk management frameworks as a benchmark for compliance.',
    },
    {
      title: 'Center for AI Standards and Innovation (CAISI)',
      url: 'https://www.nist.gov/caisi',
      description:
        'Formerly the U.S. AI Safety Institute, renamed June 2025.',
    },
  ],

  relatedRegulations: ['eu-ai-act', 'federal-policy'],
}
