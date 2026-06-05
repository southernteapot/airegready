# AI System Inventory

**Company:** [COMPANY NAME]
**Inventory owner:** [AI GOVERNANCE LEAD]
**Last reviewed:** ______________________________
**Review cadence:** Quarterly

> **How to use.** This is the master record of every AI system in use at [COMPANY NAME]. Keep it current. Under state AI laws such as Colorado SB 26-189, the EU AI Act, NIST AI RMF, and most enterprise audit frameworks, a current inventory is foundational — it's the first thing a regulator or customer will ask for.
>
> In practice: keep this as a spreadsheet (Google Sheet / Airtable / Excel) and use this document as the field schema. The fields below match the columns of the spreadsheet.

---

## How to decide whether to list a system

List it if any of these are true:

- It uses machine learning or generative AI to produce text, code, images, audio, video, decisions, recommendations, or scores
- It's a third-party product that has AI features turned on (even if AI isn't the main purpose)
- It's a custom integration that calls an AI model's API
- A team member uses their personal account on an AI tool for work

Do **not** list systems that have no AI component (classic rule-based software, spreadsheets, databases, calculators).

If you're not sure: list it and mark the AI role as "uncertain — to classify."

---

## Field schema

### A. Identification

| Field | Description |
| --- | --- |
| **ID** | Short unique identifier (e.g., AIS-001) |
| **Name** | Short display name for the system |
| **Description** | One-sentence plain-language description |
| **Vendor** | Company that supplies the system (or "in-house") |
| **Product / model name** | Specific product and model version where known |
| **Version / release** | Current version in use |
| **Environment** | Production / staging / sandbox / evaluation |

### B. Ownership

| Field | Description |
| --- | --- |
| **Business owner** | Named individual accountable for the system |
| **Business owner email** | Contact |
| **Department / team** | Primary user team |
| **Technical owner** | Person responsible for integration and technical health |
| **Added by** | Who added this entry to the inventory |
| **Date added** | First inventory date |
| **Last reviewed** | Most recent review date |
| **Next review due** | Based on tier cadence |

### C. Purpose and use

| Field | Description |
| --- | --- |
| **Primary use case** | What the system is used for |
| **User population** | Who interacts with the system (employees, customers, candidates, patients, general public) |
| **Approximate monthly volume** | Queries, records, or decisions processed per month |
| **Is a substantial factor in a consequential decision?** | Yes / No / Uncertain |
| **Which consequential-decision category?** | Education / Employment / Finance / Government services / Healthcare / Housing / Insurance / Legal / None |
| **Customer-facing?** | Output shown directly to a customer / public |

### D. Data

| Field | Description |
| --- | --- |
| **Data inputs** | Categories of data that go in |
| **Contains personal data?** | Yes / No |
| **Contains sensitive personal data?** | Health / biometric / children / financial / government ID |
| **Contains confidential business data?** | Yes / No |
| **Data retention at vendor** | How long inputs/outputs are kept |
| **Used for training?** | Yes / No / Opt-out |
| **Data residency** | Where data is stored and processed |

### E. Risk and regulatory

| Field | Description |
| --- | --- |
| **Tier** | Tier 1 (low) / Tier 2 (medium) / Tier 3 (high) / Tier 4 (prohibited) |
| **Colorado covered ADMT?** | Yes / No / N/A |
| **EU AI Act classification** | Prohibited / High-risk (Annex I) / High-risk (Annex III) / Limited-risk / Minimal-risk / Out of scope |
| **EU role** | Provider / Deployer / Importer / Distributor / Not applicable |
| **Other applicable laws** | GDPR / CCPA / HIPAA / PCI / NYC LL 144 / Illinois AIVIA / California TFAIA / Texas TRAIGA / sector rules |
| **Impact assessment on file?** | Yes (link) / In progress / No |
| **Impact assessment date** | Most recent completion date |
| **Next assessment due** | Annual for Tier 2/3; semi-annual for some high-risk |

### F. Controls

| Field | Description |
| --- | --- |
| **Human in the loop?** | Yes / No / Conditional |
| **Override possible?** | Yes / No |
| **Logging enabled?** | Yes / No |
| **Log retention** | Duration in months |
| **SSO / MFA enforced?** | Yes / No |
| **DPA signed?** | Yes / No / Not applicable |
| **BAA signed?** | Yes / No / Not applicable |
| **SCCs signed?** | Yes / No / Not applicable |
| **Vendor SOC 2 / ISO 27001?** | Yes / No / Pending |

### G. Customer-facing posture

| Field | Description |
| --- | --- |
| **Disclosure to users?** | Yes / No / N/A |
| **Disclosure location** | Website URL, chatbot opening line, email footer, etc. |
| **Opt-out available?** | Yes / No / Not applicable |
| **Appeal path available?** | Yes / No / Not applicable |

### H. Status

| Field | Description |
| --- | --- |
| **Status** | Proposed / Approved / In production / Under review / Retired |
| **Approval source** | Review committee meeting or memo reference |
| **Approval date** | Date of most recent approval |
| **Retirement date** | Date retired (if applicable) |
| **Open actions** | Outstanding controls, remediations, conditions |
| **Incident history** | Links to past incident records |

---

## Starter rows (examples)

Delete these and replace with your actual systems.

| ID | Name | Vendor | Business owner | Tier | EU classification | Colorado covered ADMT | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AIS-001 | Customer support chatbot | [VENDOR] | [NAME] | Tier 2 | Limited-risk (Art 50) | No | In production |
| AIS-002 | Resume screener | [VENDOR] | [HR LEAD] | Tier 3 | High-risk (Annex III, employment) | Yes | Under review |
| AIS-003 | Marketing copy assistant | [VENDOR] | [MARKETING LEAD] | Tier 1 | Minimal-risk | No | In production |
| AIS-004 | Code assistant (IDE plugin) | [VENDOR] | [ENG LEAD] | Tier 2 | Minimal-risk | No | In production |
| AIS-005 | Meeting transcription | [VENDOR] | [OPS LEAD] | Tier 2 | Limited-risk | No | In production |

---

## Quarterly review — what the owner checks

- Are there any new systems in use that aren't in the inventory?
- Have any systems been retired? Move them to "Retired" but retain the record.
- Has any system's use case changed in a way that changes its tier?
- Are impact assessments current?
- Are DPAs, BAAs, SCCs still on file and current?
- Are there any open actions overdue?

Log the review date and any changes at the top of the sheet.

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Consult qualified legal counsel before relying on this template for compliance.
