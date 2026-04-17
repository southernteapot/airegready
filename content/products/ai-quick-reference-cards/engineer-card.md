# AI Quick Reference — Engineers

**Keep this handy.** The full policy is at [LINK]. When in doubt, ask [AI GOVERNANCE LEAD].

---

## The 5 rules

1. A human is accountable for the work — AI assists
2. Confidential stays confidential — don't paste into unapproved tools
3. Check the output — AI writes plausible wrong answers
4. Be honest about AI involvement when it matters
5. Follow the law — when in doubt, ask

---

## Green / Yellow / Red

- **Green** — Public code, open-source libraries, public docs → any approved tool
- **Yellow** — Internal non-sensitive code, architecture sketches → approved tools only
- **Red** — Proprietary business logic, secrets, customer data, auth code, production DB schemas → **stop. Ask first.**

---

## What you can do

- Use approved code assistants for refactoring, commenting, test generation
- Debug public-pattern problems
- Generate boilerplate (CRUD handlers, config, migrations)
- Translate between languages (Python ↔ Go, SQL dialects)
- Learn APIs and libraries
- Document APIs and internal systems

---

## What you can't do

- Paste secrets (API keys, tokens, creds, private keys) into any AI tool
- Paste customer data or PII without explicit approval
- Paste proprietary source code into free-tier public AI tools
- Ship AI-generated code without reviewing it
- Commit AI-written code that you don't understand
- Install AI IDE plugins outside the approved list
- Pipe production logs through AI without PII redaction

---

## Engineer-specific scenarios

**"Can I paste this error trace into a chatbot?"** → If it contains secrets, stack frames with customer data, or proprietary file paths, no. Generic errors, yes.

**"Can I use AI to generate my PR description?"** → Yes. Review before posting.

**"Can I use AI to review a coworker's PR?"** → For a first pass on public patterns (style, obvious bugs), yes. For final review of business logic, you review it yourself.

**"AI wrote this function and the tests pass."** → Read the function. Do you understand what it does? If not, don't ship it. Tests can pass for the wrong reasons.

**"There's a cool new AI dev tool on my personal laptop. Can I use it for work?"** → Not until it's approved. Submit a request to [APPROVAL CONTACT]; takes a few days.

**"I think the model hallucinated this library function."** → Likely. Check the official docs. Never paste imaginary function names into your code.

---

## Security notes

- Enable SSO for approved tools
- Never share your AI tool credentials
- Report suspected prompt injection / data exfiltration through approved channels
- Redact PII before pasting logs anywhere

---

## Who to ask

- Policy: [AI GOVERNANCE LEAD] — [EMAIL]
- Tool approval: [APPROVAL CONTACT] — [EMAIL]
- Security issues: [SECURITY LEAD] — [EMAIL]
- Slack: [#ai-questions / #eng-ai]
