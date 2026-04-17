# Texas TRAIGA — Readiness Overview

**Regulation:** Texas Responsible AI Governance Act (HB 149, codified at Texas Bus. & Com. Code ch. 552 and related provisions)
**Effective date:** January 1, 2026 (confirm current status with counsel; dates and implementing rules have evolved)
**Enforcement:** Texas Attorney General; limited private right of action in specific narrow circumstances; sandbox program administered by the Texas Department of Information Resources

> **How to use this kit.** Read this overview first, then `checklist.md` to set up compliance. Pair with the AI Acceptable Use Policy, AI Governance Framework, AI System Inventory, and Customer AI Disclosure Templates. If your company does business in Texas or reaches Texas consumers, this law applies.

---

## 1. Why this matters

Texas passed one of the first broad state AI laws in mid-2025. The final statute is narrower than early drafts — it focuses on prohibited uses of AI (with intent elements) plus disclosure and governance requirements, rather than the Colorado-style impact-assessment regime. But the prohibitions are serious, and the Texas AG has signaled active enforcement.

If any of the following is true, you need a TRAIGA readiness posture:

- You develop or deploy AI that interacts with Texas consumers
- Your AI produces outputs used to make decisions about Texas residents
- You use biometric technologies in Texas
- You provide AI services to Texas state agencies
- You generate or distribute synthetic content (deepfakes, generated media) touching Texas

## 2. Key prohibitions (private sector)

TRAIGA prohibits the intentional development or deployment of AI systems designed to:

- **Manipulate human behavior** in a way that causes physical or financial harm, bypassing reasoned decision-making
- **Exploit vulnerabilities** of a specific group (based on age, disability, or socioeconomic status) to cause harm
- **Engage in unlawful discrimination** against a protected class (Note: under TRAIGA, "algorithmic discrimination" generally requires intent — be aware this differs from Colorado's disparate-impact focus)
- **Produce or distribute sexually explicit content involving minors** (CSAM) or non-consensual intimate imagery of identifiable individuals
- **Conduct social scoring** by government agencies with consequential effects
- **Infer emotion or biometric categorization** in protected contexts without consent

The intent element matters. Compliance programs should document that your development and deployment do not have prohibited intent, and that you have controls to prevent prohibited uses.

## 3. Government-sector obligations

State agencies (and often their contractors) face additional requirements:

- **AI inventory** — publicly maintained list of AI systems in use
- **Disclosure** — when consumers interact with an AI system operated by a state agency, disclosure is required
- **Impact review** — agencies must review their AI uses
- **Prohibited uses** — including social scoring by government

If you are a vendor to Texas state agencies, these obligations flow through in contracts.

## 4. Consumer-facing disclosure

- **Clear and conspicuous notice** required where a consumer would not reasonably expect they are interacting with an AI system
- Disclosure must be at or before the point of interaction
- Applies to chatbots, voice agents, automated communications, and many synthetic-content use cases
- Limited exceptions for obvious uses and certain regulated sectors

## 5. Biometric provisions

TRAIGA tightens rules on biometric identifiers, building on Texas's existing CUBI framework:

- Increased scope for biometric data use in AI contexts
- Consent and notice requirements for many use cases
- Specific prohibitions on untargeted scraping of biometric data from the internet or public recordings to train identification systems

## 6. Sandbox program

Texas created a **regulatory sandbox** administered by DIR to let developers test AI systems under limited liability. Companies admitted to the sandbox can test innovative AI uses while committing to reporting and safety controls. Not a free pass — but a structured way to explore uses that might otherwise sit in a gray area.

## 7. Enforcement

- **Texas AG** is the primary enforcer
- **Civil penalties** up to statutorily specified amounts per violation; materially higher for willful or prohibited conduct
- **Private right of action** is narrow — limited largely to certain biometric and synthetic-content provisions
- **Cure period** exists for certain violations, giving reasonable opportunity to remediate before enforcement

## 8. Interaction with other laws

- **Federal**: FTC unfair/deceptive practices overlap with TRAIGA's deception focus; Section 230 carve-outs continue to evolve
- **Texas CUBI**: biometric identifier law pre-dates TRAIGA; both apply
- **Texas Data Privacy and Security Act (TDPSA)**: privacy law, applies alongside
- **Colorado AI Act, California TFAIA, NYC LL 144**: many companies must comply with multiple; coordinate compliance programs

## 9. Practical readiness steps

1. **Inventory** every AI system that could reach Texas consumers, Texas-based employees, or Texas state agencies
2. **Classify intent and purpose** of each system — can any be characterized as manipulative, exploitative, discriminatory, or falling into a prohibited category? Document the no answers as clearly as the yes answers.
3. **Consumer disclosure** — build or update chatbot, voice, and synthetic-content disclosures to meet "clear and conspicuous" standard
4. **Biometric review** — if you use biometrics, verify consent pathways, data scraping prohibitions, and retention practices
5. **Government contracts** — if you serve Texas state agencies, map contract obligations and update terms
6. **Synthetic content** — label generated audio, image, and video per statute; wire this into your content pipelines
7. **Governance** — document your AI Governance Framework, including risk management processes, to position for enforcement inquiries
8. **Training** — brief product, marketing, engineering, and sales teams on prohibited uses
9. **Monitoring** — wire complaint intake and red-flag detection (e.g., pattern of user reports suggesting manipulation or discrimination)
10. **Sandbox consideration** — if you're building something on the edge of prohibited categories with a legitimate use case, evaluate the sandbox

## 10. Common traps

- **Assuming intent is a safe harbor**. Documented intent matters, but "we didn't mean to" won't work if the design obviously produces the prohibited effect.
- **Treating biometric rules as optional**. Texas CUBI + TRAIGA = one of the strictest biometric regimes in the U.S.
- **Under-disclosing on chatbots**. "AI assistant" at the bottom of the page is not clear and conspicuous.
- **Skipping deepfake labeling**. Generated media obligations apply across many formats.
- **Ignoring the AG's cure notice**. If you receive one, act fast.

## 11. What this kit contains

- `overview.md` — this document
- `checklist.md` — operational checklist for TRAIGA readiness

Pair with:

- AI Governance Framework
- Customer AI Disclosure Templates (chatbot, voice, synthetic content)
- AI System Inventory (tag systems with `texas-exposure: yes`)
- AI Impact Assessment

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. TRAIGA is a relatively new statute with evolving implementing guidance; confirm current requirements with qualified Texas counsel before relying on this document.
