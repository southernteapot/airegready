# EU AI Act — High-Risk System Kit Overview

**Regulation:** Regulation (EU) 2024/1689 (the "EU AI Act")
**Effective dates:** Staggered — prohibitions applied 2025-02-02; general-purpose AI (GPAI) obligations applied 2025-08-02; most high-risk obligations apply **2026-08-02**; Annex I high-risk (product-safety-embedded) obligations apply **2027-08-02**. Check current status before relying.
**Enforcement:** Member state market surveillance authorities; the EU AI Office for GPAI. Fines up to the higher of €35M or 7% of global turnover for prohibited uses; up to €15M or 3% for other violations.

> **How to use this kit.** Read this overview first. Then work through `checklist.md`. This kit focuses on **high-risk AI systems** (the category with the heaviest obligations). It covers both **providers** and **deployers**. If your AI is a general-purpose model, use the GPAI supplement separately. If your AI is limited-risk (e.g., a chatbot), only the transparency obligations apply — this kit is overkill.

---

## 1. Why this matters

The EU AI Act is the most comprehensive AI law in the world. Its reach is extraterritorial: if your AI system is placed on the market or put into service in the EU, or if its output is used in the EU, you are likely in scope — even from a U.S. head office.

Getting this wrong has real consequences: fines measured in millions of euros, public enforcement actions that reputation doesn't easily recover from, and potential mandatory withdrawal of the product from the EU market.

Getting it right is also tractable. The Act maps closely to practices many mature software organizations already have: risk management, quality management, documentation, incident response, post-market monitoring. The kit below is organized to let you reuse what you have.

## 2. Risk categories at a glance

| Category | What it covers | Treatment |
| --- | --- | --- |
| **Prohibited** (Art 5) | Social scoring; untargeted facial scraping; real-time remote biometric identification in public with narrow exceptions; emotion recognition in workplace/education (with safety exceptions); manipulation; exploitation of vulnerabilities; certain predictive-policing profiling | Banned outright |
| **High-risk** (Annex I + Annex III) | Product-safety-embedded AI (Annex I) and use in 8 sensitive areas (Annex III): biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration/border, justice & democratic processes | Full compliance program required |
| **Limited-risk** | Chatbots, emotion recognition (outside high-risk), biometric categorization, deepfakes | Transparency obligations (Art 50) only |
| **Minimal-risk** | Everything else | No specific obligations, but voluntary codes of conduct encouraged |

## 3. Annex III — the eight high-risk areas

A system is high-risk if it is used as (or is a safety component of) one of these, and isn't within a narrow Art 6(3) exception:

1. **Biometrics** — remote biometric identification, biometric categorization inferring sensitive attributes, emotion recognition
2. **Critical infrastructure** — safety components in road traffic, water, gas, heating, electricity
3. **Education and vocational training** — admissions, assessment of learning outcomes, detection of prohibited behavior during testing
4. **Employment, workers' management, and access to self-employment** — recruitment, promotion, termination decisions, task allocation, monitoring and evaluation
5. **Access to and enjoyment of essential private and public services** — public benefits eligibility, credit scoring, life and health insurance risk assessment, emergency triage
6. **Law enforcement** — victim/risk profiling, polygraphs, reliability-of-evidence scoring, predictive policing, profiling during investigation
7. **Migration, asylum, border control** — polygraphs, risk assessment, application review, identification
8. **Administration of justice and democratic processes** — assisting judicial authorities in fact/law assessment, influencing elections

### Art 6(3) narrow exception

A system listed in Annex III is **not** high-risk if it:

- Performs a narrow procedural task
- Improves the result of a previously completed human activity
- Detects decision-making patterns or deviations from previous patterns and is not meant to replace human assessment without review
- Performs a preparatory task

**BUT** if the system performs profiling of natural persons, the exception does not apply. You must document and register your decision to rely on this exception.

## 4. Roles under the Act

### Provider

Natural or legal person who **develops** an AI system or has one developed and places it on the market or puts it into service under its own name or trademark (with or without payment).

Providers carry the heaviest obligations.

### Deployer

Natural or legal person using an AI system under its own authority, except for personal non-professional activity. Deployers have significant but lighter obligations than providers.

### Importer and Distributor

Entities that bring AI systems from outside the EU into the Union market, or make them available on the market. Verification-style obligations.

### Authorized Representative

Non-EU providers of high-risk AI must appoint an EU representative before making the system available.

### Product Manufacturer

When a high-risk AI system is a safety component of a product covered by Annex I sectoral legislation (toys, machinery, medical devices, etc.), the product manufacturer is treated as the provider.

**You can hold more than one role.** A company that fine-tunes a vendor's system or puts it on the market under its own brand becomes a provider. A company that materially modifies a system becomes a provider.

## 5. Provider obligations for high-risk systems

Chapter III, Section 2 of the Act. In summary:

1. **Risk management system** (Art 9) — continuous, iterative process across the lifecycle
2. **Data and data governance** (Art 10) — training, validation, and test data sets must meet quality criteria; relevant, representative, as free as possible of errors and biases
3. **Technical documentation** (Art 11) — prepared before placing on the market; kept up to date
4. **Record-keeping** (Art 12) — automatic logging of events ("logs") to trace operation and support post-market monitoring
5. **Transparency and provision of information to deployers** (Art 13) — instructions for use; intended purpose; characteristics, capabilities and limitations; foreseeable misuse; human oversight measures; expected lifetime; maintenance
6. **Human oversight** (Art 14) — system designed so that natural persons can effectively oversee use, understand outputs, intervene or override, decide not to use the system
7. **Accuracy, robustness, and cybersecurity** (Art 15) — declared levels and safeguards; resilience to errors, faults, inconsistencies; protection against attacks (including poisoning, evasion, model-theft, adversarial examples)
8. **Quality management system** (Art 17) — documented written policies, procedures, and instructions covering regulatory strategy, design controls, data management, testing, post-market, incident reporting
9. **Conformity assessment** (Art 43) — internal control for most Annex III systems; notified-body assessment for certain biometric systems; EU declaration of conformity (Art 47) and CE marking (Art 48)
10. **Registration** (Art 49 / Art 71) — Annex III systems registered in the EU database before placing on the market
11. **Post-market monitoring** (Art 72) — plan proportionate to the system
12. **Reporting of serious incidents** (Art 73) — to market surveillance authority without undue delay and in any case within 15 days (2 days for widespread infringement or fatality; 10 days for serious malfunction causing infringement of EU law)
13. **Corrective actions and cooperation** (Arts 20, 26, 79) — with authorities and downstream deployers
14. **Authorized representative** if not established in the EU (Art 22)

## 6. Deployer obligations for high-risk systems

Chapter III, Section 3. In summary:

1. **Use the system in accordance with the instructions for use** (Art 26(1))
2. **Assign human oversight** to natural persons with the necessary competence, training, and authority (Art 26(2))
3. **Input data** — ensure input data is relevant and sufficiently representative for the intended purpose (Art 26(4))
4. **Monitor** operation based on instructions and inform the provider where deployer becomes aware of a risk (Art 26(5))
5. **Keep logs** for at least six months (or longer per other law) (Art 26(6))
6. **Inform workers and their representatives** before putting the system into service in the workplace (Art 26(7))
7. **Register** (for public authorities and EU institutions) in the EU database (Art 49(1a))
8. **Inform natural persons** they are subject to use of a high-risk AI system where decisions are made about them (Art 26(11))
9. **Cooperation with authorities** (Art 26(12))
10. **Fundamental Rights Impact Assessment (FRIA)** (Art 27) — required for deployers that are public bodies, private entities providing public services, or deployers of credit-scoring or life/health insurance Annex III systems. Performed **before** first use; repeated when circumstances change.
11. **Data protection impact assessment** — use information provided by the provider to support GDPR DPIA (Art 26(9))

## 7. Transparency obligations (Art 50) — applies to many systems

Even if your system is not high-risk, the following are required:

- AI systems interacting with natural persons must inform them unless obvious
- Emotion recognition and biometric categorization systems must inform users (with narrow exceptions)
- Synthetic audio/image/video/text generated or manipulated ("deepfakes") must be disclosed as AI-generated; machine-readable markings where technically feasible
- AI-generated public-interest text must be disclosed unless subject to editorial responsibility

## 8. GPAI — one-paragraph summary

General-purpose AI models have their own chapter (Ch V). Providers must maintain technical documentation, provide information downstream, put in place a copyright-compliance policy, and publish a summary of training content. **Models with systemic risk** (capability threshold or Commission designation) have additional obligations: model evaluations, adversarial testing, incident tracking, cybersecurity. If you're a small or mid-size company, you probably aren't a GPAI provider with systemic risk; you may still be a downstream provider that integrates GPAI into a high-risk system.

## 9. Practical readiness path (for high-risk providers)

1. **Classify.** Is your system in Annex I or Annex III? Can you rely on Art 6(3)? Document the answer.
2. **Decide roles.** Are you a provider, deployer, both? Outside the EU? Appoint an authorized representative if you're a non-EU provider.
3. **Stand up a QMS.** The quality management system is the backbone. If you have ISO 9001 or ISO/IEC 42001, you're close — map gaps.
4. **Write technical documentation.** Annex IV gives you a structure. Treat it as a living artifact.
5. **Data governance.** Document training, validation, and test data sources, quality, bias checks, and annotation procedures.
6. **Risk management.** A lifecycle process — not a one-time exercise. Tie each identified risk to a mitigation.
7. **Human oversight design.** Decide how a person can understand, intervene, and override. Build UX and procedures to support that.
8. **Testing.** Accuracy, robustness, cybersecurity. Document metrics and thresholds.
9. **Logging.** Event logs, retention, access.
10. **Conformity assessment.** For most Annex III systems, internal control. Prepare the EU declaration and affix CE.
11. **Register.** In the EU database.
12. **Post-market monitoring.** Define metrics, cadence, escalation.
13. **Incident reporting.** Wire the reporting process to Art 73 timelines.
14. **Ship deployer package.** Instructions for use, transparency information, and support materials.

## 10. Practical readiness path (for high-risk deployers)

1. **Identify** every high-risk system you deploy (or plan to).
2. **Assign** a named human overseer and document their competence and authority.
3. **Verify** the provider's instructions for use and CE marking.
4. **Check** input data quality.
5. **Log** and retain for at least six months.
6. **Inform** workers before workplace deployment and affected natural persons generally.
7. **Do a FRIA** if you fall in the Art 27 scope.
8. **Coordinate** with the provider on monitoring and incident response.
9. **Support** your GDPR DPIA with provider information (Art 26(9)).
10. **Keep records** for authority inquiries.

## 11. Common traps

- **Assuming U.S. location exempts you.** Extraterritorial.
- **Treating classification as one-and-done.** Material modifications can promote you to provider status.
- **Skipping the Art 6(3) documentation.** If you rely on it, prove it.
- **Confusing DPIA and FRIA.** They serve different purposes; both may be needed.
- **Under-specifying human oversight.** "A person will check the output" is not enough.
- **Relying on vendor CE mark.** Your deployer obligations remain your own.
- **Missing the 15-day clock on serious incidents.**
- **Ignoring GPAI integration.** If your high-risk system uses a GPAI model, you have downstream obligations from the GPAI provider to integrate.

## 12. What this kit contains

- `overview.md` — this document
- `checklist.md` — operational checklist for providers and deployers

Pair with:

- AI Governance Framework
- AI System Inventory (tag systems with `eu-high-risk: yes/no`)
- AI Impact Assessment (use alongside FRIA)
- AI Incident Response Plan (wire to Art 73 reporting)
- Customer AI Disclosure Templates (transparency obligations)

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. The EU AI Act is a complex and evolving regulation; its implementing acts, harmonized standards, and national transposition continue to develop. Consult qualified legal counsel with EU AI Act expertise before relying on this document for any compliance decision.
