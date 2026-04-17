# AI Data Governance Policy

**Company:** [COMPANY NAME]
**Version:** 1.0
**Effective date:** [DATE]
**Owner:** [DATA GOVERNANCE LEAD — often the Privacy Lead or AI Governance Lead]
**Next review:** [DATE + 12 months]

> **How to use this policy.** Apply it to any data used to train, fine-tune, evaluate, prompt, or evaluate AI systems at [COMPANY NAME]. Pair with the AI Acceptable Use Policy (user-facing rules), the AI Governance Framework (umbrella), and the AI System Inventory (tracking). Aligns with EU AI Act Art 10, ISO/IEC 42001 Annex A, NIST AI RMF MEASURE 2.6/2.10/2.11, and GDPR data protection principles.

---

## 1. Purpose

Data is the foundation of AI. Garbage-in problems show up as customer harms, regulatory findings, and reputational damage. This policy ensures that the data we use in AI systems is lawful, representative, high-quality, secure, and appropriately governed across its lifecycle.

## 2. Scope

This policy covers every category of data that interacts with an AI system at [COMPANY NAME]:

- **Training data** — used to initially train a model
- **Fine-tuning / customization data** — used to adapt a pre-trained model to our purposes
- **Evaluation data** — used to test model performance and safety
- **Prompt / context data** — included in inference requests (system prompts, retrieved context, user inputs)
- **Inference outputs** — produced by the model
- **Operational logs** — records of inputs, outputs, and decisions

The policy applies whether the data is produced by us, collected from users, licensed, purchased, scraped, synthetic, or received from a vendor.

## 3. Principles

1. **Lawful basis first.** Every use of data has a documented legal basis appropriate to the data type and jurisdiction.
2. **Purpose limitation.** Data is used only for the AI purpose it was authorized for.
3. **Minimization.** We use the least data needed for the purpose.
4. **Quality.** Data is relevant, representative, and sufficiently clean for the intended use.
5. **Bias awareness.** We actively evaluate and mitigate bias in data and outputs.
6. **Security.** Data is protected proportionate to its sensitivity at every stage.
7. **Transparency.** We document what data went into every model and keep those records accessible.
8. **Deletion and control.** Individuals can exercise rights; data has a retention schedule.

## 4. Roles and responsibilities

- **Data Governance Lead** — owns this policy and the data classification scheme
- **Privacy Lead** — handles personal-data rights, cross-border transfer, GDPR/CCPA/HIPAA intersections
- **Security Lead** — storage, access controls, encryption
- **AI Governance Lead** — ties the data program to the broader AI governance program
- **Data Owner (per data set)** — named individual accountable for one data set
- **Model Owner (per AI system)** — accountable for the data pipeline feeding their system

## 5. Data classes and permitted AI uses

Build on the green / yellow / red scheme in the AI Acceptable Use Policy.

| Class | Examples | Permitted in training | Permitted in fine-tuning | Permitted in prompts | Special controls |
| --- | --- | --- | --- | --- | --- |
| **Green — Public** | Public website content, publicly available regulations, published research | Yes (subject to licensing) | Yes | Yes | Citation where required |
| **Yellow — Internal** | Internal memos, non-sensitive business docs, anonymized aggregates | With [EXEC] approval | Yes | Yes in approved tools | No public exposure |
| **Red — Confidential/Personal** | Customer PII, employee records, financial, health, biometric, children's, IP | Only with documented lawful basis and risk assessment | Only with documented lawful basis | Only in approved tools with DPA/BAA | Data Protection Impact Assessment required; delete on request; encryption; logging |
| **Black — Restricted** | Trade secrets, PCI data without compensating controls, third-party data received under restrictive licenses | Generally no | Generally no | Generally no | Case-by-case with legal review |

Data sets that mix classes are treated at the highest class present.

## 6. Training data — sourcing and licensing

Before using any data set for training or fine-tuning:

- [ ] **Provenance**: Source, collection date, collection method documented
- [ ] **Rights**: Ownership / license / permissions confirmed; license covers the intended AI use
- [ ] **Scraped data**: Review against copyright and terms-of-service restrictions; document the analysis
- [ ] **Purchased data**: License terms reviewed; restrictions on AI use called out
- [ ] **Synthetic data**: Generation method documented; bias evaluation where relevant
- [ ] **User-contributed data**: Explicit consent / legitimate-interest basis; matches notice-to-users
- [ ] **Third-party data under NDA**: Confirmed permitted for training purposes; flow-down of confidentiality

For EU AI Act high-risk systems: additionally document data sources, provenance, annotation, labeling, cleaning, aggregation, and enrichment per Art 10. Summary of training data must be consistent with any public AI training data disclosure (California AB 2013 where applicable).

## 7. Personal data in AI

Personal data (directly or indirectly identifiable) in AI pipelines receives special treatment.

### Training on personal data

- Identify the lawful basis (GDPR Art 6; applicable U.S. framework)
- Prefer de-identification or pseudonymization where possible
- Minimize — use only attributes necessary for the model's intended purpose
- Consider whether training qualifies for a research exemption; document the analysis
- For special categories (GDPR Art 9 — health, biometric, race, religion, politics, etc.): additional safeguards and stronger basis
- For children's data: additional protections per applicable law (COPPA, GDPR Art 8, state children's privacy laws)

### Bias testing involving sensitive attributes

EU AI Act Art 10(5) permits processing of special categories of personal data for bias mitigation under strict conditions. If relied on:

- Document the necessity
- Apply technical and organizational safeguards
- Delete when no longer required
- Do not use this data to make decisions about individuals

### Rights handling

AI-embedded data is still subject to:

- Access requests
- Correction requests
- Deletion / erasure requests
- Portability requests
- Objection to processing

Maintain the ability to locate and act on personal data in:

- Training sets
- Fine-tuning sets
- Embeddings / vector databases
- Cached prompt/output logs
- Model outputs that are stored

If you can't honor a deletion request because the data is embedded in a trained model's weights, your policy must explain how you handle that (e.g., retraining cycles, differential deletion from derivative stores).

## 8. Prompt and context data

Prompts and retrieved context sent to AI systems are **data transfers** subject to this policy. In particular:

- Prompts may include personal data, confidential information, and IP — apply green/yellow/red rules
- System prompts stored in prompt management systems are company IP; protect accordingly
- Retrieved context (from RAG pipelines, customer data stores) must respect the source-data classification
- Cross-border transfer rules apply when prompts/context leave a jurisdiction

## 9. Output data

- Treat AI outputs as records subject to retention, review, and disclosure
- Be prepared for discovery — outputs are discoverable in litigation
- Consider whether outputs constitute personal data about an individual (they often do)
- Apply confidentiality markings to sensitive outputs
- For outputs influencing decisions about people, log the output, model version, inputs, and decision

## 10. Data quality and representativeness

Per the principles and EU AI Act Art 10 for high-risk systems:

- [ ] Training, validation, and test data sets are **relevant** to the intended purpose
- [ ] Data is **sufficiently representative** of the populations, contexts, and scenarios the model will operate in
- [ ] Errors, inconsistencies, and duplicates are identified and addressed
- [ ] Data is **complete** to the extent possible
- [ ] Data reflects the **geographical, contextual, behavioral, and functional setting** of the intended use
- [ ] Data governance methods are documented: design choices, collection, provenance, preparation, examination for bias, identification of gaps

## 11. Bias evaluation

Required for:

- Any AI system that makes or materially informs decisions about people
- Any high-risk system under Colorado AI Act or EU AI Act
- Any NYC LL 144 Automated Employment Decision Tool
- Any clinical decision support under Section 1557

Evaluations must:

- Measure performance across protected-class subgroups where lawful and feasible
- Report impact ratios for hiring-adjacent tools (LL 144 methodology)
- Document mitigations for any disparities
- Refresh on a defined cadence (annual at minimum; semi-annual for high-risk)

## 12. Access controls and security

- Access to training data on a need-to-know basis
- Encryption at rest and in transit for all yellow, red, and black class data
- Role-based access controls with SSO and MFA where feasible
- Audit logs for access to red and black class data
- Segregation of development, staging, and production data where practical
- Secure destruction of data at end of retention

## 13. Cross-border transfers

Before moving data across borders for AI purposes:

- Check residency and transfer rules for each data class in each jurisdiction
- Ensure Standard Contractual Clauses or equivalent are in place for EU data
- Document adequacy decisions and supplemental measures where needed
- Verify vendor hosting region and subprocessor geography

## 14. Retention

| Data category | Retention target |
| --- | --- |
| Training data sets | Duration of model use + [3 years] or per license terms |
| Fine-tuning artifacts | Duration of model use + [3 years] |
| Evaluation data and reports | [10 years] (aligns with EU AI Act Art 18) |
| Prompt / context logs with personal data | [90 days] default; longer where required (EU AI Act Art 12; HIPAA; sector rules) |
| Inference outputs for decisions about people | Duration of legitimate use + [3-7 years] per jurisdiction |
| Security logs | [12 months] minimum |

Retention schedules are maintained as a separate artifact and reviewed annually.

## 15. Records

Per data set and per model, maintain:

- Data Provenance Record (source, license, acquisition date, collector)
- Data Card (purpose, size, collection method, cleaning steps, bias checks, known limitations)
- Model Card (for models we produce)
- Model Usage Record (what data was used for training/fine-tuning)
- Bias Evaluation Reports
- Retention/deletion logs

These records are part of the technical documentation required under EU AI Act Art 11 and a foundational requirement for most assurance frameworks.

## 16. Violations

Violations may result in revocation of data access, disciplinary action, contract termination (for vendors), and regulatory reporting where required. Self-reported accidental violations are handled more leniently than concealed or repeated violations.

## 17. Review

This policy will be reviewed at least annually and whenever:

- A new applicable data or AI law takes effect
- Our data posture materially changes (new categories of data, new jurisdictions, new vendors)
- An incident reveals a gap

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Data governance intersects many bodies of law (privacy, IP, sector rules, AI-specific regulations). Consult qualified counsel before adopting this policy for your organization.
