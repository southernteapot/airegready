export const sectorRules = {
  id: 'sector',
  slug: 'sector-rules',
  title: 'Sector-Specific Rules',
  shortTitle: 'Sector Rules',
  description:
    'Existing federal regulators are actively applying longstanding laws to AI systems in healthcare, financial services, employment, insurance, and education. You don\u2019t need a new AI-specific statute to face AI regulation\u2014the rules are already on the books.',
  icon: '\u{1F3E5}',
  status: 'Cross-Cutting',
  lastReviewed: 'March 2026',
  keyFacts: [
    { label: 'Sectors Covered', value: 'Healthcare, Finance, Employment, Insurance, Education' },
    { label: 'Primary Regulators', value: 'FDA, CFPB, EEOC, SEC, OCC, NAIC, Dept. of Education' },
    { label: 'Regulatory Approach', value: 'Applying existing authority to AI use cases' },
    { label: 'Key Theme', value: 'Nondiscrimination and consumer protection laws already reach AI' },
  ],
  sections: [
    {
      id: 'overview',
      title: 'Overview: Existing Laws Already Apply to AI',
      content:
        'Companies waiting for Congress to pass a comprehensive AI law before taking compliance seriously are making a costly mistake. Federal and state regulators have made clear that existing statutes\u2014many decades old\u2014already govern the use of AI in regulated industries. The question is not whether your AI system will be regulated, but which existing rules apply to it.\n\nEvery major sector-specific regulator in the United States has issued guidance, enforcement actions, or both addressing AI and automated decision-making. The FDA regulates AI-powered medical devices. The CFPB enforces fair lending laws against algorithmic underwriting. The EEOC has put employers on notice that AI hiring tools can violate Title VII. State insurance commissioners are scrutinizing AI-driven underwriting and claims decisions.\n\nThis page covers the most significant sector-specific rules affecting AI systems. The common thread: if an AI system makes or influences decisions about people\u2014their health, creditworthiness, employment, insurance coverage, or education\u2014it almost certainly falls within the scope of existing federal or state regulation. Organizations deploying AI in these sectors should treat compliance as a present obligation, not a future concern.',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      content:
        'Healthcare is one of the most heavily regulated sectors for AI, with multiple overlapping frameworks governing how AI can be developed, deployed, and used in clinical settings. The FDA has been the most active federal agency in formally regulating AI products, while HIPAA and nondiscrimination rules add additional layers of compliance.\n\nAs of mid-2025, the FDA has authorized over 1,250 AI/ML-enabled medical devices\u2014a significant acceleration from roughly 500 in 2021. The regulatory framework continues to evolve: in January 2025, the FDA issued draft guidance on AI-enabled device software functions applying a Total Product Life Cycle (TPLC) approach with Predetermined Change Control Plans (PCCP). In January 2026, the FDA issued guidance reducing oversight of certain low-risk digital health products, including AI-enabled software and wearables. And in February 2026, the FDA finalized Quality Management System Regulation (QMSR) cybersecurity guidance for medical devices, reflecting the growing importance of security in connected AI systems.',
      items: [
        {
          term: 'FDA Regulation of AI/ML Software as a Medical Device (SaMD)',
          description:
            'The FDA regulates AI and machine learning software that meets the definition of a medical device. This includes diagnostic algorithms, clinical decision support tools, and imaging analysis software. The FDA uses its existing 510(k), De Novo, and Premarket Approval (PMA) pathways to evaluate these products. Importantly, the FDA has developed a framework for **predetermined change control plans**, which allow manufacturers to describe anticipated modifications to their AI/ML algorithms\u2014including retraining with new data\u2014without requiring a new regulatory submission for each update. This is a significant accommodation to the iterative nature of machine learning.',
        },
        {
          term: 'HIPAA and AI Processing of Protected Health Information (PHI)',
          description:
            'Any AI system that processes, stores, or transmits protected health information is subject to HIPAA\u2019s Privacy Rule, Security Rule, and Breach Notification Rule. This applies whether the AI is operated by a covered entity (hospital, insurer, provider) or a business associate (a vendor providing AI tools). Organizations must ensure that AI training data, model inputs, and outputs are all handled in compliance with HIPAA. The use of de-identified data for model training must meet HIPAA\u2019s de-identification standards under either the Expert Determination or Safe Harbor method.',
        },
        {
          term: 'Section 1557 of the Affordable Care Act (Nondiscrimination)',
          description:
            'Section 1557 prohibits discrimination on the basis of race, color, national origin, sex, age, or disability in health programs receiving federal financial assistance. HHS has made clear that this applies to AI and automated decision-making tools used in healthcare. If an AI system produces discriminatory outcomes in patient care, coverage decisions, or access to services, the covered entity can be held liable even if the discrimination was unintentional. The 2024 final rule under Section 1557 specifically addresses the use of clinical algorithms and AI.',
        },
        {
          term: 'ONC Health IT Certification Requirements',
          description:
            'The Office of the National Coordinator for Health Information Technology (ONC) sets certification criteria for electronic health record systems and other health IT. As AI is increasingly embedded in certified health IT products, ONC\u2019s requirements around interoperability, data transparency, and algorithmic transparency become directly relevant. Developers building AI features into certified health IT must comply with these standards.',
        },
        {
          term: 'FDA Software Bill of Materials (SBOM) for AI/ML Devices',
          description:
            'The FDA increasingly expects manufacturers of AI/ML-enabled medical devices to provide a Software Bill of Materials (SBOM)\u2014a detailed inventory of all software components, libraries, and dependencies in the device. SBOMs support cybersecurity risk management by enabling manufacturers and healthcare providers to identify vulnerabilities in third-party components, including those used in AI model training and inference pipelines. This requirement aligns with broader federal cybersecurity initiatives and the FDA\u2019s finalized QMSR cybersecurity guidance.',
        },
      ],
    },
    {
      id: 'financial-services',
      title: 'Financial Services',
      content:
        'The financial services sector has a deep body of existing consumer protection and safety-and-soundness law that applies directly to AI. Federal agencies including the CFPB, SEC, OCC, FDIC, and Federal Reserve have all weighed in on the use of AI in lending, trading, advisory services, and bank operations.\n\nThe core concern in financial services is algorithmic discrimination\u2014the risk that AI models used in lending, underwriting, or pricing produce outcomes that discriminate against protected classes. Because many AI models are trained on historical data that reflects past discrimination, this risk is not theoretical. Federal regulators have made enforcement a priority.',
      items: [
        {
          term: 'Equal Credit Opportunity Act (ECOA) and Regulation B',
          description:
            'ECOA prohibits discrimination in credit decisions on the basis of race, color, religion, national origin, sex, marital status, age, or receipt of public assistance. The CFPB has stated explicitly that creditors cannot use AI or algorithmic models as a shield against ECOA liability. If a model produces disparate impact outcomes, the creditor is responsible regardless of whether a human or an algorithm made the decision. Regulation B also requires that creditors provide **specific reasons** for adverse actions\u2014\u201cthe algorithm denied you\u201d is not an acceptable explanation.',
        },
        {
          term: 'Fair Credit Reporting Act (FCRA)',
          description:
            'The FCRA governs the use of consumer report information in credit, employment, insurance, and other decisions. AI systems that use consumer data to generate scores, assessments, or recommendations may qualify as consumer reporting agencies or users of consumer reports under the FCRA. This triggers obligations around accuracy, dispute resolution, adverse action notices, and permissible purpose limitations. The CFPB has signaled that it will scrutinize AI-driven data brokers and scoring companies under FCRA authority.',
        },
        {
          term: 'Fair Housing Act',
          description:
            'The Fair Housing Act prohibits discrimination in housing-related transactions including mortgage lending. AI models used in mortgage underwriting, property valuation (including automated valuation models), and tenant screening are all subject to fair housing requirements. The DOJ and HUD have brought enforcement actions related to algorithmic discrimination in housing.',
        },
        {
          term: 'CFPB Enforcement on Algorithmic Adverse Actions',
          description:
            'In its [Circular 2022-03](https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/), the CFPB made clear that creditors using complex algorithms\u2014including AI and machine learning\u2014must still provide specific, accurate reasons when taking adverse action against a consumer. The use of a \u201cblack box\u201d model does not excuse a creditor from this requirement. The CFPB has continued to enforce this position aggressively, and it applies to any model regardless of complexity.',
        },
        {
          term: 'SEC Guidance on AI in Trading and Advisory',
          description:
            'The SEC has addressed AI in the context of broker-dealer and investment adviser obligations. Firms using AI for trading, portfolio management, or robo-advisory services must still comply with fiduciary duties, best execution requirements, and disclosure obligations. In 2023, the SEC proposed rules specifically targeting conflicts of interest arising from the use of predictive data analytics and AI by broker-dealers and investment advisers. The SEC has also flagged \u201cAI washing\u201d\u2014firms making misleading claims about their use of AI\u2014as an enforcement priority, and has brought enforcement actions against firms for misleading investors about the role and capabilities of AI in their products.',
        },
        {
          term: 'CFPB Rule on Algorithmic Appraisal Tools',
          description:
            'The CFPB, jointly with the FHFA, FDIC, Federal Reserve, NCUA, and OCC, approved a rule requiring safeguards for AI and algorithmic tools used in home valuations. The rule addresses the risk that automated valuation models perpetuate bias in property appraisals, which can lead to discriminatory outcomes in mortgage lending. Covered institutions must adopt policies ensuring the quality, accuracy, and nondiscrimination of algorithmic appraisal outputs, with particular attention to preventing bias based on race, ethnicity, and neighborhood demographics.',
        },
        {
          term: 'State Enforcement: AI Lending Discrimination',
          description:
            'State attorneys general are independently pursuing AI-related enforcement in financial services. In July 2025, the Massachusetts Attorney General reached a settlement with a student loan company over AI underwriting models that produced disparate impact based on race and immigration status. The case underscores that AI-driven lending decisions face the same nondiscrimination requirements as traditional underwriting, and that state enforcers are willing to act where they identify algorithmic bias\u2014regardless of the status of federal guidance.',
        },
        {
          term: 'OCC and Federal Reserve: Model Risk Management (SR 11-7)',
          description:
            'Banks supervised by the OCC and Federal Reserve must comply with model risk management guidance, principally SR 11-7 (Supervision and Regulation Letter 11-7). This guidance requires banks to validate models, test them for accuracy and stability, document assumptions, and maintain ongoing monitoring. AI and machine learning models fall squarely within this framework. The OCC has emphasized that the complexity of AI models does not reduce the obligation to validate them\u2014if anything, it increases it.',
        },
      ],
    },
    {
      id: 'employment',
      title: 'Employment',
      content:
        'AI is increasingly used in hiring, promotion, performance evaluation, and workforce management. Employers are deploying tools for resume screening, video interview analysis, skills assessments, and employee monitoring. While the EEOC removed its AI-specific guidance documents from its website in January 2025 following a change in administration, the underlying employment discrimination laws\u2014Title VII, the ADA, and the ADEA\u2014continue to apply fully to AI tools. These are statutes, not guidance, and they have not been repealed or modified.\n\nA critical point for employers: you are liable for the AI tools you use, even if you purchased them from a third-party vendor. Courts and state regulators have consistently held that the employer, not the software vendor, bears responsibility for discriminatory outcomes.',
      items: [
        {
          term: 'EEOC Guidance on AI and Title VII Adverse Impact',
          description:
            'In May 2023, the EEOC issued detailed technical guidance on how Title VII\u2019s adverse impact framework applies to AI-driven selection procedures. However, on January 27, 2025, the EEOC removed this guidance\u2014along with its ADA-related AI guidance\u2014from its website, following the January 23, 2025 executive order revoking the Biden administration\u2019s AI Executive Order. The OFCCP similarly removed AI-related guidance for federal contractors. **Critically, the removal of guidance does not change the underlying law.** Title VII\u2019s adverse impact framework still fully applies to AI-driven employment decisions. If an AI tool used in hiring or promotion has a disparate impact on a protected group, the employer can be held liable\u2014regardless of whether agency guidance documents are posted on a website. Employers should continue to evaluate AI hiring tools for adverse impact and be prepared to demonstrate job-relatedness and business necessity.',
        },
        {
          term: 'Americans with Disabilities Act (ADA) Implications',
          description:
            'The EEOC previously issued guidance on how the ADA applies to AI hiring tools, though this guidance was removed from the EEOC website in January 2025 along with other AI-related materials. The underlying legal requirements remain unchanged. AI assessments that screen out applicants with disabilities\u2014for example, video analysis tools that penalize atypical speech patterns or facial expressions\u2014may violate the ADA unless the employer can show the tool measures abilities genuinely required for the job. Employers must also provide reasonable accommodations for applicants who cannot fully engage with AI-powered assessment tools due to a disability.',
        },
        {
          term: 'State-Level Employment AI Laws',
          description:
            'Several states have enacted laws specifically targeting AI in employment. **New York City Local Law 144** (effective July 2023) requires employers using automated employment decision tools (AEDTs) to conduct annual bias audits and provide notice to candidates. **Illinois** originally enacted the Artificial Intelligence Video Interview Act (AIVITA) covering AI analysis of video interviews. In 2025, Illinois signed into law **HB 3773 (the AI Transparency in Employment Act)**, which significantly expands AIVITA to cover all AI analysis of applicants\u2014not just video interviews\u2014requiring notice, explanation, and consent for any AI-driven evaluation of job candidates. Other states are advancing similar legislation. For more detail, see the [U.S. State AI Laws](/regulations/us-state-laws) page.',
        },
        {
          term: 'Employer Liability for Vendor AI Tools',
          description:
            'Purchasing an AI tool from a vendor does not transfer legal liability. If a vendor\u2019s resume screening tool produces discriminatory outcomes, the employer faces the EEOC complaint or lawsuit\u2014not the vendor. This means employers must conduct due diligence on AI vendors, require documentation of bias testing, include contractual protections, and maintain the ability to audit and explain the tools they deploy. \u201cWe didn\u2019t build it\u201d is not a defense.',
        },
      ],
    },
    {
      id: 'insurance',
      title: 'Insurance',
      content:
        'Insurance is regulated primarily at the state level, but coordinated national guidance has emerged through the National Association of Insurance Commissioners (NAIC). AI is used extensively in insurance for underwriting, pricing, claims processing, fraud detection, and marketing. The central regulatory concern is unfair discrimination\u2014the risk that AI models use data proxies to discriminate against protected classes in ways that violate state insurance laws.',
      items: [
        {
          term: 'NAIC Model Bulletin on AI in Insurance (December 2023)',
          description:
            'In December 2023, the NAIC adopted a [model bulletin](https://content.naic.org/sites/default/files/inline-files/2023-12-4-model-bulletin-use-of-AI-systems-by-insurers.pdf) on the use of AI systems by insurers. The bulletin does not create new legal requirements but clarifies how existing unfair trade practices laws apply to AI. It states that insurers are responsible for AI outcomes even when using third-party models or data, must maintain governance frameworks for AI use, and must be able to explain AI-driven decisions to regulators. Several states have adopted the model bulletin or issued their own guidance based on it.',
        },
        {
          term: 'Unfair Discrimination in AI Underwriting and Pricing',
          description:
            'State insurance laws generally prohibit \u201cunfair discrimination\u201d\u2014using protected characteristics (race, religion, national origin) in underwriting or pricing. AI models trained on historical data can produce unfairly discriminatory outcomes through proxy variables even without explicitly using protected characteristics as inputs. Regulators are increasingly requiring insurers to test AI models for these proxy effects and demonstrate that pricing and underwriting decisions are actuarially justified.',
        },
        {
          term: 'Colorado\u2019s Insurance-Specific AI Provisions',
          description:
            'Colorado has been the most aggressive state on AI in insurance. SB 21-169 (enacted 2021, with regulations taking effect in phases) requires insurers to test for unfair discrimination in AI-driven insurance practices, including external consumer data and algorithms used in underwriting, pricing, and claims. The Colorado Division of Insurance has issued detailed regulations requiring governance frameworks, testing protocols, and documentation. Colorado\u2019s approach is being watched closely as a model for other states.',
        },
        {
          term: 'AI in Claims Processing',
          description:
            'Regulators have flagged concerns about AI used in claims adjudication, particularly in health insurance. AI tools that automatically deny or delay claims raise unfair claims settlement practice concerns under state law. Several state attorneys general have investigated insurers using AI to deny claims at scale. The core issue: AI systems must apply the same standards that human adjusters would, and blanket algorithmic denials without individualized review can violate existing consumer protection requirements.',
        },
      ],
    },
    {
      id: 'education',
      title: 'Education',
      content:
        'AI tools are rapidly entering K-12 and higher education for uses including adaptive learning platforms, automated grading, student risk identification, admissions screening, and administrative decision-making. The primary federal framework governing AI in education is FERPA, but broader concerns about student privacy, algorithmic bias in assessments, and equitable access also apply.',
      items: [
        {
          term: 'FERPA and AI in Education',
          description:
            'The Family Educational Rights and Privacy Act (FERPA) protects the privacy of student education records. When AI tools process student data\u2014grades, behavior records, assessment results, learning analytics\u2014FERPA\u2019s consent and disclosure requirements apply. Schools must ensure that AI vendors receiving student data qualify under FERPA\u2019s \u201cschool official\u201d exception or have obtained proper consent. The Department of Education has clarified that AI-generated records about students (predictions, risk scores, behavioral flags) may also constitute education records subject to FERPA.',
        },
        {
          term: 'Department of Education AI Guidance',
          description:
            'The Department of Education\u2019s Office of Educational Technology released a report in May 2023 on AI in education, emphasizing the need for human oversight of AI systems used in educational settings. The guidance calls for transparency in how AI tools make recommendations or decisions about students, equity assessments to identify whether AI tools produce disparate outcomes for different student groups, and meaningful human review before AI-generated assessments are used in high-stakes decisions like placement or disciplinary actions.',
        },
        {
          term: 'Student Data Privacy Beyond FERPA',
          description:
            'In addition to FERPA, many states have enacted their own student data privacy laws that may impose additional requirements on AI tools used in education. The Children\u2019s Online Privacy Protection Act (COPPA) also applies when AI tools collect personal information from children under 13. Schools and edtech vendors must navigate this layered privacy landscape when deploying AI systems that process student information.',
        },
        {
          term: 'Algorithmic Assessment and Equity Concerns',
          description:
            'AI tools used for grading, placement testing, learning assessments, or identifying \u201cat-risk\u201d students raise significant equity concerns. If these tools produce disparate outcomes based on race, disability, English language learner status, or socioeconomic background, they may implicate Title VI of the Civil Rights Act, Section 504 of the Rehabilitation Act, and Title IX. Schools have an obligation to monitor AI-driven assessments for discriminatory impact.',
        },
      ],
    },
    {
      id: 'cross-cutting-themes',
      title: 'Cross-Cutting Themes',
      content:
        'Several themes recur across every regulated sector. Understanding these patterns helps organizations anticipate how regulators will approach AI in their industry, even before sector-specific guidance is issued.',
      list: [
        '**Nondiscrimination obligations apply to AI.** Every sector covered here has laws prohibiting discrimination. Regulators have uniformly taken the position that these laws apply regardless of whether a human or an algorithm makes the decision. Disparate impact liability does not require proof of intent.',
        '**Existing consumer protection laws cover AI-driven decisions.** You do not need a new AI-specific law to face regulatory liability. The CFPB, FTC, state attorneys general, and sector regulators are using existing consumer protection authority to challenge unfair, deceptive, or discriminatory AI practices.',
        '**Agencies are using existing authority, not waiting for new legislation.** The FDA, CFPB, EEOC, SEC, OCC, and state insurance commissioners are all actively regulating AI under their current statutory authority. Companies that assume they are unregulated because there is no \u201cAI law\u201d are wrong.',
        '**You are responsible for your vendors\u2019 AI.** Across every sector, regulators have made clear that organizations cannot outsource compliance by purchasing AI from a third party. The entity making the decision\u2014the employer, lender, insurer, healthcare provider\u2014bears liability for the AI tools it deploys.',
        '**Explainability is a legal requirement, not just a best practice.** Multiple laws\u2014ECOA, FCRA, FERPA, state insurance laws\u2014require organizations to explain decisions made about individuals. \u201cThe algorithm decided\u201d is never an acceptable explanation. If you cannot explain how your AI reached a decision, you likely cannot comply with existing law.',
        '**Human oversight matters.** Regulators across sectors expect meaningful human review of AI-driven decisions, especially those with significant consequences for individuals. Fully automated high-stakes decisions without human review face increasing legal scrutiny.',
      ],
    },
    {
      id: 'practical-steps',
      title: 'Practical Steps for Compliance',
      content:
        'Organizations using AI in regulated sectors should take concrete steps now to align with existing requirements. The regulators covered on this page are not waiting for new legislation\u2014they are already enforcing.',
      list: [
        '**Map your AI systems to applicable regulations.** Identify every AI tool in use across your organization and determine which sector-specific laws apply. Many organizations do not have a complete inventory of the AI tools their teams are using.',
        '**Conduct bias and impact assessments.** Test AI tools for disparate impact across protected classes before deployment and on an ongoing basis. Document the results and any mitigation steps taken.',
        '**Ensure you can explain AI-driven decisions.** If a law requires you to provide reasons for an adverse decision, confirm that your AI tools can generate specific, accurate explanations. Build this requirement into vendor contracts.',
        '**Audit your vendors.** Require AI vendors to provide documentation of their testing, validation, and bias mitigation processes. Include audit rights and indemnification provisions in vendor agreements.',
        '**Maintain human oversight for high-stakes decisions.** Do not fully automate decisions about credit, employment, insurance, healthcare, or education without meaningful human review. Document your oversight processes.',
        '**Stay current with agency guidance.** Sector regulators are issuing new guidance on AI regularly. Designate someone in your organization to monitor developments from the relevant agencies and update your compliance practices accordingly.',
        '**Document everything.** Regulators expect organizations to be able to demonstrate their compliance processes. Maintain records of AI governance decisions, testing results, vendor assessments, and human review procedures.',
      ],
    },
  ],
  timeline: [
    { date: 'March 2022', event: 'CFPB issues Circular 2022-03 on adverse action notice requirements for algorithmic credit decisions.' },
    { date: 'May 2022', event: 'EEOC launches initiative on AI and algorithmic fairness in employment, pledging technical guidance.' },
    { date: 'January 2023', event: 'EEOC releases technical assistance document on AI and Title VII adverse impact analysis.' },
    { date: 'May 2023', event: 'EEOC publishes detailed guidance on assessing adverse impact from AI in selection procedures.' },
    { date: 'May 2023', event: 'Department of Education Office of Educational Technology publishes AI in education report.' },
    { date: 'July 2023', event: 'New York City Local Law 144 takes effect, requiring bias audits for automated employment decision tools.' },
    { date: 'October 2023', event: 'SEC proposes rules on conflicts of interest from use of predictive data analytics by broker-dealers and investment advisers.' },
    { date: 'December 2023', event: 'NAIC adopts model bulletin on the use of AI systems by insurers.' },
    { date: '2024', event: 'HHS finalizes updated Section 1557 rule addressing nondiscrimination in AI-driven healthcare decisions.' },
    { date: '2024\u20132025', event: 'Colorado Division of Insurance finalizes detailed regulations on AI in insurance under SB 21-169.' },
    { date: 'January 2025', event: 'EEOC removes AI-related guidance documents from its website, including Title VII adverse impact and ADA guidance, following executive order revoking Biden\u2019s AI EO. Underlying laws remain fully in effect.' },
    { date: 'January 2025', event: 'FDA issues draft guidance on AI-enabled device software functions applying a Total Product Life Cycle (TPLC) approach with Predetermined Change Control Plans (PCCP).' },
    { date: 'July 2025', event: 'Massachusetts Attorney General settles AI lending discrimination case against a student loan company over disparate impact from AI underwriting models.' },
    { date: 'January 2026', event: 'FDA issues guidance reducing oversight of certain low-risk AI digital health products, including AI-enabled software and wearables.' },
    { date: 'February 2026', event: 'FDA finalizes QMSR cybersecurity guidance for medical devices, reinforcing security requirements for connected AI systems.' },
    { date: 'Early 2026', event: 'FDA has authorized over 1,250 AI/ML-enabled medical devices; enforcement actions across sectors continue to increase.' },
  ],
  sources: [
    {
      title: 'FDA: AI/ML-Enabled Medical Devices',
      url: 'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices',
      description: 'FDA\u2019s resource page on AI and machine learning in medical devices, including the list of authorized AI/ML-enabled devices.',
    },
    {
      title: 'CFPB Circular 2022-03: Adverse Action Notices and Complex Algorithms',
      url: 'https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/',
      description: 'CFPB guidance confirming that creditors must provide specific adverse action reasons even when using AI or complex algorithmic models.',
    },
    {
      title: 'EEOC: Assessing Adverse Impact in Software, Algorithms, and AI',
      url: 'https://www.eeoc.gov/laws/guidance/select-issues-assessing-adverse-impact-software-algorithms-and-artificial',
      description: 'EEOC technical guidance on how Title VII adverse impact analysis applies to AI-driven employment selection procedures. Note: This guidance was removed from the EEOC website in January 2025. The URL may no longer be active, but the underlying legal framework (Title VII, ADA) continues to apply.',
    },
    {
      title: 'NAIC Model Bulletin: Use of AI Systems by Insurers',
      url: 'https://content.naic.org/sites/default/files/inline-files/2023-12-4-model-bulletin-use-of-AI-systems-by-insurers.pdf',
      description: 'NAIC model bulletin clarifying how existing unfair trade practices laws apply to insurers\u2019 use of AI.',
    },
    {
      title: 'OCC Comptroller\u2019s Handbook: Model Risk Management',
      url: 'https://www.occ.treas.gov/publications-and-resources/publications/comptrollers-handbook/files/model-risk-management/index-model-risk-management.html',
      description: 'OCC guidance on model risk management applicable to AI and machine learning models used by banks.',
    },
    {
      title: 'Department of Education: AI and the Future of Teaching and Learning',
      url: 'https://tech.ed.gov/ai-future-of-teaching-and-learning/',
      description: 'Department of Education report on AI in education with policy recommendations.',
    },
  ],
  relatedRegulations: ['us-state-laws', 'federal-policy'],
}
