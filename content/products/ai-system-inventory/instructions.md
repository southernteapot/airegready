# AI System Inventory — Setup and Maintenance

A short guide to standing up and keeping the inventory current.

---

## 1. Pick a home

The inventory should be **one place** that everyone knows about. Options:

- **Google Sheet or Airtable** — simplest. Share with editors (AI Governance Lead, IT, Legal) and viewers (business owners).
- **Notion database** — good if you already live in Notion.
- **SharePoint list** — good for Microsoft-heavy organizations.
- **A compliance platform** (Vanta, Drata, OneTrust, etc.) — good if you already use one.

Avoid: a Word document. Inventory data changes too often.

## 2. Create the sheet

Use the field schema from `template.md`. Lay out one row per system, with the fields as columns. Group columns by the letter headings (A–H) for readability.

Add a "Changelog" sheet alongside to track changes: date, who, what changed, why.

## 3. First pass — find the systems

The biggest risk is missing systems. A few places to look:

- **IT tooling**: SSO directory, expense reports, SaaS management platform
- **Engineering**: API keys in secrets management, code repos for vendor SDK imports, CI logs
- **Procurement**: vendor list, recent contracts, renewal calendar
- **Marketing & sales**: campaign tooling, outreach tools, CRM plug-ins
- **HR**: ATS, screening tools, performance tools
- **Support**: chatbots, routing systems, QA tools
- **Finance**: AP automation, fraud detection
- **Leadership**: "shadow AI" — personal accounts used for work

Send a short survey to team leads: "list every AI tool your team uses, including personal accounts used for work." Promise amnesty for shadow AI reported in the survey — you want the truth, not a clean report.

## 4. First pass — classify

For each system, fill in at minimum:

- Name, vendor, description
- Business owner
- Tier (1 / 2 / 3 / 4)
- Colorado covered ADMT (Yes / No)
- EU AI Act classification
- Status

The other fields can fill in over the next quarter.

## 5. Wire it into the intake process

Every new AI system should be added to the inventory as part of the approval flow:

1. Requestor submits a proposal
2. AI Review Committee (or IT for Tier 1) reviews
3. Approver adds a row to the inventory
4. Business owner fills in the remaining fields within [30 days]

If it's not in the inventory, it's not approved.

## 6. Wire it into the retirement process

When a system is retired:

- Don't delete the row; change the status to **Retired** and set a retirement date
- Export any data per contract
- Confirm vendor-side deletion
- Update the changelog

## 7. Quarterly review

The AI Governance Lead runs a 30-minute review each quarter:

- New systems since last review (spot-check completeness)
- Systems with impact assessments coming due
- Systems with open actions overdue
- Shadow AI found this quarter (and how)
- Vendor changes (acquisitions, policy changes, major releases)

Report findings to the AI Review Committee.

## 8. Annual deep review

Once a year:

- Re-run the "find shadow AI" survey
- Audit 10% of inventory rows against evidence (contracts, screenshots, vendor portal)
- Review tier assignments — is the tier still right?
- Refresh the inventory schema to reflect new laws (add fields for new jurisdictions as needed)

## 9. Access and retention

- **Editors:** AI Governance Lead, IT/Security Lead, Privacy Lead, Legal
- **Viewers:** business owners (their systems), executive sponsor, auditors
- **Retention:** retain the inventory (with history) for at least 10 years after a system's retirement — matches the longest record-retention obligation under the EU AI Act

## 10. Hand this off on day one

If you're the AI Governance Lead, don't hold the inventory in your head. The inventory is the single most important artifact in your program. Document the schema, access, and review cadence so the next person can pick it up without archaeology.

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice.
