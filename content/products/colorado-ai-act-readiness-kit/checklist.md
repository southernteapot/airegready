# Colorado AI Act — Readiness Checklist

**Company:** [COMPANY NAME]
**Completed by:** ______________________________
**Date:** ______________________________
**Target go-live:** [VERIFY CURRENT CAIA EFFECTIVE DATE]

> Work through this top to bottom. For each item, mark **Done / In progress / Not applicable** and note the evidence (document name, link, owner). A completed checklist with evidence is your first line of proof that you exercised reasonable care.

---

## Phase 1 — Scope and inventory

- [ ] **1.1** Identified whether [COMPANY NAME] does business in Colorado or reaches Colorado consumers
- [ ] **1.2** Built or updated an AI System Inventory that includes every AI system in use
- [ ] **1.3** For each inventoried system, recorded:
  - Purpose
  - Business owner (named individual)
  - Vendor (if any)
  - Data inputs
  - Outputs and how they're used
  - Whether it could be a substantial factor in a consequential decision
- [ ] **1.4** Classified each system as **developer**, **deployer**, or **both**
- [ ] **1.5** Flagged every system that is or might be **high-risk** under CAIA (consequential-decision categories: education, employment, finance/lending, essential government services, healthcare, housing, insurance, legal services)
- [ ] **1.6** Documented the reasoning for any system excluded from high-risk (e.g., procedural-only, narrow task)

## Phase 2 — Governance foundation

- [ ] **2.1** AI Governance Framework approved and signed by executive sponsor
- [ ] **2.2** AI Review Committee meeting on a scheduled cadence
- [ ] **2.3** Named AI Governance Lead with budget and authority to act
- [ ] **2.4** Chosen a recognized risk management framework (NIST AI RMF or ISO/IEC 42001) and documented alignment
- [ ] **2.5** Risk management **policy** written and adopted
- [ ] **2.6** Risk management **program** (operational processes) in place: intake, assessment, deployment, monitoring, retirement
- [ ] **2.7** Training rolled out to business owners, HR, legal, and customer-facing teams

## Phase 3 — Developer obligations (if applicable)

Skip this phase if you are purely a deployer.

- [ ] **3.1** For each high-risk system you develop, produced developer documentation covering:
  - Summary of training data types
  - Known limitations of the system
  - Purpose and intended uses
  - Benefits
  - Evaluation method for performance and discrimination mitigation
  - Data governance measures
  - Outputs produced
  - Measures deployers should take
- [ ] **3.2** Documentation delivery process in place for every deployer (contract attachment, portal, or trust center page)
- [ ] **3.3** Public statement published on [COMPANY NAME] website describing high-risk AI developed and discrimination-risk management approach
- [ ] **3.4** Internal process to detect algorithmic discrimination in systems you develop
- [ ] **3.5** Defined escalation path to notify the Colorado AG within 90 days if discrimination is discovered
- [ ] **3.6** Update cadence: developer docs refreshed whenever the system is intentionally and substantially modified
- [ ] **3.7** Contract language with deployers addressing their cooperation with your risk management program

## Phase 4 — Deployer obligations

Skip this phase if you are purely a developer.

### 4A. Documentation

- [ ] **4.1** Obtained developer documentation for every high-risk AI system you use
- [ ] **4.2** Filed a substitute / gap-analysis record for any system where the developer hasn't provided adequate documentation (plus action to obtain or replace the vendor)
- [ ] **4.3** Stored developer documentation in a central, retrievable location

### 4B. Impact assessments

- [ ] **4.4** Completed an initial **Impact Assessment** for every high-risk system before first deployment (use `impact-assessment-template.md`)
- [ ] **4.5** Scheduled **annual re-assessments**
- [ ] **4.6** Trigger defined for **re-assessment upon intentional and substantial modification**
- [ ] **4.7** Impact assessments reviewed by AI Review Committee and stored for AG access

### 4C. Consumer notice (pre-decision)

- [ ] **4.8** Identified every consumer-facing workflow where a high-risk system is a substantial factor in a consequential decision
- [ ] **4.9** Added plain-language notice that includes:
  - The fact that a high-risk AI system will be used
  - The purpose of the system
  - The nature of the decision being made
  - Contact information for questions
- [ ] **4.10** Notice delivered **before** the decision (or as soon as practicable per statute)
- [ ] **4.11** Notice language reviewed by Legal

### 4D. Adverse action (post-decision)

- [ ] **4.12** When an adverse decision is made, consumer receives:
  - Principal reasons for the decision
  - Data sources used
  - Right to correct personal data used by the system
  - Right to appeal with human review (if technically feasible)
- [ ] **4.13** Workflow built to handle data-correction requests and route them back into the decisioning system
- [ ] **4.14** Workflow built to route appeals to a qualified human reviewer within a documented SLA
- [ ] **4.15** If human appeal is not feasible, documented rationale and alternative recourse

### 4E. Public statement

- [ ] **4.16** Published statement on [COMPANY NAME] website summarizing:
  - Types of high-risk AI systems currently deployed
  - How [COMPANY NAME] manages known or reasonably foreseeable risks of algorithmic discrimination
- [ ] **4.17** Statement reviewed by Legal and kept current (updated at least annually and on material change)

### 4F. Discrimination detection and reporting

- [ ] **4.18** Monitoring in place to detect algorithmic discrimination (subgroup performance metrics, complaint handling, periodic bias audits)
- [ ] **4.19** Threshold and escalation path defined
- [ ] **4.20** Process in place to **notify the Colorado AG within 90 days** if discrimination is discovered
- [ ] **4.21** Complaint intake channel documented and staffed

## Phase 5 — Small deployer exemption (if relied upon)

Only if you plan to rely on the small-deployer exemption:

- [ ] **5.1** Confirmed headcount is fewer than 50 FTE and documented
- [ ] **5.2** Confirmed you do not train the system on your own data
- [ ] **5.3** Using the system only for purposes disclosed by the developer
- [ ] **5.4** Making developer-provided impact assessment available to the AG
- [ ] **5.5** Current legal opinion confirming eligibility (amendments have changed the contours of this exemption)

## Phase 6 — Contracts and vendors

- [ ] **6.1** Reviewed contracts with AI vendors for:
  - Developer-documentation delivery
  - Notice of material modifications
  - Assistance with consumer requests (data correction, appeal)
  - Cooperation with AG inquiries
  - Representations on training data and bias testing
- [ ] **6.2** Master vendor template updated with CAIA-aligned clauses
- [ ] **6.3** Existing vendor agreements flagged for renewal-cycle update

## Phase 7 — Operations and training

- [ ] **7.1** Customer support team trained on recognizing and routing CAIA-related consumer requests
- [ ] **7.2** HR trained on CAIA obligations when AI is used in hiring or employment decisions
- [ ] **7.3** Sales and marketing trained not to make unsupported AI claims
- [ ] **7.4** Legal on-call for AG inquiries and 90-day reporting obligations
- [ ] **7.5** AI System Inventory reviewed and updated at least quarterly

## Phase 8 — Records and audit readiness

- [ ] **8.1** All documentation, impact assessments, and notices stored in a retrievable system with retention [3 years minimum, confirm with counsel]
- [ ] **8.2** Can produce, on AG request and within a reasonable time:
  - Risk management policy and program documents
  - Most recent impact assessment for any high-risk system
  - Developer documentation received from vendors (for deployers)
  - Developer documentation provided to deployers (for developers)
  - Public website statement history
- [ ] **8.3** Evidence log shows dates, owners, and version history

## Phase 9 — Ongoing

- [ ] **9.1** Calendar set for annual re-assessment of every high-risk system
- [ ] **9.2** Watchlist in place for amendments to CAIA and new AG rules
- [ ] **9.3** Budget line for CAIA compliance maintained
- [ ] **9.4** Annual report to the AI Review Committee and executive sponsor on CAIA posture

---

## Summary dashboard

| Phase | Total items | Done | In progress | Not applicable |
| --- | ---: | ---: | ---: | ---: |
| 1. Scope and inventory | 6 |  |  |  |
| 2. Governance foundation | 7 |  |  |  |
| 3. Developer obligations | 7 |  |  |  |
| 4. Deployer obligations | 14 |  |  |  |
| 5. Small deployer exemption | 5 |  |  |  |
| 6. Contracts and vendors | 3 |  |  |  |
| 7. Operations and training | 5 |  |  |  |
| 8. Records and audit readiness | 3 |  |  |  |
| 9. Ongoing | 4 |  |  |  |

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. The Colorado AI Act has been amended and may be further amended; implementing regulations are evolving. Consult qualified legal counsel before relying on this checklist for any compliance decision.
