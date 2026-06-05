export const howToMakeAiUseInventory = {
  slug: 'how-to-make-ai-use-inventory',
  title: 'How to Make an AI Use Inventory Before Your Tool List Gets Out of Hand',
  description:
    'A practical guide to building an AI use inventory for founders, consultants, and lean teams that need visibility into tools, data, owners, and risk.',
  category: 'Practical Guide',
  categorySlug: null,
  date: '2026-06-05',
  displayDate: 'June 5, 2026',
  readTime: '7 min read',
  featured: false,
  relatedRegulations: ['nist-ai-rmf'],

  sections: [
    {
      title: null,
      content:
        'An AI use inventory is the first file most new businesses should create. It sounds administrative, but it answers the question every later policy, risk review, vendor review, and customer question depends on: what AI are we actually using?\n\nIf you want the shorter checklist version, start with the [AI use inventory template guide](/ai-use-inventory-template). This article explains how to build the first version without turning it into a giant spreadsheet project.',
    },
    {
      title: 'Why the Inventory Comes Before the Policy',
      content:
        'A policy written without an inventory is mostly guesswork. You can say that sensitive data should not go into AI tools, but you still need to know which tools people use, what they use them for, and whether those tools touch sensitive data today.\n\nThe inventory turns hidden AI use into named records. Once the tools are visible, you can decide what is approved, what needs review, and what should stop until the risk is understood.',
    },
    {
      title: 'Start With the Obvious Tools',
      content:
        'Do not wait for a perfect audit. Start with the tools you already know about: ChatGPT, Claude, Gemini, Copilot, meeting transcription, image tools, customer support AI, CRM AI, email drafting, code assistants, spreadsheet AI, and AI features bundled into products you already pay for.\n\nThen ask where personal accounts, free trials, browser extensions, plugins, and client-provided tools might be used for work. These are easy to miss because they often do not look like procurement decisions.',
    },
    {
      title: 'Fields to Track First',
      content:
        'The first inventory should be useful in one working session. You can always add more fields later.',
      table: {
        headers: ['Field', 'Why it matters'],
        rows: [
          ['Tool or vendor', 'Names the AI system, app, vendor feature, or account.'],
          ['Business owner', 'Gives one person responsibility for updates and review.'],
          ['Users', 'Shows who has access or relies on the tool.'],
          ['Use case', 'Explains what work the tool supports.'],
          ['Data categories', 'Flags customer, client, employee, student, confidential, regulated, or sensitive information.'],
          ['Output destination', 'Shows whether outputs stay internal or reach customers, clients, students, applicants, or the public.'],
          ['Risk tier', 'Separates low-risk drafting from higher-impact or sensitive workflows.'],
          ['Approval status', 'Records whether the use is approved, approved with limits, paused, or needs review.'],
          ['Next review date', 'Keeps the inventory from going stale.'],
        ],
      },
    },
    {
      title: 'How to Classify the First Pass',
      content:
        'Use a simple green, yellow, red approach. Green uses are low-risk internal support tasks, like brainstorming, formatting, or drafting non-sensitive internal content. Yellow uses involve sensitive data, external-facing outputs, material business reliance, or vendor uncertainty. Red uses can affect people, legal rights, eligibility, employment, education, housing, credit, insurance, health, safety, public services, or other consequential outcomes.\n\nThat classification is not a legal conclusion. It is a triage tool. The point is to decide what can proceed with basic guardrails and what needs legal, privacy, security, HR, procurement, or leadership review.',
    },
    {
      title: 'Keep It Alive',
      content:
        'The inventory should change when tools change. Add a review habit: update it when a new AI tool is adopted, when a vendor turns on a new AI feature, when the workflow changes, when data categories change, or at least quarterly.\n\nThe [AI Governance Starter Kit](/catalog/ai-governance-starter-kit) includes an AI Use Inventory, update tracker, green/yellow/red rules, tool approval mini-checklist, risk tiering decision tree, and risk register so the inventory can become part of the full working file.',
    },
  ],

  takeaways: [
    'An AI use inventory makes scattered AI use visible before you write rules or review risk.',
    'Track tool, owner, users, use case, data categories, output destination, risk tier, approval status, and next review date.',
    'Use a simple green/yellow/red triage for the first pass.',
    'Update the inventory when tools, vendors, workflows, data, or review decisions change.',
  ],

  sources: [
    {
      title: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    },
  ],
}
