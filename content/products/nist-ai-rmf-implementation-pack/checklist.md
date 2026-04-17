# NIST AI RMF — Implementation Checklist

**Company:** [COMPANY NAME]
**Scope:** ______________________________ (e.g., "all AI use enterprise-wide", "AI features of Product X")
**Completed by:** ______________________________
**Date:** ______________________________
**Review cadence:** Quarterly

> For each outcome, mark:
> - **I** — Implemented (with evidence)
> - **P** — Partially implemented
> - **N** — Not implemented
> - **N/A** — Not applicable (with one-line rationale)
>
> Record evidence (document name, link, owner) alongside each outcome. Evidence is the difference between a paper program and a real one.

---

## GOVERN — Culture of AI risk management

### GOVERN 1 — Policies, processes, and practices are in place and known

- [ ] 1.1 Legal/regulatory requirements affecting AI are understood, managed, and documented
- [ ] 1.2 Strategic and operational characteristics that pose AI risks are understood and documented
- [ ] 1.3 AI risk management processes are integrated with organizational risk management processes
- [ ] 1.4 Risk management process is established, documented, reviewed, and refined
- [ ] 1.5 Ongoing monitoring and periodic review of the AI risk management process is established
- [ ] 1.6 Mechanisms are in place to inventory AI systems and categorize them
- [ ] 1.7 Processes for decommissioning AI systems are in place

### GOVERN 2 — Roles, responsibilities, lines of communication

- [ ] 2.1 Roles and responsibilities for AI risk are formally designated, documented, and communicated
- [ ] 2.2 Sufficient skills, resources, budget, and time are allocated
- [ ] 2.3 Executive leadership is accountable for AI risk

### GOVERN 3 — Workforce diversity, equity, inclusion, accessibility

- [ ] 3.1 Decision-making related to mapping, measuring, and managing AI risks throughout the lifecycle is informed by a diverse team
- [ ] 3.2 Policies and procedures to define and differentiate roles include consideration of diversity and inclusion

### GOVERN 4 — Culture of consideration and communication

- [ ] 4.1 Organizational policies promote a safety-first mindset
- [ ] 4.2 Organizational teams document the risks and potential impacts of AI systems and incorporate feedback
- [ ] 4.3 Organizational practices enable and require personnel to report concerns and risks

### GOVERN 5 — External engagement

- [ ] 5.1 Processes for stakeholder engagement and input are established
- [ ] 5.2 Mechanisms for receiving feedback from communities and end users are established

### GOVERN 6 — Third-party risk

- [ ] 6.1 Policies and processes to address AI risks from third-party software, data, and systems
- [ ] 6.2 Contingency processes for handling failures or incidents in third-party AI systems

---

## MAP — Context and risks

### MAP 1 — Context

- [ ] 1.1 Intended purposes, potentially beneficial uses, context-specific laws, norms, and expectations are understood
- [ ] 1.2 Inter-disciplinary AI actors and stakeholders are identified and involved
- [ ] 1.3 The organization's mission and relevant goals for AI are understood
- [ ] 1.4 Business value, cost, benefit, risk, and tradeoffs are understood
- [ ] 1.5 Organizational risk tolerances are determined and documented
- [ ] 1.6 System requirements, including the purpose, are documented and understood

### MAP 2 — Categorization

- [ ] 2.1 AI system is categorized by tasks, methods, deployment setting, and intended users
- [ ] 2.2 Information about the AI system's knowledge limits is documented
- [ ] 2.3 Scientific integrity and methods, including TEVV (Test, Evaluation, Verification, Validation), are documented

### MAP 3 — Benefits vs costs

- [ ] 3.1 Potential benefits of intended AI system functionality and performance are examined
- [ ] 3.2 Potential costs, including non-monetary, of errors, failures, or misuse are examined
- [ ] 3.3 Targeted application scope is specified
- [ ] 3.4 Processes for operator and practitioner proficiency with AI system performance and trustworthiness are defined
- [ ] 3.5 Processes for human oversight are defined, assessed, and documented

### MAP 4 — Lifecycle risks

- [ ] 4.1 Approaches for mapping AI technology and legal risks of its components — including third-party technology — are in place
- [ ] 4.2 Internal risk controls for components of the AI system, including third-party, are identified and documented

### MAP 5 — Impacts

- [ ] 5.1 Likelihood and magnitude of each identified impact (both potentially beneficial and harmful) are identified and documented
- [ ] 5.2 Practices and personnel for supporting regular engagement with relevant AI actors and integrating feedback are in place

---

## MEASURE — Analyze, assess, benchmark, monitor

### MEASURE 1 — Methods and metrics

- [ ] 1.1 Approaches and metrics are identified and applied
- [ ] 1.2 Appropriateness of metrics and effectiveness of measurements is assessed
- [ ] 1.3 Internal experts conduct the testing, and external experts are consulted as appropriate

### MEASURE 2 — Trustworthy characteristics evaluated

- [ ] 2.1 Test sets, metrics, and details about the tools are documented
- [ ] 2.2 Evaluations involving human subjects meet applicable requirements and are representative
- [ ] 2.3 AI system performance or assurance criteria are measured qualitatively or quantitatively
- [ ] 2.4 Deployment is demonstrated valid, reliable, and calibrated
- [ ] 2.5 AI system is evaluated for safety in various conditions
- [ ] 2.6 Computational bias is evaluated; results are documented
- [ ] 2.7 AI system security and resilience — including attacks — are evaluated and documented
- [ ] 2.8 Risks associated with transparency and accountability are examined and documented
- [ ] 2.9 AI system is evaluated for explainability and interpretability
- [ ] 2.10 Privacy risks are evaluated and documented
- [ ] 2.11 Fairness and bias are evaluated; results are documented
- [ ] 2.12 Environmental impact and sustainability are evaluated and documented
- [ ] 2.13 Effectiveness of employed TEVV metrics and processes is evaluated and documented

### MEASURE 3 — Ongoing tracking

- [ ] 3.1 Approaches are in place to identify AI risks that cannot yet be measured
- [ ] 3.2 Risk tracking approaches for identified AI risks are considered
- [ ] 3.3 Feedback processes for end users and affected communities are in place

### MEASURE 4 — Feedback

- [ ] 4.1 Feedback from external sources is regularly collected and integrated
- [ ] 4.2 Measurement approaches for ongoing monitoring are in place
- [ ] 4.3 Measurable performance improvements are based on stakeholder and domain expert input

---

## MANAGE — Prioritize and act

### MANAGE 1 — Prioritize, respond, and manage

- [ ] 1.1 Significant AI risks are determined based on assessment and other analyses
- [ ] 1.2 AI risk treatment decisions are prioritized, documented, and carried out
- [ ] 1.3 Responses to AI risks that can't be mitigated or transferred are formally documented
- [ ] 1.4 Negative residual risks are documented

### MANAGE 2 — Maximize benefit, minimize harm

- [ ] 2.1 Resources required to manage AI risks are taken into account with existing resources
- [ ] 2.2 Mechanisms to sustain AI value to users are in place
- [ ] 2.3 Procedures to respond to and recover from previously unknown risks are in place
- [ ] 2.4 Mechanisms to supersede, disengage, or deactivate AI systems that demonstrate performance or outcomes inconsistent with intended use are in place

### MANAGE 3 — Third-party resources monitored

- [ ] 3.1 AI risks and benefits from third-party resources are monitored
- [ ] 3.2 Pre-trained models used for development are monitored for risks

### MANAGE 4 — Response and recovery

- [ ] 4.1 Post-deployment AI system monitoring plans are implemented
- [ ] 4.2 Mechanisms for capturing and evaluating the impact of AI risks during operation are in place
- [ ] 4.3 Incident response and recovery plans for AI systems are developed, documented, tested, and updated

---

## Gen AI Profile — additional outcomes

If you deploy or develop generative AI, additionally track:

- [ ] **G-1** Harmful bias in GenAI output is evaluated and mitigated
- [ ] **G-2** Confabulation (hallucination) rates are measured and documented
- [ ] **G-3** Data provenance and information integrity controls are in place
- [ ] **G-4** Human-AI interaction risks are assessed (overreliance, automation bias, manipulation)
- [ ] **G-5** CBRN information hazards are assessed and mitigated where applicable
- [ ] **G-6** Obscene, degrading, and/or abusive content controls are in place
- [ ] **G-7** Information security risks (prompt injection, jailbreak, model theft) are assessed and mitigated
- [ ] **G-8** Value chain and IP risks are tracked for training data and model components
- [ ] **G-9** Environmental impact of training and inference is measured

---

## Summary dashboard

| Function | # of outcomes | Implemented | Partial | Not implemented | N/A |
| --- | ---: | ---: | ---: | ---: | ---: |
| GOVERN | ~18 |  |  |  |  |
| MAP | ~14 |  |  |  |  |
| MEASURE | ~20 |  |  |  |  |
| MANAGE | ~13 |  |  |  |  |
| Gen AI Profile | 9 |  |  |  |  |

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Refer to the official NIST AI RMF publications for authoritative requirements.
