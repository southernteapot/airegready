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
  keyFacts: [
    { label: 'Comprehensive Federal AI Law', value: 'None (as of early 2026)' },
    {
      label: 'Current Executive Order',
      value: 'EO 14148 — pro-innovation approach (Jan 2025)',
    },
    {
      label: 'Prior Executive Order',
      value: 'EO 14110 — revoked January 20, 2025',
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
      value: 'M-24-10 issued March 2024, subsequently rescinded',
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
            'This executive order was revoked when President Trump signed EO 14148. However, not everything initiated under EO 14110 disappeared. Work already completed by NIST — including updates to the AI RMF and development of evaluation tools — continues, as NIST operates on Congressional funding independent of executive orders. Some agency guidance issued under EO 14110 also remains in effect unless specifically rescinded by the issuing agency. The practical impact of the revocation was to eliminate the mandatory safety reporting requirements for AI developers, halt new regulatory initiatives that were still in development, and signal a shift in federal policy from precautionary regulation toward a more permissive approach.',
        },
      ],
    },
    {
      id: 'eo-14148',
      title:
        'Executive Order 14148: Removing Barriers to American Leadership in AI',
      content:
        'On **January 20, 2025** — his first day in office — President Trump signed **Executive Order 14148**, titled "Removing Barriers to American Leadership in Artificial Intelligence." The order revoked EO 14110 in its entirety and set a markedly different direction for federal AI policy.\n\nThe core premise of EO 14148 is that excessive regulation threatens American competitiveness in AI. The order frames AI development primarily as an economic and national security opportunity rather than a risk to be managed. It directs federal agencies to remove regulatory barriers to AI innovation and to avoid imposing new requirements that could slow AI development.\n\n**Key elements of EO 14148:**',
      list: [
        '**Revocation of EO 14110.** All provisions of the Biden-era executive order were revoked, including the safety testing and reporting requirements for powerful AI models.',
        '**Pro-innovation directive.** Federal agencies were instructed to review and consider suspending, revising, or rescinding any regulations or guidance that could be seen as barriers to AI development and deployment.',
        '**Emphasis on American leadership.** The order frames AI policy through the lens of international competition, particularly with China. Maintaining U.S. dominance in AI technology is presented as a national security priority.',
        '**Reduced federal oversight.** The order moves away from centralized federal AI governance and does not establish new reporting requirements, safety testing mandates, or disclosure obligations for AI developers.',
        '**Agency review.** Agencies were directed to review all AI-related policies, guidance, and regulations issued under the previous administration and to identify anything inconsistent with the new order\'s pro-innovation approach.',
      ],
    },
    {
      id: 'eo-14148-impact',
      title: 'What EO 14148 Means in Practice',
      content:
        'The shift from EO 14110 to EO 14148 does not create a regulatory vacuum. Federal agencies still have their existing statutory authority to regulate AI within their domains — the FTC can still pursue deceptive AI practices, the EEOC can still enforce anti-discrimination law in AI hiring tools, and the FDA can still regulate AI medical devices. What changed is the top-level policy direction: from proactive AI-specific regulation toward reliance on existing authority and market forces.\n\nFor organizations, the practical takeaway is that voluntary compliance and self-governance are now the federal expectation rather than mandatory requirements. However, this does not reduce legal risk — it shifts the enforcement mechanism from prescriptive rules to after-the-fact agency action under existing law.',
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
          term: 'Status: Rescinded',
          description:
            'M-24-10 was rescinded following the change in administration and the issuance of EO 14148. The rescission removed the mandatory requirements for Chief AI Officers, public AI inventories, and the specific risk management practices the memorandum had established. However, the practical influence persists. Many federal agencies had already begun implementing its requirements — appointing Chief AI Officers, building AI inventories, and establishing governance frameworks. Some agencies have continued these practices voluntarily, recognizing their operational value even without the mandate. For government contractors and vendors selling AI to federal agencies, the expectations established by M-24-10 remain informally relevant even though the formal requirements are gone.',
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
            'The Equal Employment Opportunity Commission has issued [guidance on AI and Title VII](https://www.eeoc.gov/laws/guidance/select-issues-assessing-adverse-impact-software-algorithms-and-artificial), making clear that employers are liable for discriminatory outcomes from AI hiring tools, even if the tool was developed by a third-party vendor. The EEOC\'s position is that existing anti-discrimination law applies fully to algorithmic decision-making. If an AI screening tool disproportionately rejects candidates based on race, sex, or other protected characteristics, the employer faces the same liability as if a human made those decisions.',
        },
        {
          term: 'FTC — Deceptive and Unfair AI Practices',
          description:
            'The Federal Trade Commission has been the most active federal enforcer on AI issues. The FTC has taken action against companies for making deceptive claims about AI capabilities, using AI in ways that cause consumer harm, and failing to protect data used in AI training. The FTC\'s authority under Section 5 (prohibiting unfair or deceptive practices) gives it broad enforcement power over commercial AI. The Commission has signaled that it considers algorithmic deception, dark patterns in AI interfaces, and AI-enabled surveillance to be enforcement priorities.',
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
        'As of early 2026, federal AI policy is in a transitional period. The Biden-era regulatory apparatus has been largely dismantled at the executive order level, but its effects linger in agency practice and state legislation. The Trump administration has signaled a permissive approach, but has not yet articulated a detailed alternative framework.\n\n**What is currently in effect:**\n\nExisting statutory authority remains the primary federal enforcement mechanism for AI. The FTC, EEOC, FDA, SEC, and other agencies continue to apply their existing laws to AI. This authority was never dependent on executive orders and is not affected by the change in administration. NIST continues its work on AI standards and evaluation tools, funded by Congressional appropriations rather than executive orders. The AI Risk Management Framework and related resources remain available and are still referenced by state laws and industry standards.\n\n**What has changed:**\n\nThe mandatory safety reporting requirements for powerful AI models established by EO 14110 are gone. The OMB governance requirements for federal agencies (Chief AI Officers, AI inventories, minimum practices) have been rescinded. The overall policy direction has shifted from precautionary regulation to innovation-first. New AI-specific rulemaking at the federal level has slowed significantly.\n\n**What this means for organizations:**\n\nThe absence of prescriptive federal AI rules does not mean the absence of legal risk. Organizations still face enforcement under existing law if their AI systems produce discriminatory outcomes, deceive consumers, or cause harm. State laws continue to proliferate and in many cases impose more specific requirements than anything the federal government has established. The practical effect of the current federal posture is that organizations have more flexibility but less clarity. There is no single federal standard to comply with, but there are multiple agency-specific expectations and a growing body of state law that fills the gaps.',
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
      date: 'January 20, 2025',
      event:
        'President Trump signs EO 14148, revoking EO 14110 and directing agencies to remove barriers to AI innovation. OMB M-24-10 is subsequently rescinded.',
    },
    {
      date: 'Early 2026',
      event:
        'Federal AI policy remains in a transitional period. Agency enforcement under existing law continues. NIST AI standards work proceeds. Congressional AI legislation remains under discussion.',
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
        'Executive Order 14148 — Removing Barriers to American Leadership in AI',
      url: 'https://www.whitehouse.gov/presidential-actions/removing-barriers-to-american-leadership-in-artificial-intelligence/',
      description:
        'Full text of the Trump administration executive order revoking EO 14110 and setting a pro-innovation AI policy direction.',
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
  ],
  relatedRegulations: ['us-state-laws', 'nist-ai-rmf', 'sector-rules'],
}
