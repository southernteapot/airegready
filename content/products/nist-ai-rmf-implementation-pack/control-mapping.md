# NIST AI RMF — Control Mapping

A cross-reference between NIST AI RMF outcomes and related requirements in ISO/IEC 42001, the EU AI Act, the Colorado AI Act, and common assurance frameworks. Use this to avoid duplicating work: a single control implementation can satisfy multiple frameworks if you map it once.

This mapping is directional, not exhaustive. Use it as a starting scaffold and refine with counsel for your specific scope.

---

## Legend

- **NIST RMF** — function and category
- **ISO 42001** — AI Management System clauses
- **EU AI Act** — Article numbers (high-risk obligations primarily)
- **CAIA** — Colorado AI Act statutory references
- **Other** — SOC 2, ISO 27001, GDPR, etc. as applicable

---

## GOVERN function mappings

| NIST RMF | ISO/IEC 42001 | EU AI Act | Colorado AI Act | Other |
| --- | --- | --- | --- | --- |
| GOVERN 1 (policies, processes) | Cl. 5.2 Policy; Cl. 6 Planning; Cl. 7 Support | Art 17 QMS | § 6-1-1703 Duty of care; § 6-1-1703(3) risk management program | SOC 2 CC1, CC2 |
| GOVERN 2 (roles, responsibilities) | Cl. 5.3 Roles; Cl. 7.2 Competence | Art 17(1)(a); Art 26(2) deployer oversight | Policy owner / program ownership | SOC 2 CC1.3 |
| GOVERN 3 (diversity, DEI) | Cl. 7.1 Resources | Recital considerations for fairness | N/A | — |
| GOVERN 4 (culture, reporting) | Cl. 7.4 Communication; Cl. 10 Improvement | Art 14 human oversight culture | § 6-1-1703 duty of care | SOC 2 CC2.3 |
| GOVERN 5 (external engagement) | Cl. 4.2 Stakeholders | Art 50 transparency; Art 86 explanation right | § 6-1-1703(4) consumer notice; § 6-1-1703(5) appeal right | GDPR Art 22 |
| GOVERN 6 (third-party risk) | Cl. 8.1 Operational planning; A.8 Supplier | Art 25 downstream; Art 16 importers | Developer documentation duty (§ 6-1-1702) | SOC 2 CC9.2; ISO 27001 A.15 |

## MAP function mappings

| NIST RMF | ISO/IEC 42001 | EU AI Act | Colorado AI Act | Other |
| --- | --- | --- | --- | --- |
| MAP 1 (context) | Cl. 4.1 Context; Cl. 4.2 Interested parties | Art 11 Annex IV technical docs §1 | Impact assessment context | GDPR Art 35 DPIA |
| MAP 2 (categorization) | A.6.2.2 AI impact assessment | Risk tier classification Arts 6, 50 | High-risk classification § 6-1-1702(5) | — |
| MAP 3 (benefits vs costs) | Cl. 6.1 Risks and opportunities | Art 9 risk management; Art 11 docs | Impact assessment benefits/risks | — |
| MAP 4 (lifecycle risks) | Cl. 8.2 AI risk assessment; Cl. 8.3 Treatment | Art 9 continuous lifecycle risk mgmt | Ongoing review § 6-1-1703(3) | ISO 31000 |
| MAP 5 (impacts) | A.6 Fundamental rights / impacted individuals | Art 27 FRIA (certain deployers) | Impact on consumer; adverse action § 6-1-1703(4) | GDPR Art 35 DPIA |

## MEASURE function mappings

| NIST RMF | ISO/IEC 42001 | EU AI Act | Colorado AI Act | Other |
| --- | --- | --- | --- | --- |
| MEASURE 1 (methods/metrics) | Cl. 9.1 Monitoring | Art 15 accuracy/robustness metrics | Monitoring as part of risk mgmt | — |
| MEASURE 2.1-2.3 (TEVV) | A.7 Data for AI | Art 15 testing | Bias testing for discrimination | — |
| MEASURE 2.6 (bias) | A.6.2.5 Fairness | Art 10 data governance; Art 15 accuracy | § 6-1-1703 algorithmic discrimination prevention | EEOC Uniform Guidelines |
| MEASURE 2.7 (security) | A.8 Information security for AI | Art 15(5) cybersecurity | — | ISO 27001; SOC 2 CC6 |
| MEASURE 2.10 (privacy) | A.7.4 Privacy by design | Recital 58; Art 10 | — | GDPR; CCPA |
| MEASURE 2.11 (fairness) | A.6.2.5 Fairness | Art 10; Art 15 | § 6-1-1703 | Title VII; ECOA; FHA |
| MEASURE 3 (ongoing tracking) | Cl. 9.1 Monitoring; A.6.2.7 Post-market | Art 72 post-market monitoring | Ongoing obligations | — |
| MEASURE 4 (feedback) | Cl. 9.1.2 Customer feedback | Art 26(5) deployer monitoring | Complaint handling | — |

## MANAGE function mappings

| NIST RMF | ISO/IEC 42001 | EU AI Act | Colorado AI Act | Other |
| --- | --- | --- | --- | --- |
| MANAGE 1 (prioritize/respond) | Cl. 8.3 Risk treatment | Art 9 risk mgmt | Mitigation of known/foreseeable risks | — |
| MANAGE 2 (benefit, kill switch) | A.6.2.8 Kill switch / stop function | Art 14 human oversight — stop function | — | — |
| MANAGE 3 (third-party monitoring) | A.8 Supplier management | Art 25; Art 72 post-market | Developer-deployer cooperation | SOC 2 CC9.2 |
| MANAGE 4 (response/recovery) | Cl. 10.1 Nonconformity | Art 20 corrective actions; Art 73 serious incidents | 90-day AG notification for discrimination | Incident response (SOC 2 CC7.4) |

## Gen AI Profile mappings

| Gen AI outcome | Regulatory touchpoints |
| --- | --- |
| Harmful bias | EU AI Act Art 10; CAIA algorithmic discrimination |
| Confabulation | EU AI Act Art 13 instructions for use; Art 50 transparency |
| Data provenance | EU AI Act Art 53 (GPAI training summary); copyright law |
| Human-AI interaction | EU AI Act Art 14 oversight; FTC unfair/deceptive practices |
| CBRN uplift | EU AI Act Art 55 (systemic-risk GPAI obligations) |
| Obscene content | Platform liability; child safety laws |
| Information security | EU AI Act Art 15(5); NIST CSF 2.0 |
| Value chain / IP | EU AI Act Art 53 copyright policy; contract law |
| Environmental | ESG reporting frameworks |

---

## How to use this mapping in practice

1. **Pick your primary framework.** For most U.S. companies, NIST AI RMF is the right anchor. EU-exposed companies should anchor on the EU AI Act where applicable.
2. **Map your existing controls.** For each control you already have, tag which frameworks it supports.
3. **Identify gaps.** Rows with empty entries in your primary framework are candidates for new controls.
4. **Avoid parallel programs.** If you're running RMF, 42001, and EU AI Act programs separately, you're wasting effort. One set of controls with multi-framework documentation is the goal.
5. **Audit against the mapping.** Internal audits and external assurance engagements can test across frameworks using a single evidence pack.

---

## Disclaimer

This mapping is educational and informational only. It is a high-level scaffolding, not a legal or compliance opinion. Specific requirements vary by jurisdiction and use case. Consult qualified legal counsel and audit professionals before relying on any mapping for assurance purposes.
