# Bonus Filled Example: Small Business First Pass

Purpose: Show what a realistic first pass through the AI Governance Starter Kit looks like for a small business, so you can copy the level of detail instead of staring at blank fields.

## How To Read It

This example is fictional. Copy the level of detail, not the exact facts. Your tools, data, rules, and review needs will be different, and some situations will need qualified legal, privacy, security, or HR review that this example does not replace.

## Example Company

Company: Harbor Lane Bookkeeping LLC

Scenario: An eight-person bookkeeping and back-office services firm. Staff started using AI tools informally over the past year - a chatbot for drafting emails, a meeting transcriber, and a support-inbox assistant the founder is piloting. Nobody wrote anything down until a client asked, "Do you put our financials into AI tools?" and nobody had a confident answer.

The founder used the Starter Kit over two afternoons. This is what the file looked like afterward.

## AI Use Inventory Excerpt

| ID | Name | Vendor | Business owner | Tier | Status |
| --- | --- | --- | --- | --- | --- |
| AIS-001 | General writing assistant (chat) | [AI VENDOR] | Founder | Tier 2 | In production |
| AIS-002 | Meeting transcription | [TRANSCRIPTION VENDOR] | Office manager | Tier 2 | In production |
| AIS-003 | Support-inbox reply drafts | [SUPPORT TOOL VENDOR] | Founder | Tier 2 | Under review |
| AIS-004 | Personal AI accounts used for work | Various | Founder | Tier 4 | Paused pending rules |
| AIS-005 | Bookkeeping software "AI insights" feature | [ACCOUNTING VENDOR] | Senior bookkeeper | Tier 3 | Under review |

Key inventory notes the founder recorded:

- AIS-001: Paid team plan. Training on inputs is turned off (verified in settings 2026-05-12). Client names and financial details are prohibited inputs; staff use placeholder names.
- AIS-002: Used for internal meetings only. Client calls require the client's okay before recording. Transcripts auto-delete after 90 days.
- AIS-003: Pilot. Drafts only - a person reviews and sends every reply. Under review because the support inbox contains client account details.
- AIS-004: Two staff admitted using personal free-tier accounts for work drafts. Paused until the acceptable use policy rollout; the team plan covers the same need.
- AIS-005: The accounting platform added an AI feature that reads client transactions. Flagged Tier 3 because it touches client financial data; vendor data-use answers requested 2026-05-14.

## Acceptable Use Policy Decisions

Instead of copying the full policy, here are the decisions the founder filled in:

- Approved tools: the team writing assistant and the meeting transcriber. The support-inbox assistant stays in pilot for two named users.
- Prohibited without approval: client names, client financials, payroll data, government IDs, and anything from a client folder.
- Human review: every client-facing email, report, or deliverable gets reviewed by the person sending it - AI output is never sent as-is.
- Exceptions: only the founder can approve them, in writing.
- Acknowledgment: collected by email reply from all eight staff.

## Risk Tiering Excerpt

The founder ran the support-inbox assistant (AIS-003) through the tiering decision tree:

- Question 1 (prohibited use?): No.
- Question 2 (decisions about people?): No - it drafts replies; it does not score or decide anything.
- Question 3 (sensitive data?): Yes - the support inbox contains client account and billing details. Tier 3 unless a reviewer documents a lower tier.
- Result: Treated as Tier 3 for the pilot. The founder limited the pilot to two users, prohibited pasting attachments, and asked the vendor about data retention and training before any wider rollout.

## Risk Register Excerpt

| Risk ID | Title | Category | Residual score | Owner | Status | Next action |
| --- | --- | --- | --- | --- | --- | --- |
| RISK-AI-001 | Staff using personal AI accounts for client work | Privacy / governance | 12 | Founder | Treatment in progress | Roll out policy; confirm everyone moved to the team plan |
| RISK-AI-002 | Accounting platform AI feature reads client financials | Vendor / privacy | 12 | Senior bookkeeper | Open | Get vendor data-use answers; keep feature off until reviewed |
| RISK-AI-003 | Client-facing drafts sent without review | Accuracy / reputation | 6 | Office manager | Monitoring | Review rule included in policy rollout; spot-check monthly |
| RISK-AI-004 | Meeting transcripts kept longer than needed | Privacy | 4 | Office manager | Mitigated | 90-day auto-delete confirmed; recheck quarterly |

## Update Tracker Baseline

| Field | Value |
| --- | --- |
| Date | 2026-05-15 |
| Version | First pass v1.0 |
| Change class | Material |
| Summary | First AI governance pass completed: inventory, policy, rules, pilot conditions |
| Approver(s) | Founder |
| User / customer notice | Staff rollout email sent 2026-05-16 |
| Linked documents | Inventory v1; policy v1; risk register v1 |
| Author of log entry | Founder |

## What The Founder Could Now Answer

After the first pass, the client question - "Do you put our financials into AI tools?" - had a real answer:

> "We use a small set of reviewed AI tools. Client financial data is prohibited in our general AI tools, our accounting platform's AI feature is switched off while we review the vendor's data practices, and every client-facing document is reviewed by a person before it goes out. We keep an inventory and update log, and we re-review tools quarterly."

That answer is the product of the packet. None of it required a lawyer to write down - and the two items that may need qualified review (the accounting platform's data practices and the support-inbox pilot) are now visible, owned, and scheduled instead of invisible.

## What Was Deliberately Left For Later

- A formal impact assessment for the accounting platform feature - waiting on vendor answers first.
- Staff training beyond the rollout email - planned for the 30-day follow-up meeting.
- A deeper vendor review packet for new tools - the mini-checklist is enough for now.

## Disclaimer

This document is a fictional example for educational and informational purposes only. It is not legal advice, does not create an attorney-client relationship, and does not show a legally sufficient program for any specific organization. Consult qualified counsel for your actual obligations.
