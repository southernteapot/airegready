export const coloradoSb26189AdmtRewrite = {
  slug: 'colorado-sb26-189-admt-rewrite',
  title: 'Colorado Rewrote Its AI Act: What SB 26-189 Means for ADMT Compliance',
  description:
    'Colorado signed SB 26-189 on May 14, 2026, replacing the original Colorado AI Act with a narrower ADMT law for consequential decisions. Here is what changed, what still matters, and what teams should do before January 1, 2027.',
  category: 'State Laws',
  categorySlug: 'us-state-laws',
  date: '2026-05-18',
  displayDate: 'May 18, 2026',
  readTime: '8 min read',
  featured: true,

  sections: [
    {
      title: null,
      content:
        'Colorado no longer has the same AI law compliance teams were preparing for in April.\n\nOn **May 14, 2026**, Colorado listed **SB 26-189, Automated Decision-Making Technology**, as a signed act. The new law repeals and reenacts the 2024 Colorado AI Act framework before the original law could take effect. The result is still important, but it is materially different from the broad "high-risk AI system" law that made Colorado the national test case for state AI regulation.\n\nThe new compliance model is narrower and more operational. Instead of centering the law on formal AI risk management programs, impact assessments, and broad algorithmic-discrimination prevention duties, SB 26-189 focuses on **automated decision-making technology** used to materially influence **consequential decisions** about people.\n\nFor most organizations, the practical question is now simpler: are you using computation over personal data to help decide access to employment, housing, credit, insurance, healthcare, education, or essential government services? If yes, Colorado may expect notices, documentation, records, data-correction rights, and human review by **January 1, 2027**.',
    },
    {
      title: 'What Changed',
      content:
        'The old Colorado AI Act, SB 24-205, was built around "high-risk artificial intelligence systems" and a duty of reasonable care to protect consumers from algorithmic discrimination. That structure created a lot of uncertainty, particularly for model developers and companies using AI as one input among many.\n\nSB 26-189 moves the legal center of gravity. The key term is now **automated decision-making technology**, or ADMT. Colorado defines ADMT broadly enough to include systems that process personal data and generate predictions, recommendations, classifications, rankings, scores, or other information used to make, guide, or assist a decision about an individual.\n\nThe law is not limited to generative AI. A traditional scoring model, ranking system, screening tool, rules engine with statistical inputs, or vendor-provided recommendation system can all create ADMT questions if the output is used in a covered decision.',
    },
    {
      title: 'The New Trigger: Covered ADMT',
      content:
        'Not every automated tool is covered. The main trigger is whether ADMT is used to **materially influence** a **consequential decision**.\n\nA consequential decision is a decision about a person\'s access to, eligibility for, or compensation related to specific domains.',
      list: [
        '**Education** decisions, including access or eligibility.',
        '**Employment** decisions, including access, eligibility, selection, or compensation.',
        '**Housing** decisions.',
        '**Financial or lending services** decisions.',
        '**Insurance** decisions.',
        '**Healthcare services** decisions.',
        '**Essential government services** decisions.',
      ],
    },
    {
      title: 'Why "Materially Influence" Matters',
      content:
        'The phrase "materially influence" is the new scope limiter. It is more practical than asking whether an AI system is merely present somewhere in the workflow.\n\nIf an AI output is a meaningful factor in whether a person gets a job interview, rental approval, loan offer, insurance outcome, healthcare access, education opportunity, or public benefit, the system deserves a Colorado review. If a tool is only used for internal drafting, scheduling, formatting, analytics, or quality control and does not meaningfully affect the outcome for the individual, the Colorado risk is lower.\n\nThat does not mean companies should play games with labels. Calling a system "assistive" does not make it irrelevant if human reviewers usually follow its score or recommendation. The practical test is how the tool actually changes the decision.',
    },
    {
      title: 'Developer Obligations',
      content:
        'Starting **January 1, 2027**, developers of covered ADMT must give deployers technical documentation that lets the deployer understand and use the system appropriately. The Colorado bill summary identifies four core categories.',
      list: [
        '**Intended uses** of the covered ADMT.',
        '**Categories of training data** used by the system.',
        '**Known limitations** of the system.',
        '**Instructions for appropriate use and human review.**',
        '**Material updates or modifications** after the system changes.',
      ],
    },
    {
      title: 'Deployer Obligations',
      content:
        'Deployers are the organizations using covered ADMT in the consequential decision workflow. For them, the practical obligations are notice, explanation, records, data access, correction, and human review.\n\nThe public summary says deployers must give consumers a clear and conspicuous notice at the point of interaction with covered ADMT. If the covered ADMT makes a consequential decision that results in an adverse outcome, the deployer must provide a plain-language description of the ADMT\'s role within **30 days**.\n\nConsumers also get the right to request personal data used by the covered ADMT, correct factually incorrect personal data, and request meaningful human review and reconsideration after an adverse outcome.',
    },
    {
      title: 'Records and Enforcement',
      content:
        'Both developers and deployers must retain records needed to demonstrate compliance for at least **three years**. That is a strong hint about how Colorado expects compliance to work in practice: if you cannot show what the system was, how it was used, what notice was given, what data was involved, and how review worked, the process is fragile.\n\nEnforcement stays with the Colorado Attorney General through the **Colorado Consumer Protection Act**. A violation is treated as a deceptive trade practice. The law does **not** create a new private right of action, but it does address how fault is allocated between developers and deployers in civil actions alleging unlawful discrimination under existing law.\n\nBefore bringing an action, the Attorney General must provide a **60-day notice and opportunity to cure** if cure is possible.',
    },
    {
      title: 'What Happened to the Old Compliance Program',
      content:
        'A lot of teams had already started building toward the original Colorado AI Act. That work is not wasted, but the emphasis changes.\n\nUnder the prior law, the headline items were formal risk management programs, annual impact assessments, public statements, and algorithmic-discrimination reporting. Under SB 26-189, the most urgent work is more tied to the actual decision workflow: where ADMT appears, what it influences, what the vendor can document, how notice is delivered, what happens after an adverse outcome, and whether a person can get meaningful review.\n\nThe best move is not to throw out existing Colorado work. Keep the inventory, vendor diligence, data mapping, and risk review. Reframe the deliverables around the new ADMT trigger and the consumer-facing rights.',
    },
    {
      title: 'A Practical Readiness Plan',
      content:
        'The January 1, 2027 start date gives organizations a workable runway. Use it to build a narrow, evidence-based program instead of a generic AI policy binder.',
      list: [
        '**Inventory consequential-decision workflows.** Start with employment, lending, housing, insurance, healthcare, education, and public-benefit workflows. Identify every automated score, recommendation, ranking, classification, or decision-support output.',
        '**Decide whether each tool materially influences the outcome.** Document why each system is in scope or out of scope. Do this based on actual process behavior, not vendor marketing language.',
        '**Request developer documentation now.** Ask vendors for intended uses, training-data categories, known limitations, appropriate-use instructions, human-review guidance, and update notification procedures.',
        '**Draft point-of-interaction notices.** Make them short, clear, and tied to the actual decision. A notice nobody can understand is not a good compliance artifact.',
        '**Design adverse-outcome explanations.** Build a process for giving a plain-language description of the ADMT role within 30 days after an adverse outcome.',
        '**Map data access and correction.** If a consumer asks what personal data the covered ADMT used, the organization needs a way to answer and correct factual errors.',
        '**Build meaningful human review.** Decide who reviews, what records they see, what authority they have, and how reconsideration outcomes are documented.',
        '**Set record-retention rules.** Keep covered-system documentation, notices, adverse-outcome explanations, correction requests, review records, and vendor update notices for at least three years.',
      ],
    },
    {
      title: 'Why the Rewrite Matters Nationally',
      content:
        'Colorado is still important because it shows where state AI law may be heading. The original Colorado AI Act became a target for industry criticism, federal preemption pressure, and litigation. The Justice Department moved to intervene in xAI\'s lawsuit against the original law on **April 24, 2026**, arguing that the prior algorithmic-discrimination framework raised constitutional problems.\n\nThe new Colorado law does not end the national fight over state AI regulation. The White House has also called for a uniform federal framework and warned against a patchwork of state laws. But SB 26-189 gives other states a narrower template: regulate automated decisions in high-stakes domains, require notice and review, keep enforcement with the attorney general, and avoid turning every AI governance dispute into a broad model-design mandate.\n\nThat makes Colorado less of an EU-style AI Act copy and more of a U.S. ADMT law. For compliance teams, that is a meaningful shift.',
    },
    {
      title: 'The Bottom Line',
      content:
        'Colorado did not abandon AI regulation. It changed the shape of it.\n\nThe old question was: do we have a high-risk AI system and a full risk-management program? The new question is more concrete: are we using automated decision-making technology to materially influence a consequential decision about a person, and can we explain, document, correct, and review that process?\n\nThat is a better question for most businesses. It is also harder to fake. The companies best positioned for SB 26-189 will be the ones that know where automated decisioning happens, understand what vendors are doing, can notify people plainly, and can put a real human review process behind adverse outcomes.',
    },
  ],

  takeaways: [
    'Colorado SB 26-189 was listed as a signed act on May 14, 2026, replacing the prior Colorado AI Act framework.',
    'The new law focuses on automated decision-making technology used to materially influence consequential decisions, rather than the old broad high-risk AI framing.',
    'Covered domains include education, employment, housing, financial or lending services, insurance, healthcare services, and essential government services.',
    'Starting January 1, 2027, developers must provide deployers with technical documentation covering intended uses, training-data categories, known limitations, appropriate use, and human review.',
    'Deployers must provide point-of-interaction notice, post-adverse-outcome explanations, data access and correction rights, and meaningful human review and reconsideration.',
    'Both developers and deployers must retain compliance records for at least three years. Enforcement is by the Colorado Attorney General, with a 60-day cure opportunity where possible.',
  ],

  sources: [
    {
      title: 'Colorado General Assembly - SB26-189 Automated Decision-Making Technology',
      url: 'https://leg.colorado.gov/bills/sb26-189',
    },
    {
      title: 'U.S. Department of Justice - DOJ intervenes in xAI lawsuit challenging Colorado AI law',
      url: 'https://www.justice.gov/opa/pr/justice-department-intervenes-xai-lawsuit-challenging-colorados-algorithmic-discrimination',
    },
    {
      title: 'White House - National AI Legislative Framework',
      url: 'https://www.whitehouse.gov/releases/2026/03/president-donald-j-trump-unveils-national-ai-legislative-framework/',
    },
    {
      title: 'California Privacy Protection Agency - ADMT regulations timing',
      url: 'https://cppa.ca.gov/announcements/2025/20250923.html',
    },
    {
      title: 'Texas Department of Information Resources - HB 149 effective January 1, 2026',
      url: 'https://dir.texas.gov/technology-legislation',
    },
  ],

  relatedArticles: [
    'xai-sues-colorado-ai-act',
    'doj-ai-task-force-three-months',
    'federal-ai-preemption',
    'texas-traiga-guide',
    'us-states-ai-hiring',
  ],
  relatedRegulations: ['us-state-laws', 'federal-policy'],
}
