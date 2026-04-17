# AI Change Management Process

**Company:** [COMPANY NAME]
**Version:** 1.0
**Effective date:** [DATE]
**Owner:** [AI GOVERNANCE LEAD]
**Next review:** [DATE + 12 months]

> **How to use this process.** AI systems change continuously — models upgrade, data shifts, features expand. Uncontrolled changes produce regulatory exposure (material modifications under CAIA, EU AI Act), incidents (unexpected behavior), and dissatisfied users. This process defines how changes are proposed, reviewed, approved, implemented, and documented.

---

## 1. What counts as a "change"

A change to an AI system includes:

- **Model**: swap, upgrade, retrain, fine-tune, change vendor
- **Data**: new training data source, changed preprocessing, new feature inputs
- **Prompt / system prompt**: material updates
- **Tools / actions**: new capabilities for agentic systems
- **Guardrails**: changes to filters, refusal behavior, content policies
- **UX**: changes that affect user understanding (e.g., hiding AI disclosure)
- **Scope**: new user populations, new jurisdictions, new use cases
- **Integrations**: new upstream data sources or downstream consumers
- **Deployment**: scale changes, region changes, hosting changes

Not every change requires the same depth of review. Scale review to change type (§ 3).

## 2. Roles

- **Change proposer** — person requesting the change (business owner, engineer, product manager)
- **Technical owner** — implements
- **Business owner** — accountable
- **AI Review Committee** — approves material changes
- **Legal** — reviews regulatory implications for Tier 3 changes
- **Release manager** — coordinates implementation

## 3. Change classes

| Class | Definition | Review |
| --- | --- | --- |
| **Minor** | Bug fixes, typo corrections, non-behavioral refactors | Technical owner approval; logged |
| **Moderate** | New features, data source changes, prompt updates | AI Review Committee async review; impact assessment updated |
| **Material** | Any change that could meaningfully change model behavior, bias profile, or regulatory classification | Full AI Review Committee approval; impact assessment + bias test; EU AI Act Art 43(4) analysis; CAIA "material modification" trigger |
| **Prohibited** | Changes that would move the system into a prohibited category (EU AI Act Art 5, CAIA discrimination) | Not permitted |

## 4. Material modification — regulatory significance

Under EU AI Act, a **substantial modification** can trigger re-assessment and reclassification. Under CAIA, an **intentional and substantial modification** triggers a new impact assessment and may move the system into high-risk scope. Material-class changes in this process are designed to map to these regulatory concepts, with a conservative bias.

## 5. Change workflow

### 5.1 Proposal

Proposer submits a change request with:

- System affected
- Description of the change
- Motivation
- Expected impact on users / decisions / data
- Expected behavior differences
- Classification (minor / moderate / material)
- Target date

### 5.2 Classification review

Within [2] business days, AI Governance Lead (or delegate) confirms classification. If material, the change enters the full review track.

### 5.3 Impact assessment update (moderate/material)

Business owner updates the AI Impact Assessment. For material changes:

- Update risk analysis
- Update mitigations
- Update bias testing plan
- Identify affected user populations
- Map regulatory obligations

### 5.4 Testing

Before deployment, for moderate/material changes:

- [ ] Functional testing
- [ ] Performance benchmarking vs. baseline
- [ ] Bias evaluation (for material; required if any demographic impact possible)
- [ ] Red-team round (for material, customer-facing, or high-risk)
- [ ] Security testing
- [ ] Load testing

### 5.5 Approval

- **Minor**: technical owner + log
- **Moderate**: AI Governance Lead async
- **Material**: AI Review Committee meeting; minutes published
- **Executive Sponsor** approval required for changes affecting Tier 3 systems

### 5.6 User communication

Before material changes:

- Internal team notified
- Business owner communicates with downstream consumers
- Customer-facing change announcement drafted with legal review
- EU AI Act Art 13 instructions-for-use updated; deployer notice
- CAIA public statement updated if material

### 5.7 Deployment

- Staged rollout where feasible (canary, % of traffic, region by region)
- Rollback plan documented and tested
- Monitoring dashboards confirmed green before expanding rollout
- Kill switch verified

### 5.8 Post-deployment

- Monitoring reviewed daily for first week
- Compared to pre-change baseline
- Complaints/feedback reviewed
- Post-implementation review after 30 days for material changes
- AI System Inventory, Model/System Card, and Impact Assessment records updated

## 6. Vendor-initiated changes

Vendors upgrade their models. You must be ready.

### 6.1 Contract requirements

- Minimum notice period for material changes (target: 60-90 days)
- Change-log access
- Ability to stay on a prior version for a reasonable window

### 6.2 Monitoring

- Subscribe to vendor changelogs
- Follow vendor blog / release notes
- Relationship with vendor TAM or equivalent

### 6.3 Response

When a vendor announces a material change:

- [ ] Assess impact on our systems
- [ ] Run behavioral comparison tests
- [ ] Update Impact Assessments as needed
- [ ] Update documentation
- [ ] Notify customers if material
- [ ] Decide: upgrade now / wait / freeze on prior version

## 7. Emergency changes

For urgent changes (safety, security, critical business):

- Expedited approval by AI Governance Lead + Executive Sponsor
- Deployment with elevated monitoring
- Full documentation and committee retrospective within [5] business days

## 8. Change log

Maintain a per-system change log:

| Date | Version | Class | Summary | Approver | Rollout % | Rollback? |
| --- | --- | --- | --- | --- | --- | --- |

Retain for life of system + retention period per records policy.

## 9. Integration with governance

Change management is tightly linked to:

- **AI System Inventory** — updated with every change
- **Model / System Cards** — updated with material changes
- **Impact Assessment** — updated with material changes
- **Bias Testing Protocol** — triggered by material changes
- **Incident Response** — triggered if a change-induced incident occurs
- **Regulatory filings** — EU database updates; CAIA public statement updates

## 10. Training

- Engineers, PMs, and product leaders trained on classification rules
- Annual refresher
- Post-mortem-based training updates

## 11. Common mistakes

- Silent model upgrades without behavioral testing
- Prompt changes without recognizing they're changes
- Missing the material-modification threshold under EU AI Act / CAIA
- No rollback plan
- No user communication for customer-impacting changes
- Forgetting to update the Model Card / Impact Assessment

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice.
