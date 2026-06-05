# AI Risk Register Template

**Company:** [COMPANY NAME]
**Register owner:** [AI GOVERNANCE LEAD]
**Review cadence:** [MONTHLY / QUARTERLY / ANNUALLY]
**Date started:** ______________________________

> **How to use.** Use this register as the living list of AI risks your organization has identified. The inventory tells you what tools and workflows exist. The intake/impact assessment documents a specific use. The risk register lets you track cross-cutting risks, owners, mitigations, status, and review dates.

---

## 1. Field schema

Use these fields in a spreadsheet, GRC tool, Notion table, Airtable base, or document table.

| Field | Description |
| --- | --- |
| Risk ID | Unique identifier, for example RISK-AI-001 |
| Title | Short plain-English risk name |
| Description | What could happen and why it matters |
| Category | Accuracy, bias, privacy, security, legal/regulatory, operational, financial, reputation, safety, vendor, governance |
| Source | Intake form, impact assessment, incident, complaint, audit, vendor review, staff report, regulatory update |
| AI tool / workflow | Related inventory entry or system name |
| Population affected | Customers, employees, students, patients, applicants, public, internal users, other |
| Jurisdictions | Relevant locations, if known |
| Inherent likelihood | 1-5 before controls |
| Inherent impact | 1-5 before controls |
| Existing controls | Current mitigations |
| Residual likelihood | 1-5 after controls |
| Residual impact | 1-5 after controls |
| Residual score | Residual likelihood x residual impact |
| Treatment decision | Accept, reduce, transfer, avoid, monitor |
| Owner | Named person accountable for the risk |
| Next action | Specific action, not a vague intention |
| Due date | Date for next action |
| Status | Open, monitoring, treatment in progress, mitigated, closed |
| Next review date | Date the risk should be revisited |

---

## 2. Starter register

Delete the example rows and replace them with real risks.

| Risk ID | Title | Category | AI tool / workflow | Residual score | Owner | Status | Next action | Due date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RISK-AI-001 | Sensitive data entered into unapproved AI tools | Privacy / governance | Cross-team AI use | 12 |  | Open | Confirm approved tools and send rules |  |
| RISK-AI-002 | AI output used externally without human review | Accuracy / reputation | Marketing and support drafts | 9 |  | Monitoring | Add review rule to policy and rollout message |  |
| RISK-AI-003 | Vendor trains on company inputs by default | Vendor / privacy | [TOOL NAME] | 10 |  | Treatment in progress | Confirm opt-out or restrict data |  |
| RISK-AI-004 | AI used in employment or candidate decisions without review | Bias / legal | Hiring workflow | 15 |  | Open | Pause use and complete full impact assessment |  |
| RISK-AI-005 | AI tool gains new feature or model without policy update | Operational | Approved AI tools | 8 |  | Monitoring | Add vendor notices to update tracker |  |

---

## 3. Scoring rubric

### Likelihood

| Score | Meaning | Prompt |
| --- | --- | --- |
| 1 | Rare | Would be surprising |
| 2 | Unlikely | Plausible but not expected |
| 3 | Possible | Could happen during normal operations |
| 4 | Likely | Expected within the year |
| 5 | Almost certain | Expected soon or already happening |

### Impact

| Score | Meaning | Prompt |
| --- | --- | --- |
| 1 | Negligible | Minor inconvenience or rework |
| 2 | Minor | Limited operational issue |
| 3 | Moderate | Material business, customer, privacy, or quality concern |
| 4 | Major | Serious customer harm, contract issue, regulatory issue, or public incident |
| 5 | Severe | Rights, safety, systemic harm, major regulatory exposure, or existential business risk |

### Residual score guide

| Residual score | Suggested handling |
| --- | --- |
| 1-3 | Monitor during normal review |
| 4-7 | Assign owner and review at least annually |
| 8-11 | Treatment plan and quarterly review |
| 12-14 | Leadership visibility and monthly/quarterly review |
| 15-25 | Escalate before launch or expansion |

---

## 4. Risk treatment worksheet

Use this section for any risk with a residual score of 8 or higher, or any risk that leadership wants tracked closely.

**Risk ID:** ______________________________
**Risk title:** ______________________________
**Owner:** ______________________________
**Current residual score:** ______________________________
**Target residual score:** ______________________________

| Treatment option | Selected? | Notes |
| --- | --- | --- |
| Accept |  | Why is the residual risk acceptable? |
| Reduce |  | What control will lower likelihood or impact? |
| Transfer |  | Insurance, contract, vendor obligation, or other transfer path |
| Avoid |  | Stop, redesign, remove data, or do not launch |
| Monitor |  | What evidence will be watched and how often? |

**Treatment plan:**

> ____________________________________________________

**Evidence that the treatment is working:**

> ____________________________________________________

**Next review date:** ______________________________

---

## 5. Closure checklist

Close a risk only when the closure rationale is written down.

- [ ] Owner agrees the risk can be closed
- [ ] Treatment actions are complete or no longer needed
- [ ] Evidence is linked or attached
- [ ] Residual risk is within appetite
- [ ] Closure rationale is recorded
- [ ] Closed risk remains available for future review

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Consult qualified counsel before relying on this register for compliance decisions.
