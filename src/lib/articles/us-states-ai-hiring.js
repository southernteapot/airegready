export const usStatesAiHiring = {
  slug: 'us-states-ai-hiring',
  title: '5 U.S. States Now Regulate AI in Hiring — Is Yours Next?',
  description:
    'A practical comparison of state laws governing AI-driven hiring tools, covering NYC LL144, Illinois AIVIA, Colorado SB 26-189, Maryland HB 1202, and New Jersey\'s disclosure rules.',
  category: 'State Laws',
  categorySlug: 'us-state-laws',
  date: '2026-03-10',
  displayDate: 'March 10, 2026',
  readTime: '6 min read',
  featured: false,

  sections: [
    {
      title: null,
      content:
        'There is no federal law governing AI in hiring. Congress has floated several bills; none have passed. So the states stepped in, and they didn\'t coordinate with each other.\n\nThe result is a patchwork. Five states and municipalities now have enforceable rules on automated employment decision tools, each with different definitions, different obligations, and different enforcement mechanisms. If you use AI anywhere in your hiring pipeline — resume screening, video interview analysis, skills assessment scoring, candidate ranking — you likely have compliance obligations you didn\'t have two years ago.',
    },
    {
      title: 'The Five Laws at a Glance',
      content:
        'Here\'s what each jurisdiction requires. The differences matter more than the similarities.',
      table: {
        headers: [
          'Jurisdiction',
          'Law',
          'Effective',
          'Key Requirement',
          'Penalty',
        ],
        rows: [
          [
            'New York City',
            'Local Law 144',
            'July 2023',
            'Annual bias audit by independent auditor; public posting of audit results; candidate notice',
            'Up to $1,500 per violation',
          ],
          [
            'Illinois',
            'AI Video Interview Act (AIVIA)',
            'January 2020',
            'Consent before AI analyzes video interviews; explanation of how AI works; deletion upon request',
            'Enforced under Consumer Fraud Act',
          ],
          [
            'Colorado',
            'SB 26-189',
            'January 2027',
            'Covered ADMT notices, adverse-outcome explanations, data access/correction, and meaningful human review for materially influenced consequential decisions',
            'Enforced by AG under the Colorado Consumer Protection Act',
          ],
          [
            'Maryland',
            'HB 1202',
            'October 2020',
            'Applicant consent required before facial recognition analysis in interviews',
            'Enforced under state employment law',
          ],
          [
            'New Jersey',
            'S 1588',
            'March 2025',
            'Disclosure that AEDT is being used; impact assessment; candidate can request alternative process',
            'Up to $10,000 per violation',
          ],
        ],
      },
    },
    {
      title: 'NYC Local Law 144: The One Everyone Knows',
      content:
        'New York City\'s law gets the most attention because it was the first to require a bias audit — a statistical analysis of the tool\'s selection and scoring rates across race, ethnicity, and sex categories. The audit must be conducted by an independent third party, and the results must be published on the employer\'s website.\n\nThe scope is narrow in some ways: it covers "automated employment decision tools" that substantially assist or replace discretionary decision-making. A system that simply searches a database doesn\'t qualify. But the definition has teeth. If your AI tool scores, ranks, or filters candidates in a way that materially influences who gets an interview, it\'s probably covered.\n\nThe tricky part: the audit requirement resets annually. You can\'t do it once and forget about it. And the published summary must include the selection rate for each demographic category and the impact ratio — the selection rate of each group compared to the most-selected group. That data is public.',
    },
    {
      title: 'Colorado SB 26-189: The ADMT Rewrite',
      content:
        'Colorado was the broadest state AI law story in early 2026, but the target changed before the original law took effect. SB 26-189 repealed and replaced the original SB 24-205 framework with a narrower law focused on automated decision-making technology, or ADMT, that materially influences consequential decisions. Employment remains one of the covered domains.\n\nFor hiring teams, the practical trigger is no longer "do we have a high-risk AI system?" It is whether a tool processes personal data and generates a prediction, recommendation, ranking, score, classification, or similar output that materially influences a Colorado consumer\'s employment opportunity. Resume screeners, candidate-ranking systems, interview-scoring tools, and vendor recommendations can all deserve review if they affect who advances.\n\nThe old mandatory impact-assessment model is gone. The current Colorado obligations are more operational: clear notice at the point of interaction with covered ADMT, a plain-language description after an adverse outcome, personal-data access and correction, meaningful human review and reconsideration, developer documentation, material-update notices, and records that show the process worked. The effective date is January 1, 2027.',
    },
    {
      title: 'The Others: Illinois, Maryland, New Jersey',
      content:
        'Illinois was actually first. AIVIA, passed in 2019, requires employers to notify applicants before using AI to analyze video interviews, explain what characteristics the AI evaluates, and get consent. Applicants can request deletion of the video, and employers can\'t share it without consent. The original scope was narrow — video interviews only — but Illinois expanded it in 2025 when Governor Pritzker signed HB 3773, the AI Transparency in Employment Act. That law extends notice and consent requirements beyond video interviews to cover any AI analysis of applicants, including resume screening and other automated evaluations. If you hire in Illinois, the obligations now go well beyond video.\n\nThat broader scope signaled the direction things were heading.\n\nMaryland\'s HB 1202 is even narrower: it prohibits employers from using facial recognition during interviews unless the applicant consents in writing. Simple, limited, and easy to comply with. But it shows that even states that don\'t pass sweeping legislation are carving out specific prohibitions.\n\nNew Jersey\'s law, which took effect in early 2025, borrowed from NYC\'s model but added the right to request an alternative assessment process. The penalties are also steeper — up to $10,000 per violation, which adds up fast at scale.',
    },
    {
      title: 'What to Do If You Use AI in Hiring',
      content:
        'The compliance burden depends on where your candidates are located, not where your company is headquartered. If you\'re hiring remote workers across the U.S., you should assume these laws apply to at least some of your applicant pool.',
      list: [
        'Audit your pipeline. Identify every point where AI influences a hiring decision — screening, scoring, ranking, scheduling, assessment. Include vendor tools.',
        'Map your candidate geography. Which states are your applicants in? That determines which laws apply to which candidates.',
        'Get your bias audit done if you have NYC applicants. Use an independent auditor. Publish the results. Repeat annually.',
        'Build a consent and disclosure workflow. Most of these laws require notice before the AI system is used, not after. Retrofit your application process.',
        'Prepare for Colorado\'s covered-ADMT workflow. Even if you\'re not deploying there yet, the notice, explanation, data-correction, human-review, and vendor-documentation pieces are useful models for any jurisdiction.',
        'Create an alternative or human-review process. Colorado expects meaningful human review after adverse outcomes, and other jurisdictions are moving in the same direction. Having that path ready is good practice regardless.',
      ],
    },
    {
      title: 'More States Are Coming',
      content:
        'At least a dozen states had active AI hiring bills in their 2025-2026 legislative sessions, including California, Massachusetts, Texas, and Washington. The trend is clear: more states, more requirements, more variation.\n\nOne wildcard: the federal government\'s December 2025 executive order on AI preemption has introduced real uncertainty about whether new state AI laws will survive federal preemption challenges. Some argue the order signals an intent to establish a unified federal framework that overrides the state patchwork. Others contend that executive orders can\'t preempt state legislation on their own. Until Congress acts or courts weigh in, the legal landscape is genuinely unsettled. Don\'t assume future state laws will stick — but don\'t assume they won\'t either.\n\nThe pragmatic move is still to build toward a combined high-water mark. For hiring, that means NYC-style bias audit readiness, Illinois-style notice and consent where applicable, Colorado-style ADMT notice and review, and vendor documentation that explains how the tool works. No single jurisdiction now covers all of that, but the combined baseline is more durable than chasing one statute at a time.',
    },
  ],

  takeaways: [
    'Five U.S. jurisdictions now regulate AI in hiring: NYC, Illinois, Colorado, Maryland, and New Jersey. Each has different requirements.',
    'Compliance depends on where your candidates are located, not where your company is based.',
    'Colorado\'s current SB 26-189 model starts January 1, 2027 and focuses on covered ADMT notices, adverse-outcome explanations, data correction, records, and meaningful human review.',
    'The durable baseline is a combined program: bias-audit readiness, clear notices, vendor documentation, data-correction paths, and human review for AI-influenced hiring decisions.',
  ],

  sources: [
    {
      title: 'NYC Local Law 144 — Automated Employment Decision Tools',
      url: 'https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page',
    },
    {
      title: 'Illinois Artificial Intelligence Video Interview Act (820 ILCS 42)',
      url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4015',
    },
    {
      title: 'Colorado SB 26-189 — Automated Decision-Making Technology',
      url: 'https://leg.colorado.gov/bills/sb26-189',
    },
    {
      title: 'Maryland HB 1202 — Facial Recognition in Interviews',
      url: 'https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/hb1202?ys=2020RS',
    },
    {
      title: 'New Jersey S 1588 — Automated Decision-Making Tools',
      url: 'https://www.njleg.state.nj.us/bill-search/2024/S1588',
    },
  ],

  relatedArticles: ['eu-ai-act-risk-classification', 'shadow-ai-compliance'],
  relatedRegulations: ['us-state-laws', 'federal-policy'],
}
