# EU AI Act — High-Risk System Checklist

**Company:** [COMPANY NAME]
**Role(s):** ☐ Provider  ☐ Deployer  ☐ Importer  ☐ Distributor  ☐ Authorized Representative
**System(s) in scope:** ______________________________
**Completed by:** ______________________________
**Date:** ______________________________

> Work through this top to bottom. For each item, mark **Done / In progress / Not applicable** and note the evidence. This checklist is long because the Act is long. Not every item applies to every company — mark "N/A" with a one-line reason so the document supports your position under audit.

---

## Phase 0 — Scope, roles, and classification

- [ ] **0.1** Mapped every AI system in the product/company to the EU AI Act
- [ ] **0.2** Classified each as: prohibited, high-risk (Annex I), high-risk (Annex III), limited-risk (transparency only), or minimal-risk
- [ ] **0.3** For each Annex III system, documented whether Art 6(3) narrow exception applies (and confirmed no profiling of natural persons)
- [ ] **0.4** Registered the Art 6(3) reliance decision in the AI System Inventory
- [ ] **0.5** Identified company role for each system: Provider, Deployer, Importer, Distributor, Authorized Representative
- [ ] **0.6** For non-EU providers of high-risk systems: appointed an Authorized Representative (Art 22) and executed a written mandate
- [ ] **0.7** For product manufacturers: confirmed whether Annex I sectoral legislation applies (e.g., medical device, machinery, toys) and mapped the integrated path
- [ ] **0.8** Mapped all deployers and importers / distributors and coordinated role handoffs

## Phase 1 — Quality Management System (provider, Art 17)

- [ ] **1.1** Documented QMS covering: regulatory compliance strategy; design controls; testing; data management; post-market monitoring; incident reporting; communication with authorities; training, accountability
- [ ] **1.2** QMS approved by senior management
- [ ] **1.3** Mapped existing ISO 9001 / ISO/IEC 42001 / ISO/IEC 23894 controls to AI Act requirements; filled gaps
- [ ] **1.4** Internal audit plan for QMS in place
- [ ] **1.5** Records retention policy set at 10 years after placing on market or putting into service (Art 18)

## Phase 2 — Risk Management System (provider, Art 9)

- [ ] **2.1** Risk management run as a continuous iterative process across the lifecycle, not a one-off assessment
- [ ] **2.2** Identified and analyzed known and reasonably foreseeable risks to health, safety, fundamental rights
- [ ] **2.3** Estimated risks that may emerge in intended use and reasonably foreseeable misuse
- [ ] **2.4** Evaluated other risks from post-market monitoring data
- [ ] **2.5** Adopted targeted risk management measures: elimination, mitigation, residual risk acceptance, information to deployers
- [ ] **2.6** Testing done against performance metrics and thresholds
- [ ] **2.7** Particular attention to impacts on children and other vulnerable groups documented

## Phase 3 — Data and Data Governance (provider, Art 10)

- [ ] **3.1** Training, validation, and test data sets documented
- [ ] **3.2** Data subject to governance and management practices: design choices, collection, provenance, preparation, examination for bias
- [ ] **3.3** Data sets are relevant, sufficiently representative, free of errors and complete, to the extent possible
- [ ] **3.4** Data sets reflect the geographical, contextual, behavioral and functional setting
- [ ] **3.5** Bias mitigation steps documented
- [ ] **3.6** Processing of special categories of personal data for bias mitigation (Art 10(5)) documented if used; safeguards in place
- [ ] **3.7** Intellectual property and licensing of data verified

## Phase 4 — Technical documentation (provider, Art 11 + Annex IV)

Prepared before placing on the market; kept up to date. Must include:

- [ ] **4.1** General description of the AI system (intended purpose, name, version, interaction with other systems, hardware, UI, forms on which the system is placed on the market)
- [ ] **4.2** Detailed description of elements of the system and development process (methods, pre-training, data used, validation and testing)
- [ ] **4.3** Detailed information about monitoring, functioning, and control of the system
- [ ] **4.4** Description of appropriateness of performance metrics
- [ ] **4.5** Detailed description of the risk management system (Art 9)
- [ ] **4.6** Description of relevant changes made to the system through its lifecycle
- [ ] **4.7** List of harmonized standards applied in full or in part
- [ ] **4.8** Copy of the EU declaration of conformity (Art 47)
- [ ] **4.9** Description of the system in place to evaluate performance in the post-market phase (Art 72)

## Phase 5 — Record-keeping / logs (provider, Art 12; deployer retention)

- [ ] **5.1** Automatic recording of events (logs) while the system is operating
- [ ] **5.2** Logs support traceability of functioning appropriate to the intended purpose
- [ ] **5.3** Logs support post-market monitoring (Art 72)
- [ ] **5.4** For remote biometric identification systems: logs include period of use, reference database, input data, personnel involved in verification
- [ ] **5.5** Deployer log retention at least six months, or longer per applicable law (Art 26(6))

## Phase 6 — Transparency and information to deployers (provider, Art 13)

- [ ] **6.1** Instructions for use provided to deployers in an appropriate language
- [ ] **6.2** Instructions include identity and contact of provider, and authorized representative where applicable
- [ ] **6.3** Characteristics, capabilities, limitations of performance (including intended purpose, level of accuracy/robustness/cybersecurity, performance on specific persons/groups, foreseeable misuse, input data specifications, outputs)
- [ ] **6.4** Changes to the system and performance over lifetime
- [ ] **6.5** Human oversight measures to facilitate deployer interpretation and intervention
- [ ] **6.6** Computational and hardware resources needed, expected lifetime, maintenance
- [ ] **6.7** Description of mechanisms included in the system that allow deployers to collect, store and interpret logs

## Phase 7 — Human oversight (provider, Art 14)

- [ ] **7.1** Designed and developed with human-machine interface tools that enable effective oversight during use
- [ ] **7.2** Oversight measures proportionate to risks, level of autonomy, and context of use
- [ ] **7.3** Oversight enables natural persons to:
  - Understand the capacities and limitations of the system
  - Remain aware of and counter automation bias
  - Correctly interpret the output
  - Decide not to use the output or disregard/override it
  - Intervene or interrupt through a "stop" function
- [ ] **7.4** For certain biometric identification systems (Art 14(5)): no action taken unless verified by at least two natural persons

## Phase 8 — Accuracy, robustness, cybersecurity (provider, Art 15)

- [ ] **8.1** Levels of accuracy and relevant accuracy metrics declared in instructions for use
- [ ] **8.2** Robustness: system resilient to errors, faults, inconsistencies in environment or interactions; technical redundancy where needed
- [ ] **8.3** If system can continue learning after deployment: feedback loops addressed to minimize biased outputs influencing future behavior
- [ ] **8.4** Cybersecurity: measures against attacks including data poisoning, model poisoning, adversarial examples, model evasion, confidentiality attacks
- [ ] **8.5** Security testing documented

## Phase 9 — Conformity assessment and CE marking (provider, Arts 43, 47, 48)

- [ ] **9.1** Correct conformity assessment procedure identified (internal control for most Annex III; notified-body involvement for certain biometric systems)
- [ ] **9.2** Assessment completed and records retained
- [ ] **9.3** EU declaration of conformity drawn up (Art 47)
- [ ] **9.4** CE marking affixed (Art 48)
- [ ] **9.5** Authorized representative identified on documentation (non-EU providers)
- [ ] **9.6** If harmonized standards used: cited correctly

## Phase 10 — EU database registration (provider/public deployer, Art 49, 71)

- [ ] **10.1** Provider registered the high-risk AI system in the EU database before placing it on the market / putting into service
- [ ] **10.2** Public authority or private deployer performing public services registered per Art 49(1a)
- [ ] **10.3** Registration information kept up to date

## Phase 11 — Post-market monitoring (provider, Art 72)

- [ ] **11.1** Post-market monitoring plan in place, proportionate to the system and use case
- [ ] **11.2** System collects, documents, and analyzes data from deployers (and other sources) to evaluate continued compliance
- [ ] **11.3** Post-market data feeds back into the risk management system (Art 9)

## Phase 12 — Incident reporting (provider, Art 73)

- [ ] **12.1** Defined what qualifies as a "serious incident"
- [ ] **12.2** Reporting procedure and contacts for every relevant market surveillance authority documented
- [ ] **12.3** Reporting clocks implemented:
  - Without undue delay, and in any case no later than **15 days** after becoming aware
  - **2 days** for widespread infringement or death
  - **10 days** for serious and irreversible disruption of critical infrastructure
- [ ] **12.4** Investigation and corrective action documented and logged
- [ ] **12.5** Deployer and downstream notification procedure in place

## Phase 13 — Deployer obligations (Art 26, 27, 86)

- [ ] **13.1** Use only in accordance with instructions for use
- [ ] **13.2** Human oversight assigned to competent, trained, authorized natural persons
- [ ] **13.3** Input data relevant and sufficiently representative for the intended purpose
- [ ] **13.4** Monitor operation; inform provider of risks and serious incidents
- [ ] **13.5** Retain logs for at least 6 months
- [ ] **13.6** Workers and workers' representatives informed before workplace deployment
- [ ] **13.7** Natural persons subject to decisions informed of the use of a high-risk AI system (Art 26(11))
- [ ] **13.8** Public authorities registered in the EU database (Art 49(1a))
- [ ] **13.9** For credit-scoring / life or health insurance deployers and all public-service deployers: **Fundamental Rights Impact Assessment** completed before first use (Art 27)
- [ ] **13.10** FRIA updated as circumstances change; notified to market surveillance authority per Art 27(3)
- [ ] **13.11** Right to explanation of individual decision-making honored (Art 86) where applicable
- [ ] **13.12** DPIA supported by provider information (Art 26(9))

## Phase 14 — Transparency obligations (Art 50)

- [ ] **14.1** AI systems that interact with natural persons disclose they are AI (unless obvious)
- [ ] **14.2** Emotion recognition / biometric categorization — users informed
- [ ] **14.3** Synthetic or manipulated audio/image/video/text marked as AI-generated; machine-readable where technically feasible
- [ ] **14.4** Public-interest AI-generated text labeled (exceptions apply)

## Phase 15 — Organizational / governance

- [ ] **15.1** Named person(s) accountable for AI Act compliance
- [ ] **15.2** Training program for relevant staff, including AI literacy (Art 4)
- [ ] **15.3** Internal escalation and legal-review paths for classification disputes
- [ ] **15.4** Contracts with deployers, providers, and authorized reps aligned to Act obligations
- [ ] **15.5** Budget allocated for conformity assessment, registration, monitoring, incident response

## Phase 16 — Records to produce on request

- [ ] **16.1** Technical documentation (Annex IV)
- [ ] **16.2** EU declaration of conformity
- [ ] **16.3** Risk management records
- [ ] **16.4** Data governance records
- [ ] **16.5** Logs
- [ ] **16.6** Post-market monitoring reports
- [ ] **16.7** Serious incident reports and corrective actions
- [ ] **16.8** Instructions for use supplied to deployers
- [ ] **16.9** FRIA (deployers in scope)
- [ ] **16.10** QMS documentation

---

## Summary dashboard

| Phase | Items | Done | In progress | N/A |
| --- | ---: | ---: | ---: | ---: |
| 0. Scope, roles, classification | 8 |  |  |  |
| 1. QMS | 5 |  |  |  |
| 2. Risk management | 7 |  |  |  |
| 3. Data governance | 7 |  |  |  |
| 4. Technical documentation | 9 |  |  |  |
| 5. Record-keeping | 5 |  |  |  |
| 6. Transparency to deployers | 7 |  |  |  |
| 7. Human oversight | 4 |  |  |  |
| 8. Accuracy/robustness/security | 5 |  |  |  |
| 9. Conformity / CE | 6 |  |  |  |
| 10. EU database registration | 3 |  |  |  |
| 11. Post-market monitoring | 3 |  |  |  |
| 12. Incident reporting | 5 |  |  |  |
| 13. Deployer obligations | 12 |  |  |  |
| 14. Transparency (Art 50) | 4 |  |  |  |
| 15. Organizational | 5 |  |  |  |
| 16. Records | 10 |  |  |  |

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. The EU AI Act is a complex and evolving regulation; its implementing acts, harmonized standards, and national transposition continue to develop. Consult qualified EU legal counsel before relying on this checklist for any compliance decision.
