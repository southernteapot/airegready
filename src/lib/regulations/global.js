export const globalGovernance = {
  id: 'global',
  slug: 'global',
  title: 'Global AI Governance',
  shortTitle: 'Global Governance',
  description:
    'AI governance is expanding rapidly worldwide, but with no unified approach. Countries and international bodies are pursuing regulation at different speeds, with different philosophies\u2014creating a fragmented landscape that companies operating across borders must navigate carefully.',
  icon: '\u{1F310}',
  status: 'Expanding',
  lastReviewed: 'March 2026',
  keyFacts: [
    { label: 'Key Jurisdictions', value: 'EU, China, UK, Canada, Brazil, Japan, Singapore, Australia' },
    { label: 'International Frameworks', value: 'OECD AI Principles, G7 Hiroshima Process, Council of Europe Convention, ISO/IEC 42001' },
    { label: 'Binding International Treaty', value: 'Council of Europe Framework Convention on AI (September 2024)' },
    { label: 'Dominant Trend', value: 'Risk-based regulation with growing enforcement' },
  ],
  sections: [
    {
      id: 'overview',
      title: 'Overview: A Fragmented Global Landscape',
      content:
        'There is no single global framework for AI regulation. Instead, countries, regional blocs, and international organizations are each developing their own approaches\u2014some binding, some voluntary, and some still under debate. The result is a patchwork that creates real compliance challenges for companies building or deploying AI across borders.\n\nSeveral broad patterns have emerged. The EU has taken a prescriptive, risk-based approach with the [EU AI Act](/regulations/eu-ai-act), creating the most comprehensive binding AI legislation in the world. China has moved faster than any other country in implementing operational AI regulations, taking a layered approach that addresses specific AI applications one at a time. The UK has opted for a decentralized, sector-led model that relies on existing regulators rather than a single AI law. Canada, Brazil, and others are at various stages of developing their own legislative frameworks.\n\nAt the international level, the OECD AI Principles provide a widely referenced baseline, the G7 has developed a voluntary code of conduct for advanced AI, and the Council of Europe adopted the first legally binding international AI treaty in September 2024. Meanwhile, technical standards like ISO/IEC 42001 are emerging as a practical tool for demonstrating AI governance maturity.\n\nFor companies operating globally, the challenge is not just understanding each jurisdiction\u2019s rules\u2014it is managing the gaps, overlaps, and contradictions between them. There is no mutual recognition framework, no single compliance certification that satisfies all jurisdictions, and no sign that regulatory convergence is coming soon.',
    },
    {
      id: 'canada',
      title: 'Canada',
      content:
        'Canada was among the first countries to introduce comprehensive AI legislation, but the effort has stalled due to political developments.\n\nThe **Artificial Intelligence and Data Act (AIDA)** was introduced in June 2022 as Part 3 of Bill C-27, the Digital Charter Implementation Act. AIDA would have established a regulatory framework for \u201chigh-impact\u201d AI systems, requiring organizations to conduct risk assessments, implement mitigation measures, maintain transparency and public disclosure, and submit to government audits.\n\nAIDA included several notable provisions. It would have imposed **criminal liability** for reckless or knowing deployment of AI systems that cause serious harm, making it one of the few AI laws globally to include criminal penalties. It also would have created a new AI and Data Commissioner to oversee enforcement.\n\nHowever, AIDA faced significant criticism during the legislative process. Critics argued the framework was too vague, delegated too much to future regulations, and did not adequately address fundamental rights. The bill was substantially amended in committee but never reached a final vote.\n\nIn **January 2025, Parliament was prorogued**, and Bill C-27\u2014including AIDA\u2014died on the order paper. Under the new government that followed, the future of dedicated AI legislation in Canada is uncertain. As of early 2026, no replacement bill has been introduced.\n\nThis does not mean AI is unregulated in Canada. Existing laws\u2014including the Personal Information Protection and Electronic Documents Act (PIPEDA), the Canadian Human Rights Act, and sector-specific regulations\u2014continue to apply to AI systems. The Office of the Privacy Commissioner has been active in investigating AI-related privacy complaints, and the Treasury Board has maintained its **Directive on Automated Decision-Making** for federal government use of AI, which requires algorithmic impact assessments and transparency for automated decisions affecting individuals.',
      items: [
        {
          term: 'AIDA\u2019s High-Impact System Framework',
          description:
            'AIDA would have required organizations deploying \u201chigh-impact\u201d AI systems to assess whether the system could cause harm, establish mitigation measures, monitor the system for compliance, and maintain records for regulatory inspection. The definition of \u201chigh-impact\u201d was to be specified in future regulations\u2014a point of significant criticism.',
        },
        {
          term: 'Criminal Liability Provisions',
          description:
            'AIDA proposed criminal penalties for possessing or using an AI system knowing it could cause serious physical or psychological harm, or recklessly deploying AI in a manner that causes substantial economic loss. Maximum penalties included fines and imprisonment. These provisions made AIDA unique among proposed AI laws globally.',
        },
        {
          term: 'Current Status',
          description:
            'Bill C-27 died when Parliament was prorogued in January 2025. No replacement legislation has been introduced as of early 2026. Canada\u2019s approach to AI governance may shift significantly depending on the new government\u2019s priorities. In the meantime, existing privacy, human rights, and sector-specific laws remain the primary regulatory tools.',
        },
      ],
    },
    {
      id: 'china',
      title: 'China',
      content:
        'China has the most advanced **operational** AI regulatory framework in the world. Rather than pursuing a single comprehensive AI law, China has taken a layered, application-specific approach\u2014issuing binding regulations targeting specific types of AI systems as they emerge. The Cyberspace Administration of China (CAC) is the primary regulator.\n\nChina\u2019s approach is pragmatic and fast-moving. Each new regulation addresses a specific AI application that has become commercially significant, imposing obligations on providers and users within months of the regulation\u2019s effective date. While enforcement details are still developing, the regulatory text is binding and backed by administrative penalties.',
      items: [
        {
          term: 'Algorithmic Recommendation Management Provisions (March 2022)',
          description:
            'These provisions regulate recommendation algorithms used by internet platforms. They require providers to register their algorithms with the CAC, give users the ability to turn off personalized recommendations, prohibit the use of algorithms to engage in price discrimination, and restrict algorithmic promotion of content that could disrupt public order. China was the first country to implement binding regulations specifically targeting recommendation algorithms.',
        },
        {
          term: 'Deep Synthesis Provisions (January 2023)',
          description:
            'The Deep Synthesis Provisions target deepfakes and AI-generated synthetic content including text, images, audio, and video. Providers of deep synthesis services must label AI-generated content, verify user identities, maintain logs, and prevent the creation of content that is prohibited under Chinese law. These provisions were among the first binding deepfake regulations anywhere in the world.',
        },
        {
          term: 'Generative AI Service Management Measures (August 2023)',
          description:
            'The [Generative AI Measures](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm) regulate generative AI services offered to the public within China. Providers must register with the CAC, conduct security assessments before launch, ensure training data is lawful and accurate, label AI-generated content, and comply with existing content moderation requirements. The measures also require providers to address user complaints about AI-generated content. The final version was softened from earlier drafts, applying primarily to public-facing generative AI services rather than all internal uses.',
        },
        {
          term: 'Algorithm Registration and Transparency',
          description:
            'A distinctive feature of China\u2019s approach is the **algorithm registration system**. Providers of algorithmic services\u2014including recommendation engines, generative AI, and deep synthesis tools\u2014must register their algorithms with the CAC, providing descriptions of the algorithm\u2019s function, logic, and intended purpose. The CAC maintains a public registry. As of early 2026, over 100 algorithms have been registered.',
        },
      ],
    },
    {
      id: 'uk',
      title: 'United Kingdom',
      content:
        'The UK has deliberately chosen a different path from the EU. Rather than enacting a single, comprehensive AI law, the UK is pursuing what it calls a **\u201cpro-innovation\u201d approach** that relies on existing sector regulators to apply AI-specific principles within their existing frameworks.\n\nThis approach was outlined in the March 2023 [AI regulation white paper](https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach), which set out five cross-sector principles that regulators should apply to AI within their domains: **safety, security, and robustness; transparency and explainability; fairness; accountability and governance; and contestability and redress.** The government chose not to make these principles statutory, instead relying on regulators to implement them through guidance, existing rules, and enforcement priorities.\n\nKey regulators adapting their frameworks to address AI include the Financial Conduct Authority (FCA), the Information Commissioner\u2019s Office (ICO), the Competition and Markets Authority (CMA), Ofcom, the Medicines and Healthcare products Regulatory Agency (MHRA), and the Equality and Human Rights Commission (EHRC). Each is developing AI-specific guidance within its sector.\n\nThe **AI Safety Institute** (AISI), established in November 2023, focuses on frontier AI safety research and evaluation. AISI tests advanced AI models for dangerous capabilities and works with AI developers on safety protocols. It is not a regulator and does not have enforcement powers.\n\nThe contrast with the EU is significant. The EU\u2019s centralized, prescriptive approach creates uniform rules across all sectors. The UK\u2019s approach allows sector regulators to tailor their response to AI risks specific to their domain, but risks creating gaps and inconsistencies between sectors. The UK government has signaled that it will consider introducing statutory obligations if the voluntary approach proves insufficient, but as of early 2026, no comprehensive AI legislation has been introduced.\n\nFor companies that operate in both the UK and EU, the practical implication is that they must comply with the EU AI Act for EU-facing activities while also navigating the UK\u2019s sector-specific requirements\u2014which may diverge from EU rules in both substance and timing.',
    },
    {
      id: 'international-frameworks',
      title: 'International Frameworks and Standards',
      content:
        'Several international organizations have developed AI governance frameworks that, while not always legally binding, shape national legislation and corporate practices worldwide. These frameworks represent an evolving consensus on basic AI governance principles.',
      items: [
        {
          term: 'OECD AI Principles (2019, updated 2024)',
          description:
            'The [OECD AI Principles](https://oecd.ai/en/ai-principles) were adopted in May 2019 and updated in May 2024 to address developments in generative AI. The principles cover inclusive growth, human-centered values, transparency, robustness and security, and accountability. They also include recommendations for governments on AI policy. Over 45 countries have endorsed the OECD AI Principles, making them the most widely adopted international AI governance framework. They have directly influenced the EU AI Act, Canada\u2019s AIDA, and numerous other national frameworks.',
        },
        {
          term: 'G7 Hiroshima AI Process and Code of Conduct',
          description:
            'During Japan\u2019s G7 presidency in 2023, the Hiroshima AI Process produced an international **Guiding Principles** document and a voluntary **Code of Conduct** for organizations developing advanced AI systems. The Code of Conduct covers risk identification and mitigation, reporting of vulnerabilities, transparency about AI capabilities and limitations, and responsible information sharing. It is voluntary but has been endorsed by major AI companies. The G7 has continued to develop these commitments in subsequent presidencies.',
        },
        {
          term: 'UNESCO Recommendation on the Ethics of AI (2021)',
          description:
            'Adopted by all 193 UNESCO member states in November 2021, this is the first global normative instrument on AI ethics. It covers proportionality, safety, fairness, sustainability, privacy, human oversight, transparency, and accountability. While not legally binding, it provides a framework that member states are encouraged to implement through national policy and legislation. UNESCO has published readiness assessments to help countries evaluate their preparedness for AI governance.',
        },
        {
          term: 'Council of Europe Framework Convention on AI (September 2024)',
          description:
            'The [Framework Convention on Artificial Intelligence](https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence) is the **first legally binding international treaty on AI**. Opened for signature in September 2024, it requires parties to ensure that AI systems respect human rights, democracy, and the rule of law. It covers public and private sector AI use, requires risk and impact assessments, mandates transparency and accountability, and provides for effective remedies. The Convention applies to the 46 Council of Europe member states and is open for accession by non-member countries\u2014the United States, Canada, Japan, and others participated in its negotiation.',
        },
        {
          term: 'ISO/IEC 42001: AI Management System Standard',
          description:
            'Published in December 2023, [ISO/IEC 42001](https://www.iso.org/standard/81230.html) is the first international management system standard specifically for AI. It provides a framework for organizations to establish, implement, maintain, and continually improve an AI management system. It covers AI risk management, data governance, transparency, and responsible AI development. Organizations can be **certified** against ISO/IEC 42001 by accredited certification bodies, making it a practical tool for demonstrating AI governance maturity to regulators, customers, and partners. It is expected to become increasingly important as a compliance benchmark, particularly for organizations subject to the EU AI Act.',
        },
      ],
    },
    {
      id: 'other-jurisdictions',
      title: 'Other Jurisdictions',
      content:
        'Beyond the EU, China, UK, and Canada, many other countries are developing AI governance frameworks. The approaches range from comprehensive legislation to voluntary guidelines, reflecting different regulatory cultures and priorities.',
      table: {
        headers: ['Jurisdiction', 'Approach', 'Status'],
        rows: [
          [
            '**Brazil**',
            'Comprehensive AI legislation (PL 2338/2023) modeled partly on the EU AI Act. Risk-based framework with requirements for high-risk AI systems, transparency obligations, and rights of affected persons. Establishes a national AI authority.',
            'Advancing in Congress as of early 2026. Expected to be the first major AI law in Latin America.',
          ],
          [
            '**Japan**',
            'Governance-based approach favoring guidelines over binding legislation. Published AI Guidelines for Business in 2024 (updated from 2019 Social Principles of AI). Leveraged G7 presidency in 2023 to advance Hiroshima AI Process.',
            'Voluntary guidelines in effect. Government considering whether binding legislation is needed, with a focus on generative AI. Active participant in international AI governance discussions.',
          ],
          [
            '**South Korea**',
            'AI Basic Act proposed to establish a framework for AI promotion and risk management. Includes provisions for high-impact AI designation, impact assessments, and a national AI committee. Balances innovation promotion with rights protection.',
            'Legislation has been under consideration in the National Assembly. South Korea has also been active in developing AI ethics guidelines and sectoral guidance.',
          ],
          [
            '**Singapore**',
            'Model AI Governance Framework (first published 2019, updated 2020) provides voluntary guidance on deploying AI responsibly. AI Verify\u2014an AI governance testing framework and toolkit\u2014launched in 2022 to help organizations self-assess AI systems against governance principles.',
            'Voluntary frameworks in effect. Singapore positions itself as a pragmatic, business-friendly AI governance hub. No comprehensive binding AI legislation, but sector regulators (MAS for financial services) apply existing rules.',
          ],
          [
            '**India**',
            'No dedicated AI legislation. Government has issued advisory guidelines on AI, particularly for generative AI services. The Digital India Act (still in development) may include AI-related provisions. India\u2019s IT Act and sector-specific regulations provide some coverage.',
            'Advisory guidelines in effect for generative AI. Broader legislative framework still under development. India has signaled a preference for a light-touch, innovation-focused approach.',
          ],
          [
            '**Australia**',
            'Published voluntary AI Ethics Principles (2019) and conducted a government review of AI regulation. The \u201cSafe and Responsible AI\u201d consultation (2023\u20132024) considered mandatory guardrails for high-risk AI. Government has signaled intent to move toward binding requirements.',
            'Voluntary principles in effect. Mandatory guardrails for high-risk AI under consideration following public consultation. Sector regulators (APRA for financial services, TGA for health) applying existing frameworks to AI.',
          ],
        ],
      },
    },
    {
      id: 'cross-border-challenges',
      title: 'Cross-Border Challenges',
      content:
        'Companies building or deploying AI across multiple jurisdictions face a set of practical challenges that no single compliance framework addresses.\n\n**Regulatory divergence** is the most fundamental problem. The EU AI Act\u2019s risk classification system does not map neatly onto China\u2019s application-specific regulations or the UK\u2019s sector-led approach. A system classified as \u201chigh-risk\u201d under the EU AI Act may face completely different (or no) requirements in another jurisdiction. Conversely, a system that requires algorithm registration in China may have no equivalent obligation in Europe.\n\n**Data localization and cross-border data flows** add another layer of complexity. AI systems depend on data for training, testing, and operation. Different countries impose different restrictions on where data can be stored, processed, and transferred. The EU\u2019s GDPR, China\u2019s Personal Information Protection Law (PIPL), and various national data localization requirements can constrain how global AI systems are built and deployed.\n\n**No mutual recognition framework exists** for AI compliance. A company that fully complies with the EU AI Act cannot assume that compliance satisfies any other jurisdiction\u2019s requirements. There is no AI equivalent of the mutual recognition agreements that exist in some areas of trade regulation. ISO/IEC 42001 certification may eventually help bridge this gap, but it is not yet widely recognized as a regulatory compliance tool.\n\n**Enforcement is uneven and unpredictable.** Some jurisdictions have active, well-resourced regulators (the EU, China, the US at the sector level). Others have governance frameworks on paper but limited enforcement capacity. Companies must decide how to allocate compliance resources across jurisdictions with very different enforcement realities.\n\n**Extraterritorial reach** compounds the complexity. The EU AI Act applies to any AI system placed on the EU market, regardless of where the provider is located. China\u2019s AI regulations apply to services offered within China. A company based in one country can simultaneously be subject to the AI regulations of multiple jurisdictions with conflicting requirements.',
    },
    {
      id: 'practical-steps',
      title: 'Practical Steps for Global AI Compliance',
      content:
        'There is no shortcut to global AI compliance, but there are strategies that make it manageable. Organizations operating across borders should build their compliance programs around the highest common denominator while maintaining the flexibility to address jurisdiction-specific requirements.',
      list: [
        '**Map your regulatory exposure by jurisdiction.** Identify every country where your AI systems are developed, deployed, or have users. Determine which AI-specific and general laws apply in each jurisdiction. Do not assume that operating remotely exempts you from local regulation\u2014extraterritorial reach is common.',
        '**Build to the highest standard.** If you operate in the EU, your EU AI Act compliance program will likely cover many requirements in other jurisdictions. Use the most demanding framework you face as your baseline and adapt for jurisdiction-specific requirements rather than building separate compliance programs from scratch.',
        '**Adopt ISO/IEC 42001 as an internal governance baseline.** Even if certification is not required, structuring your AI management system around ISO/IEC 42001 provides a recognized framework that maps well to regulatory requirements in multiple jurisdictions. Certification can also signal governance maturity to regulators, customers, and partners.',
        '**Monitor the Council of Europe Framework Convention.** As the first binding international AI treaty, the Convention\u2019s implementation will shape AI governance in 46+ countries. Track ratification progress and transposition into national law in the jurisdictions where you operate.',
        '**Plan for data governance across borders.** AI compliance is inseparable from data compliance. Ensure your data flows\u2014for training, testing, and production\u2014comply with each relevant jurisdiction\u2019s data protection and localization requirements. This may require regional data strategies and infrastructure.',
        '**Engage with regulatory consultations.** Many jurisdictions are still developing their AI frameworks. Participating in public consultations and industry working groups gives you early visibility into upcoming requirements and the opportunity to shape practical, workable rules.',
        '**Document your governance practices thoroughly.** Across jurisdictions, regulators increasingly expect organizations to demonstrate\u2014not just assert\u2014that they have AI governance processes in place. Maintain detailed records of risk assessments, testing, human oversight procedures, and decision-making rationale.',
        '**Prepare for compliance deadlines.** The EU AI Act\u2019s obligations are phasing in through 2027. Other jurisdictions have their own timelines. Build a compliance calendar that tracks key dates across all relevant jurisdictions and allocate resources to meet them.',
      ],
    },
  ],
  timeline: [
    { date: 'May 2019', event: 'OECD AI Principles adopted by 42 countries, establishing the first widely endorsed international AI governance framework.' },
    { date: 'November 2021', event: 'UNESCO Recommendation on the Ethics of AI adopted by all 193 member states.' },
    { date: 'March 2022', event: 'China\u2019s Algorithmic Recommendation Management Provisions take effect\u2014the first binding regulation targeting recommendation algorithms.' },
    { date: 'June 2022', event: 'Canada introduces Bill C-27 including AIDA, proposed as the country\u2019s first comprehensive AI law.' },
    { date: 'January 2023', event: 'China\u2019s Deep Synthesis Provisions take effect, regulating deepfakes and synthetic content.' },
    { date: 'March 2023', event: 'UK publishes AI regulation white paper outlining its pro-innovation, sector-led approach.' },
    { date: 'August 2023', event: 'China\u2019s Generative AI Service Management Measures take effect.' },
    { date: 'October 2023', event: 'G7 Hiroshima AI Process produces Guiding Principles and a voluntary Code of Conduct for advanced AI systems.' },
    { date: 'November 2023', event: 'UK AI Safety Institute established to focus on frontier AI safety research and evaluation.' },
    { date: 'December 2023', event: 'ISO/IEC 42001 (AI Management System standard) published.' },
    { date: 'March 2024', event: 'EU AI Act formally adopted by the European Parliament.' },
    { date: 'May 2024', event: 'OECD AI Principles updated to address generative AI and other developments.' },
    { date: 'September 2024', event: 'Council of Europe Framework Convention on AI opened for signature\u2014the first legally binding international AI treaty.' },
    { date: 'January 2025', event: 'Canadian Parliament prorogued; Bill C-27 (including AIDA) dies on the order paper.' },
    { date: 'February 2025', event: 'EU AI Act\u2019s prohibition on unacceptable-risk AI systems takes effect.' },
    { date: 'Early 2026', event: 'Global AI regulatory activity continues to accelerate, with Brazil, South Korea, and other jurisdictions advancing legislation.' },
  ],
  sources: [
    {
      title: 'OECD AI Principles',
      url: 'https://oecd.ai/en/ai-principles',
      description: 'The most widely endorsed international AI governance framework, adopted by over 45 countries.',
    },
    {
      title: 'UK AI Regulation: A Pro-Innovation Approach (White Paper)',
      url: 'https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach',
      description: 'The UK government\u2019s framework for AI regulation through existing sector regulators.',
    },
    {
      title: 'China Generative AI Service Management Measures',
      url: 'http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm',
      description: 'China\u2019s binding regulations for generative AI services offered to the public (Chinese language).',
    },
    {
      title: 'Council of Europe Framework Convention on Artificial Intelligence',
      url: 'https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence',
      description: 'The first legally binding international treaty on AI, covering human rights, democracy, and rule of law.',
    },
    {
      title: 'ISO/IEC 42001: Artificial Intelligence Management System',
      url: 'https://www.iso.org/standard/81230.html',
      description: 'The first international management system standard for AI, providing a certifiable governance framework.',
    },
    {
      title: 'Canada Bill C-27 (Digital Charter Implementation Act)',
      url: 'https://www.parl.ca/legisinfo/en/bill/44-1/c-27',
      description: 'Legislative history of Canada\u2019s proposed AI and data legislation, including AIDA.',
    },
    {
      title: 'G7 Hiroshima Process International Guiding Principles for AI',
      url: 'https://www.mofa.go.jp/ecm/ec/page5e_000076.html',
      description: 'G7 guiding principles and code of conduct for organizations developing advanced AI systems.',
    },
    {
      title: 'Singapore Model AI Governance Framework',
      url: 'https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework',
      description: 'Singapore\u2019s voluntary framework for responsible AI deployment.',
    },
  ],
  relatedRegulations: ['eu-ai-act', 'federal-policy'],
}
