# AI in Manufacturing & Industrial — Compliance Kit Overview

**Regulatory landscape:**

- **Product safety** — Consumer Product Safety Commission (CPSC); OSHA for worker safety; NTSB/NHTSA for vehicles
- **FDA** for medical devices (covered in Healthcare Kit)
- **FAA** for aviation
- **NRC** for nuclear
- **EU Machinery Regulation (2023/1230)** — integrates AI / autonomy considerations
- **EU AI Act** — critical infrastructure and product-safety-embedded AI (Annex I) trigger high-risk obligations
- **Product liability law** — state and federal
- **Environmental law** — EPA compliance where AI touches emissions / waste / permits
- **Export controls** — EAR, ITAR where applicable; AI export controls expanding
- **Trade secrets and industrial IP**
- **Cybersecurity for critical infrastructure** — CISA expectations, NIST CSF 2.0
- **Insurance / OT cyber** — industrial control system security expectations

> **How to use this kit.** For manufacturers, OEMs, industrial equipment producers, IIoT platforms, and companies operating factories or industrial systems with AI. Covers autonomous systems in industrial environments, predictive maintenance, quality control AI, and supply-chain AI.

---

## 1. AI use cases in manufacturing

- **Autonomous or semi-autonomous machinery** — robots, AGVs, cobots
- **Computer vision** — defect detection, quality control, process monitoring
- **Predictive maintenance** — asset health, failure prediction
- **Process optimization** — energy, throughput, scrap reduction
- **Supply chain AI** — demand forecasting, supplier risk, logistics routing
- **Design and engineering AI** — generative design, simulation
- **Worker safety AI** — camera-based PPE detection, zone monitoring (high-risk)
- **Digital twins**
- **Quality-of-service AI** in industrial SaaS

## 2. Why manufacturing AI is different

- **Kinetic energy.** A malfunctioning AI in a factory can injure or kill.
- **Long life cycles.** Industrial equipment operates for decades; AI updated frequently must not break older gear.
- **Regulated environments.** Many manufactured products carry separate safety regimes.
- **Worker surveillance risk.** Safety monitoring slides easily into labor-law problems.
- **Critical infrastructure.** Some manufacturing is considered critical infrastructure under federal designations.

## 3. EU AI Act — manufacturing

- **Annex I sectoral legislation** — machinery, toys, medical devices, and many others include AI as a safety component, triggering high-risk obligations
- **Annex III** — critical infrastructure is a high-risk category for safety components
- **Workplace** — emotion recognition in the workplace is prohibited (Art 5)
- **EU Machinery Regulation** operates alongside the AI Act

## 4. Worker safety AI

- **OSHA General Duty Clause** still applies
- AI that enforces safety rules must not displace the human responsibility for safety
- Monitoring AI in the workplace implicates state monitoring law, works-council consultation in EU
- False positives that disrupt workers must be remediated

## 5. Product safety and liability

- AI as a safety-critical component increases product liability exposure
- Duty to warn extends to AI failure modes
- Updates to AI (model changes) can be treated as design changes requiring re-certification in regulated sectors
- **Design, development, and post-market surveillance** are all in scope

## 6. Predictive maintenance and vendor data

- Data from customer equipment used to train vendor models requires clear contract terms
- Data residency and IP flow
- When a vendor model is applied to a safety-critical use, the vendor's obligations scale up

## 7. Supply chain and trade

- **Supplier AI** introduces risks: quality variability, IP leakage, compliance dependencies
- **Export controls** — AI models and trained weights have been subject to export controls in specific contexts
- **Dual-use** considerations when industrial AI could have military applications

## 8. Cybersecurity for OT

- AI in operational technology (OT) environments requires specialized security
- IEC 62443 / ISA-99 standards
- CISA expectations for critical infrastructure
- Incident reporting under CIRCIA and sector rules

## 9. Environmental

- AI helping optimize emissions or permits must support regulator inquiry
- Synthetic / AI-generated data in environmental reporting is not acceptable
- Monitoring AI for emissions / discharge must meet accuracy and record-keeping standards

## 10. Practical readiness path

1. **Inventory** all AI in products, factory floor, supply chain, and enterprise
2. **Classify** safety-critical vs. informational
3. **Apply EU AI Act Annex I/III** obligations where relevant
4. **Functional safety analysis** (IEC 61508 / ISO 13849) updated for AI
5. **Worker monitoring review** — union / works council / state law
6. **Vendor contracts** — model updates, liability, data flows
7. **Change control** — AI model updates as design changes where applicable
8. **Incident response** — tied to recall, product safety reporting, CIRCIA
9. **OT cybersecurity** aligned with CISA / IEC 62443
10. **Export control review** for AI assets and data

## 11. Common traps

- **Deploying safety-critical AI without functional-safety analysis**
- **Vendor model updates silently changing safety behavior**
- **Worker surveillance AI** triggering labor / privacy issues
- **Quality-control AI missing defects** without human QC backup
- **Predictive maintenance data** exported to vendors without IP safeguards
- **Industrial IoT connected to AI** without proper OT security

## 12. Kit contents

- `overview.md` — this document
- `checklist.md` — operational readiness checklist

---

## Disclaimer

This document is educational only. It is not legal advice. Consult qualified product safety, regulatory, labor, and export counsel.
