# AI in Insurance — Compliance Kit Overview

**Regulatory landscape:**

- **NAIC Model Bulletin on the Use of AI Systems by Insurers** — adopted in whole or in part by many states
- **State Insurance Departments** — primary regulators (California DOI, New York DFS, Texas TDI, Colorado DOI, and others)
- **Unfair Discrimination statutes** — state-specific
- **Rate filing and actuarial standards** — state DOI approval processes
- **Colorado SB 21-169** — governance and testing of insurance AI systems
- **New York DFS Circular Letter 7** and Part 500 (cybersecurity for insurers)
- **EU AI Act** — life/health insurance risk assessment is Annex III high-risk
- **Colorado AI Act** — insurance is a consequential-decision category
- **GLBA / state privacy** — policyholder data
- **HIPAA** — where health insurance is involved
- **Fair Credit Reporting Act** — when credit-based insurance scoring
- **ADA / fair housing** — where applicable

> **How to use this kit.** For life, health, auto, home, commercial, and specialty insurers; reinsurers; insurtech MGAs and MGUs; and insurance agencies/brokers using AI. Pair with the AI Governance Framework, AI Impact Assessment, and AI Data Governance Policy.

---

## 1. Why insurance AI is different

Insurance is built on classification. AI supercharges classification, and state regulators have been quick to frame clear guardrails.

The NAIC Model Bulletin is the single most important document to understand. Even in states that haven't adopted it verbatim, examiners are citing it. The Bulletin expects a written AI program, governance, documentation, testing, third-party oversight, and consumer fairness — for every material use of AI.

Consequences of non-compliance include rate-filing rejection, cease-and-desist orders, restitution to policyholders, public enforcement actions, and — increasingly — private class actions under state unfair discrimination statutes.

## 2. AI use cases by line and function

Each use case has its own regulatory touchpoints.

### Underwriting / rating

- Pricing, tiering, acceptance / rejection
- Regulated under rate filing and unfair discrimination
- Bias testing and explainability required

### Marketing and distribution

- AI for prospect targeting and lead scoring
- Can implicate unfair discrimination if protected classes disadvantaged
- State do-not-call, TCPA, and marketing rules apply

### Claims

- AI for triage, severity estimation, fraud detection, automated adjudication
- Unfair claims practices laws apply
- Explainability for denials; path to human review

### Customer service

- Chatbots and voice agents
- State bot disclosure rules
- Misrepresentation risk if the AI gives incorrect product information

### Fraud

- AI models flag suspicious claims
- False positives affect real claimants; remedy paths required
- Often the hardest area for explainability

## 3. NAIC Model Bulletin essentials

The Bulletin expects insurers to:

1. **Adopt a written AI program** ("AI Program") with board-level oversight
2. **Govern** the AI Program with policies, procedures, and responsibility assignment
3. **Document** every material AI system (purpose, data, method, testing, limitations)
4. **Test** for accuracy, robustness, reliability, bias, unfair discrimination, and consumer outcomes
5. **Monitor** in production and retrain/retire when thresholds are breached
6. **Manage third-party AI** with contracts and oversight equal to internal systems
7. **Document decisions and errors** sufficient to reconstruct any AI-assisted outcome
8. **Respond to market conduct exams** — examiners will request the AI Program document, testing records, and a walk-through

Multiple states now conduct AI-specific market conduct exams.

## 4. Colorado SB 21-169

Colorado requires insurers using AI and external consumer data in life insurance underwriting to:

- Adopt a formal risk management framework
- Test for unfair discrimination across protected classes
- Provide a written narrative of the risk management program
- Comply with specific reporting to the Colorado DOI

The rule is a useful blueprint for what other state DOIs are likely to replicate.

## 5. New York DFS expectations

- Circular Letter 7 (2024) on AI use in insurance underwriting and pricing expects governance, fairness testing, third-party oversight, and transparency
- Part 500 cybersecurity rules apply to insurer AI systems (model theft, training data exposure are covered risks)

## 6. EU AI Act — insurance

Life and health insurance risk assessment are explicitly Annex III high-risk. Obligations:

- Risk management, data governance, technical documentation, logs, transparency, human oversight, accuracy/robustness/cybersecurity
- Deployer Fundamental Rights Impact Assessment (Art 27)
- CE marking and EU database registration for providers

Annex III does not cover non-life insurance by default, but other high-risk categories may catch non-life uses if framed as creditworthiness or essential-services access.

## 7. Fair lending / credit-based insurance scoring

- FCRA applies when consumer reports are used (credit-based insurance scoring)
- Some states restrict or prohibit credit-based scoring (e.g., California, Hawaii)
- Adverse-action notices required with specific reasons
- Bias from credit data carries forward into AI outputs

## 8. Data governance and sensitive attributes

- Prohibited to use protected class as a rating factor; proxies equally prohibited
- Some jurisdictions permit/require processing of protected class for bias testing under strict safeguards
- Health data triggers HIPAA (group health) and additional state protections
- Genetic information has specific protections (GINA)

## 9. Claims AI

Special attention:

- Unfair claims practice laws require prompt, fair handling
- AI denials must be explainable
- Pattern of denials showing bias can trigger market conduct action
- Fraud-flagging AI must include remedy for false positives

## 10. Customer-facing AI

- **Chatbots and voice agents** disclose AI status per EU AI Act Art 50 / state bot laws
- **Agent-assist AI** — quality depends on human agent review; errors flow to the insurer
- **Claims-status AI** — must be accurate
- **Misrepresentation** by AI is attributable to the insurer

## 11. Practical readiness path

1. **AI System Inventory** for every insurance use case
2. **Written AI Program** meeting NAIC expectations
3. **Governance**: board reporting, senior management AI committee, three-lines structure
4. **Testing** — accuracy, bias, unfair discrimination, drift — with documented methodology
5. **Model documentation** sufficient to reconstruct decisions and support rate filings
6. **Vendor management** — contracts, oversight, monitoring
7. **Policy/claim holder notice** where consequential decisions made
8. **Adverse action / denial** workflows with specific reasons
9. **Incident response** with DFS/DOI notification logic
10. **Market-conduct-exam readiness** — records and walk-through ready

## 12. Common traps

- **Skipping bias testing** on underwriting AI because "the model doesn't see race"
- **Relying on vendor testing** without independent review
- **Credit-based insurance scoring** without state-by-state compliance
- **Fraud AI without a remedy path** for false positives
- **Rate filings missing AI disclosure**
- **Chatbots giving incorrect product info** and binding the insurer
- **Market conduct exam surprise** — no AI Program document available

## 13. Kit contents

- `overview.md` — this document
- `checklist.md` — operational readiness checklist

Pair with AI Governance Framework, Impact Assessment, Financial Services Kit (if overlap), and Healthcare Kit (for health insurers).

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice. Insurance AI compliance is highly state-specific. Consult qualified insurance regulatory counsel before relying on this document.
