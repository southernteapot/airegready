# AI System Retirement & Decommissioning Checklist

**System being retired:** ______________________________
**Business owner:** ______________________________
**Technical owner:** ______________________________
**Retirement date:** ______________________________
**Reason for retirement:** ☐ End of useful life  ☐ Replacement  ☐ Regulatory  ☐ Compliance failure  ☐ Vendor change  ☐ Cost  ☐ Other: ______________

> Use before retiring any AI system. Retirement is not just "turn it off" — data, records, dependencies, communications, and regulatory obligations may persist. Improper decommissioning creates compliance gaps, surprise bills, and orphaned data.

---

## Phase 1 — Announce

- [ ] **1.1** Retirement decision approved by AI Review Committee
- [ ] **1.2** Business owner and technical owner identified
- [ ] **1.3** Users notified of retirement date
- [ ] **1.4** Customers notified where customer-facing
- [ ] **1.5** Affected teams notified (support, sales, ops, legal)
- [ ] **1.6** Migration path announced if replacement exists

## Phase 2 — Dependencies

- [ ] **2.1** Systems integrated with this AI identified
- [ ] **2.2** Downstream consumers notified
- [ ] **2.3** Upstream data sources updated to stop feeding the system
- [ ] **2.4** API callers migrated or sunsetted
- [ ] **2.5** Webhook/callback configurations removed

## Phase 3 — Data handling

- [ ] **3.1** Inventory of data held by the system:
  - Training data
  - Fine-tuning artifacts
  - Prompt/context logs
  - Output logs
  - User / customer data in embeddings / vector stores
  - Model weights
- [ ] **3.2** For each, decide: export / archive / delete
- [ ] **3.3** Exports delivered to legitimate successors
- [ ] **3.4** Archives stored per records retention policy
- [ ] **3.5** Deletions executed (production + backups + vendor-side)
- [ ] **3.6** Certificates of deletion obtained from vendors
- [ ] **3.7** Personal data deletion honors outstanding data subject requests

## Phase 4 — Customer data

- [ ] **4.1** Customer contracts reviewed for data-return obligations
- [ ] **4.2** Customer data exports delivered
- [ ] **4.3** Customer data deleted from vendor systems
- [ ] **4.4** Customer notification of deletion
- [ ] **4.5** Customer DPAs honored (retention timelines)

## Phase 5 — Vendor offboarding

- [ ] **5.1** Vendor contract reviewed for termination terms
- [ ] **5.2** Final invoice paid
- [ ] **5.3** API keys / credentials revoked
- [ ] **5.4** SSO / OAuth integrations removed
- [ ] **5.5** Vendor data deletion confirmed
- [ ] **5.6** Vendor subprocessor list updated (removed from active)
- [ ] **5.7** Contract archived for records retention

## Phase 6 — Infrastructure

- [ ] **6.1** Model artifacts archived or deleted
- [ ] **6.2** Compute resources decommissioned
- [ ] **6.3** Secrets rotated / deleted
- [ ] **6.4** Network rules / firewall rules updated
- [ ] **6.5** Monitoring and alerts retired
- [ ] **6.6** DNS records cleaned up

## Phase 7 — Records retention

- [ ] **7.1** Models, impact assessments, bias tests, incident records, complaint log retained per policy
- [ ] **7.2** EU AI Act Art 18 ten-year retention considered for high-risk records
- [ ] **7.3** Sector rules checked (HIPAA, financial records, employment)
- [ ] **7.4** Legal-hold check completed

## Phase 8 — Governance updates

- [ ] **8.1** AI System Inventory updated to "Retired" with retirement date
- [ ] **8.2** AI Risk Register updated
- [ ] **8.3** Vendor risk management records updated
- [ ] **8.4** Training materials that referenced the system updated
- [ ] **8.5** Public website statements updated (CAIA public statement, AI Act registrations, etc.)

## Phase 9 — Regulatory

- [ ] **9.1** EU AI Act — if high-risk and registered in the EU database, update registration
- [ ] **9.2** CAIA public statement updated
- [ ] **9.3** Sector-specific notifications (insurance DOI, healthcare, etc.)
- [ ] **9.4** Customer / counterparty notifications as required by contract

## Phase 10 — Communications

- [ ] **10.1** Final user / customer confirmation that system has been retired
- [ ] **10.2** FAQ prepared for questions about where the function has gone
- [ ] **10.3** Redirect in place if UI / URL was customer-facing
- [ ] **10.4** Internal announcement of completion

## Phase 11 — Post-retirement follow-up (30 / 90 days)

- [ ] **11.1** Verify no residual calls or traffic to the system
- [ ] **11.2** Verify vendor billing stopped
- [ ] **11.3** Confirm deletion certifications received
- [ ] **11.4** Confirm any contractual post-termination obligations fulfilled
- [ ] **11.5** Update lessons-learned for next retirement

## Phase 12 — Special cases

### If retirement follows an incident

- [ ] **12.1** Incident record cross-referenced
- [ ] **12.2** Regulator notifications complete
- [ ] **12.3** Affected users received final communication
- [ ] **12.4** Board informed

### If retired due to compliance failure

- [ ] **12.5** Legal review of retention obligations for evidence
- [ ] **12.6** Coordination with any ongoing regulator inquiry

### If replaced by a new system

- [ ] **12.7** Migration complete and verified
- [ ] **12.8** New system inventory entry created
- [ ] **12.9** Impact assessment done on new system before production
- [ ] **12.10** Training updated

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice.
