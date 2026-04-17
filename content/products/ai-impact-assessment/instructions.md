# AI Impact Assessment — How to Run One

A short guide to running an Impact Assessment well. The template is in `template.md`.

---

## When to run one

- **Before first deployment** of any Tier 2 or Tier 3 AI system
- **Annually** for every Tier 2 and Tier 3 system
- **Before a material change** — new data sources, expanded user base, new jurisdictions, new use cases, model upgrades with meaningful behavioral changes
- **After any AI incident** involving the system
- **When a new law applies** — e.g., a system that was previously out of scope becomes subject to CAIA or EU AI Act due to jurisdictional expansion

Tier 1 systems can use a short version (Sections 1–4 of the template) done by the business owner with light review.

## Who should run it

- **Owner:** the business owner of the AI system (not an outside consultant)
- **Facilitator:** AI Governance Lead (or delegate)
- **Contributors:** Legal, Privacy, Security, HR (if people-decisions), and at least one user of the system
- **Reviewer:** AI Review Committee

## How long it takes

- **Tier 1**: 1–2 hours of the business owner's time
- **Tier 2**: ~half a day across 2–3 people
- **Tier 3**: 1–3 days, often iterated over 2–4 weeks as evidence is gathered

It feels like a lot. Think of it like a home inspection — the purpose is to find problems early, while they're cheap to fix.

## Do's

- **Write in plain language.** A colleague picking up the document two years from now should understand what the system does, why it was approved, and what conditions were attached.
- **Cite evidence.** "We tested for bias and the results are fine" → weak. "We tested on [DATASET], on [DATE], and found [SPECIFIC RESULT]; link: [DOC]" → useful.
- **Distinguish what you know from what you assume.** Assumptions are fine — label them so you revisit them during review.
- **Record the tradeoffs.** Impact assessments that record only benefits and mitigations, with no tradeoffs, look naive under scrutiny.
- **Include "what could go wrong at 3am".** The worst-case scenario with a plan for it.
- **Put a named human on every mitigation.**

## Don'ts

- **Don't copy the last system's assessment.** Every system has different risks. Template fatigue produces shallow assessments.
- **Don't let the vendor write it.** Vendor documentation is an input, not an answer. You are the one accountable for the use.
- **Don't outsource the judgment.** A consultant can help you think; the accountable business owner has to own the decisions.
- **Don't fake a human-in-the-loop.** "A person will spot-check occasionally" isn't a control; it's a wish.

## What "good" looks like

A strong impact assessment:

1. Tells a coherent story: what the system does, why, who's affected, how the risks are managed.
2. Identifies at least one risk the team hadn't thought of at intake.
3. Names at least one condition or mitigation that would make a reasonable reader nod — not boilerplate.
4. Would be useful to the business owner six months later, even without re-reading the full document.
5. Can be produced in front of a regulator without embarrassment.

## Red flags during review

If you spot any of these, send it back:

- All risks are rated "low" with no rationale
- Mitigations are generic ("follow best practices")
- No named owners for mitigations
- Vendor claims accepted without verification
- No monitoring plan
- No explanation of why the benefits justify the residual risk
- No data on subgroup performance for systems affecting people
- No answer to "what happens if this fails?"

## Retention

- Keep every completed Impact Assessment (and prior versions) for at least **10 years** after the system is retired, or as required by applicable law (EU AI Act: 10 years after placing on the market; Colorado AI Act: verify with counsel; sector rules may require longer).

## Link to other documents

The Impact Assessment is a **companion** to:

- AI Governance Framework (the master policy)
- AI Vendor Risk Assessment (done separately, focuses on the vendor, not the deployment)
- AI System Inventory (the system must be inventoried)
- Colorado AI Act Impact Assessment template (specific to CAIA — often run alongside this one)
- EU AI Act FRIA (specific to Art 27 — often run alongside)

---

## Disclaimer

This document is educational and informational only. It is not legal advice. Consult qualified legal counsel for your jurisdiction and sector.
