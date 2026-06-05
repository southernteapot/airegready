export const xaiSuesColoradoAiAct = {
  slug: 'xai-sues-colorado-ai-act',
  title: 'xAI Sued Colorado Before Colorado Replaced Its Original AI Act',
  description:
    "Elon Musk's xAI sued to block Colorado's original AI Act in April 2026. Colorado then replaced that law with SB 26-189 before the June 30 effective date. Here is what the lawsuit showed, what changed, and what still matters for ADMT compliance.",
  category: 'State Laws',
  categorySlug: 'us-state-laws',
  date: '2026-04-22',
  displayDate: 'April 22, 2026',
  readTime: '9 min read',
  featured: true,

  sections: [
    {
      title: null,
      content:
        "Colorado's original AI Act — the first comprehensive U.S. state law targeting high-risk AI — became a national test case before it ever took effect.\n\nOn **April 9, 2026**, xAI filed a federal lawsuit asking a federal judge to declare the original Colorado AI Act unconstitutional and permanently enjoin enforcement before its June 30 effective date. Three weeks earlier, on **March 17, 2026**, Governor Jared Polis's AI Policy Workgroup had unanimously endorsed a proposed rewrite focused on automated decision-making technology (ADMT).\n\nThe rewrite is no longer hypothetical. On **May 14, 2026**, Colorado signed **SB 26-189**, repealing and replacing the original SB 24-205 framework before it took effect. The new law still regulates AI-influenced consequential decisions, but it does so through a narrower covered-ADMT model that starts **January 1, 2027**.\n\nThis article now reads as a historical explainer: what xAI challenged, why Colorado was already preparing a replacement, and what the episode says about the direction of state AI law.",
    },
    {
      title: 'The Lawsuit: X.AI LLC v. Weiser',
      content:
        "xAI filed its complaint in the U.S. District Court for the District of Colorado on April 9, 2026. The case is *X.AI LLC v. Weiser*, No. 1:26-cv-01515, naming Colorado Attorney General Philip J. Weiser in his official capacity as the defendant responsible for enforcement.\n\nxAI is asking the court for two things: a declaratory judgment that Senate Bill 24-205 is unconstitutional, and a permanent injunction blocking the Attorney General from enforcing it. A preliminary injunction, if granted before June 30, would freeze enforcement while the litigation proceeds.",
    },
    {
      title: "xAI's Four Legal Theories",
      content:
        "The complaint raises four constitutional arguments. None of them are novel in AI litigation, but the combination is aggressive.",
      list: [
        "**Unconstitutional vagueness.** xAI argues that core terms in the law — including what counts as a \"consequential decision,\" an \"algorithmic discrimination\" risk, and a \"substantial factor\" — are not defined precisely enough to give developers fair notice of what is prohibited, and invite arbitrary enforcement by the Attorney General.",
        "**First Amendment (compelled speech).** xAI's central argument is that requiring developers and deployers to avoid \"algorithmic discrimination\" compels model providers to alter their outputs to reflect the state's preferred viewpoints on contested subjects — particularly around race. The carve-outs in the law that explicitly permit outputs that \"increase diversity\" or correct historical bias are cited as evidence of viewpoint discrimination by the state.",
        "**Dormant Commerce Clause — extraterritorial reach.** The complaint argues SB 24-205 regulates conduct occurring outside Colorado because AI systems deployed nationally cannot be meaningfully partitioned by state. Complying for Colorado users in practice means complying for everyone.",
        '**Dormant Commerce Clause — undue burden.** A separate Commerce Clause count argues that even if Colorado has a legitimate interest, the burden on interstate commerce — a 50-state patchwork of AI-specific rules — clearly outweighs the state benefits.',
      ],
    },
    {
      title: 'Why the Timing Matters',
      content:
        'The case became the first practical test of the federal preemption pressure created by the December 2025 executive order. **Executive Order 14365**, "Ensuring a National Policy Framework for Artificial Intelligence," specifically named SB 24-205 as an example of a state AI law that, in the administration\'s view, could force AI models toward impermissible differential-treatment outcomes.\n\nThe Justice Department did not stay on the sidelines. On **April 24, 2026**, DOJ moved to intervene in xAI\'s lawsuit, arguing that the original Colorado law\'s algorithmic-discrimination framework raised constitutional problems. That intervention mattered even though Colorado later replaced the law, because it showed how federal agencies may pressure state AI laws without waiting for Congress to pass a comprehensive federal statute.\n\nThe original June 30 enforcement date is now historical. The live Colorado date is **January 1, 2027** under SB 26-189, subject to the remaining litigation and implementation dynamics around the replacement law.',
    },
    {
      title: "Colorado's Other Problem: The ADMT Replacement Framework",
      content:
        'Three weeks before xAI filed suit, Governor Polis\'s AI Policy Workgroup unanimously proposed a new legal framework that would **replace** the Colorado AI Act rather than amend it. The working group — a mix of industry, consumer, healthcare, and education stakeholders convened by the governor in October 2025 — agreed on the proposal on **March 17, 2026**. Polis immediately endorsed it.\n\nThat proposal became **SB 26-189, Automated Decision-Making Technology**, which Colorado signed on **May 14, 2026**. The replacement takes effect **January 1, 2027**, giving covered developers and deployers the rest of 2026 to modify existing compliance programs.',
    },
    {
      title: 'What the ADMT Framework Actually Changes',
      content:
        'The replacement was not a cosmetic revision. It rewrote the law\'s footing in several concrete ways.',
      list: [
        '**From "high-risk AI systems" to "Covered ADMT."** The new law regulates automated decision-making technology that processes personal data and generates outputs used to make, guide, or assist consequential decisions.',
        '**Higher trigger threshold.** The old CAIA kicked in when an AI system was a "substantial factor" in a consequential decision. SB 26-189 uses "materially influence," which asks whether the output meaningfully affects the outcome.',
        '**Several obligations removed.** The replacement drops the old AG algorithmic-discrimination risk reporting requirement, mandatory annual impact assessments, and formal risk-management policy mandate.',
        '**Consumer protections retained.** Coloradans still get point-of-interaction notice, a post-adverse-outcome explanation, the ability to correct inaccurate personal data, and meaningful human review and reconsideration.',
        '**Developer documentation remains central.** Developers of covered ADMT must give deployers information about intended uses, training-data categories, known limitations, appropriate use, human review, and material updates.',
        '**No new private right of action; cure opportunity.** Enforcement stays with the Colorado Attorney General through the Colorado Consumer Protection Act. Before January 1, 2030, the AG generally must provide a 60-day notice and opportunity to cure if cure is possible.',
      ],
    },
    {
      title: 'Why Polis Supports Replacing His Own Law',
      content:
        "Polis signed SB 24-205 reluctantly in May 2024, publicly asking the legislature to \"reexamine\" the bill before it took effect. In his signing statement he criticized the law for regulating outcomes rather than intent, and raised concerns about Colorado \"going it alone\" on AI regulation while other states stayed on the sidelines.\n\nThe 2025 session produced several failed attempts to amend the law. After a special session pushed the effective date from February 1, 2026 to June 30, 2026, Polis convened the working group in October 2025. The ADMT Framework is the product of that group.\n\nThere is also a federal funding angle. The December 2025 executive order on national AI policy conditions access to roughly $21 billion in undeployed Broadband Equity, Access and Deployment (BEAD) funds on the repeal of state AI laws the administration considers \"onerous.\" A replacement law aligned closer to federal preferences is one way to reduce the risk of BEAD-eligibility disputes, regardless of how the Commerce Department's list of \"burdensome\" state laws eventually lands.",
    },
    {
      title: 'What Actually Happened',
      content:
        'The April article framed two scenarios: either Colorado would enact the ADMT replacement before the original June 30 date, or SB 24-205 would take effect as written while xAI\'s lawsuit proceeded. The first scenario happened.\n\nColorado signed SB 26-189 on **May 14, 2026**, replacing the original law before its effective date. That made the old June 30 SB 24-205 countdown a historical planning problem rather than the live compliance calendar.\n\nThe lawsuit still matters as a signal. xAI and DOJ forced the constitutional and preemption arguments into the open, and those arguments may be reused against other state AI laws. But for day-to-day Colorado compliance, teams should now plan around covered ADMT and the January 1, 2027 start date.',
    },
    {
      title: "What Deployers Should Be Doing Right Now",
      content:
        'The right move is not to throw away Colorado work. It is to reframe that work around SB 26-189\'s covered-ADMT trigger.',
      list: [
        '**Keep the inventory.** Identify systems that process personal data and influence employment, housing, lending, insurance, healthcare, education, or essential government-services decisions.',
        '**Map material influence.** Decide which automated outputs actually affect outcomes, and document why each tool is in scope or out of scope.',
        '**Ask vendors for developer documentation.** Covered ADMT deployers need intended uses, training-data categories, known limitations, appropriate-use instructions, human-review guidance, and material-update notices.',
        '**Build notices and adverse-outcome explanations.** Colorado now centers consumer-facing notice and plain-language explanations more than formal annual impact assessments.',
        '**Design meaningful human review.** Decide who can reconsider an AI-influenced adverse outcome, what records they see, and what authority they have to change the result.',
        '**Retain records.** Keep documentation that shows what the system was, how it was used, what notice was given, what data was involved, and how review worked.',
      ],
    },
    {
      title: 'The Bigger Pattern',
      content:
        'Taken together, the lawsuit, DOJ intervention, and SB 26-189 tell you more about the state of U.S. AI regulation than any one development does alone. The first comprehensive state AI law in the country was pressured from three directions simultaneously: the governor who signed it pushed for a replacement, a private company challenged it in federal court, and the federal government intervened against it.\n\nThis does not mean state AI laws are going away. California\'s TFAIA and SB 942, Texas\'s TRAIGA, New York\'s RAISE Act, NYC Local Law 144, Illinois employment AI rules, and Colorado\'s new SB 26-189 remain part of the patchwork. But Colorado is no longer an EU-style high-risk AI system model. It is now a U.S. ADMT law focused on notice, explanation, correction, human review, and records in consequential-decision workflows.\n\nFor compliance teams, that is the durable lesson: the broadest state AI law was narrowed, but the operational evidence work did not disappear.',
    },
  ],

  takeaways: [
    'xAI filed a federal lawsuit in the District of Colorado on April 9, 2026 challenging the original SB 24-205 framework.',
    'DOJ moved to intervene on April 24, 2026, making Colorado the first major test of the federal anti-state-AI-law posture.',
    'Colorado signed SB 26-189 on May 14, 2026, replacing SB 24-205 before the old June 30 effective date.',
    'The current Colorado law starts January 1, 2027 and focuses on covered ADMT that materially influences consequential decisions.',
    'Deployers should keep inventory, vendor documentation, notice, explanation, data-correction, human-review, and recordkeeping work moving under the new ADMT model.',
  ],

  sources: [
    {
      title: 'Colorado SB 26-189 — Automated Decision-Making Technology',
      url: 'https://leg.colorado.gov/bills/sb26-189',
    },
    {
      title: 'U.S. Department of Justice — xAI Colorado AI Act Intervention',
      url: 'https://www.justice.gov/opa/pr/justice-department-intervenes-xai-lawsuit-challenging-colorados-algorithmic-discrimination',
    },
    {
      title: 'X.AI LLC v. Weiser, No. 1:26-cv-01515 (D. Colo.) — Baker Botts analysis',
      url: 'https://ourtake.bakerbotts.com/post/102mpre/xai-sues-to-enjoin-colorados-ai-act-before-june-30-effective-date',
    },
    {
      title: "Colorado Sun — Elon Musk's xAI sues over Colorado's AI law",
      url: 'https://coloradosun.com/2026/04/10/elon-musk-colorado-ai-law-federal-court-lawsuit/',
    },
    {
      title: 'Mayer Brown — The Colorado AI Policy Work Group Proposes an Updated Framework to Replace the Colorado AI Act',
      url: 'https://www.mayerbrown.com/en/insights/publications/2026/03/the-colorado-ai-policy-work-group-proposes-an-updated-framework-to-replace-the-colorado-ai-act',
    },
    {
      title: "Governor's Office — Colorado AI Policy Workgroup Delivers Unanimous Support for Revised Policy Framework",
      url: 'https://governorsoffice.colorado.gov/governor/news/colorado-artificial-intelligence-policy-workgroup-delivers-unanimous-support-revised-policy',
    },
    {
      title: 'Hogan Lovells — New Policy Framework Would Significantly Alter Colorado AI Act',
      url: 'https://www.hoganlovells.com/en/publications/milehigh-machine-learning-new-policy-framework-would-significantly-alter-colorado-ai-act',
    },
    {
      title: 'Covington — Colorado Officials Push to Repeal and Replace the Colorado AI Act',
      url: 'https://www.globalpolicywatch.com/2026/03/colorado-officials-push-to-repeal-and-replace-the-colorado-ai-act/',
    },
    {
      title: 'Colorado SB24-205 — Bill text and signing history',
      url: 'https://leg.colorado.gov/bills/sb24-205',
    },
    {
      title: 'White House EO 14365 — Ensuring a National Policy Framework for Artificial Intelligence',
      url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/',
    },
  ],

  relatedArticles: [
    'colorado-ai-act-countdown',
    'doj-ai-task-force-three-months',
    'federal-ai-preemption',
    'california-tfaia-explained',
  ],
  relatedRegulations: ['us-state-laws', 'federal-policy'],
}
