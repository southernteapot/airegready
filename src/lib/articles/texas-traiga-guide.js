export const texasTraigaGuide = {
  slug: 'texas-traiga-guide',
  title: 'Texas TRAIGA in Effect: What the Responsible AI Governance Act Actually Requires',
  description:
    "A practical guide to the Texas Responsible Artificial Intelligence Governance Act (HB 149), in effect since January 1, 2026 — what it prohibits, who it applies to, how the NIST AI RMF safe harbor works, and when to consider the 36-month regulatory sandbox.",
  category: 'State Laws',
  categorySlug: 'us-state-laws',
  date: '2026-04-15',
  displayDate: 'April 15, 2026',
  readTime: '8 min read',
  featured: true,

  sections: [
    {
      title: null,
      content:
        "The **Texas Responsible Artificial Intelligence Governance Act** \u2014 TRAIGA, or **HB 149** \u2014 took effect on **January 1, 2026**. Governor Greg Abbott signed it on June 22, 2025, making Texas the third U.S. state with a comprehensive AI law, after Colorado and California.\n\nTRAIGA is not a copy of either of those laws. Colorado regulates AI systems used in broad categories of \"consequential decisions.\" California's TFAIA targets the developers of the largest AI models. TRAIGA takes a third approach: it bans specific **intentional misuses** of AI, lets most everyday AI use continue without new obligations, and adds a **36-month regulatory sandbox** that no other state has.\n\nIf you do business in Texas, sell products used by Texans, or build or deploy AI there, TRAIGA already applies to you. This article is a practical walk-through of what it prohibits, what it doesn't, how the sandbox works, and what a small or mid-sized business should actually do about it.",
    },
    {
      title: 'What TRAIGA Is (and Isn\u2019t)',
      content:
        'TRAIGA is narrower than most people expect from a \"comprehensive\" state AI law. It doesn\'t require impact assessments for every high-risk AI system. It doesn\'t mandate AI-use disclosures from private employers. It doesn\'t create a private right of action.\n\nWhat it does do is three things. **It bans a specific list of intentional misuses** of AI. **It requires certain government agencies and healthcare providers to disclose AI use.** **It creates a first-in-the-nation regulatory sandbox** for companies testing novel AI systems.\n\nThe underlying philosophy is visible once you read the text: Texas wants to be friendly to AI businesses while drawing hard lines around a small number of unambiguous harms. Most of the prohibitions carry an **intent requirement** \u2014 they only apply when developers or deployers act with the specific purpose the statute targets.',
    },
    {
      title: 'Who It Applies To',
      content:
        'TRAIGA is broad in reach. It applies to anyone who does any of the following.',
      list: [
        'Promotes, advertises, or conducts business in Texas.',
        'Produces a product or service used by Texas residents.',
        'Develops or deploys an AI system in Texas.',
      ],
    },
    {
      title: 'How TRAIGA Defines "AI"',
      content:
        'The statutory definition is broad: an AI system is "any machine-based system that, for any explicit or implicit objective, infers from the inputs the system receives how to generate outputs, including content, decisions, predictions, or recommendations, that can influence physical or virtual environments."\n\nThis tracks the OECD definition that most major AI frameworks use. It captures large language models, recommendation systems, predictive scoring tools, computer vision systems, autonomous decision systems, and many traditional machine-learning applications. It does not require the system to be called "AI" in marketing.',
    },
    {
      title: 'What TRAIGA Prohibits',
      content:
        'TRAIGA establishes a list of **categorical prohibitions** on developing or deploying AI systems with specific intents. The prohibitions include several distinct categories.',
      list: [
        '**Behavioral manipulation.** AI systems developed or deployed with intent to manipulate behavior to encourage self-harm, encourage harm to others, or encourage criminal activity.',
        '**Unlawful discrimination.** AI systems developed or deployed with intent to unlawfully discriminate against a protected class. Disparate impact alone is not enough \u2014 the prohibition reaches intentional discrimination.',
        '**Child sexual abuse material and unlawful deepfakes.** AI systems developed or deployed with intent to generate child sexual abuse material, unlawful deepfake pornography, or simulated sexual content involving minors.',
        '**Constitutional rights infringement.** AI systems developed or deployed with intent to infringe on state or federal constitutional rights of individuals.',
      ],
    },
    {
      title: 'Government Agency Rules',
      content:
        'TRAIGA draws a clear line between private and public-sector AI use. **Government agencies** that use AI to interact with consumers \u2014 even in ways where the AI is obvious \u2014 must disclose that AI is being used **before or at the time of the interaction**.\n\nTwo additional government-specific bans apply:',
      list: [
        '**No social scoring.** Government social scoring AI is banned outright.',
        '**No biometric identification.** Government use of biometric identification (fingerprints, iris, voiceprint) for general identification purposes is banned, except for routine photos and audio.',
      ],
    },
    {
      title: 'Healthcare Disclosure',
      content:
        'Healthcare providers that use AI in interactions with patients must disclose the use of AI. The disclosure requirement attaches to the healthcare provider, not to the AI vendor.\n\nThis parallels the broader national trend toward healthcare-specific AI transparency. It does not create new HIPAA obligations on its own, but healthcare providers already subject to HIPAA should coordinate TRAIGA disclosure with existing patient communication practices.',
    },
    {
      title: 'What TRAIGA Does Not Require',
      content:
        'One of the most striking things about TRAIGA is what is *not* in it. These absences are worth knowing, because they distinguish Texas from Colorado and California.',
      list: [
        '**No private-employer AI disclosure.** Unlike Illinois HB 3773 and the patchwork of state hiring-AI laws, TRAIGA does not require private employers to disclose AI use in employment decisions.',
        '**No impact assessments.** Unlike Colorado SB 24-205 and Connecticut SB 1103, TRAIGA does not require algorithmic impact assessments for high-risk AI systems.',
        '**No private right of action.** Only the Texas Attorney General can bring enforcement actions under TRAIGA. Individuals cannot sue directly.',
        '**No disparate-impact liability.** TRAIGA\'s anti-discrimination prohibition requires intent. A neutral AI system that happens to produce disparate outcomes is not, on its own, a TRAIGA violation.',
      ],
    },
    {
      title: 'The NIST AI RMF Safe Harbor',
      content:
        'One of TRAIGA\'s most useful features for compliance-minded organizations is its **NIST AI RMF safe harbor**. Organizations that substantially comply with the **NIST AI Risk Management Framework** get affirmative protection against TRAIGA enforcement actions.\n\nThis is one of the most concrete examples of a state law rewarding NIST adoption. If you are deciding what governance framework to build your AI program on top of, NIST AI RMF just picked up a very practical reason to be at the top of the list for any organization doing business in Texas.\n\nFor more on what NIST AI RMF looks like in practice, see [NIST AI RMF in Practice: From Framework to Action Plan](/blog/nist-ai-rmf-practice).',
    },
    {
      title: 'Enforcement and Penalties',
      content:
        'TRAIGA is enforced **exclusively by the Texas Attorney General**. There is no private right of action.\n\nBefore bringing an enforcement action, the AG must provide **notice and an opportunity to cure**. This is meaningful: it means a first TRAIGA contact from the state is likely to be a notice of a specific alleged violation with a window to fix it, not a lawsuit.\n\nPenalties are structured by severity:',
      list: [
        '**$10,000 to $200,000 per violation**, depending on whether the violation is determined to be "curable."',
        '**$2,000 to $40,000 per day** for a continued violation.',
      ],
    },
    {
      title: 'The 36-Month Regulatory Sandbox',
      content:
        'TRAIGA establishes a **first-in-the-nation state AI regulatory sandbox**, administered by the Texas Department of Information Resources (DIR). Approved participants can test AI systems for up to **36 months** without obtaining otherwise-applicable state licenses \u2014 and during that window, the AG cannot pursue enforcement actions for violations of state laws that have been waived under the sandbox.\n\nImportant caveat: **TRAIGA\'s own core prohibitions are not waived**. Sandbox participants still cannot generate CSAM, intentionally discriminate, infringe constitutional rights, or the other banned categories. The sandbox is a shelter for ambiguous compliance, not a blanket exemption.\n\nTo participate, applicants must submit specific materials.',
      list: [
        'A detailed description of the AI system being tested and its intended use.',
        'A **benefit assessment** addressing potential impacts on consumers, privacy, and public safety.',
        'A **mitigation plan** for adverse consequences during testing.',
        'Proof of compliance with applicable federal AI laws and regulations.',
      ],
    },
    {
      title: 'Who Should Consider the Sandbox',
      content:
        'The sandbox is not for everyone. For most organizations using everyday AI tools \u2014 off-the-shelf LLMs for writing, coding assistants, customer-support bots \u2014 there is no compliance ambiguity to resolve, and the reporting overhead of sandbox participation (quarterly and annual reports, stakeholder feedback collection, benefit-impact documentation) isn\'t worth it.\n\nThe sandbox becomes genuinely valuable when your AI system sits on the edge of an existing licensing regime or regulatory category. A few examples.',
      list: [
        'An AI-powered medical decision-support tool that does not fit cleanly into existing FDA or state medical-device categories.',
        'A novel financial product that raises questions under state insurance or lending licensure regimes.',
        'An autonomous or semi-autonomous service that touches multiple professional-licensing domains (legal, financial, real estate).',
        'A new identity or biometric system that needs to be tested under real-world conditions before permanent deployment.',
      ],
    },
    {
      title: 'Sandbox Participant Obligations',
      content:
        'Participants have real ongoing obligations during the sandbox window. You don\'t get 36 months of silence \u2014 you get 36 months of monitored operation with the AG off your back on specific waived issues.',
      list: [
        '**Quarterly performance reports** covering system operation and any adverse incidents.',
        '**Consumer and stakeholder feedback collection** during the testing period.',
        '**Annual reports** summarizing progress, incidents, and any changes to the system or its intended use.',
        'Adherence to the approved mitigation plan throughout the testing window.',
      ],
    },
    {
      title: 'The Texas AI Advisory Council',
      content:
        'TRAIGA establishes a seven-member **Texas Artificial Intelligence Advisory Council** \u2014 appointed by the governor, lieutenant governor, and speaker of the house. The Council runs AI training programs for state agencies and local governments, and it advises the legislature on AI-related topics (data privacy, ethics, legal risk, compliance).\n\nCrucially, the Council is **expressly prohibited from issuing binding rules**. It is an advisory body, not a rule-making body. This reflects the Texas legislative preference for keeping technical AI policy choices in the statute itself rather than delegating them to an agency.',
    },
    {
      title: 'Federal Preemption in the Background',
      content:
        'TRAIGA is one of the state AI laws the federal government has signaled it may challenge. On December 11, 2025, President Trump signed an executive order titled "Ensuring a National Policy Framework for AI" that cast doubt on state AI laws. The **DOJ AI Litigation Task Force** was established by AG Pam Bondi on January 9, 2026 to challenge such laws in federal court. On March 20, 2026, the White House released a broader National Policy Framework for AI as a legislative blueprint.\n\nAs of April 2026, the Task Force has not yet filed any lawsuits. And under the Constitution, executive orders alone cannot preempt state law \u2014 only Congress can do that. Until Congress acts, TRAIGA is in full effect and the Texas AG can enforce it.\n\nFor a deeper dive, see [The Federal Push to Preempt State AI Laws](/blog/federal-ai-preemption).',
    },
    {
      title: 'What Businesses Should Actually Do',
      content:
        'Most businesses reading this don\'t need a TRAIGA-specific compliance program \u2014 they need a general AI governance program that happens to cover what TRAIGA requires. Five concrete steps cover the relevant ground.',
      list: [
        '**Review your AI uses against TRAIGA\'s prohibited-intent categories.** The bans are specific and intent-based. If nothing in your use of AI is aimed at behavioral manipulation toward self-harm or crime, intentional discrimination, CSAM or unlawful deepfakes, or constitutional-rights infringement, you\'re in the clear on those prohibitions.',
        '**If you\'re a healthcare provider, confirm your patient communications disclose AI use where it is in the loop.** Coordinate with your existing HIPAA practices and informed-consent processes.',
        '**Align your AI governance program with the NIST AI Risk Management Framework.** This unlocks the TRAIGA safe harbor and positions you well for other state laws that explicitly reference NIST (Colorado) or are likely to.',
        '**Document your policies, decisions, and risk assessments.** Even though TRAIGA does not require formal impact assessments, documentation is how you demonstrate that you are not intentionally engaged in any prohibited behavior.',
        '**If you\'re building something genuinely novel or at the edge of an existing licensing regime, evaluate the sandbox.** Talk to Texas DIR early, map your AI system to the application requirements, and decide whether the 36-month window is worth the reporting cadence.',
      ],
    },
  ],

  takeaways: [
    "Texas TRAIGA (HB 149) took effect January 1, 2026. It makes Texas the third state with a comprehensive AI law, after Colorado and California.",
    "TRAIGA is intent-based and narrower than Colorado. It bans specific misuses of AI (behavioral manipulation, intentional discrimination, CSAM/unlawful deepfakes, constitutional-rights infringement) rather than regulating broad categories of use.",
    "Private employers are not required to disclose AI use. Government agencies and healthcare providers are. There is no private right of action \u2014 the Texas AG enforces exclusively.",
    "Substantial compliance with the NIST AI Risk Management Framework provides affirmative safe harbor protection under TRAIGA.",
    "The 36-month regulatory sandbox is a first-in-the-nation feature for testing novel AI systems. It suspends most state licensing and AG enforcement during the testing window, but core TRAIGA prohibitions still apply.",
    "Penalties run $10,000\u2013$200,000 per violation or $2,000\u2013$40,000 per day for continued violations. AG must provide notice and a cure period before filing.",
  ],

  sources: [
    {
      title: 'Texas HB 149 (TRAIGA) \u2014 Full Text',
      url: 'https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB00149F.pdf',
    },
    {
      title: 'Texas HB 149 \u2014 House Research Organization Analysis',
      url: 'https://capitol.texas.gov/tlodocs/89R/analysis/html/HB00149S.htm',
    },
    {
      title: 'Norton Rose Fulbright \u2014 Texas Responsible AI Governance Act',
      url: 'https://www.nortonrosefulbright.com/en/knowledge/publications/c6c60e0c/the-texas-responsible-ai-governance-act',
    },
    {
      title: 'Baker Botts \u2014 Texas Enacts Responsible AI Governance Act',
      url: 'https://www.bakerbotts.com/thought-leadership/publications/2025/july/texas-enacts-responsible-ai-governance-act-what-companies-need-to-know',
    },
    {
      title: 'Latham & Watkins \u2014 Texas Signs Responsible AI Governance Act Into Law',
      url: 'https://www.lw.com/en/insights/texas-signs-responsible-ai-governance-act-into-law',
    },
    {
      title: 'IAPP \u2014 TRAIGA Compliance: A Sample Policy Framework',
      url: 'https://iapp.org/news/a/texas-responsible-ai-governance-act-compliance-a-sample-policy-framework',
    },
  ],

  relatedArticles: ['federal-ai-preemption', 'nist-ai-rmf-practice', 'us-states-ai-hiring'],
  relatedRegulations: ['texas-ai-regulation', 'us-state-laws', 'federal-policy'],
}
