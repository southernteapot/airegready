export const usStatesAiHiring = {
  slug: 'us-states-ai-hiring',
  title: '5 U.S. States Now Regulate AI in Hiring — Is Yours Next?',
  description:
    'A practical comparison of state laws governing AI-driven hiring tools, covering NYC LL144, Illinois AIVITA, Colorado SB 24-205, Maryland HB 1202, and New Jersey\'s new disclosure rules.',
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
            'AI Video Interview Act (AIVITA)',
            'January 2020',
            'Consent before AI analyzes video interviews; explanation of how AI works; deletion upon request',
            'Enforced under Consumer Fraud Act',
          ],
          [
            'Colorado',
            'SB 24-205',
            'February 2026',
            'Impact assessments; notice to applicants; opt-out rights for certain decisions; duty to avoid algorithmic discrimination',
            'Enforced by AG; civil penalties',
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
      title: 'Colorado SB 24-205: The Most Comprehensive',
      content:
        'Colorado took the broadest approach. SB 24-205 doesn\'t just apply to hiring — it covers any "high-risk AI system" that makes consequential decisions about people, including employment, education, financial services, insurance, and housing. But the employment provisions are particularly detailed.\n\nDeployers must conduct impact assessments before deploying a high-risk system and annually thereafter. The assessment must analyze the system\'s purpose, how it was evaluated for risks, the data it uses, its expected outputs, and any safeguards against algorithmic discrimination. This isn\'t a checkbox exercise — the statute expects a substantive analysis.\n\nApplicants must receive notice that an AI system is being used, a description of what it does, and instructions for requesting a human alternative or appealing the outcome. That last part is significant. If a candidate asks for a human to review their application instead of the AI, you need a process for that.',
    },
    {
      title: 'The Others: Illinois, Maryland, New Jersey',
      content:
        'Illinois was actually first. AIVITA, passed in 2019, requires employers to notify applicants before using AI to analyze video interviews, explain what characteristics the AI evaluates, and get consent. Applicants can request deletion of the video, and employers can\'t share it without consent. The scope is narrow — video interviews only — but it signaled the direction things were heading.\n\nMaryland\'s HB 1202 is even narrower: it prohibits employers from using facial recognition during interviews unless the applicant consents in writing. Simple, limited, and easy to comply with. But it shows that even states that don\'t pass sweeping legislation are carving out specific prohibitions.\n\nNew Jersey\'s law, which took effect in early 2025, borrowed from NYC\'s model but added the right to request an alternative assessment process. The penalties are also steeper — up to $10,000 per violation, which adds up fast at scale.',
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
        'Prepare for Colorado\'s impact assessment requirement. Even if you\'re not deploying there yet, the assessment framework is a useful model for any jurisdiction.',
        'Create an opt-out or alternative process. New Jersey and Colorado both require it. Having a human-review path ready is good practice regardless.',
      ],
    },
    {
      title: 'More States Are Coming',
      content:
        'At least a dozen states had active AI hiring bills in their 2025-2026 legislative sessions, including California, Massachusetts, Texas, and Washington. The trend is clear: more states, more requirements, more variation. Federal preemption could simplify things, but there\'s no realistic timeline for that.\n\nThe pragmatic move is to build toward the most demanding standard — right now, that\'s Colorado — and treat everything else as a subset. If you can satisfy Colorado\'s impact assessment and applicant-rights requirements, you\'re well-positioned for whatever comes next.',
    },
  ],

  takeaways: [
    'Five U.S. jurisdictions now regulate AI in hiring: NYC, Illinois, Colorado, Maryland, and New Jersey. Each has different requirements.',
    'Compliance depends on where your candidates are located, not where your company is based.',
    'Colorado\'s SB 24-205 is the most comprehensive — impact assessments, applicant notice, opt-out rights, and annual reviews.',
    'Building to the most demanding standard (Colorado) is the most efficient long-term strategy.',
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
      title: 'Colorado SB 24-205 — Consumer Protections for AI',
      url: 'https://leg.colorado.gov/bills/sb24-205',
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
