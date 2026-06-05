export const firstPassAiRiskAssessment = {
  slug: 'first-pass-ai-risk-assessment',
  title: 'First-Pass AI Risk Assessment: A Plain-English Review Before You Adopt a Tool',
  description:
    'A practical first-pass AI risk assessment workflow for new tools, workflows, data uses, vendor AI features, and higher-impact AI adoption decisions.',
  category: 'Practical Guide',
  categorySlug: null,
  date: '2026-06-05',
  displayDate: 'June 5, 2026',
  readTime: '8 min read',
  featured: false,
  relatedRegulations: ['nist-ai-rmf'],

  sections: [
    {
      title: null,
      content:
        'A first-pass AI risk assessment is not a formal legal opinion, technical audit, or compliance certification. It is the first structured review that helps a founder, consultant, operator, or lean team decide whether a proposed AI tool or workflow is low-risk, needs guardrails, or needs deeper review.\n\nFor the shorter landing-page version, start with the [AI risk assessment template guide](/ai-risk-assessment-template). This article gives the fuller workflow.',
    },
    {
      title: 'Review One Workflow at a Time',
      content:
        'Do not assess "AI" in the abstract. Pick one tool, vendor feature, or workflow. For example: using ChatGPT to draft sales emails, using an AI transcription tool for client calls, adding AI scoring to inbound leads, using AI to summarize employee performance notes, or turning on an AI feature inside a customer support platform.\n\nA narrow workflow makes the review concrete. You can identify users, data, outputs, affected people, decisions, oversight, and follow-up actions.',
    },
    {
      title: 'The Questions That Matter First',
      content:
        'A first-pass review should answer enough to decide what happens next.',
      list: [
        '**Purpose:** What business problem does the AI use support?',
        '**Users:** Who will operate the tool or rely on its output?',
        '**Affected people:** Could customers, clients, employees, students, applicants, patients, or the public be affected?',
        '**Data:** What information goes into the tool, and is any of it sensitive, confidential, personal, regulated, or client-provided?',
        '**Output:** What does the tool produce, and where does the output go?',
        '**Decision role:** Does AI merely assist a human, or does it materially influence a decision?',
        '**Oversight:** Who reviews, approves, tests, logs, or escalates issues?',
        '**Vendor:** What do the terms, privacy, security, retention, and training-data positions say?',
      ],
    },
    {
      title: 'Use Green, Yellow, and Red Triage',
      content:
        'The first pass should route work quickly. Green does not mean risk-free; it means low enough for basic rules. Yellow means guardrails or specific review are needed. Red means pause or send for deeper review before adoption.',
      table: {
        headers: ['Tier', 'Typical examples', 'Next action'],
        rows: [
          ['Green', 'Internal brainstorming, formatting, non-sensitive drafting, low-impact summarization.', 'Allow with approved tools, sensitive-data rules, and human review where needed.'],
          ['Yellow', 'Customer-facing drafts, vendor tools with unclear data terms, workflows using confidential business data, material reliance on output.', 'Approve with documented limits, owner, review step, and next review date.'],
          ['Red', 'Hiring, lending, housing, education, healthcare, insurance, legal, safety, public services, or other consequential decision support.', 'Pause or escalate to qualified legal, privacy, security, HR, procurement, or leadership review.'],
        ],
      },
    },
    {
      title: 'Record the Decision',
      content:
        'The review is not finished until the decision is recorded. Use one of four outcomes: approve, approve with guardrails, pause, or send for deeper review. Then record the owner, date, conditions, review notes, and next review date.\n\nThis record matters because AI workflows change. A low-risk internal use can become higher risk if it starts using customer data, producing external recommendations, influencing eligibility, or being embedded in a vendor workflow.',
    },
    {
      title: 'Where the Starter Kit Fits',
      content:
        'The [AI Governance Starter Kit](/catalog/ai-governance-starter-kit) includes a risk intake and impact assessment, green/yellow/red use rules, risk tiering decision tree, risk register, and risk review notes. It is meant for first-pass documentation, not for replacing legal, privacy, security, HR, procurement, or regulated-use review when those are needed.\n\nIf risk assessment is the main problem, use the free [AI readiness checklist](/checklist) first to see whether inventory, policy, vendor review, and update tracking are also missing.',
    },
  ],

  takeaways: [
    'Assess one AI workflow at a time, not AI adoption in the abstract.',
    'Capture purpose, users, affected people, data, output, decision role, oversight, and vendor facts.',
    'Use green/yellow/red triage to decide what can proceed and what needs deeper review.',
    'Record the decision and revisit it when tools, data, vendors, models, or workflows change.',
  ],

  sources: [
    {
      title: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    },
  ],
}
