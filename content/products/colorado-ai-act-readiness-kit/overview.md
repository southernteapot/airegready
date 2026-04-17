# Colorado AI Act — Readiness Overview

**Regulation:** Colorado AI Act (SB 24-205, codified at C.R.S. § 6-1-1701 et seq.)
**Effective date:** [VERIFY CURRENT EFFECTIVE DATE — amendments have shifted this; confirm with Colorado AG or counsel before relying]
**Enforcement:** Colorado Attorney General only (no private right of action)

> **How to use this document.** Read this overview first. Then work through the companion `checklist.md` to build your compliance posture, and use `impact-assessment-template.md` whenever you deploy or materially change a high-risk AI system. Pair with the AI Acceptable Use Policy, AI Governance Framework, and AI System Inventory.

---

## 1. Why this matters

Colorado became the first U.S. state to pass a broad AI law covering private-sector use of AI in high-stakes decisions about people. The statute applies to anyone who **develops** or **deploys** high-risk AI that affects Colorado consumers — including companies based outside Colorado.

If your AI helps make a "consequential decision" about a Colorado resident — in employment, education, lending, housing, insurance, healthcare, legal services, or government services — this law applies to you. Even if you're a small company. Even if you're using somebody else's AI.

## 2. Who is covered

Two roles, with different obligations:

### Developer

A person (or company) doing business in Colorado who **develops or intentionally and substantially modifies** a high-risk AI system. If you build, fine-tune, or materially customize AI that will be used in consequential decisions, you're a developer.

### Deployer

A person doing business in Colorado who **uses** a high-risk AI system. If you buy an AI product off the shelf and use it to screen resumes, price insurance, decide loan applications, or similar, you're a deployer.

**You can be both.** A company that fine-tunes a vendor's model and then uses it internally is a developer and a deployer of that modified system.

## 3. What is "high-risk AI"

A high-risk AI system is one that **makes, or is a substantial factor in making, a consequential decision**.

### Consequential decisions (the regulated categories)

A decision that has a material legal or similarly significant effect on a Colorado consumer's access to, cost of, or terms of:

- **Education enrollment or education opportunity**
- **Employment or employment opportunity** (hiring, firing, pay, promotion, discipline)
- **Financial or lending service**
- **Essential government service**
- **Healthcare services**
- **Housing**
- **Insurance**
- **Legal service**

### What doesn't count

- AI that performs narrow procedural tasks (spell-check, spam filters, firewalls, calculators, databases, anti-malware, anti-fraud) where it isn't a substantial factor in a consequential decision
- AI used only internally for research
- Certain specific technologies listed in the statute

When in doubt, treat the system as high-risk and document why, rather than assume it's out of scope.

## 4. Developer obligations — at a glance

If you are a developer:

1. **Use reasonable care** to protect consumers from known or reasonably foreseeable algorithmic discrimination arising from the intended uses of the system.
2. **Provide documentation** to every deployer that includes:
   - Summary of the types of data used to train the system
   - Known limitations
   - Purpose and intended uses
   - Benefits
   - How the system was evaluated for performance and mitigation of discrimination
   - Data governance measures
   - Outputs produced
   - Measures deployers should take to avoid algorithmic discrimination
3. **Publish a public statement** on your website summarizing the high-risk AI systems you develop and how you manage discrimination risk.
4. **Update documentation** when you release material changes.
5. **Report to the Colorado AG within 90 days** if you discover or are notified that your system has caused or is reasonably likely to have caused algorithmic discrimination.

## 5. Deployer obligations — at a glance

If you are a deployer:

1. **Use reasonable care** to protect consumers from algorithmic discrimination.
2. **Implement and maintain a risk management policy and program**. The statute gives a rebuttable presumption of reasonable care if you follow the NIST AI Risk Management Framework or ISO/IEC 42001, or equivalent.
3. **Conduct an impact assessment** before first deploying a high-risk AI system, **annually thereafter**, and whenever the system is **intentionally and substantially modified**.
4. **Notify the consumer** that a high-risk AI system will be used to make a consequential decision about them. Provide plain-language statement of purpose and nature of the decision.
5. **If the decision is adverse to the consumer:**
   - Explain the principal reasons
   - Provide an opportunity to **correct personal data** used by the system
   - Provide an opportunity to **appeal** with human review, if technically feasible
6. **Publish a public statement** on your website describing the high-risk AI systems you deploy and how you manage discrimination risk.
7. **Report to the Colorado AG within 90 days** if you discover that your system has caused algorithmic discrimination.

## 6. The small deployer exemption

A deployer may qualify for limited relief from several requirements if, at the time of deployment and during the preceding calendar year, the deployer:

- Has fewer than **50 full-time equivalent employees**
- Does not use its own data to train the high-risk AI system
- Uses the system for an intended purpose disclosed by the developer
- Makes impact assessments available to the AG as provided by the developer

The scope and mechanics of this exemption have been the subject of amendments. **Do not rely on it without a current legal review.**

## 7. Enforcement and penalties

- Enforced exclusively by the **Colorado Attorney General**
- No private right of action (consumers can't sue directly under this statute)
- Violations treated as unfair/deceptive trade practices, subject to Colorado Consumer Protection Act penalties
- **Safe harbor / rebuttable presumption** for organizations that (a) follow a recognized risk management framework, (b) timely cure violations, and (c) comply in good faith

The AG has rulemaking authority. Implementing regulations continue to evolve; re-check the AG's rules before relying on specific procedural steps.

## 8. Interaction with other laws

- **U.S. federal law** — EEOC guidance on AI in hiring, FTC enforcement on AI claims, and sector-specific rules (HIPAA, fair lending, fair housing) still apply alongside CAIA.
- **Other state laws** — California TFAIA, Texas TRAIGA, Illinois AIVIA, NYC Local Law 144, Utah AI Policy Act all have overlapping but distinct requirements. Coordinate compliance — don't run them as separate projects.
- **EU AI Act** — if you also operate in the EU, Annex III high-risk categories overlap significantly but aren't identical. Map once, satisfy both.

## 9. Practical readiness steps (in priority order)

1. **Inventory**: list every AI system you build, buy, or use that could touch a Colorado consumer in a consequential-decision context. Use the AI System Inventory template.
2. **Classify**: for each, decide developer, deployer, or both. Classify whether the system is high-risk.
3. **Map**: tie each high-risk system to a named business owner, data flow, and purpose.
4. **Document**: collect or produce the developer documentation for every high-risk system you use. If a vendor won't provide it, find a vendor that will.
5. **Assess**: run an impact assessment on each high-risk system (use `impact-assessment-template.md`).
6. **Policy**: put a risk management program in place. Pick a framework (NIST RMF or ISO 42001) and document alignment.
7. **Notice**: build consumer-facing notice language into the workflows that trigger consequential decisions. Add adverse-action explanation, data correction, and appeal paths.
8. **Publish**: post the required public statement on your website.
9. **Train**: make sure business owners, HR, legal, and operations know what changes and what to do when consumers exercise rights.
10. **Monitor**: schedule the annual re-assessment; stand up a process for detecting and reporting discrimination.

## 10. Common traps

- **Treating this as just a hiring law.** It isn't. Lending, housing, insurance, healthcare, education, legal, and government services are all covered.
- **Assuming your vendor handles it.** Deployers have independent obligations. The vendor's documentation supports you — it doesn't replace your duties.
- **Skipping the impact assessment because the system is "just a tool".** The statute doesn't care how you describe it. It cares whether it's a substantial factor in a consequential decision.
- **Generic privacy notices.** CAIA notice is specific: it's about the AI use and its role in the decision, not just data processing.
- **No appeal path.** If an adverse decision can't be appealed to a human, you likely can't deploy.

## 11. What we'll help you produce

This kit includes:

- `checklist.md` — a practical readiness checklist you can work through and hand to your internal team
- `impact-assessment-template.md` — a fill-in impact assessment aligned to the statute's required elements

Pair these with:

- AI Governance Framework
- AI System Inventory
- AI Acceptable Use Policy
- AI Vendor Risk Assessment
- Customer AI Disclosure Templates (for consumer notices)

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice and does not create an attorney-client relationship. Laws vary by jurisdiction and change often. The Colorado AI Act has been amended and may be further amended; implementing regulations are evolving. Consult qualified legal counsel before relying on this document for any compliance decision.
