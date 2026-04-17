# AI in Healthcare — Compliance Kit Overview

**Regulatory landscape covered:**

- **HIPAA** (Privacy Rule, Security Rule, Breach Notification Rule)
- **FDA regulation of Software as a Medical Device (SaMD)** — 510(k), De Novo, PMA pathways; Predetermined Change Control Plan (PCCP)
- **21st Century Cures Act** — Clinical Decision Support (CDS) exemption from device regulation
- **HHS Section 1557 AI non-discrimination rule** (for Patient Care Decision Support Tools)
- **ONC information blocking rule** (ASTP/ONC)
- **CMS and Joint Commission expectations**
- **State laws** — California SB 1120, Texas TRAIGA health provisions, and others

> **How to use this kit.** Read the overview. Then work through `checklist.md` for operational readiness. This kit doesn't replace specialist healthcare compliance counsel, a privacy officer, or FDA regulatory affairs — it gives your team a defensible starting posture.

---

## 1. Why healthcare AI is different

Healthcare is the most heavily regulated sector to deploy AI in. Mistakes are amplified by:

- **HIPAA exposure** on data leaks (civil penalties to $50K+ per violation, criminal liability)
- **FDA device classification risk** — deploying unapproved SaMD can result in enforcement, recalls
- **Professional liability** for clinicians relying on AI outputs
- **Section 1557** non-discrimination risk when AI is used in patient care
- **Reputational** — a single widely reported harm event can end a product

On the upside, the healthcare sector already has mature compliance practices (HIPAA, GxP, etc.) that AI governance can plug into.

## 2. Role mapping

Most companies deploying AI in healthcare fall into one or more of these roles. Obligations differ.

| Role | Example | Primary regulators |
| --- | --- | --- |
| **Covered Entity** | Hospital, clinic, health plan, pharmacy | HHS OCR (HIPAA) |
| **Business Associate** | SaaS vendor handling PHI for a Covered Entity | HHS OCR (HIPAA via BAA) |
| **Medical device manufacturer** | Maker of SaMD, AI-enabled device, companion software | FDA (CDRH) |
| **Clinical decision support vendor** | Tool that recommends or scores clinical actions | FDA (depending on claims) + HHS |
| **Clinical operations AI (non-clinical)** | Scheduling, billing, administrative automation | HIPAA if PHI touched; FTC; state |
| **Patient engagement / remote monitoring** | Chatbots, remote monitoring devices | FDA (if device); HIPAA |
| **Life science R&D** | Drug discovery, clinical trial analytics | FDA GxP; HIPAA where applicable |

## 3. HIPAA — the baseline

Any use of AI that processes Protected Health Information (PHI) pulls HIPAA into play.

### Privacy Rule

- Limit uses/disclosures to minimum necessary and permitted purposes
- Patient authorization required for uses beyond treatment, payment, and operations
- **AI training caution:** Using PHI to train a model for a purpose not in your Notice of Privacy Practices usually requires authorization or de-identification

### Security Rule

- Administrative, physical, technical safeguards proportionate to risk
- Risk analysis is required and must be current
- Encryption, access control, audit logs, workforce training

### Breach Notification

- Unauthorized disclosure of PHI triggers notification
- 60-day outer notification clock; sooner for some states

### BAAs

- Any vendor processing PHI on your behalf needs a Business Associate Agreement
- BAAs must address AI-specific concerns: training use, subprocessor flow-down, deletion, retention

## 4. FDA — is your AI a medical device?

FDA considers a software "a device" if it's intended to:

- **Diagnose** a disease or condition
- **Treat**, **cure**, **mitigate**, or **prevent** disease
- Affect the structure or function of the body

If yes, it needs a regulatory pathway (510(k), De Novo, PMA) unless it fits a specific exemption.

### Clinical Decision Support (CDS) exemption

21st Century Cures Act exempts some CDS software from device regulation if:

1. It is **not** intended to acquire, process, or analyze a medical image or signal from an in-vitro diagnostic or pattern from a signal acquisition system
2. It is intended to display, analyze, or print medical information about a patient
3. It is intended to support or provide recommendations to a health care professional about prevention, diagnosis, or treatment
4. It is intended to **enable** the health care professional to independently review the basis for recommendations (the "independent review" standard)

If your product can't meet criterion 4 — for example, because the AI logic is opaque and the clinician can't meaningfully review the basis — it's likely a device.

### Predetermined Change Control Plan (PCCP)

FDA allows AI/ML-enabled devices to include a PCCP that anticipates future model updates without requiring a new submission. If you expect to retrain or update your model in production, a PCCP is a key part of your submission strategy.

### Good Machine Learning Practice (GMLP)

FDA's GMLP principles (issued jointly with MHRA and Health Canada) provide the framework for documentation, testing, and lifecycle management.

## 5. Section 1557 — non-discrimination

HHS finalized an update to Section 1557 rules addressing Patient Care Decision Support Tools — including AI used by covered entities in patient care:

- Covered entities must identify uses of these tools that rely on variables or factors that measure race, color, national origin, sex, age, or disability
- Must make reasonable efforts to mitigate the risk of discrimination resulting from the use of those tools
- Documentation and governance expectations

Applies to any entity receiving federal financial assistance (which is nearly all healthcare).

## 6. ONC information blocking

The 21st Century Cures Act's information blocking rule (now under ASTP/ONC) prohibits practices likely to interfere with access, exchange, or use of electronic health information. AI touches this when:

- AI-generated summaries replace raw EHI access
- AI tools filter or rank EHI in ways that could be characterized as information blocking
- Patient access rights interact with AI-generated content

## 7. State and sector overlays

- **California SB 1120** — clinical utilization review using AI requires licensed clinician oversight
- **California AB 3030** — disclosure requirement for AI-generated clinical communications
- **Colorado AI Act** — healthcare is a consequential-decision category
- **Texas TRAIGA** — private-sector AI rules overlap with health data uses
- **New York, Illinois, others** — bespoke rules on AI in insurance underwriting, mental health chatbots, etc.
- **JCAHO / Joint Commission** — expects AI governance within the hospital's quality and safety programs
- **CMS Conditions of Participation** — may intersect AI use in utilization management and QAPI

## 8. Data and model considerations

- **De-identification** per HIPAA Safe Harbor or Expert Determination is often preferable to training on identifiable PHI. Either path has operational costs.
- **Bias in healthcare AI** has been widely documented. Models trained on predominantly white, male, insured populations often underperform for others. Audit for this.
- **Drift** — clinical patterns shift over time (seasonality, new diseases, practice changes). Post-market monitoring is essential.
- **Human override** — clinicians must retain the ability to disagree with AI outputs without friction.
- **Training data provenance** — know where your training data came from and whether your license covers the intended use.

## 9. Practical readiness path

1. **Inventory** every AI system touching PHI or clinical decisions
2. **Classify** each system: Covered Entity / Business Associate / Device / CDS-exempt / administrative
3. **BAAs in place** for every PHI-processing vendor; review for AI-specific terms (training, retention, subprocessors)
4. **Device pathway** decided and documented for SaMD; PCCP drafted if change control planned
5. **Section 1557 review** of clinical AI tools for protected-class variables
6. **Bias audits** scheduled for clinical decision support and population health tools
7. **Clinical governance** — AI tools reviewed by clinical leadership with escalation paths
8. **Consent and disclosures** — updated Notice of Privacy Practices, patient-facing disclosures of AI use per state law, clinician disclosure per professional norms
9. **Incident response** — tied to HIPAA breach notification, FDA MDR (if device), and state rules
10. **Training** — clinicians, IT, administrators, and BAA staff

## 10. Common traps

- **"We don't store the PHI, the vendor does"** — still PHI you're responsible for; still need a BAA.
- **Assuming CDS exemption applies** without a documented analysis of criterion 4 (independent review).
- **Using patient data for training** under a Notice of Privacy Practices that doesn't contemplate training.
- **Deploying without bias evaluation** — Section 1557 now explicitly expects you to have looked.
- **Missing the breach notification clock** when a vendor incident involves your patients.
- **Neglecting PCCP** — and discovering that any model update triggers a new FDA submission.
- **Treating administrative AI as out of scope** — billing AI that touches PHI is in HIPAA scope; chatbots for scheduling often are too.

## 11. Kit contents

- `overview.md` — this document
- `checklist.md` — operational readiness checklist

Pair with:

- AI Governance Framework
- AI Impact Assessment
- AI Incident Response Plan (with healthcare-specific clocks added)
- AI Vendor Risk Assessment (BAA-enhanced)

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Healthcare AI compliance intersects several highly specialized regulatory regimes. Consult qualified healthcare regulatory, FDA, and privacy counsel before relying on this document.
