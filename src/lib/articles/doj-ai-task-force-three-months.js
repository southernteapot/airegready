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
        'In December 2025 the White House signed an executive order titled "Ensuring a National Policy Framework for Artificial Intelligence." It created a **DOJ AI Litigation Task Force** charged with challenging state AI laws in federal court and gave several federal agencies 90 days \u2014 a deadline that landed on **March 11, 2026** \u2014 to produce supporting deliverables.\n\nThat was four months ago. Enough time has now passed to look at what the executive order and the Task Force have actually produced, as distinct from what was announced.\n\nThe short version: the Task Force exists, the deliverables are mostly late or unpublished, no lawsuits have been filed against any state AI law, the state attorneys general have publicly pushed back, and state AI laws like California\'s TFAIA, Texas\'s TRAIGA, Colorado\'s AI Act, and New York\'s RAISE Act remain fully in force. The federal\u2013state showdown is real but slower and more fragmented than the December headlines suggested.',
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
        'As of mid-April 2026, based on the most recent public reporting, none of the three March 11 deliverables has been formally published. The deadlines came and went quietly.\n\nThat does not mean nothing is happening. In February 2026, Rep. Gabe Evans (R-CO) and Rep. Nick Langworthy (R-NY) sent a public letter urging Secretary Lutnick to include the Colorado AI Act and New York\'s RAISE Act in the Commerce review. Commentators anticipated Colorado\'s AI Act would be a likely early Task Force target. And on March 20, 2026, the White House released a broader **National Policy Framework for AI** \u2014 a non-binding set of legislative recommendations covering child safety, IP, innovation, workforce, and state preemption that effectively supplements the December executive order.\n\nBut no lawsuit has been filed. No Task Force complaint is on the public docket against any state AI law. The infrastructure is in place; the firing pin has not been pulled.',
    },
    {
      title: 'State Attorneys General Have Pushed Back',
      content:
        'Governors and attorneys general in California, Colorado, and New York issued public statements shortly after the executive order indicating they would continue to enforce their state AI laws regardless of federal pressure. That matters for three practical reasons.\n\n**State AGs retain independent enforcement authority.** Even if the Task Force eventually succeeds in invalidating a specific provision of a state AI law, existing state consumer protection statutes \u2014 unfair and deceptive acts and practices laws, civil rights statutes, anti-discrimination laws \u2014 already reach a lot of AI use. State AGs can keep enforcing under those laws regardless of what the Task Force does.\n\n**Companies cannot rely on the EO as a compliance shield.** Legal analysts are unanimous on this point: an executive order cannot preempt state law. Only Congress can, under the Supremacy Clause. Until Congress acts, a state AI law is enforceable on its face.\n\n**The politics have hardened.** Colorado\'s AI Act survived a special legislative session and several broader reform attempts in 2025. The law was delayed five months (to June 30, 2026) but its substantive obligations were not altered. The law\'s proponents have signaled willingness to keep negotiating minor changes while refusing to reopen the core framework.',
    },
    {
      title: 'The BEAD Funding Angle',
      content:
        'The most unusual piece of the executive order is the attempt to tie broadband funding to state AI policy. Commerce was directed to condition access to roughly $21 billion in undeployed BEAD funds on the repeal of state AI laws the administration considers onerous. This is the kind of move that triggers a standard Spending Clause challenge: federal funding conditions have to be clearly stated in advance, related to the purpose of the spending program, and not coercive. Tying broadband deployment to the repeal of an unrelated state regulation has already drawn skepticism from legal commentators.\n\nAs of April 2026, the BEAD policy notice has not been published. States have not had to choose between AI laws and broadband funding. If and when the notice lands, expect immediate litigation from state attorneys general challenging the condition.',
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
        'The fragmented state of federal action has a practical implication: **do not change your state AI law compliance program based on the executive order.**\n\nIf you have been preparing for Colorado\'s AI Act, keep preparing. Enforcement begins June 30, 2026, the substantive obligations are unchanged, and the Task Force has not filed any case challenging the law. If you have California TFAIA, Texas TRAIGA, NYC Local Law 144, Illinois AIVIA, or NY RAISE Act obligations, they apply today and will continue to apply regardless of whether the Task Force eventually files.\n\nThe things that genuinely could shift in the next six months are narrower than the headlines suggest.',
      list: [
        '**A Task Force filing against a specific state law.** Colorado is the most-mentioned early target. A filing would not suspend the law \u2014 only a court could do that \u2014 but it would create a federal forum where the preemption, Commerce Clause, and First Amendment arguments get tested.',
        '**The FTC policy statement.** If it is eventually issued, it will shape federal enforcement posture and may be cited in private litigation. It will not by itself repeal any state law.',
        '**The Commerce report on state AI laws.** When it lands, it becomes the roadmap for Task Force litigation priorities. If your state\'s law is on the list, expect elevated attention.',
        '**Congressional action.** The only thing that can actually preempt state AI law is an act of Congress. As of April 2026, no comprehensive federal AI statute has cleared committee.',
      ],
    },
    {
      title: 'The Default Posture: Keep Your State Program Running',
      content:
        'The December 2025 executive order has successfully reframed the federal AI policy conversation around preemption. It has not, over four months, produced the legal instruments that would actually preempt any state AI law. The Task Force is a venue, not a verdict.\n\nIn the meantime, the state laws that matter to most organizations \u2014 TFAIA, TRAIGA, Colorado AI Act, RAISE Act, LL 144, AIVIA, SB 942 \u2014 are in force or coming into force on schedules that are fixed. Ignoring them because federal litigation is contemplated is a bad bet.\n\nThe safer posture, and the one most responsible general counsel have landed on, is simple. Keep doing state compliance work. Track the Task Force and federal deliverables on a low-intensity watch. Be ready to adjust if a court actually invalidates a provision \u2014 which, as of April 2026, has not happened.',
    },
  ],

  takeaways: [
    'DOJ AI Litigation Task Force was formally established January 9, 2026. As of April 2026 it has not filed any lawsuit against any state AI law.',
    'The three federal deliverables due March 11, 2026 \u2014 Commerce review of state AI laws, FTC policy statement, BEAD policy notice \u2014 have not been publicly released.',
    'Executive orders cannot preempt state law. Only Congress can. Until Congress acts, state AI laws remain fully enforceable.',
    'State AGs in California, Colorado, and New York have publicly committed to continued enforcement of their AI laws.',
    'Colorado AI Act (June 30, 2026), California TFAIA and SB 942 (in effect since Jan 1, 2026), Texas TRAIGA (in effect), and NYC Local Law 144 remain in force on their own schedules.',
    'The FTC\u2019s expected "truthful outputs" preemption theory is legally novel and contested. It does not, on its own, invalidate state law.',
    'Right posture for deployers: continue state AI compliance work on its existing timeline. Track Task Force activity on a watch-only basis. Do not rely on the EO as a compliance shield.',
  ],

  sources: [
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
