export const coloradoAiActCountdown = {
  slug: 'colorado-ai-act-countdown',
  title: 'Colorado\u2019s AI Act Takes Effect June 30: What Developers and Deployers Need to Do Now',
  description:
    'Colorado SB 24-205 \u2014 the first comprehensive U.S. state AI law \u2014 takes effect June 30, 2026. A practical walk-through of the duty of reasonable care, impact assessments, consumer notices, and the NIST AI RMF safe harbor.',
  category: 'State Laws',
  categorySlug: 'us-state-laws',
  date: '2026-04-14',
  displayDate: 'April 14, 2026',
  readTime: '9 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'Colorado\u2019s **SB 24-205**, the Colorado Artificial Intelligence Act, takes effect on **June 30, 2026**. That is roughly two and a half months away. It will be the first enforcement date for a comprehensive, cross-sector U.S. state AI law \u2014 and in a real sense, the first time a U.S. attorney general can bring AI-specific actions against broad categories of private businesses using high-risk AI systems.\n\nThis article is a practical walk-through. Who is covered. What the duty of reasonable care actually means. How impact assessments, consumer notices, and the NIST AI RMF safe harbor work. What 90-day preparation looks like if you are starting now.\n\nColorado passed this law in May 2024, delayed it in August 2025, and is expected to consider further amendments during its 2026 regular legislative session. As of April 2026 the core obligations are unchanged. Assume it takes effect as written.',
    },
    {
      title: 'What SB 24-205 Is (and Isn\u2019t)',
      content:
        'SB 24-205 regulates **high-risk artificial intelligence systems** used in **consequential decisions** about Colorado consumers. That framing is narrower than \"any AI used in Colorado\" and broader than \"AI in hiring.\" It cuts across eight regulated domains and splits obligations between the companies that build AI (\"developers\") and the companies that use AI to make decisions (\"deployers\").\n\nIt is not a frontier-model law. It is not a transparency-only law. It does not prohibit specific use cases. It imposes governance, documentation, and consumer-notice obligations on any organization using AI in ways that affect access to the things that matter most \u2014 housing, credit, employment, insurance, healthcare, education, essential government services, and legal services.\n\nSB 24-205 was modeled in part on the EU AI Act, but it was written to function in the U.S. legal system. Instead of conformity assessments and notified bodies, it uses a **duty of reasonable care** standard enforceable by the Colorado Attorney General.',
    },
    {
      title: 'Who Counts as a \"Deployer\"',
      content:
        'A **deployer** is any entity that uses a high-risk AI system to make, or as a substantial factor in making, a consequential decision about a Colorado consumer.\n\nThree things are worth flagging about that definition.',
      list: [
        '**The key question is not where the system was built.** It is where the decision is made and who is affected. An out-of-state company using a high-risk AI system on Colorado consumers is covered.',
        '**\"Substantial factor\" does real work.** You don\u2019t have to be fully automating a decision. If the AI system is a meaningful input to the decision \u2014 even with a human in the loop \u2014 you are likely a deployer.',
        '**The consumer has to be a Colorado resident.** Colorado cannot regulate consumers in other states. But if you serve Colorado consumers at all, SB 24-205 reaches the decisions you make about them.',
      ],
    },
    {
      title: 'What Counts as a \"High-Risk AI System\"',
      content:
        'An AI system is high-risk under SB 24-205 when it is deployed to make, or is a substantial factor in making, a **consequential decision** in one of eight domains.',
      list: [
        '**Education enrollment or education opportunities** \u2014 admissions, scholarships, placement decisions.',
        '**Employment or employment opportunities** \u2014 hiring, promotion, termination, task assignment.',
        '**Financial and lending services** \u2014 credit decisions, loan terms, account closures.',
        '**Essential government services** \u2014 benefits eligibility, public-benefit determinations.',
        '**Healthcare services** \u2014 coverage decisions, care recommendations, provider matching.',
        '**Housing** \u2014 rental applications, tenant screening, housing availability and terms.',
        '**Insurance** \u2014 underwriting, claims decisions, rate-setting.',
        '**Legal services** \u2014 AI systems that deliver legal information or decisions affecting legal outcomes.',
      ],
    },
    {
      title: 'The Central Obligation: Duty of Reasonable Care',
      content:
        'At the heart of SB 24-205 is a **duty of reasonable care**: on and after June 30, 2026, a deployer of a high-risk AI system must use reasonable care to protect consumers from any known or reasonably foreseeable risks of **algorithmic discrimination**.\n\nThe statute is clear about what \"reasonable care\" looks like. A deployer demonstrates it by doing the following.',
      list: [
        'Implementing a **risk management policy and program** governing the deployment of the high-risk AI system.',
        'Completing an **annual impact assessment**.',
        'Providing **consumer disclosures** when a high-risk system is used in a consequential decision.',
        'Offering consumers an **opportunity to appeal** an adverse decision, with human review if technically feasible.',
        'Publishing a **public statement** summarizing the types of high-risk systems deployed and how risks of discrimination are managed.',
        'Disclosing discovered instances of **algorithmic discrimination** to the Colorado Attorney General within 90 days.',
      ],
    },
    {
      title: 'Risk Management Policy and Program',
      content:
        'Every deployer must implement a risk management policy and program. SB 24-205 does not dictate the exact shape of that program, but it explicitly references the **NIST AI Risk Management Framework** as a benchmark \u2014 and a safe harbor.\n\nOrganizations that build their AI governance program around NIST AI RMF get affirmative protection against SB 24-205 enforcement actions, provided they are substantially complying. This is one of the most consequential design choices in the law: it effectively makes NIST AI RMF the default U.S. baseline for AI governance programs, because Colorado rewards adopters.\n\nAt a minimum, a SB 24-205 risk management program should cover who is responsible for AI governance, what AI systems fall within scope, how risks are identified and measured, what mitigations are in place, how the program is reviewed and updated, and how issues are documented and escalated.',
    },
    {
      title: 'Annual Impact Assessments',
      content:
        'Deployers must complete an **impact assessment** before deploying a high-risk AI system and must update it **annually**. Impact assessments must be retained for at least **three years** after the final deployment of the system.\n\nAt minimum an impact assessment must cover the following elements. This is a distilled list based on the statute and common-sense practice.',
      list: [
        'The purpose of the high-risk AI system and the nature of the consequential decision it supports.',
        'The categories of data used as inputs and outputs.',
        'Known or reasonably foreseeable risks of algorithmic discrimination, and the measures in place to mitigate those risks.',
        'An evaluation of the system\u2019s performance, including accuracy relevant to the decision being made.',
        'Post-deployment monitoring procedures.',
        'Documentation supplied by the developer, and the deployer\u2019s independent review of that documentation.',
      ],
    },
    {
      title: 'Consumer Disclosures',
      content:
        'Before (or at the time of) deploying a high-risk AI system to make or substantially assist in a consequential decision about a consumer, the deployer must notify the consumer. That notice must include specific elements.',
      list: [
        '**That the deployer has deployed a high-risk AI system** to make, or be a substantial factor in making, a consequential decision.',
        '**A statement disclosing the purpose of the AI system** and the nature of the consequential decision.',
        '**Contact information for the deployer** so the consumer can follow up.',
        '**A plain-language description of the AI system** \u2014 readable by a consumer, not just a technical audience.',
      ],
    },
    {
      title: 'Appeal Rights and Human Review',
      content:
        'When a high-risk AI system contributes to an **adverse** consequential decision (denial, unfavorable terms, revocation), the deployer must provide the consumer with an opportunity to **appeal**. The appeal must include **human review where technically feasible**.\n\nThis is one of the most operationally demanding parts of SB 24-205. To implement appeal rights at scale, an organization typically needs a documented process for receiving appeals, a trained human reviewer who can override or adjust the AI-assisted decision, audit-trail records tying each decision (and each appeal outcome) back to the underlying AI system, and the ability to issue corrected outcomes and notices.',
    },
    {
      title: 'Public Statement',
      content:
        'Every deployer must publish a **public statement** (usually on its website) summarizing three things.',
      list: [
        'The types of high-risk AI systems the deployer currently deploys.',
        'How the deployer manages known or reasonably foreseeable risks of algorithmic discrimination for each of those systems.',
        'The nature, source, and extent of the information the deployer collects and uses.',
      ],
    },
    {
      title: 'Disclosure to the Colorado Attorney General',
      content:
        'If a deployer discovers that a high-risk AI system has caused **algorithmic discrimination**, the deployer must disclose that fact to the Colorado Attorney General **within 90 days of discovery**. This is a hard deadline, not a best-effort window.\n\nTwo practical implications. **First**, deployers need an internal process for identifying and escalating algorithmic-discrimination findings \u2014 because the 90 days runs from discovery, not from resolution. **Second**, the disclosure requirement creates a structural preference for finding and fixing problems internally, because the alternative is a self-reported disclosure to the AG that is likely to become an enforcement-action lead.',
    },
    {
      title: 'What Developers Owe Deployers',
      content:
        'SB 24-205 also imposes obligations on the **developers** that build high-risk AI systems or substantially modify them. These obligations are structured as disclosure duties to deployers, so deployers have the information they need to do their own risk management.',
      list: [
        'Documentation describing the intended uses, limitations, and known or reasonably foreseeable risks of the system.',
        'Information about the types of data used to train the system and the steps taken to mitigate algorithmic discrimination.',
        'The methodology used to evaluate the system for performance and discrimination risk.',
        'Known risks that cannot be, or have not been, mitigated.',
        'Updates and corrections when the developer identifies new risks after deployment.',
      ],
    },
    {
      title: 'Enforcement and the Affirmative Defense',
      content:
        'SB 24-205 is enforced **exclusively by the Colorado Attorney General**. Violations are treated as **unfair trade practices** under Colorado\u2019s Consumer Protection Act. There is no private right of action.\n\nBoth developers and deployers have an **affirmative defense** if they discover a violation through their own testing, feedback, or internal review processes and cure the violation. Substantial compliance with a recognized AI risk management framework \u2014 NIST AI RMF is explicitly named \u2014 supports the affirmative defense.\n\nThis is important design: the law is not trying to catch companies that are actively trying to comply. It is trying to catch companies that are not. Documentation of good-faith compliance effort is your first and best defense.',
    },
    {
      title: 'Federal Preemption in the Background',
      content:
        'SB 24-205 sits in the same federal-state crosscurrent as Colorado\u2019s sister state laws (California TFAIA, Texas TRAIGA). The December 11, 2025 executive order \"Ensuring a National Policy Framework for AI\" explicitly targets state AI laws for preemption, and the **DOJ AI Litigation Task Force** (established January 9, 2026) is tasked with challenging them.\n\nAs of April 2026, the Task Force has not filed any lawsuits. Under the Constitution, an executive order alone cannot preempt state law \u2014 only Congress can do that. The White House\'s **National Policy Framework for AI** (released March 20, 2026) sets a legislative agenda, but does not itself preempt anything. Until Congress acts, SB 24-205 takes effect as written on June 30, 2026, and the Colorado AG can enforce it.\n\nFor deeper coverage, see [The Federal Push to Preempt State AI Laws](/blog/federal-ai-preemption).',
    },
    {
      title: 'A 90-Day Preparation Plan',
      content:
        'If you are reading this in April 2026 and just starting your SB 24-205 preparation, you have roughly 90 days until the effective date. Here is a realistic action plan in order of priority.',
      list: [
        '**Inventory your AI systems** and flag which ones are being used to make, or substantially support, consequential decisions about Colorado consumers. Don\u2019t overthink the inventory format \u2014 a spreadsheet is fine. Completeness matters more than polish.',
        '**Classify each flagged system** as high-risk or not, and document the rationale. If a system is borderline, assume it is high-risk and prepare accordingly. Misclassifying down is far more expensive than classifying up.',
        '**Build (or align) your AI risk management program to NIST AI RMF.** This is your safe harbor. If you already have NIST-aligned governance, map it onto the SB 24-205 obligations explicitly. If you don\u2019t, start with the four NIST functions (Govern, Map, Measure, Manage) and a named program owner.',
        '**Draft impact assessments for every high-risk system.** Use the elements listed earlier in this article as your template. Get the first version done \u2014 you will refine it over time.',
        '**Implement consumer notice and disclosure flows.** Update your customer-facing touchpoints (emails, portals, paper notices) to include the required disclosures before or at the time of the consequential decision.',
        '**Stand up the appeal process.** Define who reviews appeals, what records are kept, how overturns are logged, and what notices go back to the consumer.',
        '**Publish the public statement.** A single page on your website, written in plain language, covering the three required topics. Do not bury it.',
        '**Define your internal discovery-and-escalation process** for algorithmic discrimination findings. Make sure the 90-day clock to disclose to the AG cannot start running without the right people being notified first.',
        '**Ask your AI vendors for their SB 24-205 documentation.** The developer obligations above are what you should be receiving from the companies that built your AI systems. If a vendor can\u2019t provide them, treat it as a red flag.',
      ],
    },
    {
      title: 'What to Watch Between Now and June 30',
      content:
        'Two things are worth keeping an eye on before SB 24-205 takes effect.',
      list: [
        '**Possible amendments.** The Colorado General Assembly\'s 2026 regular session is when additional amendments to SB 24-205 could move. Stakeholders have been pushing to narrow the definition of \"high-risk AI system,\" shift more responsibility to developers, and expand exemptions. As of April 2026 nothing fundamental has changed, but the law has already been delayed once. It could be amended again before June 30.',
        '**AG rulemaking and guidance.** The Colorado AG has the authority to issue guidance on how SB 24-205 will be interpreted and enforced. Anyone who is going to deploy high-risk AI in Colorado should be watching that guidance closely \u2014 it will shape practical compliance expectations more than any outside commentary.',
      ],
    },
  ],

  takeaways: [
    'Colorado SB 24-205 takes effect June 30, 2026 \u2014 the first enforcement date for a comprehensive U.S. state AI law.',
    'It covers \"high-risk\" AI systems used in consequential decisions across eight domains: employment, education, lending, housing, insurance, healthcare, essential government services, and legal services.',
    'Deployers have a duty of reasonable care demonstrated through a risk management program, annual impact assessments, consumer notices, appeal rights, a public statement, and 90-day AG disclosure for algorithmic discrimination findings.',
    'Substantial compliance with the NIST AI Risk Management Framework provides an affirmative defense. Colorado is effectively making NIST the U.S. baseline.',
    'Enforcement is by the Colorado AG only, under the Consumer Protection Act. No private right of action.',
    'Amendments are possible in the 2026 legislative session and additional AG guidance is likely. Prepare as if the law takes effect as written.',
  ],

  sources: [
    {
      title: 'Colorado SB 24-205 \u2014 Full Text',
      url: 'https://leg.colorado.gov/bills/sb24-205',
    },
    {
      title: 'Colorado SB 24-205 \u2014 Signed Statute (PDF)',
      url: 'https://content.leg.colorado.gov/sites/default/files/2024a_205_signed.pdf',
    },
    {
      title: 'Brownstein \u2014 Colorado\u2019s Landmark AI Law Coming Online',
      url: 'https://www.bhfs.com/insight/colorados-landmark-ai-law-coming-online-what-developers-and-deployers-should-know/',
    },
    {
      title: 'TrustArc \u2014 Complying With Colorado\u2019s AI Law',
      url: 'https://trustarc.com/resource/colorado-ai-law-sb24-205-compliance-guide/',
    },
    {
      title: 'Akin \u2014 Colorado Postpones Implementation of Colorado AI Act',
      url: 'https://www.akingump.com/en/insights/ai-law-and-regulation-tracker/colorado-postpones-implementation-of-colorado-ai-act-sb-24-205',
    },
  ],

  relatedArticles: ['nist-ai-rmf-practice', 'california-tfaia-explained', 'texas-traiga-guide'],
  relatedRegulations: ['us-state-laws', 'nist-ai-rmf'],
}
