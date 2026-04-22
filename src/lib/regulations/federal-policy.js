export const federalPolicy = {
  id: 'exec-orders',
  slug: 'federal-policy',
  title: 'Executive Orders & Federal Policy',
  shortTitle: 'Federal Policy',
  description:
    'The U.S. has no comprehensive federal AI law, but a mix of executive orders, agency guidance, and existing statutes shape the regulatory landscape. The policy direction shifted significantly between the Biden and Trump administrations.',
  icon: '\uD83D\uDCDC',
  status: 'Active',
  lastReviewed: 'March 2026',
  lastReviewedIso: '2026-03-01',
  keyFacts: [
    { label: 'Comprehensive Federal AI Law', value: 'None (as of early 2026)' },
    {
      label: 'Current AI Executive Order',
      value: 'EO 14179 — "Removing Barriers to American Leadership in AI" (Jan 23, 2025)',
    },
    {
      label: 'Prior Executive Order',
      value: 'EO 14110 — revoked by EO 14148 on January 20, 2025',
    },
    {
      label: 'Primary Enforcement',
      value: 'Existing agency authority (FTC, EEOC, FDA, SEC)',
    },
    {
      label: 'Key Framework',
      value: '[NIST AI RMF](https://www.nist.gov/artificial-intelligence) (voluntary, ongoing)',
    },
    {
      label: 'OMB Guidance',
      value: 'M-25-21 (April 2025) replaced rescinded M-24-10; companion M-25-22 covers AI procurement',
    },
  ],
  sections: [
    {
      id: 'overview',
      title: 'The Federal AI Policy Landscape',
      content:
        'The United States does not have a comprehensive federal law regulating artificial intelligence. Despite multiple Congressional hearings and proposed bills, no overarching AI legislation has passed. Instead, federal AI policy is a layered mix of executive orders, agency guidance, voluntary frameworks, and existing laws being applied to new technology.\n\nThis approach has created both flexibility and uncertainty. Federal agencies like the FTC, EEOC, FDA, and SEC have authority to regulate AI within their existing mandates, and several have issued guidance or taken enforcement actions. But there is no single federal standard that tells organizations exactly what they must do when developing or deploying AI.\n\nThe policy direction has also shifted with presidential administrations. The Biden administration pursued a regulatory approach emphasizing safety, testing, and civil rights protections. The Trump administration, starting in January 2025, reversed that direction, prioritizing innovation and removing what it characterized as barriers to American AI leadership. Both executive orders, and their practical implications, are covered below.\n\nFor organizations trying to build compliant AI programs, the federal landscape requires tracking multiple sources of authority. Executive orders set broad policy direction. Agency guidance interprets how existing laws apply to AI. Voluntary frameworks like the NIST AI RMF provide implementation structure. And enforcement actions signal where the real legal risks are.',
    },
    {
      id: 'eo-14110',
      title: 'Executive Order 14110: Safe, Secure, and Trustworthy AI (Revoked)',
      content:
        'On **October 30, 2023**, President Biden signed **Executive Order 14110**, titled "Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence." At the time, it was the most comprehensive federal action on AI ever taken. The order established sweeping requirements across the federal government and directed agencies to develop new standards and guidance.\n\n**Key provisions of EO 14110 included:**',
      items: [
        {
          term: 'Safety Testing for Powerful AI Models',
          description:
            'Required developers of "dual-use foundation models" (AI models that could pose serious risks to national security, economic security, or public health) to share safety test results with the federal government before public release. This was the first federal requirement for pre-deployment AI safety reporting.',
        },
        {
          term: 'NIST Standards Development',
          description:
            'Directed the National Institute of Standards and Technology to develop standards, tools, and tests for AI safety and trustworthiness. This built on the NIST AI Risk Management Framework released in January 2023 and accelerated work on AI evaluation methodologies.',
        },
        {
          term: 'Content Authentication and Watermarking',
          description:
            'Directed the Department of Commerce to develop guidance on watermarking and content authentication for AI-generated content, addressing the growing challenge of deepfakes and synthetic media.',
        },
        {
          term: 'Civil Rights Protections',
          description:
            'Required federal agencies to address algorithmic discrimination in AI systems used for housing, lending, employment, and criminal justice. Directed agencies to develop guidance on preventing AI from reinforcing existing biases.',
        },
        {
          term: 'Federal Government AI Use',
          description:
            'Set standards for how federal agencies procure and use AI, including requirements for risk assessment, testing, and human oversight of AI systems used in government decision-making.',
        },
        {
          term: 'Status: Revoked (January 20, 2025)',
          description:
            'This executive order was revoked on January 20, 2025, when President Trump signed **EO 14148** ("Initial Rescissions of Harmful Executive Orders and Actions"), which rescinded 78 Biden-era presidential orders and memoranda, including EO 14110. Three days later, on January 23, 2025, President Trump signed **EO 14179** ("Removing Barriers to American Leadership in Artificial Intelligence"), which set a new pro-innovation direction for federal AI policy. Not everything initiated under EO 14110 disappeared. Work already completed by NIST — including updates to the AI RMF and development of evaluation tools — continues, as NIST operates on Congressional funding independent of executive orders. Some agency guidance issued under EO 14110 also remains in effect unless specifically rescinded by the issuing agency. The practical impact of the revocation was to eliminate the mandatory safety reporting requirements for AI developers, halt new regulatory initiatives that were still in development, and signal a shift in federal policy from precautionary regulation toward a more permissive approach.',
        },
      ],
    },
    {
      id: 'eo-14179',
      title:
        'Executive Order 14179: Removing Barriers to American Leadership in AI',
      content:
        'On **January 23, 2025**, President Trump signed **Executive Order 14179**, titled "Removing Barriers to American Leadership in Artificial Intelligence." This order set a markedly different direction for federal AI policy than the prior administration. (EO 14110 itself had been revoked three days earlier, on January 20, 2025, as part of EO 14148\u2019s mass rescission of 78 Biden-era orders.)\n\nThe core premise of EO 14179 is that excessive regulation threatens American competitiveness in AI. The order frames AI development primarily as an economic and national security opportunity rather than a risk to be managed. It directs federal agencies to remove regulatory barriers to AI innovation and to avoid imposing new requirements that could slow AI development.\n\n**Key elements of EO 14179:**',
      list: [
        '**Alignment with the revocation of EO 14110.** EO 14110 had already been revoked on January 20, 2025, via EO 14148. EO 14179 builds on that revocation by directing agencies to identify and unwind any lingering actions, regulations, or guidance still inconsistent with a pro-innovation posture.',
        '**Pro-innovation directive.** Federal agencies were instructed to review and consider suspending, revising, or rescinding any regulations or guidance that could be seen as barriers to AI development and deployment.',
        '**Emphasis on American leadership.** The order frames AI policy through the lens of international competition, particularly with China. Maintaining U.S. dominance in AI technology is presented as a national security priority.',
        '**Reduced federal oversight.** The order moves away from centralized federal AI governance and does not establish new reporting requirements, safety testing mandates, or disclosure obligations for AI developers.',
        '**AI Action Plan.** The order directed senior White House officials to develop and submit a U.S. AI Action Plan to the President within 180 days, setting the agenda for follow-on executive actions.',
      ],
    },
    {
      id: 'eo-14179-impact',
      title: 'What EO 14179 Means in Practice',
      content:
        'The shift from EO 14110 to EO 14179 does not create a regulatory vacuum. Federal agencies still have their existing statutory authority to regulate AI within their domains — the FTC can still pursue deceptive AI practices, the EEOC can still enforce anti-discrimination law in AI hiring tools, and the FDA can still regulate AI medical devices. What changed is the top-level policy direction: from proactive AI-specific regulation toward reliance on existing authority and market forces.\n\nFor organizations, the practical takeaway is that voluntary compliance and self-governance are now the federal expectation rather than mandatory requirements. However, this does not reduce legal risk — it shifts the enforcement mechanism from prescriptive rules to after-the-fact agency action under existing law.',
    },
    {
      id: 'eo-december-2025',
      title: 'December 2025: Federal Preemption of State AI Laws',
      content:
        'On **December 11, 2025**, President Trump signed an executive order titled "Ensuring a National Policy Framework for Artificial Intelligence," representing the most significant federal AI policy action since the revocation of EO 14110. The order establishes federal policy to "sustain and enhance" U.S. global AI dominance through a "minimally burdensome national policy framework" — and directly targets state-level AI regulation as an obstacle to that goal.\n\nThe December 2025 EO is a major development because it moves beyond the deregulatory posture of EO 14179 into active federal preemption of state AI laws. It creates enforcement mechanisms and institutional structures designed to challenge and override state AI regulation.\n\n**Key provisions:**',
      items: [
        {
          term: 'DOJ AI Litigation Task Force',
          description:
            'The order creates a Department of Justice AI Litigation Task Force, which became operational on January 10, 2026. The Task Force is directed to challenge state AI laws in federal court on grounds that they unconstitutionally burden interstate commerce or are preempted by federal regulations. This represents the first federal mechanism specifically designed to litigate against state AI legislation.',
        },
        {
          term: 'Commerce Department Assessment',
          description:
            'The Secretary of Commerce is required to publish an assessment within 90 days identifying state AI laws that conflict with the national policy framework. This assessment is intended to provide the basis for DOJ litigation and Congressional action.',
        },
        {
          term: 'FCC Federal Reporting Standard',
          description:
            'The FCC is directed to initiate a proceeding to develop a federal AI reporting and disclosure standard that would preempt state-level requirements. This targets the patchwork of state disclosure and transparency laws emerging from legislatures like Colorado and Connecticut.',
        },
        {
          term: 'FTC Policy Statement',
          description:
            'The FTC Chair is directed to issue a policy statement on how the FTC Act applies to AI, due March 11, 2026. This is intended to establish a federal baseline for AI enforcement that could reduce the perceived need for state-level regulation.',
        },
        {
          term: 'Conditional Federal Funding',
          description:
            'States with AI laws determined to conflict with the federal framework may lose eligibility for BEAD (Broadband Equity, Access, and Deployment) broadband funds. This creates a financial incentive for states to align with or repeal AI-specific regulation.',
        },
        {
          term: 'Carve-Outs',
          description:
            'The order includes notable exceptions. Child safety protections, AI compute and data center infrastructure regulations, and state government procurement and use of AI are carved out from the preemption framework. States retain authority in these areas.',
        },
        {
          term: 'March 2026 Legislative Blueprint',
          description:
            'On March 20, 2026, the White House released a legislative blueprint urging Congress to adopt a unified federal AI framework. The blueprint builds on the December 2025 EO and seeks to codify federal preemption of state AI laws through legislation, providing a more durable legal basis than executive action alone.',
        },
      ],
    },
    {
      id: 'omb-guidance',
      title: 'OMB M-24-10: Federal AI Governance (Rescinded)',
      content:
        'In **March 2024**, the Office of Management and Budget issued **Memorandum M-24-10**, "Advancing Governance, Innovation, and Risk Management for Agency Use of Artificial Intelligence." This was the most detailed federal guidance ever issued on how government agencies should manage AI.\n\n**Key requirements of M-24-10 included:**',
      items: [
        {
          term: 'Chief AI Officers',
          description:
            'Every federal agency was required to designate a Chief AI Officer responsible for coordinating AI use, managing risks, and ensuring compliance. This created a single point of accountability for AI governance within each agency.',
        },
        {
          term: 'AI Use Case Inventories',
          description:
            'Agencies were required to maintain and publicly disclose inventories of their AI use cases, with specific attention to "rights-impacting" and "safety-impacting" systems. These inventories were intended to bring transparency to how the federal government uses AI.',
        },
        {
          term: 'Risk Management Requirements',
          description:
            'For AI systems classified as rights-impacting or safety-impacting, agencies were required to implement specific safeguards including impact assessments, testing for bias and accuracy, human oversight mechanisms, and ongoing monitoring.',
        },
        {
          term: 'Minimum Practices',
          description:
            'M-24-10 established minimum practices for AI use across all agencies, including documentation requirements, data quality standards, and processes for public feedback on government AI systems.',
        },
        {
          term: 'Status: Rescinded and Replaced',
          description:
            'M-24-10 was rescinded and replaced by **OMB M-25-21** ("Accelerating Federal Use of AI through Innovation, Governance, and Public Trust"), released April 3-7, 2025. A companion memo, **M-25-22**, covers AI procurement. The new memos represent a significant shift from the Biden-era approach: where M-24-10 emphasized risk management, Chief AI Officers, and public AI inventories, M-25-21 emphasizes innovation, removing bureaucratic barriers, and accelerating federal AI adoption. The mandatory risk management framework and public disclosure requirements of M-24-10 have been replaced by a lighter-touch approach focused on enabling agencies to experiment with and deploy AI more quickly. However, the practical influence of M-24-10 persists. Many federal agencies had already begun implementing its requirements — appointing Chief AI Officers, building AI inventories, and establishing governance frameworks. Some agencies have continued these practices voluntarily, recognizing their operational value even under the new guidance. The NIST AI RMF remains referenced as a compliance framework under the new OMB memos.',
        },
      ],
    },
    {
      id: 'agency-guidance',
      title: 'Agency-Specific AI Guidance and Enforcement',
      content:
        'Regardless of which executive order is in effect, federal agencies retain significant authority to regulate AI through their existing statutory mandates. Several agencies have issued AI-specific guidance and taken enforcement actions that remain relevant.',
      items: [
        {
          term: 'EEOC — AI in Employment Decisions',
          description:
            'The Equal Employment Opportunity Commission published [guidance on AI and Title VII](https://www.eeoc.gov/laws/guidance/select-issues-assessing-adverse-impact-software-algorithms-and-artificial) in May 2023, making clear that employers are liable for discriminatory outcomes from AI hiring tools, even if the tool was developed by a third-party vendor. However, the EEOC **removed this AI hiring guidance from its website on January 27, 2025**, following the change in administration. Despite the removal, the underlying statutory protections remain fully in effect — Title VII, the ADA, and the ADEA all apply to algorithmic employment decisions regardless of whether the guidance is posted. If an AI screening tool disproportionately rejects candidates based on race, sex, or other protected characteristics, the employer faces the same liability as if a human made those decisions.',
        },
        {
          term: 'FTC — Deceptive and Unfair AI Practices',
          description:
            'The Federal Trade Commission has been the most active federal enforcer on AI issues. In **September 2024, the FTC launched Operation AI Comply**, bringing five enforcement actions against companies making false or unsubstantiated claims about AI products and services. The FTC has also taken action against companies for using AI in ways that cause consumer harm and failing to protect data used in AI training. The FTC\'s authority under Section 5 (prohibiting unfair or deceptive practices) gives it broad enforcement power over commercial AI. The Commission has signaled that it considers algorithmic deception, dark patterns in AI interfaces, and AI-enabled surveillance to be enforcement priorities. Under the December 2025 executive order, the FTC Chair is directed to issue a policy statement on how the FTC Act applies to AI, due March 11, 2026.',
        },
        {
          term: 'FDA — AI in Healthcare and Medical Devices',
          description:
            'The Food and Drug Administration regulates AI-enabled medical devices through its existing device approval process. The FDA has approved hundreds of AI-enabled devices and has developed a framework for AI/ML-based Software as a Medical Device (SaMD). Key issues include how to regulate AI devices that learn and change after approval, clinical validation requirements, and transparency about AI limitations in clinical settings. The FDA\'s approach is the most mature AI regulatory framework within any single federal agency.',
        },
        {
          term: 'SEC — AI in Financial Services',
          description:
            'The Securities and Exchange Commission has proposed rules addressing AI in investment advising and broker-dealer activities. The SEC is focused on conflicts of interest when AI is used to make investment recommendations and on firms making misleading claims about their AI capabilities — a practice the SEC has called "AI washing." Several enforcement actions have targeted companies for overstating their AI capabilities to investors.',
        },
        {
          term: 'DOD — AI Ethics and Military Use',
          description:
            'The Department of Defense adopted AI ethics principles in 2020 covering responsible, equitable, traceable, reliable, and governable AI use. The DOD has established the Chief Digital and AI Office (CDAO) to coordinate AI adoption and governance across the military. While these standards apply to defense applications, they influence AI governance expectations for defense contractors and the broader defense industrial base.',
        },
        {
          term: 'HUD — AI in Housing',
          description:
            'The Department of Housing and Urban Development has authority to enforce the Fair Housing Act in the context of AI. Algorithmic tools used in tenant screening, mortgage lending, and property valuation that produce discriminatory outcomes can violate federal fair housing law regardless of intent.',
        },
        {
          term: 'CFPB — AI in Financial Services and Appraisals',
          description:
            'The Consumer Financial Protection Bureau has approved a rule on AI in home appraisals, requiring safeguards for algorithmic appraisal tools used in mortgage lending. The rule addresses the risk that automated valuation models may perpetuate historical biases in property valuations. The CFPB also has authority under the Equal Credit Opportunity Act (ECOA) and Fair Credit Reporting Act (FCRA) to regulate AI used in credit decisions, and has signaled that lenders using AI must still provide specific, accurate reasons when denying credit.',
        },
        {
          term: 'Why Agency Authority Matters Most',
          description:
            'The agency enforcement landscape is the most durable part of federal AI policy. Unlike executive orders, which change with administrations, statutory authority is established by Congress and persists regardless of the White House\'s policy preferences. For organizations deploying AI, these agency-specific requirements represent the real compliance floor.',
        },
      ],
    },
    {
      id: 'blueprint-ai-bill-of-rights',
      title: 'Blueprint for an AI Bill of Rights',
      content:
        'In **October 2022**, the White House Office of Science and Technology Policy (OSTP) released the **Blueprint for an AI Bill of Rights**, a non-binding framework outlining five principles for the design, use, and deployment of automated systems. While it carries no legal force, the Blueprint has been influential in shaping both federal agency guidance and state legislation.\n\nThe five principles are:',
      items: [
        {
          term: '1. Safe and Effective Systems',
          description:
            'Automated systems should be developed with consultation from diverse communities, tested before deployment, and continuously monitored. Systems should not be designed in ways that endanger safety, and they should work as intended.',
        },
        {
          term: '2. Algorithmic Discrimination Protections',
          description:
            'Automated systems should not contribute to unjustified different treatment based on race, color, ethnicity, sex, religion, age, national origin, disability, veteran status, genetic information, or any other protected classification. Designers, developers, and deployers should take proactive steps to ensure equity.',
        },
        {
          term: '3. Data Privacy',
          description:
            'People should be protected from abusive data practices through built-in protections. Data collection should be limited to what is strictly necessary, and consent should be meaningful. Surveillance technologies should be subject to heightened scrutiny.',
        },
        {
          term: '4. Notice and Explanation',
          description:
            'People should know when an automated system is being used and understand how and why it contributes to outcomes that affect them. Explanations should be clear, timely, and accessible.',
        },
        {
          term: '5. Human Alternatives, Consideration, and Fallback',
          description:
            'People should be able to opt out of automated systems in favor of a human alternative, where appropriate. A human should be available to address problems, and systems should have fallback mechanisms.',
        },
        {
          term: 'Influence and Legacy',
          description:
            'The Blueprint is not law and does not create enforceable rights. However, its principles have shown up repeatedly in state legislation (Colorado\'s consumer disclosure requirements, Connecticut\'s transparency provisions) and in agency guidance. It articulated a framework that has become the common vocabulary for AI rights discussions in the U.S. Even after the change in administration, the Blueprint remains a useful reference point for organizations thinking about responsible AI practices.',
        },
      ],
    },
    {
      id: 'current-state',
      title: 'Where Federal AI Policy Stands (Early 2026)',
      content:
        'As of early 2026, the federal AI policy landscape has shifted dramatically. The December 2025 executive order on federal preemption of state AI laws is now the dominant development, marking a transition from passive deregulation to active federal intervention against state-level AI regulation. Combined with the January 2025 revocation of EO 14110 and the April 2025 OMB memos (M-25-21 and M-25-22), the Trump administration has articulated a clear two-part federal AI strategy: (a) deregulation and innovation promotion at the federal level, and (b) active preemption and legal challenge of state-level AI regulation.\n\n**What is currently in effect:**\n\nExisting statutory authority remains the primary federal enforcement mechanism for AI. The FTC, FDA, SEC, and other agencies continue to apply their existing laws — the FTC Act, Title VII, ECOA, FCRA, and sector-specific statutes — to AI systems. This authority was never dependent on executive orders and persists regardless of administration. The FTC\'s Operation AI Comply enforcement actions and the upcoming FTC policy statement on AI (due March 2026) underscore that federal enforcement continues even under a deregulatory posture. NIST continues its work on AI standards, including the AI RMF and the new Cyber AI Profile, funded by Congressional appropriations. The Center for AI Standards and Innovation (CAISI, formerly the U.S. AI Safety Institute) continues to operate within NIST.\n\n**What has changed:**\n\nThe December 2025 EO creates active federal mechanisms to challenge state AI laws. The DOJ AI Litigation Task Force became operational in January 2026 and is directed to bring federal court challenges against state AI legislation. The Commerce Department assessment of conflicting state laws, the FCC proceeding on a federal AI reporting standard, and the conditional BEAD funding provisions all create pressure on states to scale back AI-specific regulation. The March 2026 White House legislative blueprint urges Congress to codify federal preemption through legislation. Meanwhile, OMB M-25-21 replaced M-24-10, shifting federal AI governance from a risk-management framework to an innovation-acceleration framework. Some agency guidance has been removed — notably the EEOC took down its AI hiring guidance in January 2025 — though underlying statutory protections remain.\n\n**What this means for organizations:**\n\nOrganizations face a period of significant legal uncertainty. The federal government is actively working to preempt state AI laws, but it has not yet established a comprehensive federal alternative. State laws remain in effect until successfully challenged in court or preempted by legislation. The practical result is that compliance obligations may shift rapidly depending on the outcomes of DOJ litigation, the FCC preemption proceeding, and Congressional action on the legislative blueprint. Organizations should not assume that state AI laws like Colorado\'s SB 24-205 will be struck down — the legal challenges face substantial constitutional questions. The safest approach is to maintain compliance programs that meet the most stringent applicable requirements while monitoring the preemption landscape closely.',
    },
    {
      id: 'practical-steps',
      title: 'What Organizations Should Do',
      content:
        'Federal AI policy is uncertain, but the underlying legal risks are real. Organizations should build governance programs that are resilient to policy shifts rather than dependent on any single administration\'s approach.',
      list: [
        '**Do not mistake the absence of federal AI law for the absence of legal risk.** Existing laws — Title VII, the FTC Act, the Fair Housing Act, FCRA, ECOA, FDA regulations — all apply to AI. Enforcement actions under these statutes are ongoing and increasing.',
        '**Adopt the NIST AI RMF as your governance baseline.** The NIST AI Risk Management Framework survived the change in administration because it was always voluntary and industry-driven. It remains the most widely referenced AI governance framework in the U.S. and is cited by multiple state laws.',
        '**Monitor agency guidance and enforcement.** Pay close attention to FTC enforcement actions, EEOC guidance updates, and FDA regulatory decisions. These signal where the real compliance boundaries are, regardless of executive order policy.',
        '**Document your AI systems and decisions.** Even without federal disclosure requirements, maintaining thorough documentation of your AI systems — what they do, how they were tested, what safeguards are in place — is the best defense against enforcement action. If an agency investigates, you want to show a deliberate, documented governance process.',
        '**Prepare for the possibility of federal legislation.** Multiple AI bills have been introduced in Congress. While none have passed, the legislative trajectory suggests eventual federal action. Organizations that have already built governance programs will be better positioned to comply with whatever form that legislation takes.',
        '**Do not rely on the current permissive posture being permanent.** Executive orders change with administrations. The regulatory pendulum can swing back. Organizations that build responsible AI practices now — rather than optimizing for the minimum current requirement — will face less disruption when the policy environment shifts again.',
        '**Track state laws alongside federal policy.** Federal and state AI regulation are developing in parallel, and state laws are currently more specific and enforceable. A federal-only compliance strategy is incomplete. See our [U.S. State AI Laws](/regulations/us-state-laws) guide for details.',
        '**Engage with voluntary standards and industry groups.** In the absence of prescriptive federal rules, voluntary standards (ISO/IEC 42001, NIST AI RMF, IEEE standards) carry more weight. Participation in industry groups developing AI governance standards demonstrates good faith and helps shape the standards your organization will eventually need to meet.',
      ],
    },
  ],
  timeline: [
    {
      date: 'October 2022',
      event:
        'White House OSTP releases the Blueprint for an AI Bill of Rights, outlining five principles for automated systems. Non-binding but influential.',
    },
    {
      date: 'January 2023',
      event:
        'NIST publishes the AI Risk Management Framework (AI RMF 1.0), establishing a voluntary governance framework for AI systems.',
    },
    {
      date: 'May 2023',
      event:
        'EEOC issues guidance on AI and Title VII, clarifying that employers are liable for discriminatory outcomes from AI hiring tools.',
    },
    {
      date: 'October 2023',
      event:
        'President Biden signs Executive Order 14110 on Safe, Secure, and Trustworthy AI — the most comprehensive federal AI action to date.',
    },
    {
      date: 'March 2024',
      event:
        'OMB issues M-24-10, establishing governance requirements for federal agency AI use including Chief AI Officers and AI use case inventories.',
    },
    {
      date: '2023 \u2013 2024',
      event:
        'Multiple agencies issue AI-specific guidance: FTC on deceptive AI practices, FDA on AI medical devices, SEC on AI in financial services, HUD on AI in housing.',
    },
    {
      date: 'September 2024',
      event:
        'FTC launches Operation AI Comply with five enforcement actions against companies making false or unsubstantiated claims about AI products and services.',
    },
    {
      date: 'January 20, 2025',
      event:
        'President Trump signs EO 14148 ("Initial Rescissions of Harmful Executive Orders and Actions"), which rescinds 78 Biden-era orders including EO 14110. Three days later, on January 23, he signs EO 14179 ("Removing Barriers to American Leadership in AI") directing agencies to remove barriers to AI innovation. OMB M-24-10 is subsequently rescinded.',
    },
    {
      date: 'April 2025',
      event:
        'OMB issues M-25-21 ("Accelerating Federal Use of AI through Innovation, Governance, and Public Trust") and companion M-25-22 (AI procurement), replacing Biden-era AI memos with innovation-focused guidance.',
    },
    {
      date: 'December 2025',
      event:
        'President Trump signs "Ensuring a National Policy Framework for Artificial Intelligence," establishing federal preemption of state AI laws and creating the DOJ AI Litigation Task Force.',
    },
    {
      date: 'January 9, 2026',
      event:
        'AG Pam Bondi establishes the DOJ AI Litigation Task Force. As of April 2026, no lawsuits have been filed \u2014 the Executive Order contemplates Commerce Department referrals first.',
    },
    {
      date: 'March 20, 2026',
      event:
        'White House releases the National Policy Framework for Artificial Intelligence, a non-binding legislative blueprint covering child safety, communities, IP, innovation, workforce, and state preemption.',
    },
  ],
  sources: [
    {
      title: 'Executive Order 14110 — Safe, Secure, and Trustworthy AI',
      url: 'https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/',
      description:
        'Full text of the Biden administration executive order on AI (revoked January 2025).',
    },
    {
      title:
        'Executive Order 14148 — Initial Rescissions of Harmful Executive Orders and Actions',
      url: 'https://www.federalregister.gov/documents/2025/01/28/2025-01901/initial-rescissions-of-harmful-executive-orders-and-actions',
      description:
        'The January 20, 2025 order rescinding 78 Biden-era presidential orders, including EO 14110.',
    },
    {
      title:
        'Executive Order 14179 — Removing Barriers to American Leadership in Artificial Intelligence',
      url: 'https://www.federalregister.gov/documents/2025/01/31/2025-02172/removing-barriers-to-american-leadership-in-artificial-intelligence',
      description:
        'Full text of the January 23, 2025 Trump administration executive order setting a pro-innovation AI policy direction.',
    },
    {
      title: 'Blueprint for an AI Bill of Rights',
      url: 'https://www.whitehouse.gov/ostp/ai-bill-of-rights/',
      description:
        'White House OSTP framework outlining five principles for the design and use of automated systems.',
    },
    {
      title: 'EEOC — Assessing Adverse Impact in Software and AI',
      url: 'https://www.eeoc.gov/laws/guidance/select-issues-assessing-adverse-impact-software-algorithms-and-artificial',
      description:
        'EEOC guidance on how Title VII applies to AI-driven employment decisions.',
    },
    {
      title: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/artificial-intelligence',
      description:
        'NIST resources on AI standards, including the AI RMF 1.0 and related evaluation tools.',
    },
    {
      title: 'FTC — Artificial Intelligence and Algorithms',
      url: 'https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check',
      description:
        'FTC guidance on AI marketing claims and enforcement priorities for AI-related consumer harm.',
    },
    {
      title: 'EO: Ensuring a National Policy Framework for AI (Dec 2025)',
      url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/',
      description:
        'December 2025 executive order on federal AI preemption, establishing the DOJ AI Litigation Task Force and targeting state AI laws.',
    },
  ],
  relatedRegulations: ['us-state-laws', 'nist-ai-rmf', 'sector-rules'],
}
