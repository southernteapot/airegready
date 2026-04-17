# AI System Card — Template

**System name:** ______________________________
**Version:** ______________________________
**Owner:** ______________________________
**Deployed in:** ______________________________
**Tier:** ☐ 1  ☐ 2  ☐ 3

> **What this is.** Where a Model Card describes a specific model, a **System Card** describes an entire AI system — the model(s) combined with retrieval, tools, guardrails, UX, humans-in-the-loop, and monitoring — in the context of how it's actually deployed. System Cards are more useful to deployers and end users than Model Cards alone because systems, not models, produce outcomes.

---

## 1. System overview

- **Name, version, deploy date**:
- **Purpose** (plain-language):
- **Where deployed** (product, feature, workflow):
- **Users** (roles, numbers, geography):
- **Affected persons** (if system makes decisions about people):

## 2. System architecture

Describe what's inside the system:

- **Model(s) used** (with model card references):
- **Retrieval / RAG** sources and indexing strategy:
- **Tools available to the system** (APIs, databases, search, code execution, etc.):
- **Guardrails** (content filters, policy classifiers, safety layers):
- **UX / UI** and how users interact:
- **Humans in the loop** and their authority:
- **Logging, monitoring, and analytics**:

Include a diagram if possible.

## 3. Data flows

- **Inputs** (what the user / upstream system provides):
- **Augmentation** (what retrieved context / tools add):
- **Processing** (where the model runs, what jurisdictions, what subprocessors):
- **Outputs** (what the system returns, to whom):
- **Retention** (of prompts, outputs, logs):

## 4. Intended and unintended uses

- **Intended uses**:
- **Known misuse vectors**:
- **Rate limits / abuse controls**:
- **What the system explicitly refuses**:

## 5. Behavior guarantees and limits

- **Performance levels** (with metrics and evaluation methodology):
- **Known failure modes**:
- **Out-of-scope behavior**:
- **Drift monitoring and triggers**:

## 6. Human oversight design

- **Where humans are in the loop**:
- **What authority humans have** (approve, reject, override, audit):
- **What the UI shows the human reviewer**:
- **How humans are trained and qualified**:
- **Kill switch**:

## 7. Transparency

- **User-facing disclosure**: what users see about the AI's involvement
- **Affected-person notice** (for decisions about people):
- **Adverse-action explanation**:
- **Appeal mechanism**:
- **Regulatory disclosures**: EU AI Act Art 50, CAIA public statement, etc.

## 8. Security

- **Threat model**:
- **Defenses** against prompt injection, jailbreaks, data exfiltration, model extraction, tool abuse:
- **Authentication and access control**:
- **Incident response**:

## 9. Safety

- **Safety categories in scope** (CSAM, self-harm, illegal advice, CBRN, etc.):
- **Red-team results** (summary; link to full report):
- **Safety monitoring in production**:

## 10. Privacy

- **Personal data handled**:
- **Lawful bases**:
- **Data subject rights fulfillment**:
- **Retention**:

## 11. Fairness

- **Protected classes relevant**:
- **Bias testing methodology**:
- **Latest test results** (date; link to Bias Testing Report):
- **Mitigations**:
- **Residual disparities**:

## 12. Governance and roles

- **Business owner**:
- **Technical owner**:
- **Review committee approval**:
- **Last review date / next review date**:
- **Retirement criteria**:

## 13. Change log

| Version | Date | Changes | Author |
| --- | --- | --- | --- |

## 14. Regulatory classifications

- **EU AI Act**:
- **Colorado AI Act**:
- **Sector rules**:
- **State laws** (California, Texas, NYC, Illinois, etc.):

## 15. Support and contact

- **How users report issues**:
- **Support SLA**:
- **Incident response contact**:

---

## Disclaimer

This document is educational only. It is not legal advice.
