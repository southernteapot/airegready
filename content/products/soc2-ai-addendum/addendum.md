# SOC 2 — AI Controls Addendum

**Purpose:** An addendum that extends a standard SOC 2 control framework to cover AI-specific risks. Designed for service organizations that want to demonstrate AI controls to auditors and customers beyond the baseline Trust Services Criteria.

**Audience:** CISOs, compliance leads, and audit teams at service organizations pursuing or holding SOC 2 reports.

> **Note.** SOC 2 does not yet have universally defined "AI criteria" — the AICPA's Trust Services Criteria cover security, availability, processing integrity, confidentiality, and privacy. This addendum layers AI-specific controls onto those categories in a way audit firms can evaluate.

---

## 1. Mapping AI risk to Trust Services Criteria

| TSC | AI-specific areas |
| --- | --- |
| **Security (CC)** | Model theft, prompt injection, training data protection, AI vendor oversight |
| **Availability (A)** | Vendor model outages, degradation under load, circuit breakers |
| **Processing Integrity (PI)** | Model drift, hallucination controls, human review of outputs |
| **Confidentiality (C)** | Prompt / output logs containing sensitive content, vendor training on inputs |
| **Privacy (P)** | AI-specific DSAR fulfillment, consent for AI use of personal data |

## 2. Proposed AI control categories

Each control is numbered as an extension (e.g., CC1.1-AI) so it can be mapped into your auditor's workpapers.

### CC1 — Control environment

- **CC1.1-AI** Board / executive oversight of AI governance
- **CC1.2-AI** AI ethics / principles statement adopted
- **CC1.3-AI** Roles and responsibilities for AI clearly assigned (AI Governance Lead, Model Owners, etc.)

### CC2 — Communication and information

- **CC2.1-AI** AI policies communicated to workforce
- **CC2.2-AI** AI-specific training for relevant personnel
- **CC2.3-AI** AI-specific disclosures to customers (in DPA / trust center / product UI)

### CC3 — Risk assessment

- **CC3.1-AI** AI-specific risks included in enterprise risk assessment
- **CC3.2-AI** Periodic AI risk review and update
- **CC3.3-AI** New AI use cases go through an impact assessment before deployment

### CC4 — Monitoring activities

- **CC4.1-AI** Ongoing monitoring of AI systems: performance, drift, fairness
- **CC4.2-AI** Regular evaluation of AI controls (internal audit inclusion)
- **CC4.3-AI** Management review of AI posture on defined cadence

### CC5 — Control activities

- **CC5.1-AI** AI change management process
- **CC5.2-AI** AI vendor risk management program
- **CC5.3-AI** Segregation of duties in AI development and deployment

### CC6 — Logical and physical access

- **CC6.1-AI** Access controls on AI model weights, training data, prompts
- **CC6.2-AI** API key management for AI vendors
- **CC6.3-AI** Tenant isolation in multi-tenant AI features
- **CC6.4-AI** Controls against model extraction attacks

### CC7 — System operations

- **CC7.1-AI** AI incident detection and response (including prompt injection, data exfiltration)
- **CC7.2-AI** Backup and recovery for AI artifacts
- **CC7.3-AI** Capacity management for AI workloads and vendor rate limits

### CC8 — Change management

- **CC8.1-AI** AI model change management with testing, approval, and rollback
- **CC8.2-AI** Vendor-initiated model changes reviewed and communicated
- **CC8.3-AI** Material modifications trigger re-assessment (per EU AI Act / CAIA analogs)

### CC9 — Risk mitigation

- **CC9.1-AI** Vendor risk assessment for AI providers
- **CC9.2-AI** Continuous vendor monitoring
- **CC9.3-AI** Insurance coverage reviewed for AI exposure

### Availability (A)

- **A1.1-AI** AI vendor SLA tracking
- **A1.2-AI** Degraded-mode behavior defined (when AI unavailable)
- **A1.3-AI** Failover strategies for critical AI dependencies

### Processing Integrity (PI)

- **PI1.1-AI** Output validation for AI-generated content used in processing
- **PI1.2-AI** Hallucination / accuracy monitoring
- **PI1.3-AI** Human review triggers for low-confidence or high-stakes outputs
- **PI1.4-AI** Drift monitoring with thresholds

### Confidentiality (C)

- **C1.1-AI** Classification of data processed by AI (per Data Governance Policy)
- **C1.2-AI** Contractual commitment that AI vendors will not train on our data
- **C1.3-AI** Encryption of AI-related data in transit and at rest
- **C1.4-AI** Retention controls for prompt and output logs

### Privacy (P)

- **P1.1-AI** Notice of AI involvement in processing personal data
- **P1.2-AI** Consent mechanisms for AI uses requiring it
- **P1.3-AI** DSAR fulfillment covers AI artifacts (embeddings, logs, weights)
- **P1.4-AI** Automated decision-making notices and opt-outs

## 3. Evidence collection — what auditors want

For each control, typical evidence includes:

- **Policy**: written policy addressing the control
- **Procedure**: documented procedure for operating the control
- **Evidence of operation**: tickets, logs, change records, training completion, test results
- **Sampling**: auditor samples and tests

## 4. Gap analysis method

1. Start with your existing SOC 2 controls
2. Map AI-specific risks to each applicable TSC category
3. For each, decide whether existing controls cover the AI-specific concern
4. Where gaps exist, add an AI-specific control as numbered above
5. Document in your Statement of Applicability equivalent

## 5. Audit preparation

Prepare:

- An **AI controls supplement** to your SOC 2 narrative
- A **shared responsibility matrix** for AI vendors
- **Evidence pack** with logs, tickets, and documents
- **Key personnel availability** for interviews (AI Governance Lead, Model Owners, Privacy Lead)
- **AI System Inventory** sample

## 6. Customer trust impact

Enterprise buyers are asking AI questions in security reviews. A SOC 2 report that explicitly addresses AI gives you:

- Faster enterprise sales cycles
- Fewer one-off questionnaires
- Stronger differentiation vs. competitors with baseline SOC 2 only

## 7. Future direction

AICPA and other bodies are working on AI-specific assurance criteria. Expect dedicated AI attestation engagements to emerge. In the meantime, this addendum approach is the pragmatic path.

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice or assurance advice. Consult your SOC 2 audit firm for engagement-specific guidance.
