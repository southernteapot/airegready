# AI Data Processing Agreement (DPA) — Template

**Effective date:** [DATE]
**Controller:** [CUSTOMER NAME] ("Controller" or "Customer")
**Processor:** [VENDOR NAME] ("Processor" or "Vendor")
**Agreement:** This DPA is incorporated into the Master Services Agreement between the parties dated [DATE] ("Agreement")

> **How to use this template.** A processing-only DPA specifically adapted for AI-enabled products. Use in addition to or in place of generic DPAs where AI-specific provisions matter. Designed to satisfy GDPR Art 28, UK GDPR, and common CCPA "service provider" / "contractor" requirements. Have counsel review before use.

---

## 1. Definitions

- **"Personal Data"** has the meaning in GDPR / UK GDPR / CCPA-CPRA, as applicable.
- **"AI Features"** means the components of Processor's services that use machine learning or generative AI.
- **"Training"** means any use of Personal Data to develop, fine-tune, or improve a machine-learning model.
- **"Subprocessor"** means any third party that Processes Personal Data on Processor's behalf.
- **"Applicable Data Protection Law"** means GDPR, UK GDPR, CCPA-CPRA, and other data protection law applicable to the parties' processing under this DPA.

## 2. Nature and purpose of processing

- Processor will Process Personal Data on behalf of Controller solely to provide the Services described in the Agreement, including the AI Features.
- The duration, type of Personal Data, categories of Data Subjects, and specific processing activities are described in **Annex A**.

## 3. Controller and Processor roles

- Controller determines the purposes and means of Processing and provides documented instructions
- Processor Processes Personal Data only on Controller's documented instructions
- Processor immediately informs Controller if Processor believes an instruction violates Applicable Data Protection Law

## 4. No training on Controller Data — default commitment

Processor will not, and will not permit any Subprocessor to, use Controller Personal Data to train, fine-tune, or improve any model that is or may be made available to other customers or published, except where:

(a) Controller gives prior written consent to a specified training use; or
(b) The processing uses data that has been de-identified to the GDPR Art 26 / CCPA standard prior to the training.

Any Processor opt-in training mechanism must be configurable at Controller-tenant level.

## 5. Confidentiality

Processor will ensure that persons authorized to Process Personal Data are under a duty of confidentiality.

## 6. Security

Processor will implement appropriate technical and organizational measures to protect Personal Data, including:

- Encryption at rest and in transit
- Access controls with MFA
- Audit logging
- Regular vulnerability and penetration testing
- Personnel security and training
- Incident response processes
- Specific AI security controls: prompt-injection defenses, model-access controls, training-data isolation, evaluation of AI-specific attack vectors

Processor's security measures as of the Effective Date are summarized in **Annex B**. Processor may update security measures as long as the level of protection is not materially reduced.

## 7. Subprocessors

- Processor may engage Subprocessors subject to a written agreement imposing obligations no less protective than this DPA
- Processor maintains a current list of Subprocessors in **Annex C**
- Processor will notify Controller of any addition or replacement of a Subprocessor at least 30 days before the change, with Controller's right to object on reasonable data-protection grounds
- Processor remains responsible for its Subprocessors' performance

## 8. Data subject rights

Processor will, taking into account the nature of the Processing:

- Provide reasonable assistance to Controller in fulfilling Data Subject requests (access, rectification, erasure, restriction, portability, objection)
- Promptly forward any Data Subject request it receives directly to Controller
- Support deletion of Personal Data from training, fine-tuning, and embeddings / vector indices as technically feasible; where not feasible, describe the limitations and alternatives (e.g., retraining cycles, differential deletion)

## 9. Data protection impact assessments

Processor will provide reasonable assistance to Controller in its data protection impact assessments, including providing information about the AI Features' architecture, data flows, risks, and mitigations.

## 10. Data breach notification

- Processor will notify Controller without undue delay after becoming aware of a Personal Data breach, and no later than [24 / 48 / 72] hours
- Notice will include nature, categories, approximate numbers, likely consequences, and measures taken or proposed
- Processor will cooperate with Controller in notification obligations to supervisory authorities and Data Subjects

## 11. International transfers

For transfers of EU / UK / Swiss Personal Data to countries without adequacy:

- Parties rely on Standard Contractual Clauses (SCCs) incorporated by reference in **Annex D**
- Processor has conducted a transfer impact assessment and will cooperate with Controller on supplementary measures if the importer's jurisdiction presents heightened risk

## 12. Processor audits

- Processor will make available information necessary to demonstrate compliance
- Processor will allow for and contribute to audits (including inspections) conducted by Controller or another auditor mandated by Controller, on reasonable notice, no more than once per year (except following an incident)
- In lieu of on-site inspection, Processor may offer current SOC 2 Type II, ISO 27001, or equivalent certification reports

## 13. AI-specific transparency

Processor will provide Controller, upon request, with reasonable information about the AI Features necessary for Controller's compliance with its own obligations under law (including EU AI Act, Colorado AI Act, sector rules), including:

- Model identity and version
- Intended purposes and known limitations
- Training data summary
- Safety and bias testing results
- Notice of material changes that may affect Controller's use
- Summary of serious incidents relevant to Controller's processing

## 14. Return and deletion

Upon expiration or termination of the Agreement, Processor will, at Controller's choice:

- Return Personal Data to Controller in a common format, or
- Delete Personal Data from production systems within [30] days and from backups within [90] days, subject to legal hold or retention obligations

Processor will certify deletion upon request.

## 15. Liability and indemnity

Liability under this DPA is subject to the liability provisions of the Agreement, except that nothing limits a party's liability for its own willful misconduct, gross negligence, or breach of Sections 4 (training), 7 (subprocessors), 11 (international transfers), or applicable privacy law obligations.

## 16. Order of precedence

In case of conflict between this DPA and the Agreement, this DPA prevails on Personal Data processing matters.

## 17. Changes to Applicable Law

If Applicable Data Protection Law changes materially, the parties will negotiate in good faith to amend this DPA accordingly.

---

## Annex A — Processing description

- **Subject matter and duration**: per the Agreement
- **Nature and purpose**: [DESCRIBE]
- **Types of Personal Data**: [LIST, e.g., name, email, user-generated content, etc.]
- **Special categories** (if any): [LIST]
- **Categories of Data Subjects**: [LIST]
- **Retention**: per the Agreement

## Annex B — Security measures

[Processor's current technical and organizational measures summary]

## Annex C — Subprocessors

| Subprocessor | Service | Location | Link to their security program |
| --- | --- | --- | --- |
|  |  |  |  |

## Annex D — Standard Contractual Clauses

[Incorporate applicable SCCs or UK IDTA; state selected module(s)]

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Have qualified privacy counsel review and adapt before use.
