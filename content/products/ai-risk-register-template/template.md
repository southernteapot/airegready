# AI Risk Register — Template

**Company:** [COMPANY NAME]
**Register owner:** [AI GOVERNANCE LEAD / RISK OFFICER]
**Cadence:** Reviewed quarterly by the AI Review Committee; updated continuously

> **How to use this template.** The Risk Register is the living ledger of identified AI risks and their management. It sits alongside the AI System Inventory (what we have) and the Impact Assessment records (per-system risk documentation). This register aggregates across systems and surfaces enterprise-level risks.

---

## Field schema

### Identification

| Field | Description |
| --- | --- |
| **Risk ID** | Unique identifier (e.g., RISK-AI-001) |
| **Title** | Short name |
| **Description** | 1-2 sentence plain-language description |
| **Category** | Safety / Security / Privacy / Bias / Legal/Regulatory / Reputation / Operational / Financial / Strategic |
| **Source** | Impact assessment / red team / audit / incident / complaint / environment scan |
| **Identified date** | When the risk was added |

### Systems affected

| Field | Description |
| --- | --- |
| **Systems** | References to AI System Inventory IDs |
| **Jurisdictions** | Where risk manifests |
| **Populations affected** | Customers / employees / public / specific subgroups |

### Assessment

| Field | Description |
| --- | --- |
| **Inherent likelihood** | 1–5 |
| **Inherent impact** | 1–5 |
| **Inherent risk score** | Likelihood × Impact |
| **Controls** | Existing mitigations |
| **Residual likelihood** | After controls |
| **Residual impact** | After controls |
| **Residual risk score** | After controls |
| **Risk appetite** | Accept / Treat / Transfer / Avoid |
| **Status** | Open / Monitoring / Mitigated / Closed |

### Ownership

| Field | Description |
| --- | --- |
| **Risk owner** | Named individual |
| **Treatment owner** | Named individual (if different) |
| **Review cadence** | Monthly / Quarterly / Annually |
| **Last review date** | |
| **Next review date** | |

### Treatment

| Field | Description |
| --- | --- |
| **Treatment plan** | Actions to reduce risk |
| **Target residual score** | What we're aiming for |
| **Due date** | |
| **Dependencies** | Other risks or actions |
| **Budget / effort** | |

### Escalation and reporting

| Field | Description |
| --- | --- |
| **Escalation level** | Routine / Committee / Executive / Board |
| **Last reported** | |
| **Linked incidents** | Incident record references |
| **Linked regulator actions** | If any |
| **Disclosures made** | Public statements, board reports, customer notices |

---

## Starter risks (examples)

Delete and replace with your actual risks.

| ID | Title | Category | Systems | Inherent Likelihood | Inherent Impact | Residual L × I | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RISK-AI-001 | Hallucinated citations in customer-facing content | Accuracy | AIS-001 (support chatbot) | 4 | 3 | 2 × 3 | Content Lead | Monitoring |
| RISK-AI-002 | Disparate impact in resume screener | Bias | AIS-002 | 3 | 5 | 2 × 3 | HR Lead | Treatment in progress |
| RISK-AI-003 | Vendor model deprecation on 60-day notice | Operational | AIS-001, AIS-003 | 3 | 3 | 2 × 2 | CTO | Monitoring |
| RISK-AI-004 | Prompt injection from untrusted documents | Security | AIS-004 (RAG system) | 4 | 4 | 2 × 3 | Security Lead | Treatment |
| RISK-AI-005 | PHI leakage via LLM logs | Privacy | AIS-005 (clinical summarizer) | 2 | 5 | 1 × 4 | Privacy Lead | Monitoring |
| RISK-AI-006 | Colorado AI Act material-modification trigger missed | Regulatory | High-risk systems | 3 | 4 | 2 × 3 | AI Governance Lead | Monitoring |
| RISK-AI-007 | Shadow AI use by marketing team | Governance | Cross-cutting | 4 | 3 | 2 × 2 | AI Governance Lead | Treatment |
| RISK-AI-008 | Over-reliance on AI output by customer support agents | Operational / Quality | AIS-001 | 3 | 3 | 2 × 3 | Support Lead | Monitoring |

---

## Scoring rubric

### Likelihood

| Score | Meaning |
| --- | --- |
| 1 | Rare — would be surprising |
| 2 | Unlikely — plausible but not expected |
| 3 | Possible — even odds |
| 4 | Likely — expected over a year |
| 5 | Almost certain — expected in the quarter |

### Impact

| Score | Meaning |
| --- | --- |
| 1 | Negligible — minor inconvenience |
| 2 | Minor — limited operational disruption |
| 3 | Moderate — material harm to individuals / customers / business |
| 4 | Major — regulatory violation, public incident, significant financial |
| 5 | Severe — systemic harm, existential threat, death / injury |

## Escalation rules

- **Residual ≥ 15** → Executive Sponsor attention immediately
- **Residual ≥ 12** → Monthly committee review
- **Residual ≥ 8** → Quarterly committee review
- **Residual < 8** → Annual review

## Operational notes

- Keep the register in a format your risk team already uses (GRC tool, spreadsheet, Notion database)
- Tie items to Impact Assessments, Incident records, and Audit findings
- Review after every incident; review when new systems ship; review when regulation changes materially
- Record closure rationale for any risk moved to Closed

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice.
