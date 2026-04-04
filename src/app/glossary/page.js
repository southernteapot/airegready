import Breadcrumb from '@/components/Breadcrumb'
import Disclaimer from '@/components/Disclaimer'
import Link from 'next/link'

export const metadata = {
  title: 'AI Glossary | AIRegReady',
  description:
    'Definitions of key AI terms: GPAI, Annex III, algorithmic discrimination, AEDT, high-risk AI systems, and more. A plain-English reference for understanding AI frameworks and regulation.',
  alternates: { canonical: 'https://airegready.com/glossary' },
}

const glossaryTerms = [
  {
    id: 'aedt',
    term: 'AEDT (Automated Employment Decision Tool)',
    definition:
      'A system that uses machine learning, AI, or statistical methods to substantially assist or replace human decision-making in hiring or promotion. New York City Local Law 144 requires employers to conduct annual bias audits before using an AEDT, and to notify candidates that the tool is being used.',
    seeAlso: [
      { label: 'Bias Audit', href: '#bias-audit' },
      { label: 'Algorithmic Discrimination', href: '#algorithmic-discrimination' },
      { label: 'U.S. State AI Laws', href: '/regulations/us-state-laws' },
    ],
  },
  {
    id: 'ai-act',
    term: 'AI Act (EU AI Act)',
    definition:
      'The European Union\'s comprehensive regulation on artificial intelligence, finalized in 2024. It classifies AI systems into risk tiers (unacceptable, high, limited, and minimal) and imposes obligations that scale with the level of risk. It applies to providers and deployers of AI systems operating in or affecting the EU market.',
    seeAlso: [
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
      { label: 'Risk-Based Approach', href: '#risk-based-approach' },
      { label: 'EU AI Act Guide', href: '/regulations/eu-ai-act' },
    ],
  },
  {
    id: 'ai-literacy',
    term: 'AI Literacy',
    definition:
      'Under the EU AI Act, organizations that provide or deploy AI systems must ensure their staff have a sufficient understanding of AI to operate those systems responsibly. This is not a vague aspiration — Article 4 makes it a legal requirement. The level of literacy expected depends on the context, the technology, and who is affected.',
    seeAlso: [
      { label: 'AI Act', href: '#ai-act' },
      { label: 'Human Oversight', href: '#human-oversight' },
    ],
  },
  {
    id: 'ai-office',
    term: 'AI Office',
    definition:
      'The body within the European Commission responsible for overseeing implementation and enforcement of the EU AI Act, particularly for general-purpose AI models. The AI Office coordinates with national authorities, develops guidance documents, and manages the regulatory sandbox framework.',
    seeAlso: [
      { label: 'AI Act', href: '#ai-act' },
      { label: 'GPAI', href: '#gpai' },
      { label: 'Regulatory Sandbox', href: '#regulatory-sandbox' },
    ],
  },
  {
    id: 'ai-rmf',
    term: 'AI RMF (AI Risk Management Framework)',
    definition:
      'A voluntary framework published by NIST (National Institute of Standards and Technology) that provides structured guidance for managing risks throughout the AI lifecycle. It is organized around four functions: Govern, Map, Measure, and Manage. While not legally binding, it is increasingly referenced in U.S. federal policy and industry best practices.',
    seeAlso: [
      { label: 'NIST', href: '#nist' },
      { label: 'Risk-Based Approach', href: '#risk-based-approach' },
      { label: 'NIST AI RMF Guide', href: '/regulations/nist-ai-rmf' },
    ],
  },
  {
    id: 'algorithmic-discrimination',
    term: 'Algorithmic Discrimination',
    definition:
      'When an AI system produces outcomes that unfairly disadvantage people based on protected characteristics like race, gender, age, or disability. This can happen even without discriminatory intent — biased training data or flawed model design can produce disparate outcomes. Multiple U.S. state laws and the EU AI Act address this risk directly.',
    seeAlso: [
      { label: 'Bias Audit', href: '#bias-audit' },
      { label: 'Disparate Impact', href: '#disparate-impact' },
      { label: 'U.S. State AI Laws', href: '/regulations/us-state-laws' },
    ],
  },
  {
    id: 'algorithmic-impact-assessment',
    term: 'Algorithmic Impact Assessment (AIA)',
    definition:
      'A structured evaluation of how an AI system affects individuals and groups, particularly with respect to fairness, privacy, and civil rights. Several U.S. state bills and the Blueprint for an AI Bill of Rights call for impact assessments before deploying high-risk AI. Think of it as an environmental impact statement, but for algorithms.',
    seeAlso: [
      { label: 'Blueprint for AI Bill of Rights', href: '#blueprint-for-ai-bill-of-rights' },
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
    ],
  },
  {
    id: 'annex-iii',
    term: 'Annex III (EU AI Act)',
    definition:
      'The section of the EU AI Act that lists specific use cases classified as high-risk. It covers areas like biometric identification, critical infrastructure, education, employment, law enforcement, migration, and access to essential services. If your AI system falls into one of these categories, the full suite of high-risk obligations applies.',
    seeAlso: [
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
      { label: 'AI Act', href: '#ai-act' },
      { label: 'EU AI Act Risk Classification', href: '/blog/eu-ai-act-risk-classification' },
    ],
  },
  {
    id: 'bias-audit',
    term: 'Bias Audit',
    definition:
      'An independent evaluation of an AI system to test whether it produces discriminatory outcomes across demographic groups. New York City\'s Local Law 144 requires annual bias audits for automated employment decision tools. The audit must be conducted by an independent auditor and the results must be publicly posted.',
    seeAlso: [
      { label: 'AEDT', href: '#aedt' },
      { label: 'Algorithmic Discrimination', href: '#algorithmic-discrimination' },
      { label: 'AI Hiring Laws', href: '/blog/us-states-ai-hiring' },
    ],
  },
  {
    id: 'blueprint-for-ai-bill-of-rights',
    term: 'Blueprint for an AI Bill of Rights',
    definition:
      'A 2022 White House framework outlining five principles for protecting the public from AI harms: safe and effective systems, algorithmic discrimination protections, data privacy, notice and explanation, and human alternatives. It is non-binding but has influenced subsequent federal policy and state legislation.',
    seeAlso: [
      { label: 'Algorithmic Impact Assessment', href: '#algorithmic-impact-assessment' },
      { label: 'Federal AI Policy', href: '/regulations/federal-policy' },
    ],
  },
  {
    id: 'caisi',
    term: 'CAISI (Coordinated AI Safety Initiative)',
    definition:
      'Collaborative efforts among governments and international organizations to align AI safety standards and research. These initiatives aim to ensure that AI safety work is not duplicated or contradictory across jurisdictions, and to share information about emerging risks from advanced AI systems.',
    seeAlso: [
      { label: 'Global AI Governance', href: '/regulations/global' },
      { label: 'Systemic Risk', href: '#systemic-risk' },
    ],
  },
  {
    id: 'ce-marking',
    term: 'CE Marking',
    definition:
      'A certification mark indicating that a product meets EU safety, health, and environmental requirements. Under the EU AI Act, high-risk AI systems must obtain CE marking before being placed on the EU market. This requires completing a conformity assessment and maintaining proper technical documentation.',
    seeAlso: [
      { label: 'Conformity Assessment', href: '#conformity-assessment' },
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
      { label: 'EU AI Act Compliance Checklist', href: '/blog/eu-ai-act-compliance-checklist' },
    ],
  },
  {
    id: 'conformity-assessment',
    term: 'Conformity Assessment',
    definition:
      'The process by which a provider of a high-risk AI system demonstrates that their system meets all applicable requirements of the EU AI Act before placing it on the market. Depending on the use case, this may be self-assessed or require review by a third-party notified body. It covers technical documentation, risk management, data governance, and more.',
    seeAlso: [
      { label: 'CE Marking', href: '#ce-marking' },
      { label: 'Technical Documentation', href: '#technical-documentation' },
      { label: 'Provider', href: '#provider' },
    ],
  },
  {
    id: 'data-governance',
    term: 'Data Governance',
    definition:
      'The policies, processes, and standards an organization uses to manage the data that trains and operates its AI systems. Under the EU AI Act, providers of high-risk AI systems must implement data governance practices covering training data quality, relevance, representativeness, and bias detection. Good data governance is foundational to every other compliance obligation.',
    seeAlso: [
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
      { label: 'Bias Audit', href: '#bias-audit' },
    ],
  },
  {
    id: 'deployer',
    term: 'Deployer (EU AI Act)',
    definition:
      'Any organization or person that uses an AI system under their authority, except for personal non-professional use. In practical terms, if your company buys or licenses an AI tool and uses it in your operations, you are a deployer. The EU AI Act imposes specific obligations on deployers of high-risk systems, including human oversight and monitoring duties.',
    seeAlso: [
      { label: 'Provider', href: '#provider' },
      { label: 'AI Act', href: '#ai-act' },
      { label: 'EU AI Act Guide', href: '/regulations/eu-ai-act' },
    ],
  },
  {
    id: 'disparate-impact',
    term: 'Disparate Impact',
    definition:
      'A legal concept where a facially neutral practice disproportionately harms a protected group. In AI, this often arises when a model trained on historical data reproduces patterns of past discrimination — even though the algorithm itself does not explicitly use protected characteristics. It is central to AI discrimination claims under U.S. civil rights law.',
    seeAlso: [
      { label: 'Algorithmic Discrimination', href: '#algorithmic-discrimination' },
      { label: 'ECOA', href: '#ecoa' },
      { label: 'EEOC', href: '#eeoc' },
    ],
  },
  {
    id: 'ecoa',
    term: 'ECOA (Equal Credit Opportunity Act)',
    definition:
      'A U.S. federal law that prohibits discrimination in lending based on race, color, religion, national origin, sex, marital status, age, or public assistance status. When lenders use AI for credit decisions, they must ensure these models do not produce discriminatory outcomes — and they must provide adverse action notices that explain why an applicant was denied.',
    seeAlso: [
      { label: 'Disparate Impact', href: '#disparate-impact' },
      { label: 'Sector-Specific Rules', href: '/regulations/sector-rules' },
    ],
  },
  {
    id: 'eeoc',
    term: 'EEOC (Equal Employment Opportunity Commission)',
    definition:
      'The U.S. federal agency that enforces workplace anti-discrimination laws. The EEOC has issued guidance stating that employers are liable for discriminatory outcomes from AI hiring tools, even if those tools were developed by third-party vendors. If your AI screening tool produces disparate impact, you — not just the vendor — may face enforcement action.',
    seeAlso: [
      { label: 'AEDT', href: '#aedt' },
      { label: 'Disparate Impact', href: '#disparate-impact' },
      { label: 'AI Hiring Laws', href: '/blog/us-states-ai-hiring' },
    ],
  },
  {
    id: 'explainability',
    term: 'Explainability',
    definition:
      'The ability to describe how an AI system reaches a particular decision in terms that humans can understand. Multiple regulations require some form of explainability — the EU AI Act requires it for high-risk systems, U.S. lending laws require adverse action explanations, and the Blueprint for an AI Bill of Rights lists it as a core principle. The level of explanation needed varies by context and audience.',
    seeAlso: [
      { label: 'Transparency Obligation', href: '#transparency-obligation' },
      { label: 'Human Oversight', href: '#human-oversight' },
    ],
  },
  {
    id: 'fcra',
    term: 'FCRA (Fair Credit Reporting Act)',
    definition:
      'A U.S. federal law regulating how consumer information is collected, shared, and used. When AI systems process consumer reports for employment screening, lending, or insurance, FCRA requirements apply — including accuracy obligations, dispute rights, and disclosure requirements. AI-powered background check tools frequently trigger FCRA compliance obligations.',
    seeAlso: [
      { label: 'ECOA', href: '#ecoa' },
      { label: 'Sector-Specific Rules', href: '/regulations/sector-rules' },
    ],
  },
  {
    id: 'flops',
    term: 'FLOPs (Floating Point Operations)',
    definition:
      'A measure of computational effort used to train an AI model. The EU AI Act uses a FLOPs threshold (10^25) to identify GPAI models that may pose systemic risk. Models above this threshold face additional obligations including adversarial testing, incident reporting, and cybersecurity requirements. The threshold may be updated over time as compute capabilities evolve.',
    seeAlso: [
      { label: 'GPAI', href: '#gpai' },
      { label: 'Systemic Risk', href: '#systemic-risk' },
      { label: 'Foundation Model', href: '#foundation-model' },
    ],
  },
  {
    id: 'foundation-model',
    term: 'Foundation Model',
    definition:
      'A large AI model trained on broad data that can be adapted for a wide range of downstream tasks. GPT-4, Claude, Llama, and Gemini are foundation models. The EU AI Act regulates these under its GPAI provisions, and the term is also used in various U.S. policy documents. Foundation models are significant from a regulatory perspective because a single model can power many different applications — including high-risk ones.',
    seeAlso: [
      { label: 'GPAI', href: '#gpai' },
      { label: 'Generative AI', href: '#generative-ai' },
      { label: 'GPAI Code of Practice', href: '/blog/gpai-code-of-practice' },
    ],
  },
  {
    id: 'gpai',
    term: 'GPAI (General-Purpose AI)',
    definition:
      'An AI model that can perform a wide variety of tasks, rather than being designed for a single purpose. The EU AI Act created a specific regulatory category for GPAI models, requiring providers to maintain technical documentation, comply with copyright rules, and publish training content summaries. GPAI models with systemic risk face additional obligations.',
    seeAlso: [
      { label: 'Foundation Model', href: '#foundation-model' },
      { label: 'Systemic Risk', href: '#systemic-risk' },
      { label: 'EU AI Act Guide', href: '/regulations/eu-ai-act' },
      { label: 'GPAI Code of Practice', href: '/blog/gpai-code-of-practice' },
    ],
  },
  {
    id: 'generative-ai',
    term: 'Generative AI',
    definition:
      'AI systems that create new content — text, images, audio, video, or code — based on patterns learned from training data. Under the EU AI Act, AI-generated content must be disclosed as such in many contexts (a transparency obligation). Generative AI also raises questions under copyright law, data protection rules, and sector-specific regulations.',
    seeAlso: [
      { label: 'GPAI', href: '#gpai' },
      { label: 'Transparency Obligation', href: '#transparency-obligation' },
    ],
  },
  {
    id: 'high-risk-ai-system',
    term: 'High-Risk AI System',
    definition:
      'Under the EU AI Act, an AI system that falls into one of the use cases listed in Annex III or is a safety component of a product covered by existing EU harmonized legislation. High-risk systems face the most demanding compliance requirements: risk management systems, data governance, technical documentation, record-keeping, transparency, human oversight, accuracy, robustness, and cybersecurity. This is where most of the compliance work under the EU AI Act lives.',
    seeAlso: [
      { label: 'Annex III', href: '#annex-iii' },
      { label: 'Conformity Assessment', href: '#conformity-assessment' },
      { label: 'EU AI Act Risk Classification', href: '/blog/eu-ai-act-risk-classification' },
    ],
  },
  {
    id: 'human-oversight',
    term: 'Human Oversight',
    definition:
      'The requirement that humans can monitor, understand, and intervene in the operation of an AI system. For high-risk AI under the EU AI Act, this means the system must be designed so a human can effectively supervise it, understand its outputs, and override or shut it down when needed. "Human in the loop" is a related but narrower concept — oversight can also mean human-on-the-loop (monitoring) or human-in-command (authority to override).',
    seeAlso: [
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
      { label: 'Explainability', href: '#explainability' },
      { label: 'AI Literacy', href: '#ai-literacy' },
    ],
  },
  {
    id: 'iso-iec-42001',
    term: 'ISO/IEC 42001',
    definition:
      'The international standard for AI management systems, published in 2023. It provides a framework for organizations to establish, implement, maintain, and improve their AI governance. Certification to ISO 42001 is voluntary, but it can help demonstrate compliance with regulations like the EU AI Act and may be referenced in conformity assessments.',
    seeAlso: [
      { label: 'Conformity Assessment', href: '#conformity-assessment' },
      { label: 'AI RMF', href: '#ai-rmf' },
    ],
  },
  {
    id: 'limited-risk-ai',
    term: 'Limited Risk AI',
    definition:
      'AI systems that the EU AI Act subjects to transparency obligations but not the full compliance regime of high-risk systems. This category includes chatbots (which must disclose they are AI), emotion recognition systems, biometric categorization systems, and AI that generates deepfakes. The main obligation is to inform users that they are interacting with or being subject to AI.',
    seeAlso: [
      { label: 'Transparency Obligation', href: '#transparency-obligation' },
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
      { label: 'Minimal Risk AI', href: '#minimal-risk-ai' },
    ],
  },
  {
    id: 'minimal-risk-ai',
    term: 'Minimal Risk AI',
    definition:
      'AI systems that do not fall into the unacceptable, high-risk, or limited-risk categories under the EU AI Act. These systems — which include most AI applications like spam filters, AI-powered video games, and inventory management tools — can be developed and deployed without specific regulatory obligations under the Act, though the AI literacy requirement still applies.',
    seeAlso: [
      { label: 'Limited Risk AI', href: '#limited-risk-ai' },
      { label: 'Risk-Based Approach', href: '#risk-based-approach' },
    ],
  },
  {
    id: 'model-risk-management',
    term: 'Model Risk Management',
    definition:
      'The practice of identifying, measuring, and mitigating risks that arise from using models (including AI/ML models) in decision-making. The concept originates from financial services regulation (OCC SR 11-7 / Fed SR 15-7), but the principles — validation, monitoring, governance, documentation — apply broadly to AI compliance across sectors.',
    seeAlso: [
      { label: 'AI RMF', href: '#ai-rmf' },
      { label: 'AI Risk Management', href: '/blog/ai-risk-management-program' },
    ],
  },
  {
    id: 'naic',
    term: 'NAIC (National Association of Insurance Commissioners)',
    definition:
      'The U.S. organization of state insurance regulators that develops model laws and guidelines. The NAIC has issued a model bulletin on the use of AI in insurance, requiring insurers to govern AI systems to avoid unfair discrimination. Several states have adopted or are considering adoption of this guidance, making it a de facto regulatory standard for AI in insurance.',
    seeAlso: [
      { label: 'Sector-Specific Rules', href: '/regulations/sector-rules' },
      { label: 'Algorithmic Discrimination', href: '#algorithmic-discrimination' },
    ],
  },
  {
    id: 'nist',
    term: 'NIST (National Institute of Standards and Technology)',
    definition:
      'A U.S. federal agency that develops technology standards and frameworks. For AI, NIST is most known for the AI Risk Management Framework (AI RMF) and its work on AI safety testing and evaluation. NIST standards are voluntary but carry significant weight — they are frequently referenced in executive orders, federal procurement rules, and industry guidelines.',
    seeAlso: [
      { label: 'AI RMF', href: '#ai-rmf' },
      { label: 'NIST AI RMF Guide', href: '/regulations/nist-ai-rmf' },
    ],
  },
  {
    id: 'omb-m-25-21',
    term: 'OMB M-25-21',
    definition:
      'A memorandum from the Office of Management and Budget directing federal agencies on AI governance. It requires agencies to designate Chief AI Officers, maintain AI use case inventories, implement risk management for AI that impacts rights or safety, and ensure adequate human oversight. It applies to federal agency use of AI, not the private sector directly, but it sets expectations that often trickle into procurement requirements.',
    seeAlso: [
      { label: 'AI RMF', href: '#ai-rmf' },
      { label: 'Federal AI Policy', href: '/regulations/federal-policy' },
    ],
  },
  {
    id: 'pccp',
    term: 'PCCP (Predetermined Change Control Plan)',
    definition:
      'A plan that describes the specific modifications an AI-enabled medical device can make to itself (through learning or adaptation) without requiring a new FDA submission. PCCPs are part of the FDA\'s evolving framework for regulating AI/ML-based Software as a Medical Device. They allow controlled flexibility — the device can update, but only within pre-approved boundaries.',
    seeAlso: [
      { label: 'SaMD', href: '#samd' },
      { label: 'Sector-Specific Rules', href: '/regulations/sector-rules' },
    ],
  },
  {
    id: 'provider',
    term: 'Provider (EU AI Act)',
    definition:
      'The entity that develops an AI system or has it developed, and places it on the market or puts it into service under their own name or trademark. Providers bear the heaviest compliance burden under the EU AI Act — they must conduct conformity assessments, implement risk management systems, maintain technical documentation, and register high-risk systems in the EU database.',
    seeAlso: [
      { label: 'Deployer', href: '#deployer' },
      { label: 'Conformity Assessment', href: '#conformity-assessment' },
      { label: 'EU AI Act Guide', href: '/regulations/eu-ai-act' },
    ],
  },
  {
    id: 'prohibited-ai-practices',
    term: 'Prohibited AI Practices',
    definition:
      'AI applications that the EU AI Act bans outright because they pose an unacceptable risk to fundamental rights. These include social scoring by governments, real-time remote biometric identification in public spaces (with narrow exceptions for law enforcement), manipulation techniques that exploit vulnerabilities, and emotion recognition in workplaces and schools. The prohibitions took effect in February 2025.',
    seeAlso: [
      { label: 'AI Act', href: '#ai-act' },
      { label: 'Unacceptable Risk', href: '#unacceptable-risk' },
      { label: 'EU AI Act Guide', href: '/regulations/eu-ai-act' },
    ],
  },
  {
    id: 'risk-based-approach',
    term: 'Risk-Based Approach',
    definition:
      'The regulatory philosophy of calibrating compliance obligations to the level of risk an AI system poses. Both the EU AI Act and the NIST AI RMF use this approach. The idea is simple: a spam filter should not face the same regulatory burden as an AI system that decides who gets a loan or who gets flagged by law enforcement. Obligations increase as risk increases.',
    seeAlso: [
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
      { label: 'AI RMF', href: '#ai-rmf' },
      { label: 'EU AI Act Risk Classification', href: '/blog/eu-ai-act-risk-classification' },
    ],
  },
  {
    id: 'regulatory-sandbox',
    term: 'Regulatory Sandbox',
    definition:
      'A controlled environment set up by regulators where companies can test AI systems under real-world conditions with regulatory supervision, but with relaxed enforcement. The EU AI Act requires each member state to establish at least one AI regulatory sandbox. The goal is to encourage innovation while still protecting people — companies get guidance, and regulators get visibility into emerging technology.',
    seeAlso: [
      { label: 'AI Office', href: '#ai-office' },
      { label: 'AI Act', href: '#ai-act' },
    ],
  },
  {
    id: 'samd',
    term: 'SaMD (Software as a Medical Device)',
    definition:
      'Software intended to be used for medical purposes without being part of a physical medical device. AI-powered diagnostic tools, clinical decision support systems, and patient monitoring algorithms often qualify as SaMD and are regulated by the FDA. The regulatory pathway depends on the risk level, and AI-based SaMD faces additional considerations around continuous learning and performance monitoring.',
    seeAlso: [
      { label: 'PCCP', href: '#pccp' },
      { label: 'Sector-Specific Rules', href: '/regulations/sector-rules' },
    ],
  },
  {
    id: 'shadow-ai',
    term: 'Shadow AI',
    definition:
      'The use of AI tools by employees without organizational approval, visibility, or governance. This includes using ChatGPT for work tasks, plugging company data into AI services, or building AI-powered automations outside IT oversight. Shadow AI creates compliance risks because the organization cannot assess, monitor, or document AI use it does not know about.',
    seeAlso: [
      { label: 'AI Literacy', href: '#ai-literacy' },
      { label: 'Data Governance', href: '#data-governance' },
      { label: 'Shadow AI and Compliance', href: '/blog/shadow-ai-compliance' },
    ],
  },
  {
    id: 'systemic-risk',
    term: 'Systemic Risk',
    definition:
      'Under the EU AI Act, the risk that a general-purpose AI model could have a significant impact on the EU market due to its reach, or could pose actual or foreseeable negative effects on public health, safety, security, fundamental rights, or society as a whole. GPAI models above the FLOPs threshold (or designated by the Commission) are presumed to carry systemic risk and face enhanced obligations including red-teaming and incident reporting.',
    seeAlso: [
      { label: 'GPAI', href: '#gpai' },
      { label: 'FLOPs', href: '#flops' },
      { label: 'GPAI Code of Practice', href: '/blog/gpai-code-of-practice' },
    ],
  },
  {
    id: 'technical-documentation',
    term: 'Technical Documentation',
    definition:
      'The detailed records that providers of high-risk AI systems must create and maintain under the EU AI Act. This includes the system\'s design, purpose, development process, data used, testing methodology, performance metrics, risk management measures, and instructions for use. Think of it as the compliance paper trail that proves your system was built and tested responsibly.',
    seeAlso: [
      { label: 'Conformity Assessment', href: '#conformity-assessment' },
      { label: 'Provider', href: '#provider' },
      { label: 'EU AI Act Compliance Checklist', href: '/blog/eu-ai-act-compliance-checklist' },
    ],
  },
  {
    id: 'transparency-obligation',
    term: 'Transparency Obligation',
    definition:
      'Requirements to inform people when they are interacting with an AI system or when content has been AI-generated. Under the EU AI Act, chatbots must disclose they are AI, AI-generated content (including deepfakes) must be labeled, and deployers of emotion recognition or biometric categorization must notify the people being analyzed. U.S. state laws increasingly impose similar requirements.',
    seeAlso: [
      { label: 'Limited Risk AI', href: '#limited-risk-ai' },
      { label: 'Explainability', href: '#explainability' },
      { label: 'Generative AI', href: '#generative-ai' },
    ],
  },
  {
    id: 'unacceptable-risk',
    term: 'Unacceptable Risk',
    definition:
      'The highest risk tier in the EU AI Act, reserved for AI practices that are flatly prohibited. These are applications considered so harmful to fundamental rights that no amount of compliance measures can make them acceptable. The list includes social scoring, manipulative techniques that cause harm, and most forms of real-time biometric identification in public spaces.',
    seeAlso: [
      { label: 'Prohibited AI Practices', href: '#prohibited-ai-practices' },
      { label: 'Risk-Based Approach', href: '#risk-based-approach' },
      { label: 'EU AI Act Guide', href: '/regulations/eu-ai-act' },
    ],
  },
  {
    id: 'ai-vendor-due-diligence',
    term: 'Vendor Due Diligence (AI)',
    definition:
      'The process of evaluating third-party AI tools and services before purchasing or deploying them. This includes reviewing the vendor\'s data practices, model documentation, bias testing, security posture, and compliance certifications. Under multiple frameworks, the organization deploying AI — not just the vendor that built it — is responsible for ensuring it meets regulatory requirements.',
    seeAlso: [
      { label: 'Deployer', href: '#deployer' },
      { label: 'Shadow AI', href: '#shadow-ai' },
      { label: 'AI Vendor Due Diligence Guide', href: '/blog/ai-vendor-due-diligence' },
    ],
  },
  {
    id: 'adverse-action-notice',
    term: 'Adverse Action Notice',
    definition:
      'A legally required notification given to an individual when a negative decision is made about them based in part on information from a consumer report or automated system. In AI-driven hiring, lending, and insurance, if an algorithm contributes to a denial or unfavorable terms, the affected person may be entitled to notice explaining the decision and the data sources involved.',
    seeAlso: [
      { label: 'FCRA', href: '#fcra' },
      { label: 'ECOA', href: '#ecoa' },
      { label: 'Explainability', href: '#explainability' },
    ],
  },
  {
    id: 'post-market-monitoring',
    term: 'Post-Market Monitoring',
    definition:
      'The ongoing obligation for providers of high-risk AI systems to systematically collect and analyze data about their system\'s performance after deployment. Under the EU AI Act, providers must have a post-market monitoring plan, report serious incidents, and take corrective action when issues arise. The system does not stop being your responsibility once it ships.',
    seeAlso: [
      { label: 'Provider', href: '#provider' },
      { label: 'High-Risk AI System', href: '#high-risk-ai-system' },
      { label: 'Technical Documentation', href: '#technical-documentation' },
    ],
  },
  {
    id: 'red-teaming',
    term: 'Red-Teaming (AI)',
    definition:
      'Adversarial testing of an AI system to identify vulnerabilities, failure modes, and potential harms before deployment. The EU AI Act requires red-teaming for GPAI models with systemic risk, and U.S. executive orders have called for red-team testing of frontier models. It goes beyond standard quality assurance — the goal is to actively try to make the system fail or behave dangerously.',
    seeAlso: [
      { label: 'Systemic Risk', href: '#systemic-risk' },
      { label: 'GPAI', href: '#gpai' },
    ],
  },
]

function groupByLetter(terms) {
  const sorted = [...terms].sort((a, b) =>
    a.term.replace(/^[^a-zA-Z]+/, '').localeCompare(b.term.replace(/^[^a-zA-Z]+/, ''))
  )
  const groups = {}
  for (const t of sorted) {
    const raw = t.term.replace(/^[^a-zA-Z]+/, '')
    const letter = raw[0].toUpperCase()
    if (!groups[letter]) groups[letter] = []
    groups[letter].push(t)
  }
  return groups
}

export default function GlossaryPage() {
  const grouped = groupByLetter(glossaryTerms)
  const letters = Object.keys(grouped).sort()
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[820px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Glossary' }]}
        />

        <header className="mb-10">
          <p className="uppercase text-xs font-sans font-semibold text-accent tracking-[0.15em] mb-3">
            Reference
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4">
            AI Glossary
          </h1>
          <p className="font-sans text-base text-secondary leading-relaxed max-w-[640px]">
            Definitions of the key terms you will encounter in AI regulation.
            Written in plain language, linked to the laws and frameworks they
            come from, and organized so you can find what you need fast.
          </p>
        </header>

        {/* Alphabet navigation */}
        <nav
          aria-label="Glossary alphabet navigation"
          className="sticky top-20 z-10 bg-bg/95 backdrop-blur-sm border border-border rounded-xl px-4 py-3 mb-10"
        >
          <div className="flex flex-wrap gap-1 justify-center">
            {alphabet.map((letter) => {
              const hasTerms = letters.includes(letter)
              return hasTerms ? (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-8 h-8 flex items-center justify-center rounded-lg font-sans text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="w-8 h-8 flex items-center justify-center rounded-lg font-sans text-sm text-secondary/40 cursor-default"
                >
                  {letter}
                </span>
              )
            })}
          </div>
        </nav>

        {/* Glossary terms grouped by letter */}
        <div className="flex flex-col gap-12">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`}>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="font-serif text-2xl font-bold text-accent">
                  {letter}
                </h2>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="flex flex-col gap-4">
                {grouped[letter].map((entry) => (
                  <div
                    key={entry.id}
                    id={entry.id}
                    className="bg-surface border border-border rounded-xl p-7 scroll-mt-32"
                  >
                    <h3 className="font-serif text-lg font-bold text-primary mb-2">
                      {entry.term}
                    </h3>
                    <p className="font-sans text-[15px] text-secondary leading-relaxed mb-3">
                      {entry.definition}
                    </p>
                    {entry.seeAlso && entry.seeAlso.length > 0 && (
                      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-sans text-sm">
                        <span className="text-secondary/70 font-medium">
                          See also:
                        </span>
                        {entry.seeAlso.map((link, i) => (
                          <span key={link.href} className="flex items-center">
                            {link.href.startsWith('#') ? (
                              <a
                                href={link.href}
                                className="text-accent hover:text-accent-dark underline underline-offset-2 decoration-accent/30 hover:decoration-accent transition-colors"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                className="text-accent hover:text-accent-dark underline underline-offset-2 decoration-accent/30 hover:decoration-accent transition-colors"
                              >
                                {link.label}
                              </Link>
                            )}
                            {i < entry.seeAlso.length - 1 && (
                              <span className="text-secondary/40 ml-1.5">&middot;</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Disclaimer />
      </div>
    </div>
  )
}
