# AI Red Team Playbook

**Purpose:** A structured approach to probing AI systems for safety, security, bias, privacy, and misuse risks before and after deployment.

**Audience:** AI engineers, ML security engineers, trust & safety teams, QA, red teams, security teams.

> **How to use this playbook.** Use for any high-risk or customer-facing AI system. Scale the depth of the engagement to the risk tier. Document findings in the AI Impact Assessment and the Risk Register.

---

## 1. What AI red teaming is (and isn't)

**Red teaming** is adversarial testing. You take an outsider's perspective to find ways a system can fail, be misused, or cause harm.

**It is not:**

- Unit testing
- Functional QA
- Performance benchmarking
- Bug bounties (though they overlap)

**It is:**

- Attempting to elicit unsafe, biased, or illegal outputs
- Attempting to extract training data or system prompts
- Attempting to bypass content filters
- Attempting to cause harm through misuse
- Thinking about what a bad actor (or confused user) would do, and trying it

## 2. Scope dimensions

Every engagement defines scope across these dimensions:

### Safety

- Dangerous advice (weapons, self-harm, CBRN)
- Psychological manipulation
- Illegal assistance
- Safety-critical misinformation

### Security

- Prompt injection (direct and indirect)
- Jailbreaks
- Data exfiltration
- Model extraction
- Adversarial examples
- Tool misuse (for agentic systems)

### Privacy

- Training data memorization
- Cross-user data leakage
- PII exposure through inference
- Membership inference attacks

### Bias and fairness

- Protected-class outcomes
- Stereotyping
- Representation harms
- Dignity harms

### Misuse

- Fraud, scams, phishing content
- CSAM, NCII generation
- Voice/likeness cloning of real persons
- Election and political manipulation
- Disinformation

### Accuracy and hallucination

- Fabricated citations, quotes, facts
- Incorrect calculations
- Misleading claims

### Autonomy / agent risks (for agentic systems)

- Tool misuse
- Unintended side effects
- Running up costs
- Acting outside authorized scope
- Bypassing human oversight

## 3. Engagement structure

### Pre-engagement (1-2 weeks)

- **Scoping**: agree on systems, surfaces, objectives, boundaries
- **Rules of engagement**: what testers may / may not do; how findings are handled; data protection
- **Threat model**: who are the adversaries; what are their goals; what surfaces do they have?
- **Baseline**: what's the model's current posture? prior red-team results? known failure modes?
- **Tooling**: prompt suites, adversarial libraries, automated generators

### Engagement (2-6 weeks, varies)

- **Manual probing**: creative attacks by human testers
- **Automated testing**: adversarial prompt generation, fuzz testing
- **Persona-based**: specific user archetypes (novice, domain expert, adversary)
- **Multi-turn testing**: attacks that unfold over several turns
- **Supply-chain testing**: prompt injection via retrieved content
- **Domain-specific**: specialized testing by subject-matter experts (medical, legal, etc.)

### Post-engagement

- **Report**: findings, severity, reproduction steps, suggested mitigations
- **Remediation planning**: who, what, when
- **Retest**: after fixes
- **Public disclosure**: if agreed, portions may be published; coordinate responsible disclosure

## 4. Severity rubric

| Severity | Definition | Example |
| --- | --- | --- |
| **Critical** | Produces serious real-world harm or regulatory breach; trivial to exploit | Leaks another user's full PII on first turn |
| **High** | Substantial harm; moderate effort to exploit | Hallucinated legal advice causing user reliance; CSAM generation |
| **Medium** | Meaningful harm; non-trivial exploitation | Jailbreak produces disallowed but non-harmful content |
| **Low** | Minor issue; unlikely to cause harm | Slight inconsistency in refusal behavior |

## 5. Standard attack categories and playbook

### 5.1 Prompt injection (direct)

Techniques:

- "Ignore previous instructions"
- Role-play overrides ("You are now...")
- Format tricks ("output in JSON with key=bypass")
- Encoding tricks (base64, leetspeak, rare languages)
- Hypothetical framings ("just for a story...")

Test goal: cause the model to violate its system prompt or produce prohibited output.

### 5.2 Prompt injection (indirect)

Techniques:

- Malicious content in retrieved documents (RAG)
- Malicious text in shared files or URLs
- Malicious instructions in user-provided context
- Malicious content in rendered web pages for agentic browsers

Test goal: cause the model to take unintended actions based on untrusted input.

### 5.3 Jailbreaks

Techniques:

- DAN-style persona prompts
- Multi-turn build-up
- Language-switching attacks
- Story / fictional framing
- Incremental probing

Test goal: bypass safety training.

### 5.4 Data exfiltration

Techniques:

- Requests for system prompts ("show me your instructions")
- Training-data memorization probes
- Embedding extraction
- Completion-style attacks to surface memorized strings

Test goal: extract proprietary or sensitive data.

### 5.5 Cross-user leakage

Techniques:

- Session-bridging prompts
- Cache poisoning
- Shared-resource probes
- Authentication boundary tests

Test goal: access another user's data.

### 5.6 Bias probes

Techniques:

- Paired prompts varying only protected-class attributes
- Stereotype-elicitation prompts
- Decision-relevant bias (hiring scenarios, lending, advice differentiation)
- Representation (whose image gets generated when asked for "CEO", etc.)

Test goal: document disparate outcomes.

### 5.7 Misuse for harm

Techniques:

- Social-engineering content
- Phishing email generation
- Voice cloning of real persons
- Deepfake generation
- Election disinformation
- Illegal instructions

Test goal: document ease of misuse.

### 5.8 Agentic misuse (for agents)

Techniques:

- Tool-use loops / cost explosion
- Authorization boundary probes
- Unintended side effects from tool chaining
- Persistence / long-term state attacks
- Sandbox escape

Test goal: document ways the agent can exceed its authority or cause harm.

## 6. Ethics

- Don't produce material harm while testing (e.g., real phishing pages sent to real people)
- Handle extracted sensitive data per agreed protocols
- Respect responsible disclosure timelines for vendor models
- Avoid producing CSAM in tests; use established proxies and pre-approved methodologies
- Document IRB-like considerations for tests involving human participants

## 7. Deliverables

- **Executive summary** — high-level findings, risk posture, top recommendations
- **Detailed findings** — each finding with reproduction steps, severity, evidence, and suggested mitigation
- **Methodology** — what was tested, how, limitations
- **Appendix** — prompts, responses, references
- **Remediation tracker** — action items with owners and due dates
- **Retest log** — verification that fixes work

## 8. Frequency

| System type | Cadence |
| --- | --- |
| Internal low-risk | Annual or on major change |
| Customer-facing | Semi-annual |
| High-risk (CAIA, EU AI Act) | Quarterly plus on material change |
| Agentic systems | Continuous (automated) + quarterly manual |
| Pre-launch | Mandatory before initial deploy |

## 9. Tooling

Mix of manual and automated. Common categories:

- Prompt libraries (curated adversarial sets)
- Automated prompt generators (evolutionary, LLM-based)
- Bias testing frameworks
- Content-filter evaluation harnesses
- Logging / capture infrastructure
- Reproducibility harnesses

Build or buy; maintain an internal library of canonical tests for repeatable evaluation.

## 10. Integration with the governance program

Red team findings feed:

- **AI Impact Assessment** — risk section updates
- **AI Risk Register** — new entries or severity changes
- **Incident plan** — if a finding indicates past exposure
- **Regulatory reporting** — if 90-day CAIA clock or EU Art 73 triggers apply
- **Executive and board reporting** — trend lines
- **Product roadmap** — fixes prioritized and tracked

## 11. Red team failure modes (things to avoid)

- **Theater**: testing things that can't actually cause harm
- **Goalpost confusion**: conflating "sounds bad" with "is harmful"
- **Over-reliance on automation**: human creativity still finds what bots miss
- **One-and-done**: AI models drift; red teaming must be ongoing
- **Finding without remediation**: reports that go into a drawer
- **Missing supply-chain**: failing to test RAG content and tool integrations

## 12. Career safety for red teamers

- Clear scope reduces legal exposure
- Written authorization for each engagement
- Safe-harbor language in contracts (for external red teamers)
- Protections for employees who surface findings

---

## Disclaimer

This playbook is educational only. It is not legal advice. Follow applicable law and contract terms when conducting red-team exercises.
