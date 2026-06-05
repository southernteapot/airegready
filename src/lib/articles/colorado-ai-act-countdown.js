export const coloradoAiActCountdown = {
  slug: 'colorado-ai-act-countdown',
  title: 'Colorado\u2019s Original AI Act Was Replaced: What SB 24-205 Would Have Required',
  description:
    'Colorado SB 24-205 was repealed and replaced before taking effect. This historical guide explains what the original duty-of-care, impact-assessment, consumer-notice, and NIST AI RMF model would have required.',
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
        'Historical update: Colorado\u2019s **SB 24-205**, the original Colorado Artificial Intelligence Act, did **not** take effect as written. On May 14, 2026, Colorado signed **SB 26-189**, which repealed and replaced the original high-risk AI framework before the June 30, 2026 effective date arrived.\n\nThis article is now an archive of what SB 24-205 would have required: the duty of reasonable care, annual impact assessments, consumer notices, public statements, AG disclosures, and the NIST AI RMF affirmative-defense structure. For current Colorado planning, use the newer [Colorado SB 26-189 ADMT rewrite](/blog/colorado-sb26-189-admt-rewrite) and the [U.S. State AI Laws guide](/regulations/us-state-laws).',
    },
    {
      title: 'What SB 24-205 Would Have Required',
      content:
        'SB 24-205 would have regulated **high-risk artificial intelligence systems** used in **consequential decisions** about Colorado consumers. That framing is narrower than \"any AI used in Colorado\" and broader than \"AI in hiring.\" It cuts across eight regulated domains and splits obligations between the companies that build AI (\"developers\") and the companies that use AI to make decisions (\"deployers\").\n\nIt was not a frontier-model law. It was not a transparency-only law. It did not prohibit specific use cases. It would have imposed governance, documentation, and consumer-notice obligations on any organization using AI in ways that affect access to the things that matter most \u2014 housing, credit, employment, insurance, healthcare, education, essential government services, and legal services.\n\nSB 24-205 was modeled in part on the EU AI Act, but it was written to function in the U.S. legal system. Instead of conformity assessments and notified bodies, it uses a **duty of reasonable care** standard enforceable by the Colorado Attorney General.',
    },
    {
      title: 'Who Counts as a \"Deployer\"',
      content:
        'Under the original law, a **deployer** was any entity that uses a high-risk AI system to make, or as a substantial factor in making, a consequential decision about a Colorado consumer.\n\nThree things are worth flagging about that definition.',
      list: [
        '**The key question is not where the system was built.** It is where the decision is made and who is affected. An out-of-state company using a high-risk AI system on Colorado consumers is covered.',
        '**\"Substantial factor\" does real work.** You don\u2019t have to be fully automating a decision. If the AI system is a meaningful input to the decision \u2014 even with a human in the loop \u2014 you are likely a deployer.',
        '**The consumer has to be a Colorado resident.** Colorado cannot regulate consumers in other states. But if you serve Colorado consumers at all, SB 24-205 reaches the decisions you make about them.',
      ],
    },
    {
      title: 'What Counts as a \"High-Risk AI System\"',
      content:
        'An AI system would have been high-risk under SB 24-205 when it is deployed to make, or is a substantial factor in making, a **consequential decision** in one of eight domains.',
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
        'At the heart of SB 24-205 was a **duty of reasonable care**: a deployer of a high-risk AI system would have had to use reasonable care to protect consumers from any known or reasonably foreseeable risks of **algorithmic discrimination**.\n\nThe statute is clear about what \"reasonable care\" looks like. A deployer demonstrates it by doing the following.',
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
        'Every deployer would have needed to implement a risk management policy and program. SB 24-205 would not have dictated the exact shape of that program, but it explicitly referenced the **NIST AI Risk Management Framework** as a benchmark \u2014 and a safe harbor.\n\nOrganizations that built their AI governance program around NIST AI RMF would have gotten affirmative-defense protection against SB 24-205 enforcement actions, provided they were substantially complying. This is one of the most consequential design choices in the law: it effectively makes NIST AI RMF the default U.S. baseline for AI governance programs, because Colorado rewards adopters.\n\nAt a minimum, a SB 24-205 risk management program would have covered who is responsible for AI governance, what AI systems fall within scope, how risks are identified and measured, what mitigations are in place, how the program is reviewed and updated, and how issues are documented and escalated.',
    },
    {
      title: 'Annual Impact Assessments',
      content:
        'Deployers would have needed to complete an **impact assessment** before deploying a high-risk AI system and would have needed to update it **annually**. Impact assessments would have needed to be retained for at least **three years** after the final deployment of the system.\n\nAt minimum an impact assessment would have needed to cover the following elements. This is a distilled list based on the statute and common-sense practice.',
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
        'Before (or at the time of) deploying a high-risk AI system to make or substantially assist in a consequential decision about a consumer, the deployer would have needed to notify the consumer. That notice would have needed to include specific elements.',
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
        'When a high-risk AI system contributes to an **adverse** consequential decision (denial, unfavorable terms, revocation), the deployer would have needed to provide the consumer with an opportunity to **appeal**. The appeal would have needed to include **human review where technically feasible**.\n\nThis is one of the most operationally demanding parts of SB 24-205. To implement appeal rights at scale, an organization typically needs a documented process for receiving appeals, a trained human reviewer who can override or adjust the AI-assisted decision, audit-trail records tying each decision (and each appeal outcome) back to the underlying AI system, and the ability to issue corrected outcomes and notices.',
    },
    {
      title: 'Public Statement',
      content:
        'Every deployer would have needed to publish a **public statement** (usually on its website) summarizing three things.',
      list: [
        'The types of high-risk AI systems the deployer currently deploys.',
        'How the deployer manages known or reasonably foreseeable risks of algorithmic discrimination for each of those systems.',
        'The nature, source, and extent of the information the deployer collects and uses.',
      ],
    },
    {
      title: 'Disclosure to the Colorado Attorney General',
      content:
        'If a deployer discovers that a high-risk AI system has caused **algorithmic discrimination**, the deployer would have needed to disclose that fact to the Colorado Attorney General **within 90 days of discovery**. That would have been a hard deadline, not a best-effort window.\n\nTwo practical implications. **First**, deployers would have needed an internal process for identifying and escalating algorithmic-discrimination findings \u2014 because the 90 days would have run from discovery, not from resolution. **Second**, the disclosure requirement creates a structural preference for finding and fixing problems internally, because the alternative is a self-reported disclosure to the AG that is likely to become an enforcement-action lead.',
    },
    {
      title: 'What Developers Owe Deployers',
      content:
        'SB 24-205 also would have imposed obligations on the **developers** that build high-risk AI systems or substantially modify them. These obligations are structured as disclosure duties to deployers, so deployers have the information they need to do their own risk management.',
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
        'SB 24-205 would have been enforced **exclusively by the Colorado Attorney General**. Violations would have been treated as **unfair trade practices** under Colorado\u2019s Consumer Protection Act. There is no private right of action.\n\nBoth developers and deployers would have had an **affirmative defense** if they discover a violation through their own testing, feedback, or internal review processes and cure the violation. Substantial compliance with a recognized AI risk management framework \u2014 NIST AI RMF is explicitly named \u2014 supports the affirmative defense.\n\nThis is important design: the law was not trying to catch companies that are actively trying to comply. It was trying to catch companies that are not. Documentation of good-faith compliance effort would have been the first and best defense.',
    },
    {
      title: 'Federal Preemption in the Background',
      content:
        'SB 24-205 sat in the same federal-state crosscurrent as Colorado\u2019s sister state laws (California TFAIA, Texas TRAIGA). The December 11, 2025 executive order "Ensuring a National Policy Framework for AI" explicitly targeted state AI laws for preemption, and the **DOJ AI Litigation Task Force** (established January 9, 2026) was tasked with challenging them.\n\nThe federal pressure became concrete in April 2026 when the Justice Department intervened in xAI\'s lawsuit challenging SB 24-205. Colorado then replaced the original law with SB 26-189 before the June 30 effective date. That replacement did not eliminate state AI regulation, but it did move Colorado away from the broad duty-of-care and impact-assessment framework this article originally covered.\n\nFor deeper coverage, see [The Federal Push to Preempt State AI Laws](/blog/federal-ai-preemption) and [Colorado Rewrote Its AI Act](/blog/colorado-sb26-189-admt-rewrite).',
    },
    {
      title: 'What Work Still Carries Forward',
      content:
        'The original SB 24-205 checklist is no longer the current Colorado compliance plan. But much of the work still carries forward into SB 26-189 and other state AI rules because it produces the evidence organizations need to explain automated decisions.',
      list: [
        '**Keep the AI inventory.** You still need to know which tools influence employment, lending, housing, insurance, healthcare, education, or public-benefit decisions.',
        '**Keep vendor diligence.** SB 26-189 still depends on developer documentation about intended uses, training-data categories, known limitations, appropriate use, human review, and material updates.',
        '**Reframe impact assessments as decision records.** The old annual impact-assessment duty is gone, but documenting scope, data, model limitations, bias testing, human review, and outcomes remains useful evidence.',
        '**Keep consumer-facing notice work.** The new law still expects clear notices and plain-language descriptions after adverse outcomes involving covered ADMT.',
        '**Keep human-review workflows.** A real reviewer with authority to reconsider an AI-influenced adverse outcome is still central to Colorado compliance.',
        '**Retain records.** SB 26-189 expects records that show how covered ADMT was used and how notices, data correction, and human review worked.',
      ],
    },
    {
      title: 'What Replaced It',
      content:
        'SB 26-189 replaced the old high-risk AI system model with a covered-ADMT model. The new law starts January 1, 2027 and focuses on automated decision-making technology that processes personal data and materially influences consequential decisions.',
      list: [
        '**Scope changed.** The trigger is now covered ADMT that materially influences covered consequential decisions, not the broader high-risk AI system framing.',
        '**Obligations changed.** The new law emphasizes developer documentation, consumer notice, adverse-outcome explanations, data access and correction, meaningful human review, reconsideration, and record retention.',
        '**Enforcement remains public.** The Colorado Attorney General enforces through the Colorado Consumer Protection Act; the law does not create a new private right of action.',
      ],
    },
  ],

  takeaways: [
    'Colorado SB 24-205 was repealed and replaced by SB 26-189 before the original June 30, 2026 effective date.',
    'The original law would have covered high-risk AI systems used in consequential decisions and required risk programs, impact assessments, consumer notices, public statements, and AG disclosures.',
    'The current Colorado framework is narrower: covered ADMT that materially influences consequential decisions, effective January 1, 2027.',
    'Useful SB 24-205 prep still carries forward: AI inventories, vendor documentation, bias testing, decision records, notices, and human-review workflows.',
    'For current Colorado compliance planning, use the SB 26-189 ADMT rewrite rather than the original high-risk AI checklist.',
  ],

  sources: [
    {
      title: 'Colorado SB 26-189 — Automated Decision-Making Technology',
      url: 'https://leg.colorado.gov/bills/sb26-189',
    },
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

  relatedArticles: ['colorado-sb26-189-admt-rewrite', 'nist-ai-rmf-practice', 'california-tfaia-explained', 'texas-traiga-guide'],
  relatedRegulations: ['us-state-laws', 'nist-ai-rmf'],
}
