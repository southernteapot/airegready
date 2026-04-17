# Prompt Engineering Policy

**Company:** [COMPANY NAME]
**Version:** 1.0
**Effective date:** [DATE]
**Owner:** [AI ENGINEERING LEAD / AI GOVERNANCE LEAD]
**Next review:** [DATE + 12 months]

> **How to use this policy.** Prompts are program code. System prompts, prompt templates, retrieval strategies, and guardrail prompts shape AI behavior, introduce risks, and embody IP. This policy treats prompt engineering with the same rigor as software engineering.

---

## 1. Scope

This policy applies to every production or near-production prompt at [COMPANY NAME]:

- **System prompts** (base instructions to the model)
- **Prompt templates** (reusable prompts with variable substitution)
- **Retrieval / context prompts** (including RAG context assembly)
- **Guardrail prompts** (safety and policy layers)
- **Agent system prompts** (for agentic AI)
- **User-interface prompt scaffolding** (auto-prompts, placeholders)

## 2. Principles

1. **Prompts are code** — same change management, review, and testing standards
2. **Prompts are IP** — protect and attribute them
3. **Prompts are data** — they can contain confidential and personal information
4. **Prompts are subject to law** — same liability as code for harmful behavior

## 3. Authoring standards

- **Version controlled**: every prompt lives in source control
- **Reviewed**: prompt changes pass code review before deployment
- **Tested**: every significant prompt has associated test cases (see Section 7)
- **Documented**: purpose, expected behavior, tradeoffs, known limitations
- **Owned**: a named engineer or team owns each prompt

## 4. Quality bar for system prompts

System prompts should:

- Clearly define the AI's role and scope
- State prohibited outputs and topics
- Specify handling of ambiguous or harmful requests
- Define tone, format, and length expectations
- Include safety framing
- Be written to be understood by both the model and human reviewers

Avoid:

- Over-stuffing with trivia or ad-hoc rules
- Conflicting instructions
- Relying on obscure phrasing hoping the model "just knows"
- Burying critical safety rules deep in the prompt

## 5. Prompt templates — variables and substitution

When prompts include variable substitution:

- **Escape** user-supplied values to prevent injection into the template
- **Validate** types, lengths, and content
- **Sanitize** where appropriate
- **Separate** trusted instructions from untrusted user content clearly

Use structured prompting (e.g., clear delimiters) for any prompt that mixes instructions with untrusted content.

## 6. Prompt injection defenses

System prompts alone cannot prevent injection. Defenses include:

- Input validation and sanitization
- Structural separation of instructions vs. user content
- Content classifiers before the model sees untrusted content
- Output filters after the model responds
- Restricted tool access based on content trust level
- Out-of-band safety checks

Document the defense-in-depth for each system.

## 7. Testing

Every significant prompt has associated tests:

- **Functional tests** — expected behavior on representative inputs
- **Safety tests** — refusal behavior on disallowed requests
- **Adversarial tests** — injection attempts, jailbreaks (see Red Team Playbook)
- **Bias tests** — varying only protected-class attributes
- **Edge cases** — empty inputs, malformed inputs, extremely long inputs
- **Regression tests** — previously fixed issues don't return

Run the test suite:

- On every prompt change
- On every model-version change
- On a schedule (nightly for production)

## 8. Model version dependency

Prompts are tightly coupled to model versions. When the underlying model changes:

- Run the full prompt test suite
- Compare behavior against baseline
- Document behavior differences
- Decide: accept, adjust prompt, defer upgrade

Do not auto-upgrade model versions in production without testing.

## 9. Confidential information in prompts

Prompts may contain:

- Business logic and IP
- Customer examples
- Internal processes

Treat prompts as confidential:

- Store in same systems as code (no public repos)
- Access controls
- Don't paste prompts into public AI tools for debugging
- Don't include customer PII in system prompts (put it in context, not the prompt body)

## 10. User-prompted inputs and personal data

User prompts often contain personal data. Handling:

- Classify at intake
- Log with care — consider redaction, short retention, or summary-only logs
- Include user prompts in DSAR workflows (see AI DSAR Playbook)
- Communicate retention in user notice

## 11. Retrieval and context

For RAG / context-augmented prompts:

- Source control includes index definitions and retrieval policies
- Monitor retrieved content for injection (see Agentic AI Policy and Red Team Playbook)
- Verify that retrieval respects data access controls of the requesting user
- Document sources for auditability

## 12. Guardrail prompts

Guardrails are safety and policy layers that wrap the primary model. Requirements:

- Tested against both valid and adversarial inputs
- False-positive and false-negative rates measured and reported
- Escalation path when a guardrail fails
- Do not rely solely on model-based guardrails for safety-critical classifications; combine with classical filters

## 13. Change management

Prompt changes follow the Change Management Process:

- Minor (typos, formatting): technical owner approval; logged
- Moderate (behavior-shaping, retrieval additions): AI Governance Lead async; test suite passes
- Material (safety, tone, scope changes): full committee review; bias + safety + regression tests

Material changes to system prompts that affect user-facing behavior may require user notice.

## 14. Monitoring

In production:

- Sample outputs for periodic review
- Track refusal rates, error rates, user complaints
- Alert on anomalies
- Feed findings back to prompt iteration

## 15. Incident handling

If a prompt-originated incident occurs (harmful output, data leakage, cost spike, bias):

- Trigger Incident Response Plan
- Rapid rollback to prior prompt version
- Add regression test
- Root-cause and post-mortem
- Update the prompt library

## 16. IP considerations

Prompt engineering produces intellectual property. Policy:

- Prompts developed at work are [COMPANY NAME] property (confirm in employee IP assignment agreements)
- Don't incorporate third-party prompts without license
- Don't publish production system prompts externally without legal review
- Document notable prompt design decisions

## 17. Training

- Engineers and PMs writing production prompts receive prompt engineering training
- Security and safety training covers prompt injection and jailbreaks
- Continuous learning — the field evolves fast

## 18. Documentation

For every production system prompt:

- Purpose and intended behavior
- Model(s) it's designed for
- Known limitations and edge cases
- Dependencies on other prompts / context
- Test suite location
- Owner and review cadence

---

## Disclaimer

This document is educational only. It is not legal advice.
