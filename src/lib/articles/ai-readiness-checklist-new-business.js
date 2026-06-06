export const aiReadinessChecklistNewBusiness = {
  slug: 'ai-readiness-checklist-new-business',
  title: 'AI Readiness Checklist for New Businesses: What to Put in Place First',
  description:
    'A practical AI readiness checklist for founders, new business owners, consultants, and operators who are already using AI and need basic documentation before it spreads.',
  category: 'Practical Guide',
  categorySlug: null,
  date: '2026-06-06',
  displayDate: 'June 6, 2026',
  readTime: '8 min read',
  featured: true,
  relatedRegulations: ['nist-ai-rmf'],

  sections: [
    {
      title: null,
      content:
        'A new business does not need a full AI compliance department before it can use AI responsibly. It does need a few basic records before AI use becomes scattered, informal, and hard to explain.\n\nThis checklist is for founders, new business owners, consultants, and operators who are already using ChatGPT, Claude, Gemini, Copilot, meeting transcription, image tools, customer-support AI, or AI features inside other software. The goal is not to create a heavy compliance program. The goal is to build a first working file that answers the questions a client, investor, insurer, vendor, employee, or regulator might reasonably ask later.',
    },
    {
      title: '1. List the AI Tools Already in Use',
      content:
        'Start with visibility. Write down the AI tools, vendor features, browser extensions, account types, and workflows the business already uses. Include personal accounts if they are used for business work.\n\nDo not wait for a perfect audit. The first inventory can be simple: tool name, owner, users, purpose, data categories, output destination, approval status, and next review date.',
      list: [
        'Chatbots used for drafting, brainstorming, research, or summarizing.',
        'Code assistants, spreadsheet AI, design tools, and image generators.',
        'Meeting note tools, transcription tools, CRM AI, email AI, and support bots.',
        'AI features bundled into tools the business already pays for.',
      ],
    },
    {
      title: '2. Decide What Data Is Off Limits',
      content:
        'The fastest way to reduce AI risk is to set clear data rules. People should not have to guess whether a prompt is safe.\n\nA practical first rule: do not paste customer, client, employee, student, health, financial, legal, confidential, regulated, contract-restricted, or proprietary data into an AI tool unless the tool and workflow have been approved for that data.',
    },
    {
      title: '3. Name Approved Tools and Owners',
      content:
        'Every AI tool in active use should have an owner. For a solo founder, that owner may be the founder. For a small team, it may be the operator, department lead, or person who introduced the tool.\n\nThe owner does not need to be an AI expert. The owner needs to know what the tool is used for, where to find vendor terms, what data is allowed, and when the tool should be reviewed again.',
    },
    {
      title: '4. Sort Uses Into Green, Yellow, and Red',
      content:
        'A new business does not need complex scoring on day one. A green/yellow/red triage is enough for the first pass.',
      table: {
        headers: ['Tier', 'Meaning', 'Example'],
        rows: [
          [
            'Green',
            'Low-risk internal support that uses approved tools and non-sensitive data.',
            'Brainstorming blog outlines or rewriting an internal checklist.',
          ],
          [
            'Yellow',
            'Uses involving sensitive data, external-facing output, vendor uncertainty, or material business reliance.',
            'Using AI to draft client deliverables, summarize contracts, or analyze customer feedback.',
          ],
          [
            'Red',
            'Uses that could affect people, rights, eligibility, safety, employment, education, credit, housing, insurance, health, legal outcomes, or regulated services.',
            'Using AI to rank job applicants, make eligibility recommendations, or provide high-stakes advice.',
          ],
        ],
      },
    },
    {
      title: '5. Require Human Review Where It Matters',
      content:
        'Human review does not mean every AI output needs a formal approval meeting. It means important outputs should not be copied blindly.\n\nA useful first rule: anything that goes to a customer, client, applicant, student, patient, regulator, insurer, investor, public audience, or business-critical decision gets checked by a human before use.',
    },
    {
      title: '6. Create a First-Pass Risk Intake',
      content:
        'Before adopting a new AI tool or higher-risk workflow, capture a few facts: what the tool does, what data goes in, who is affected, where output goes, what could go wrong, what review exists, and whether legal, privacy, security, HR, procurement, or leadership review is needed.\n\nThe point is not to answer every legal question. The point is to decide whether the use can proceed with basic rules, proceed with conditions, pause, or escalate.',
    },
    {
      title: '7. Review Vendors Before You Rely on Them',
      content:
        'If a vendor provides an AI feature your business relies on, review more than the marketing page. Save or link to the vendor terms, privacy documentation, security page, model or AI policy, retention language, deletion process, subprocessors, and any statement about training on customer data.\n\nFor low-risk tools, this can be a short note. For AI that touches sensitive data or important workflows, use a deeper vendor review.',
    },
    {
      title: '8. Keep an Update Tracker',
      content:
        'AI tools change quickly. Vendors add features, models change, prompts get reused, staff find new workflows, and policies become outdated.\n\nKeep a simple update tracker for tool changes, vendor changes, model changes, prompt/workflow changes, policy changes, risk decisions, and review dates. This is what turns the first file into a living record instead of a one-time exercise.',
    },
    {
      title: 'A Practical First-Hour Checklist',
      content:
        'If you only have one hour today, do this:',
      list: [
        'Write down the AI tools already used for business work.',
        'Mark which tools touch sensitive, confidential, customer, employee, legal, financial, health, student, or regulated data.',
        'Pick one owner for each tool or workflow.',
        'Classify each use as green, yellow, or red.',
        'Write one plain-language data rule and one human-review rule.',
        'Create a place to log new tools, changes, and review decisions.',
      ],
    },
    {
      title: 'Where the Starter Kit Fits',
      content:
        'The [AI Governance Starter Kit](/catalog/ai-governance-starter-kit) is built for this stage. It gives founders, new business owners, consultants, and lean teams 14 editable documents for the first governance and first-pass risk assessment file: inventory, acceptable use policy, risk intake, update tracker, readiness checklist, rollout plan, green/yellow/red rules, tool approval checklist, risk tiering, risk register, review notes, rollout message, meeting agenda, and completion scorecard.\n\nIt is educational template material only. It is not legal advice, does not create an attorney-client relationship, and does not guarantee compliance. Use it to get organized, then route legal, privacy, security, HR, procurement, or regulated-use questions to qualified reviewers when needed.',
    },
  ],

  takeaways: [
    'AI readiness for a new business starts with visibility: list the tools already in use.',
    'Set plain data rules before people paste sensitive or confidential information into AI tools.',
    'Use green/yellow/red triage to separate low-risk support tasks from uses that need deeper review.',
    'Pair your policy with an inventory, risk intake, vendor notes, and update tracker so the file stays useful.',
  ],

  sources: [
    {
      title: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    },
    {
      title: 'AI Governance Starter Kit',
      url: 'https://airegready.com/catalog/ai-governance-starter-kit',
    },
  ],
}
