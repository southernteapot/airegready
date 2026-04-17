# AI in Healthcare — Readiness Checklist

**Organization:** [COMPANY / COVERED ENTITY NAME]
**Completed by:** ______________________________
**Date:** ______________________________
**Role(s):** ☐ Covered Entity  ☐ Business Associate  ☐ Device Manufacturer  ☐ CDS Vendor  ☐ Other: ______________

> Work through the sections that apply to your role(s). Mark each item Done / In progress / Not applicable with evidence.

---

## Phase 1 — Scope and inventory

- [ ] **1.1** AI System Inventory includes every system that processes PHI, touches clinical decisions, or serves patients
- [ ] **1.2** Each system classified by role: Covered Entity use / Business Associate / Device candidate / CDS-exempt / Administrative
- [ ] **1.3** Each system classified by HIPAA exposure (PHI ingested, PHI produced, neither)
- [ ] **1.4** Each system classified by FDA device status: device / CDS exempt / not a device — with documented rationale
- [ ] **1.5** Each system classified by Section 1557 exposure (uses protected-class variables: yes / no / unknown)
- [ ] **1.6** Business owner and clinical owner named for each system

## Phase 2 — HIPAA — Privacy Rule

- [ ] **2.1** Notice of Privacy Practices reviewed; updated to cover AI-related uses (training, decisions, analytics)
- [ ] **2.2** Uses and disclosures of PHI for AI purposes mapped to a permitted basis (TPO, authorization, de-identification, research, limited data set)
- [ ] **2.3** Training on PHI: documented basis (authorization, de-identification, research protocol with IRB, or applicable waiver)
- [ ] **2.4** Minimum necessary principle applied to AI inputs
- [ ] **2.5** Patient rights workflows cover AI-generated content (access, amendment, accounting of disclosures as applicable)
- [ ] **2.6** De-identification methodology documented (Safe Harbor or Expert Determination with expert report)

## Phase 3 — HIPAA — Security Rule

- [ ] **3.1** Risk analysis current and includes AI systems
- [ ] **3.2** Technical safeguards reviewed for AI: access control, audit controls, integrity, transmission security, encryption
- [ ] **3.3** Administrative safeguards: policies, training, incident response, BCP, sanctions cover AI use
- [ ] **3.4** Physical safeguards intact for any on-prem or edge AI
- [ ] **3.5** Workforce training updated to cover AI acceptable use
- [ ] **3.6** Audit logs for AI systems retained per policy

## Phase 4 — HIPAA — Breach Notification

- [ ] **4.1** Breach notification procedure accounts for AI-system incidents (prompt leaks, model leaks, vendor compromises)
- [ ] **4.2** 60-day outer clock wired to incident response
- [ ] **4.3** State breach notification rules mapped for all states where patients reside
- [ ] **4.4** Notification templates drafted and reviewed by counsel

## Phase 5 — Business Associate Agreements

- [ ] **5.1** BAA on file for every vendor processing PHI
- [ ] **5.2** BAA addresses AI-specific terms:
  - No use of PHI for training of models that serve other customers
  - Subprocessor flow-down
  - Deletion on termination
  - Audit rights
  - Breach notification clocks
  - Permitted uses align with intended AI function
- [ ] **5.3** BAA gap list for new AI vendors maintained; deadlines to close
- [ ] **5.4** BAAs reviewed at renewal for updated AI considerations

## Phase 6 — FDA — Device classification

- [ ] **6.1** Intended use statement documented for every AI system that could be device-adjacent
- [ ] **6.2** CDS exemption analysis performed, including the "independent review" standard, with a defensible conclusion
- [ ] **6.3** For devices: pathway selected (510(k) / De Novo / PMA) and plan documented
- [ ] **6.4** Quality System Regulation (21 CFR 820 / Quality Management System Regulation) alignment mapped
- [ ] **6.5** Good Machine Learning Practice (GMLP) principles applied through development
- [ ] **6.6** Predetermined Change Control Plan (PCCP) drafted if planning model updates post-clearance
- [ ] **6.7** Medical device reporting (MDR) procedures in place for devices post-market

## Phase 7 — Section 1557 (HHS non-discrimination)

- [ ] **7.1** Patient Care Decision Support tools identified
- [ ] **7.2** For each, documented whether the tool relies on variables that measure race, color, national origin, sex, age, or disability (directly or by proxy)
- [ ] **7.3** Mitigation measures documented for tools that use such variables
- [ ] **7.4** Policies ensure the covered entity uses these tools in ways consistent with non-discrimination
- [ ] **7.5** Periodic review cadence established

## Phase 8 — Clinical governance

- [ ] **8.1** AI tools reviewed by clinical leadership (e.g., CMO, CMIO, Chief Quality Officer) before deployment
- [ ] **8.2** Clinical workflow integration mapped (where AI output meets clinician, what action is expected)
- [ ] **8.3** Clinician training on intended use, limitations, and override
- [ ] **8.4** Peer review or model-specific QA process for AI-assisted decisions
- [ ] **8.5** Adverse event reporting integrated with existing safety/QAPI program

## Phase 9 — Patient disclosures and consent

- [ ] **9.1** Patient-facing disclosures where AI materially involved in care, per applicable state law
- [ ] **9.2** Mental health / chatbot / symptom-checker specific disclosures configured
- [ ] **9.3** California SB 1120 compliance (for CA utilization review) — clinician oversight documented
- [ ] **9.4** California AB 3030 compliance (AI-generated clinical communications disclosure)
- [ ] **9.5** Consent/notice aligned with Notice of Privacy Practices and NPP updated where needed

## Phase 10 — Bias, equity, and monitoring

- [ ] **10.1** Pre-deployment equity evaluation for clinical AI (performance across demographic subgroups)
- [ ] **10.2** Post-deployment monitoring dashboards for subgroup outcomes
- [ ] **10.3** Drift monitoring (calibration over time, population shift detection)
- [ ] **10.4** Feedback loop: clinician overrides, adverse events, and patient complaints reviewed periodically
- [ ] **10.5** Remediation path: retrain / restrict / retire when thresholds breached

## Phase 11 — Incident response (healthcare-adapted)

- [ ] **11.1** Incident plan clocks: HIPAA 60-day, state, FDA MDR, CMS, Joint Commission, state AG
- [ ] **11.2** Clinical leadership in the incident command chain for patient-safety incidents
- [ ] **11.3** Vendor-originated incident escalation paths tested
- [ ] **11.4** Tabletop exercise scenarios include AI-specific events (model drift, hallucinated clinical advice, BAA vendor breach)
- [ ] **11.5** Root cause analysis / FMEA / PRCA integrated with AI risk register

## Phase 12 — Information blocking (ONC)

- [ ] **12.1** AI-generated summaries reviewed against information-blocking rule (do they impede access to underlying EHI?)
- [ ] **12.2** Patient-access workflows preserve raw EHI alongside AI outputs
- [ ] **12.3** Certified EHR integrations reviewed for information-blocking compliance

## Phase 13 — Records

- [ ] **13.1** Model cards / system documentation for clinical AI
- [ ] **13.2** Training data provenance and licenses retained
- [ ] **13.3** Bias and performance test reports retained
- [ ] **13.4** FDA submissions, clearances, and correspondence retained
- [ ] **13.5** BAAs, audit logs, incident records retained per policy
- [ ] **13.6** Retention minimum 6 years for HIPAA-related records; longer for FDA device records

---

## Summary dashboard

| Phase | Items | Done | In progress | N/A |
| --- | ---: | ---: | ---: | ---: |
| 1. Scope and inventory | 6 |  |  |  |
| 2. HIPAA Privacy | 6 |  |  |  |
| 3. HIPAA Security | 6 |  |  |  |
| 4. HIPAA Breach Notification | 4 |  |  |  |
| 5. BAAs | 4 |  |  |  |
| 6. FDA Device | 7 |  |  |  |
| 7. Section 1557 | 5 |  |  |  |
| 8. Clinical governance | 5 |  |  |  |
| 9. Patient disclosures | 5 |  |  |  |
| 10. Bias and monitoring | 5 |  |  |  |
| 11. Incident response | 5 |  |  |  |
| 12. Information blocking | 3 |  |  |  |
| 13. Records | 6 |  |  |  |

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Healthcare AI compliance is highly specialized. Consult qualified healthcare regulatory, FDA, and privacy counsel before relying on this checklist.
