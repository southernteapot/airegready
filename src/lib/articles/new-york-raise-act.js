export const newYorkRaiseAct = {
  slug: 'new-york-raise-act',
  title: "New York's RAISE Act Explained: The Second State to Regulate Frontier AI Developers",
  description:
    "A plain-English guide to New York's Responsible AI Safety and Education Act (RAISE Act) — who it covers, the frontier AI framework, transparency reports, the 72-hour incident clock, how it lines up with California's TFAIA, and what every business that only buys AI should take from it.",
  category: 'State Laws',
  categorySlug: 'us-state-laws',
  date: '2026-06-19',
  displayDate: 'June 19, 2026',
  readTime: '9 min read',
  featured: true,

  sections: [
    {
      title: null,
      content:
        "New York just became the **second state in the country to put binding rules on the companies that build the largest AI models.** On March 27, 2026, Governor Kathy Hochul signed the final, amended version of the **Responsible AI Safety and Education Act** — the **RAISE Act** — after a round of 2026 chapter amendments reshaped the bill she first signed in December 2025. The law takes effect **January 1, 2027.**\n\nIf that sounds familiar, it should. California's TFAIA (SB 53) did the same thing a few months earlier, and the New York amendments deliberately moved the RAISE Act's thresholds and definitions to line up with California's. Two of the largest states in the country now regulate frontier AI developers using almost the same yardstick. That convergence is the real story.\n\nThis is a practical walkthrough: what the RAISE Act requires, who it actually covers, how it differs from California, and — for the overwhelming majority of readers who will never train a frontier model — why it still belongs on your radar.",
    },
    {
      title: "What the RAISE Act Is (and Isn't)",
      content:
        "The RAISE Act is a **transparency, safety-framework, and incident-reporting law** aimed at the handful of companies training the most capable AI models. It is not a sectoral law and it does not regulate AI deployers — the businesses, schools, and nonprofits that buy and use AI tools built by someone else. If you use ChatGPT, Claude, Gemini, or Copilot to run your business, the RAISE Act does not impose obligations on you.\n\nIt also is not a copy of the EU AI Act. The EU regulates AI systems by use case and risk tier. The RAISE Act, like California's TFAIA, regulates AI *models* by training-compute threshold. A company can be subject to one, the other, or both.\n\nThe short version: the RAISE Act is about **the largest model developers documenting how they manage catastrophic risk, disclosing what they have built, and reporting fast when something goes seriously wrong.** Everything else in the AI regulatory conversation — hiring, healthcare, lending, insurance — is happening under other laws.",
    },
    {
      title: 'Who It Covers',
      content:
        'Like California, New York uses a **tiered scope**, with the heaviest obligations reserved for the largest companies. Three definitions matter.',
      list: [
        '**Frontier model.** A foundation model trained using more than **10^26 integer or floating-point operations** of compute. This is the same compute line California uses. As of mid-2026, only a small number of models cross it.',
        '**Frontier developer.** Any company that has trained, or begun training, a frontier model.',
        '**Large frontier developer.** A frontier developer whose **annual revenue exceeds $500 million.** This is the tier that carries the law’s heaviest duties. In practice it captures roughly the same five-to-eight companies California’s law does — OpenAI, Anthropic, Google, Meta, Microsoft, and a few others.',
      ],
    },
    {
      title: 'Geographic Reach',
      content:
        'The RAISE Act applies to frontier models developed, deployed, or operating in whole or in part in New York. As with California, that is a wide net: because these models are offered through APIs and apps available everywhere, a developer in Seattle, Toronto, or Paris whose model is used by New Yorkers is within reach.\n\nThe practical effect is that compliance is a national and international conversation, even though the statute is a New York law. A frontier developer cannot realistically build one model for New York and a different one for everyone else.',
    },
    {
      title: 'Obligation 1: The Frontier AI Framework (Large Developers)',
      content:
        'A large frontier developer must write, follow, and **publicly publish a frontier AI framework** on its website — a document describing how it assesses and mitigates catastrophic risk from its models. This is the obligation that most resembles a governance standard, and it deliberately echoes California’s Frontier AI Framework requirement. It must cover a specific set of topics.',
      list: [
        'How the company incorporates national and international AI safety standards and industry best practices (for example, the NIST AI Risk Management Framework).',
        'The catastrophic-risk thresholds it uses and the mitigations tied to them.',
        'How it engages third parties to assess and evaluate risk.',
        'Cybersecurity measures specifically designed to protect **unreleased model weights** from theft or unauthorized access.',
        'Internal governance that ensures the company actually follows its own framework, and how it assesses the risk of its own internal use of frontier models.',
        'How it identifies and responds to critical safety incidents.',
        'Annual review and update of the framework.',
      ],
    },
    {
      title: 'Obligation 2: Transparency Reports',
      content:
        'Before deploying a new frontier model, a developer must publish a **transparency report.** It can live inside a model card or system card the developer already publishes. At minimum it covers contact information, the model’s release date, the languages and output types it supports, intended uses, and any usage restrictions; large developers also include a summary of the catastrophic-risk assessment.\n\nThis parallels California almost exactly. A developer that is doing this well for California is most of the way to doing it for New York. The RAISE Act also requires keeping an unredacted copy of the framework and its version history — for the deployment period plus five years — publishing a redacted version, and transmitting it to the New York Attorney General and the state’s Division of Homeland Security and Emergency Services.',
    },
    {
      title: 'Obligation 3: Critical Safety Incident Reporting — the 72-Hour Clock',
      content:
        'This is where New York is noticeably stricter than California. A developer must report a **critical safety incident** to state authorities **within 72 hours** of determining one has occurred — or of learning facts sufficient to reasonably believe one has. California’s default reporting window is 15 days, so New York moves the clock from weeks to days.',
      list: [
        '**72 hours** to report a critical safety incident after a determination that one occurred.',
        '**24 hours** to notify the appropriate authorities if the incident poses an imminent risk of death or serious physical injury.',
        '**Quarterly** summaries, from large developers, of catastrophic risk arising from their own internal use of frontier models.',
      ],
    },
    {
      title: "Obligation 4: Don't Deploy Unreasonable Critical-Harm Risk",
      content:
        'The RAISE Act adds one duty that goes a step beyond pure disclosure: a large frontier developer **may not deploy a frontier model if doing so would create an unreasonable risk of critical harm.**\n\nThat single sentence changes the character of the law. California’s TFAIA is fundamentally a transparency-and-reporting regime — tell the public what you built, report when it breaks. New York keeps all of that and layers a substantive deployment condition on top. The published framework is not just a disclosure document; it becomes the standard the company is expected to actually meet before it ships.',
    },
    {
      title: 'Critical Harm: The Definition',
      content:
        'The whole law turns on what counts as **critical harm.** The definition is precise and — after the 2026 amendments — matches California’s. It is a foreseeable and material risk that a single frontier-model incident causes either the **death of or serious injury to more than 50 people,** or **more than $1 billion in property damage,** through one of the following.',
      list: [
        'Providing expert-level assistance in creating or using a chemical, biological, radiological, or nuclear weapon.',
        'Engaging in conduct that would be a serious crime (such as murder, assault, or a major cyberattack) if committed by a person, acting with no meaningful human intervention.',
        'Evading the control of its developer or user.',
      ],
    },
    {
      title: 'Enforcement and Penalties',
      content:
        'The RAISE Act is enforced primarily by the **New York Attorney General,** with civil penalties up to **$1 million for a first violation** and up to **$3 million for each subsequent violation.** A dedicated office within the New York **Department of Financial Services (DFS)** administers the disclosure filings and can impose separate penalties of **$1,000 per day** for missed disclosure statements.\n\nThere is **no private right of action** — individuals cannot sue directly under the law. And it is worth knowing how the numbers got here: the bill Hochul first signed in December 2025 carried penalties up to $10 million and $30 million. The 2026 chapter amendments negotiated them down to the $1 million and $3 million figures while aligning the compute and revenue thresholds with California.',
    },
    {
      title: 'How New York Differs From California',
      content:
        'Because the two laws now share so much, the differences are what you actually need to track. There are four worth knowing.',
      list: [
        '**A faster incident clock.** New York requires reporting within 72 hours; California’s default is 15 days. If you watch frontier-vendor incident practices, New York sets the tighter pace.',
        '**A deployment limit, not just disclosure.** California tells developers to be transparent. New York adds an explicit duty not to deploy a model that poses an unreasonable risk of critical harm.',
        '**A financial regulator in the loop.** New York routes disclosure filings through an office inside DFS, which carries its own $1,000-per-day penalty for missed filings — on top of the Attorney General’s authority.',
        '**Lower penalties, aligned thresholds.** The amendments cut the headline penalties from $10M/$30M to $1M/$3M and moved the scope to California’s 10^26-operations and $500-million-revenue lines, plus the shared 50-people / $1-billion critical-harm definition.',
      ],
    },
    {
      title: 'Why Two States Matter More Than One',
      content:
        'One state regulating frontier developers is a policy experiment. Two states — the country’s largest economy and its financial capital — using nearly identical definitions is the beginning of a **de facto national standard.**\n\nFrontier developers are not going to build one safety framework for California and a different one for New York. They will build one that satisfies both, and that combined standard becomes the baseline everyone else reads. For anyone trying to see where U.S. AI governance is heading at the model layer, California plus New York is now the clearest reference point available — arguably clearer than any single federal proposal, which remains stuck in Congress.',
    },
    {
      title: 'The Federal Preemption Question',
      content:
        'The RAISE Act was finalized in the same window the federal government began pushing to centralize AI policy. On December 11, 2025, President Trump signed an executive order directing the Justice Department to challenge state AI laws, and a **DOJ AI Litigation Task Force** followed in January 2026.\n\nHere is the key point, the same one that applies to California: **an executive order cannot preempt state law.** Only Congress can do that, and it has not. Until Congress acts or a court rules otherwise, the RAISE Act is on the books and on track for its January 1, 2027 effective date. The federal pressure is a reason to expect more turbulence — not a reason for covered developers to deprioritize compliance.',
    },
    {
      title: 'What This Means If You Just Use AI',
      content:
        'Most AIRegReady readers are not frontier developers. You are not training models at 10^26 operations, you do not have $500 million in revenue pointed at this, and none of the RAISE Act’s operative duties apply to you. It still matters, for four practical reasons.',
      list: [
        '**Your biggest AI vendors are exactly who it covers.** If you build on OpenAI, Anthropic, Google, Meta, or Microsoft, the RAISE Act shapes the safety frameworks, transparency reports, and incident practices they publish. Those documents are public — you can read them.',
        '**It gives you free governance reference material.** A published frontier AI framework is a worked example of what a serious AI risk program looks like. You can borrow its structure for your own — much smaller — AI use policy and risk file.',
        '**It sharpens vendor due diligence.** Add a line to your AI vendor record: does this provider publish a frontier AI framework and transparency reports, and where? For a frontier-scale vendor, "no" is now a question worth asking.',
        '**It shows where the floor is moving.** Two aligned state laws signal that documented risk management, transparency, and fast incident reporting are becoming table stakes at the model layer — and those expectations tend to flow downhill to the rest of the market.',
      ],
    },
    {
      title: 'The Bottom Line',
      content:
        'The RAISE Act does not regulate you unless you are training models at frontier scale with half a billion dollars in revenue behind it. What it does is put New York alongside California as the second pillar of an emerging U.S. standard for the companies that build the AI everyone else depends on.\n\nFor the rest of us, the move is simple and worth doing before the January 1, 2027 effective date: know which of your vendors this covers, read what they now have to publish, and keep a short note of it in your vendor file. The frameworks and transparency reports will start showing up well ahead of the deadline — and they are some of the best free governance reading available.',
    },
  ],

  takeaways: [
    "New York's RAISE Act (Responsible AI Safety and Education Act) makes New York the second state, after California, to regulate frontier AI model developers specifically. The final amended version was signed March 27, 2026 and takes effect January 1, 2027.",
    'Scope mirrors California: frontier models trained above 10^26 operations, with the heaviest duties on “large frontier developers” that have more than $500 million in annual revenue — a handful of companies.',
    'Large developers must publish a frontier AI framework, publish transparency reports before deploying models, and report critical safety incidents within 72 hours (24 hours for an imminent risk of death or serious injury).',
    'New York goes beyond California in two ways: a much faster incident-reporting clock and an explicit duty not to deploy a model that poses an unreasonable risk of “critical harm” (death or serious injury to 50+ people, or $1B+ in damage).',
    'The New York Attorney General enforces (up to $1M first / $3M subsequent violations), with a DFS office handling disclosure filings ($1,000/day). There is no private right of action, and penalties were lowered from the original bill’s $10M/$30M.',
    'If you only buy AI, the RAISE Act still matters: your largest vendors are who it covers, their published frameworks and transparency reports are free governance reference material, and two aligned state laws show where the model-layer floor is heading.',
  ],

  sources: [
    {
      title: 'New York S6953 — RAISE Act (New York State Senate)',
      url: 'https://www.nysenate.gov/legislation/bills/2025/S6953',
    },
    {
      title: 'NY DFS — Governor Hochul Signs Nation-Leading AI Frontier Model Legislation',
      url: 'https://www.dfs.ny.gov/reports_and_publications/press_releases/pr20251222',
    },
    {
      title: 'Davis Polk — New York Joins California in Regulating Development of Frontier AI Models',
      url: 'https://www.davispolk.com/insights/client-update/new-york-joins-california-regulating-development-frontier-ai-models',
    },
    {
      title: 'Wiley — New York Finalizes RAISE Act for Frontier AI Models; Law Takes Effect January 1, 2027',
      url: 'https://www.wiley.law/alert-New-York-Finalizes-RAISE-Act-for-Frontier-AI-Models-Law-Takes-Effect-January-1-2027',
    },
    {
      title: 'Norton Rose Fulbright — The New York RAISE Act: What You Need to Know',
      url: 'https://www.nortonrosefulbright.com/en/knowledge/publications/5b5742f4/the-new-york-responsible-ai-safety-and-education-raise-act-what-you-need-to-know',
    },
  ],

  relatedArticles: ['california-tfaia-explained', 'federal-ai-preemption', 'ai-vendor-due-diligence'],
  relatedRegulations: ['us-state-laws', 'federal-policy'],
}
