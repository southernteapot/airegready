export const dojAiTaskForceThreeMonths = {
  slug: 'doj-ai-task-force-three-months',
  title: 'Three Months In: Where the DOJ AI Litigation Task Force Actually Stands',
  description:
    "The executive order landed on December 11, 2025. The DOJ Task Force stood up on January 9, 2026. Ninety days of federal deadlines came and went on March 11, 2026. Here's what's happened, what hasn't, what the state attorneys general are saying, and what deployers should and shouldn't change.",
  category: 'Federal Policy',
  categorySlug: 'federal-policy',
  date: '2026-04-19',
  displayDate: 'April 19, 2026',
  readTime: '8 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'In December 2025 the White House signed an executive order titled "Ensuring a National Policy Framework for Artificial Intelligence." It created a **DOJ AI Litigation Task Force** charged with challenging state AI laws in federal court and gave several federal agencies 90 days \u2014 a deadline that landed on **March 11, 2026** \u2014 to produce supporting deliverables.\n\nThis article was originally an April 2026 snapshot. The short version then was that the Task Force existed, the deliverables were mostly late or unpublished, and no public Task Force case had landed. The June update is narrower but important: DOJ moved to intervene in xAI\'s lawsuit against Colorado\'s original SB 24-205 on **April 24, 2026**, and Colorado replaced that original law with **SB 26-189** on **May 14, 2026** before the old June 30 effective date.\n\nThe federal-state showdown is real, but it is playing out through interventions, replacement bills, funding pressure, and legislative preemption proposals rather than a clean nationwide federal AI statute.',
    },
    {
      title: 'The Executive Order, in One Paragraph',
      content:
        'Executive Order 14365, "Ensuring a National Policy Framework for Artificial Intelligence," signed December 11, 2025, does four main things. It creates a DOJ AI Litigation Task Force to challenge state AI laws. It directs the Federal Trade Commission to issue a policy statement, by March 11, 2026, explaining when state laws that require AI systems to alter their "truthful outputs" are preempted by the FTC Act. It directs the Secretary of Commerce to publish, by the same date, a review of state AI laws identifying those considered "overly burdensome" or in tension with federal policy. And it conditions a portion of the $42 billion Broadband Equity, Access and Deployment (BEAD) program \u2014 roughly $21 billion in undeployed funds \u2014 on the repeal of state AI laws the administration deems onerous.',
    },
    {
      title: 'The Task Force Itself',
      content:
        'Attorney General Pam Bondi formally established the AI Litigation Task Force through a memorandum on **January 9, 2026**. The unit sits within the Department of Justice and is authorized to challenge state AI laws on three legal grounds.',
      list: [
        '**Dormant Commerce Clause.** The claim that a state AI law places an undue burden on interstate commerce \u2014 for example by forcing national providers to comply with state-specific rules in order to serve users in that state.',
        '**Federal preemption.** The claim that a state AI law is preempted by existing federal law or regulation. This argument depends on the existence of conflicting federal rules, which in most AI-specific areas do not yet exist.',
        '**First Amendment.** The claim that a state AI law compels AI providers to alter the outputs of their models, or to disclose or report information, in ways that infringe on protected speech.',
      ],
    },
    {
      title: 'What Was Supposed to Happen on March 11',
      content:
        'The executive order set a 90-day clock for three coordinated federal actions. Each deliverable was meant to sharpen the government\'s legal position before the Task Force began filing cases.',
      list: [
        '**Commerce Department review of state AI laws.** Secretary Howard Lutnick was directed to identify state laws "inconsistent with federal policy," particularly those requiring AI systems to alter "truthful outputs" or impose disclosure obligations with potential First Amendment issues.',
        '**FTC policy statement on AI and state preemption.** FTC Chair was directed to explain the circumstances under which state laws requiring alterations to "truthful outputs" of AI models are preempted by the FTC Act \u2014 a novel legal theory characterizing state-mandated bias mitigation as a potential per se deceptive trade practice.',
        '**BEAD policy notice.** Commerce was directed to issue a policy notice establishing eligibility conditions for the BEAD broadband program, with the possibility of tying access to undeployed BEAD funds (roughly $21 billion) to state repeal of AI laws deemed conflicting with federal policy.',
      ],
    },
    {
      title: 'What Actually Happened',
      content:
        'As of the original April snapshot, none of the three March 11 deliverables had been formally published. The deadlines came and went quietly.\n\nThat did not mean nothing was happening. In February 2026, Rep. Gabe Evans (R-CO) and Rep. Nick Langworthy (R-NY) sent a public letter urging Secretary Lutnick to include the Colorado AI Act and New York\'s RAISE Act in the Commerce review. Commentators anticipated Colorado\'s AI Act would be a likely early Task Force target. On March 20, 2026, the White House released a broader **National Policy Framework for AI** \u2014 a non-binding set of legislative recommendations covering child safety, IP, innovation, workforce, and state preemption.\n\nThen DOJ moved to intervene in xAI\'s Colorado lawsuit on **April 24, 2026**. That was not a standalone Task Force complaint, but it was the first major federal litigation move against a state AI law. Colorado replaced the challenged law with SB 26-189 on **May 14, 2026**, narrowing the state framework before the old effective date.',
    },
    {
      title: 'State Attorneys General Have Pushed Back',
      content:
        'Governors and attorneys general in California, Colorado, and New York issued public statements shortly after the executive order indicating they would continue to enforce their state AI laws regardless of federal pressure. That matters for three practical reasons.\n\n**State AGs retain independent enforcement authority.** Even if the Task Force eventually succeeds in invalidating a specific provision of a state AI law, existing state consumer protection statutes \u2014 unfair and deceptive acts and practices laws, civil rights statutes, anti-discrimination laws \u2014 already reach a lot of AI use. State AGs can keep enforcing under those laws regardless of what the Task Force does.\n\n**Companies cannot rely on the EO as a compliance shield.** Legal analysts are unanimous on this point: an executive order cannot preempt state law. Only Congress can, under the Supremacy Clause. Until Congress acts or a court actually invalidates a provision, state AI law remains relevant unless repealed or amended.\n\n**Colorado shows the pressure can work politically.** The original Colorado AI Act did not survive unchanged. After xAI\'s lawsuit, DOJ\'s April 24 intervention, and months of state-level negotiations, Colorado replaced SB 24-205 with SB 26-189 before the old June 30 effective date. That is still not federal preemption; it is a state amendment under federal and litigation pressure.',
    },
    {
      title: 'The BEAD Funding Angle',
      content:
        'The most unusual piece of the executive order is the attempt to tie broadband funding to state AI policy. Commerce was directed to condition access to roughly $21 billion in undeployed BEAD funds on the repeal of state AI laws the administration considers onerous. This is the kind of move that triggers a standard Spending Clause challenge: federal funding conditions have to be clearly stated in advance, related to the purpose of the spending program, and not coercive. Tying broadband deployment to the repeal of an unrelated state regulation has already drawn skepticism from legal commentators.\n\nAs of the original April snapshot, the BEAD policy notice had not been published. States have not had to choose between AI laws and broadband funding. If and when the notice lands, expect immediate litigation from state attorneys general challenging the condition.',
    },
    {
      title: 'The Core Legal Theory Is Novel \u2014 and Shaky',
      content:
        'The FTC policy statement, if it is eventually issued, is expected to take the following position: when a state law requires an AI model to alter its outputs to mitigate bias, and that alteration produces results that diverge from what the underlying training data "truthfully" reflects, the alteration itself can be characterized as a deceptive trade practice under the FTC Act.\n\nThis theory inverts traditional consumer protection doctrine. Historically the FTC has used its deception authority to protect consumers from false or misleading business claims. The new theory would instead treat state-mandated consumer protections \u2014 for example, requirements that AI used in hiring, lending, or insurance not produce discriminatory outcomes \u2014 as themselves deceptive.\n\nThree practical points follow.',
      list: [
        'FTC policy statements are interpretive, not binding. Courts are free to disregard them. A well-built challenge could argue the position contradicts decades of deception-law precedent.',
        'The theory depends on the idea that model outputs "faithful to training data" are the truthful baseline. That baseline is contested even inside the AI research community.',
        'Existing bias law \u2014 Title VII, the Fair Housing Act, FCRA, ECOA \u2014 already addresses discriminatory outcomes. States regulating AI in hiring, lending, and similar contexts are extending doctrines that pre-date the EO, not inventing new ones.',
      ],
    },
    {
      title: 'What This Means If You\'re a Deployer',
      content:
        'The fragmented state of federal action has a practical implication: **do not treat the executive order as a compliance shield.**\n\nIf you had been preparing for Colorado\'s original AI Act, the plan has changed: SB 26-189 replaced the old June 30, 2026 high-risk AI framework with a January 1, 2027 covered-ADMT model. If you have California TFAIA, Texas TRAIGA, NYC Local Law 144, Illinois employment AI, or NY RAISE Act obligations, they remain relevant unless repealed, enjoined, or preempted by Congress.\n\nThe things that genuinely could shift in the next six months are narrower than the headlines suggest.',
      list: [
        '**A Task Force filing or intervention against a specific state law.** Colorado showed the pattern: federal action can pressure a state law even before a final court ruling.',
        '**The FTC policy statement.** If it is eventually issued, it will shape federal enforcement posture and may be cited in litigation. It will not by itself repeal any state law.',
        '**The Commerce report on state AI laws.** When it lands, it becomes a roadmap for federal pressure and litigation priorities. If your state\'s law is on the list, expect elevated attention.',
        '**Congressional action.** The only thing that can actually preempt state AI law nationwide is an act of Congress. Until that happens, the patchwork remains operationally important.',
      ],
    },
    {
      title: 'The Default Posture: Keep Your State Program Running',
      content:
        'The December 2025 executive order successfully reframed the federal AI policy conversation around preemption. It also helped create real pressure on Colorado\'s original AI Act. But it did not create a comprehensive federal AI statute, and it did not erase the state patchwork.\n\nThe safer posture remains simple. Keep doing state compliance work, but make the work portable: inventories, vendor documentation, notices, testing records, human-review procedures, data-correction workflows, and incident-response processes. Those artifacts survive better than statute-specific binders when a law is amended, replaced, or challenged.\n\nTrack the Task Force and federal deliverables on a watch basis. Adjust when a state actually changes its law or a court actually invalidates a provision. Colorado changed; that is the lesson.',
    },
  ],

  takeaways: [
    'DOJ AI Litigation Task Force was formally established January 9, 2026.',
    'The three federal deliverables due March 11, 2026 \u2014 Commerce review of state AI laws, FTC policy statement, BEAD policy notice \u2014 were not publicly released by the original April snapshot.',
    'DOJ moved to intervene in xAI\'s Colorado SB 24-205 lawsuit on April 24, 2026, the first major federal litigation move against a state AI law.',
    'Colorado replaced SB 24-205 with SB 26-189 on May 14, 2026, moving from a broad high-risk AI framework to a narrower covered-ADMT model.',
    'Executive orders cannot preempt state law. Only Congress can. Until Congress acts or courts rule, state AI laws remain relevant.',
    'Right posture for deployers: continue state AI compliance work, but make the artifacts portable across amendments, replacements, and litigation outcomes.',
  ],

  sources: [
    {
      title: 'Justice Department Intervenes in xAI lawsuit Challenging Colorado Algorithmic Discrimination Law',
      url: 'https://www.justice.gov/opa/pr/justice-department-intervenes-xai-lawsuit-challenging-colorados-algorithmic-discrimination',
    },
    {
      title: 'Colorado SB 26-189 — Automated Decision-Making Technology',
      url: 'https://leg.colorado.gov/bills/sb26-189',
    },
    {
      title: 'White House \u2014 Ensuring a National Policy Framework for AI (EO 14365)',
      url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/',
    },
    {
      title: 'CBS News \u2014 DOJ creates task force to challenge state AI regulations',
      url: 'https://www.cbsnews.com/news/doj-creates-task-force-to-challenge-state-ai-regulations/',
    },
    {
      title: 'BakerHostetler \u2014 Navigating the Emerging Federal-State AI Showdown',
      url: 'https://www.bakerlaw.com/insights/navigating-the-emerging-federal-state-ai-showdown-doj-establishes-ai-litigation-task-force/',
    },
    {
      title: 'Paul Hastings \u2014 President Trump Signs Executive Order Challenging State AI Laws',
      url: 'https://www.paulhastings.com/insights/client-alerts/president-trump-signs-executive-order-challenging-state-ai-laws',
    },
    {
      title: 'S&P Global \u2014 Companies face compliance limbo as Trump administration targets state AI laws',
      url: 'https://www.spglobal.com/market-intelligence/en/news-insights/articles/2026/3/companies-face-compliance-limbo-as-trump-administration-targets-state-ai-laws-99326115',
    },
    {
      title: 'Butzel Long \u2014 Commerce Report on State AI Laws Expected by March 11, 2026',
      url: 'https://www.butzel.com/alert-department-of-commerce-report-on-state-artificial-intelligence-laws-expected-by-march-11-2026',
    },
    {
      title: 'Davis Wright Tremaine \u2014 New AI Executive Order Seeks to Preempt State AI Laws',
      url: 'https://www.dwt.com/blogs/artificial-intelligence-law-advisor/2025/12/trump-ai-executive-order-legal-analysis',
    },
  ],

  relatedArticles: [
    'federal-ai-preemption',
    'california-tfaia-explained',
    'texas-traiga-guide',
    'colorado-ai-act-countdown',
  ],
  relatedRegulations: ['federal-policy', 'us-state-laws'],
}
