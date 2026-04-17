# AI in Financial Services — Readiness Checklist

**Institution:** [NAME]
**Completed by:** ______________________________
**Date:** ______________________________
**Primary regulators:** [LIST]

> Mark each item Done / In progress / Not applicable with evidence. Coordinate with compliance, model risk, third-party risk, legal, and audit.

---

## Phase 1 — Scope and inventory

- [ ] **1.1** AI System Inventory includes every model used in credit underwriting, pricing/rating, risk scoring, fraud, AML, servicing, collections, marketing targeting, claims handling, customer service, and employee management
- [ ] **1.2** Each system tagged for applicable rules: ECOA / FCRA / GLBA / Safeguards / NAIC Model Bulletin / CAIA / EU AI Act / state banking or insurance rule
- [ ] **1.3** Each system assigned a model owner, business owner, and model risk tier
- [ ] **1.4** Third-party AI vendors identified with contracts on file

## Phase 2 — Governance

- [ ] **2.1** Board or board committee formally oversees AI at the institution
- [ ] **2.2** Senior management AI committee chartered and meeting
- [ ] **2.3** Model Risk Management (MRM) policy updated to explicitly cover AI/ML
- [ ] **2.4** Three lines of defense clear: business ownership, model risk management, internal audit
- [ ] **2.5** Documentation standards defined for AI models (data, methodology, assumptions, limitations, performance, validation)

## Phase 3 — SR 11-7 alignment

- [ ] **3.1** Development validation completed for each material model
- [ ] **3.2** Independent validation by Model Risk Management
- [ ] **3.3** Ongoing monitoring: performance metrics, drift, recalibration triggers
- [ ] **3.4** Challenger models or benchmarks in place where appropriate
- [ ] **3.5** Change control: material changes re-validated before production
- [ ] **3.6** Model inventory with tiering and validation cadence

## Phase 4 — Fair lending / fair insurance

- [ ] **4.1** Protected-class proxies identified in input features; proxies documented and justified or removed
- [ ] **4.2** Disparate-impact testing performed (marginal and intersectional) across race, sex, age (where permitted), national origin, and other applicable protected classes
- [ ] **4.3** Less-discriminatory-alternative search conducted for practices with material disparate impact
- [ ] **4.4** Mitigations documented for any identified disparate impact
- [ ] **4.5** HMDA data reconciled with model outputs (for mortgage)
- [ ] **4.6** State and federal fair-insurance testing where applicable
- [ ] **4.7** Periodic fair-lending / fair-insurance testing cadence

## Phase 5 — Explainability and adverse action

- [ ] **5.1** Each credit decision model produces specific reasons consistent with ECOA and FCRA
- [ ] **5.2** Reasons are generated from model attribution, not boilerplate
- [ ] **5.3** Adverse-action notice template complies with ECOA, FCRA, and Colorado AI Act where applicable
- [ ] **5.4** Notice delivered in required timeframe (30 days for ECOA; others vary)
- [ ] **5.5** If consumer report used: consumer reporting agency identified; FCRA disclosures included
- [ ] **5.6** Risk-based pricing notice where applicable
- [ ] **5.7** State-specific notices where applicable (CO appeal path; CA access rights)

## Phase 6 — Data governance

- [ ] **6.1** Training, validation, and test data documented per AI Data Governance Policy
- [ ] **6.2** Alternative data evaluated for fair-lending risk
- [ ] **6.3** Data quality controls (completeness, accuracy, recency)
- [ ] **6.4** Sensitive attributes processed only as permitted (consider using for bias testing, avoid for prediction)
- [ ] **6.5** Cross-border transfer mechanisms in place

## Phase 7 — GLBA / Safeguards Rule

- [ ] **7.1** Written Information Security Program covers AI systems
- [ ] **7.2** Risk assessments include AI-specific risks (prompt injection, data exfiltration via LLM, model theft)
- [ ] **7.3** Access controls, encryption, MFA, logging, and testing cover AI systems
- [ ] **7.4** Service provider oversight covers AI vendors
- [ ] **7.5** Incident response covers AI incidents; notification timelines mapped

## Phase 8 — Third-party AI

- [ ] **8.1** Vendor risk assessment completed for every AI vendor (use the AI Vendor Risk Assessment)
- [ ] **8.2** Contracts address: data handling, training on our data, subprocessors, audit rights, continuity, indemnification, notification of material changes
- [ ] **8.3** Annual vendor review program
- [ ] **8.4** Contingency for vendor failure or compromise

## Phase 9 — Customer-facing AI

- [ ] **9.1** Chatbots and voice agents disclose AI identity per EU AI Act Art 50, TX TRAIGA, CA SB 1001
- [ ] **9.2** AI-assisted customer communications reviewed for UDAAP risk
- [ ] **9.3** Claims made about products and services supported by documentation (no AI-washing)
- [ ] **9.4** Complaint channel tags AI-related complaints; trend analysis performed

## Phase 10 — Colorado AI Act (if in scope)

- [ ] **10.1** Consequential financial decisions (credit, insurance) inventoried
- [ ] **10.2** Impact assessments completed for high-risk deployer systems
- [ ] **10.3** Consumer notice before consequential decisions
- [ ] **10.4** Adverse-action explanation, data correction, appeal
- [ ] **10.5** Public statement on website
- [ ] **10.6** 90-day AG reporting process in place

## Phase 11 — EU AI Act (if EU customers)

- [ ] **11.1** Credit and insurance systems classified Annex III high-risk
- [ ] **11.2** Provider or deployer role identified
- [ ] **11.3** Technical documentation, risk management, data governance, logs, transparency, human oversight, accuracy — mapped
- [ ] **11.4** Deployer FRIA (Art 27) for credit scoring and life/health insurance
- [ ] **11.5** CE marking and EU database registration (if provider)
- [ ] **11.6** Serious incident reporting (Art 73) wired up

## Phase 12 — NAIC Model Bulletin (insurers)

- [ ] **12.1** Written AI program
- [ ] **12.2** Governance over underwriting, rating, claims, fraud AI
- [ ] **12.3** Testing for accuracy and unfair discrimination
- [ ] **12.4** Third-party AI monitoring
- [ ] **12.5** Market-conduct-exam documentation ready

## Phase 13 — Supervisory readiness

- [ ] **13.1** Responses to common supervisory AI questions prepared
- [ ] **13.2** Walk-through deck available: AI inventory, risk management program, testing results, incident history
- [ ] **13.3** Counsel relationships in place for regulatory inquiry response
- [ ] **13.4** Records retention aligns with regulator expectations (often 5-7 years; model risk records often longer)

## Phase 14 — Records

- [ ] **14.1** Model documentation retained for lifetime of model + required period
- [ ] **14.2** Validation reports retained
- [ ] **14.3** Adverse-action letters retained
- [ ] **14.4** Fair-lending / fair-insurance test results retained
- [ ] **14.5** Incident and complaint records retained

---

## Summary dashboard

*Phases × items total ~78 checkpoints. Track done/in-progress/N/A in your GRC tool.*

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Consult qualified banking, consumer finance, insurance, and privacy counsel before relying on this checklist.
