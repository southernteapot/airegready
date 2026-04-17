# GDPR ↔ EU AI Act — Crosswalk

A working map between GDPR and the EU AI Act. For organizations subject to both — which is most companies deploying AI in the EU.

> **Purpose.** The GDPR and EU AI Act are distinct but overlapping regimes. Smart compliance programs treat them as one coherent program with two sets of deliverables, not two separate programs. This crosswalk identifies where obligations align, where they diverge, and how to satisfy both without duplicating effort.

---

## 1. Big-picture differences

| Dimension | GDPR | EU AI Act |
| --- | --- | --- |
| **Object of regulation** | Processing of personal data | AI systems (regardless of personal data) |
| **Key actors** | Controllers and Processors | Providers, Deployers, Importers, Distributors, Authorized Representatives |
| **Key trigger** | Any personal data processing of EU residents | AI system placed on EU market, put into service in EU, or output used in EU |
| **Risk approach** | Risk-based, DPIA for high-risk processing | Four-tier (prohibited, high-risk, limited-risk, minimal-risk) |
| **Enforcement** | Data Protection Authorities; fines up to €20M or 4% | Market surveillance authorities; EU AI Office for GPAI; fines up to €35M or 7% for prohibited uses |
| **Key documents** | Records of processing, DPIAs, DPA contracts | Technical documentation, risk management, instructions for use, conformity assessment, FRIA |

## 2. Where they overlap — integrate, don't duplicate

### 2.1 Risk assessments

- **GDPR Art 35 — DPIA**: required for high-risk processing of personal data
- **EU AI Act Art 27 — FRIA**: required for certain deployers of high-risk AI

For a high-risk AI system processing personal data, both apply. Run them together:

- DPIA + FRIA in a combined document
- Explicitly cover fundamental rights (FRIA) and data protection (DPIA)
- Coordinate with DPAs or supervisory authorities where statute requires consultation

### 2.2 Transparency and information

- **GDPR Art 13/14**: information to data subjects
- **EU AI Act Art 50**: transparency for limited-risk systems (chatbots, deepfakes)
- **EU AI Act Art 13**: transparency to deployers (for high-risk AI providers)
- **EU AI Act Art 26(11)**: deployer notice to natural persons subject to high-risk AI decisions
- **EU AI Act Art 86**: right to explanation for affected persons

Build notice pipelines that satisfy all three. GDPR notice language + AI-specific disclosure language.

### 2.3 Security

- **GDPR Art 32**: appropriate security measures
- **EU AI Act Art 15**: accuracy, robustness, cybersecurity for high-risk AI

Security programs should cover both regimes. Common controls: encryption, access controls, logging, incident response.

### 2.4 Incidents

- **GDPR Art 33/34**: personal data breach notification to supervisory authority (72h) and data subjects where high risk
- **EU AI Act Art 73**: serious incident reporting by providers (within 15 days; 2 days for widespread or death; 10 days for critical-infrastructure)

Incident response must track both clocks when an incident is both a personal data breach and an AI serious incident.

### 2.5 Records

- **GDPR Art 30**: records of processing activities (ROPA)
- **EU AI Act Art 11 + Annex IV**: technical documentation for high-risk AI; Art 12 logs; Art 18 retention of QMS records (10 years)

Keep a single source of truth where possible. AI System Inventory can tie both together.

### 2.6 Data governance

- **GDPR Art 5**: lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity & confidentiality, accountability
- **EU AI Act Art 10**: data and data governance for high-risk AI (relevance, representativeness, error-free to the extent possible, quality management)

AI data governance should explicitly satisfy both. Bias mitigation processing of special category data (Art 10(5)) requires GDPR Art 9 analysis.

### 2.7 Automated decision-making and profiling

- **GDPR Art 22**: right not to be subject to solely automated decisions with legal / similarly significant effects; exceptions; right to human intervention
- **EU AI Act Art 26(11)**: deployer informs natural persons; Art 86: right to explanation
- **EU AI Act Art 14**: human oversight for high-risk AI

Humans-in-the-loop design + notice language must satisfy both.

## 3. Where they differ — don't assume overlap

### 3.1 Scope of "personal data"

GDPR applies only where personal data is processed. EU AI Act applies regardless — an AI system that doesn't process personal data can still be high-risk (e.g., safety components, machinery, critical infrastructure).

### 3.2 Roles

GDPR's Controller/Processor model is different from AI Act's Provider/Deployer model. The same entity can be:

- Controller under GDPR **and** Provider under AI Act (for their own AI product with personal data)
- Controller under GDPR **and** Deployer under AI Act (for a purchased AI that uses personal data)
- Processor under GDPR **and** Deployer or Provider under AI Act depending on activity
- Combinations

Map role assignments explicitly per use case.

### 3.3 Conformity assessment and CE marking

- **GDPR**: no CE marking; accountability is demonstrated via ROPA, DPIA, policies
- **EU AI Act**: conformity assessment required for high-risk; CE marking and EU declaration; EU database registration

Budget for the AI Act's bespoke requirements.

### 3.4 Training data

- **GDPR**: lawful basis for processing training data; purpose limitation
- **EU AI Act Art 10**: representativeness, quality, bias evaluation — separate and additional requirements

### 3.5 General-purpose AI (GPAI)

The AI Act has separate provisions for GPAI models (Ch V), including systemic-risk obligations. GDPR has no analog; GPAI providers still have GDPR obligations if personal data is in training.

## 4. Practical integration strategies

### 4.1 Combined DPIA / FRIA template

A single template that:

- Scope (both regimes)
- Systems and processing (both)
- Lawful basis (GDPR) and necessity (AI Act)
- Risks to data protection (GDPR) and fundamental rights (AI Act)
- Mitigations
- Residual risk
- Approvals
- Supervisory consultation where required

### 4.2 Unified incident response

- Detect → triage → contain → investigate → notify → resolve
- Notification matrix lists GDPR (72h to DPA, data subjects), AI Act Art 73 (15d/2d/10d to market surveillance), and sector rules
- Communications templates for each audience

### 4.3 One AI System Inventory with both tags

Every system gets fields for:

- GDPR Controller / Processor role
- EU AI Act classification and role
- Personal data touchpoints
- Risk tier
- Applicable DPIAs, FRIAs, ROPA entries

### 4.4 Unified training data governance

Data governance policies should satisfy GDPR Art 5-6 and AI Act Art 10. One policy, two sections.

### 4.5 One board report

Quarterly report covers both regimes. Executives need the composite picture, not two parallel reports.

## 5. Interaction with other EU rules

Plan for interactions with:

- **Digital Services Act (DSA)** — for platforms
- **Digital Markets Act (DMA)** — for gatekeepers
- **ePrivacy Directive / ePrivacy Regulation** — cookies, marketing
- **Data Act** — B2B data sharing and access
- **Data Governance Act** — data intermediaries and altruism
- **Cyber Resilience Act** — products with digital elements
- **NIS2** — critical sectors cybersecurity

Each has its own touchpoints with AI. Keep a master regulatory map.

## 6. Supervisory authorities

- **GDPR**: one-stop-shop through lead DPA for cross-border processing
- **EU AI Act**: Member State market surveillance authority + EU AI Office for GPAI

Expect some overlap where AI use involves personal data; both authorities may have jurisdiction.

## 7. Documentation workspace

Recommended set of artifacts to run both programs:

- AI System Inventory (with both GDPR and AI Act metadata)
- Combined DPIA / FRIA template
- Records of Processing Activities (Art 30 GDPR)
- Technical documentation per Annex IV (AI Act)
- Quality management system docs (Art 17 AI Act)
- Policies: AI Acceptable Use, Data Governance, Privacy
- Incident register (with GDPR + AI Act metadata)
- DPAs + SCCs for vendors
- Public-facing disclosures (privacy notice, AI statements)
- Training records (GDPR + AI literacy per Art 4 AI Act)

## 8. Common traps

- Running parallel programs that don't share artifacts
- Missing the AI Act's non-personal-data obligations because the privacy team scoped only personal data
- Missing GDPR data-subject rights in AI contexts (embeddings, model memorization)
- Assuming a DPIA alone satisfies FRIA requirements
- Misclassifying vendors as Processors when they are also AI Providers
- Forgetting the EU AI Act's own lawful-basis implications for bias testing with special category data (Art 10(5))

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. The EU AI Act is still in implementation; implementing acts and harmonized standards continue to evolve. Consult qualified EU counsel.
