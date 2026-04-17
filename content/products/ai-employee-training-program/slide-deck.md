# AI Employee Training — Slide Deck (text content)

Slide-by-slide text content for a ~30-minute session. Bullet points are speaking cues, not the spoken words. Add your own company-specific examples, tool names, and visuals.

---

## Slide 1 — Title

**AI at [COMPANY NAME]: Using it Well, Staying Safe**

A 30-minute practical guide
[YOUR NAME / HR TEAM]
[DATE]

---

## Slide 2 — Why we're here

- AI is now a big part of how we work
- It makes us faster — but it also creates new risks
- This training keeps us benefiting from AI without getting burned
- Spoiler: almost all of this is common sense made explicit

---

## Slide 3 — What we'll cover

1. How AI helps — and where it fails
2. Our policies and where to find them
3. Approved tools
4. The green / yellow / red data rules
5. Prohibited uses
6. When a human must review
7. Disclosure and consent
8. How to ask questions and report concerns

---

## Slide 4 — The good news

AI tools can genuinely help you:
- Summarize long documents in minutes
- Draft emails and memos
- Write and review code faster
- Translate text
- Transcribe meetings
- Brainstorm

We want you to use these tools. Just use them smartly.

---

## Slide 5 — Where AI fails

AI tools:
- Sound confident even when they're wrong
- Invent plausible-looking URLs, citations, and facts
- Leak your inputs to whoever trained the model (sometimes)
- Produce biased or discriminatory outputs if misused
- Can be manipulated by attackers (prompt injection)
- Don't know what they don't know

**You are the quality control. Always.**

---

## Slide 6 — A quick story

[Use a real, low-stakes example from your company or industry. E.g.:]

A team member pasted a customer contract into a public AI chatbot to get a summary. The chatbot's terms of service allowed training on inputs. Now a future version of that model may have been trained on our customer's confidential information.

One paste. One obligation possibly breached. One unhappy customer meeting.

**This is the kind of mistake we're here to prevent.**

---

## Slide 7 — Our policies

Three key documents:

1. **AI Acceptable Use Policy** — the rules
2. **AI Governance Framework** — the bigger picture
3. **Approved Tools List** — what's OK to use, and for what

All three live at [LINK].

Read the one-page summary first. It's at [LINK].

---

## Slide 8 — The five rules

From our one-page summary:

1. **A human is always responsible** — AI helps, doesn't decide
2. **Confidential stays confidential** — don't paste into unapproved tools
3. **Check the output** — verify before you send
4. **Be honest** — disclose AI help where it matters
5. **Follow the law** — when in doubt, ask

---

## Slide 9 — Approved tools (updated [DATE])

| Tool | What you can use it for | What you can't do | Data allowed |
| --- | --- | --- | --- |
| [TOOL 1] | [SCOPE] | [LIMITS] | [DATA CLASS] |
| [TOOL 2] | [SCOPE] | [LIMITS] | [DATA CLASS] |
| [TOOL 3] | [SCOPE] | [LIMITS] | [DATA CLASS] |

Current list: [LINK]

---

## Slide 10 — How to get a new tool approved

Email [APPROVAL CONTACT] with:

- What tool
- What for
- What data you'd put in
- Who would use it

We'll run a short review. Usually a few business days.

Please don't use tools before approval. Even if they're free. Even if "everyone else" does.

---

## Slide 11 — The traffic light

**Green — public info, OK in any approved tool**
- Our public website
- Public industry info
- Public regulations

**Yellow — internal business info, only in tools approved for internal use**
- Internal memos, draft strategies
- Non-sensitive documents
- Aggregated, anonymized data

**Red — don't paste unless the tool is explicitly approved for this class**
- Customer data
- Employee data
- Health / financial / biometric / children's data
- Source code with proprietary logic
- Contracts, pricing, anything under NDA

---

## Slide 12 — Quick scenario

*You're drafting a support response. The customer's email has their full name, account number, and their question. You want to ask AI to help you draft a reply.*

- Into our **approved support AI** (with DPA on file): OK
- Into a **public AI chatbot**: **stop**

What to do instead: use the approved tool, or strip the PII out first, or draft from scratch.

---

## Slide 13 — Another scenario

*You're stuck on a SQL query for an internal analytics project. You want to paste it into a public AI tool to get help.*

- The query uses our **production schema** with table and column names that reveal our business model: **stop**
- The query is generic (`SELECT * FROM users WHERE...`) with no proprietary detail: OK in approved tools

---

## Slide 14 — Prohibited uses

You may **not** use AI at [COMPANY NAME] to:

- Enter confidential or customer data into unapproved tools
- Make final hiring, firing, pay, or disciplinary decisions
- Create deepfakes or voice clones of real people
- Give medical, legal, financial advice to customers without qualified review
- Pretend AI messages are from a human when the customer expected a person
- Bypass the approved tools list
- Install unapproved AI tools on company devices

---

## Slide 15 — When a human must review

You must have human review if the AI output will:

- Go to a customer or the public
- Be used in a decision about a person (hiring, performance, lending, health, etc.)
- Be published on our website or social media
- Be filed with a regulator or a court
- Be cited in a contract or legal document
- Be delivered as professional advice

You are the human. Don't shortcut.

---

## Slide 16 — Disclose when it matters

- **Meeting transcription** — announce and allow opt-out
- **Chatbots** — say "I'm an AI assistant" up front
- **Customer emails** — disclose if the message is from an AI or if AI materially contributed to something the recipient expects to be human-written
- **AI-assisted decisions about people** — notice required before; adverse-action notice if negative

---

## Slide 17 — Pretending to be human

Our AI tools should never claim to be human if asked. If you deploy a chatbot, configure it to answer honestly:

> "I'm an AI assistant, not a human — but I can connect you with a person now."

This isn't optional. Laws in California, Texas, the EU, and elsewhere require it.

---

## Slide 18 — Watch out for: confidential pastes

Real-world habits that cause incidents:

- Pasting an interview transcript to get a summary
- Pasting a contract to get "key terms"
- Pasting customer-support tickets for analysis
- Pasting financial projections for formatting help
- Pasting source code for debugging

All of these can be fine — **if the tool is approved for that data class**. They are not OK by default.

---

## Slide 19 — Watch out for: decisions about people

Real-world habits that cause incidents:

- Ranking resumes with an unreviewed AI score
- Using AI to write performance reviews without oversight
- Using AI to decide who gets a discount, a loan, a promotion
- Using AI to monitor employee productivity

If a decision affects someone's job, money, housing, health, or legal rights — a human decides.

---

## Slide 20 — Watch out for: hallucinations

AI tools invent:

- Case citations that don't exist
- URLs that look right but aren't
- "Studies show..." that are made up
- Names of experts, conferences, products

**If you're going to send it or act on it, verify every factual claim.**

Lawyers have been sanctioned. Companies have retracted earnings figures. Don't be the next headline.

---

## Slide 21 — Security basics

- Don't put secrets (API keys, passwords, tokens) into AI prompts
- Don't install unapproved browser extensions that connect to AI tools
- Keep SSO / MFA on for all approved tools
- Report phishing attempts that reference AI (they exist)

---

## Slide 22 — Shadow AI

"Shadow AI" = using AI tools outside the approved list, with your personal account, for company work.

- It's usually well-intentioned (you're just trying to get work done)
- It still creates the same risks — sometimes worse, because there's no contract with the vendor
- If you're doing it, tell us. We'll either approve the tool or find an alternative. No consequences for telling us.

---

## Slide 23 — Reporting concerns

If you see:

- A tool being used with the wrong data class
- A decision about a person made by AI alone
- A customer being misled about AI
- A bias in a tool's outputs
- An unfamiliar tool connected to company systems

Report to:

- [AI GOVERNANCE LEAD] at [EMAIL]
- Or anonymously at [REPORTING CHANNEL]

---

## Slide 24 — When things go wrong

If something happens — you pasted the wrong thing, a tool behaved unexpectedly, a customer complained — **tell us immediately.**

We have an incident response plan. Reporting fast usually means small cleanup. Hiding it usually means bigger trouble.

No one has been punished for reporting a good-faith mistake quickly.

---

## Slide 25 — Resources

- One-page summary: [LINK]
- Full AI Acceptable Use Policy: [LINK]
- Approved tools list: [LINK]
- Governance framework: [LINK]
- Vendor request form: [LINK]
- Incident reporting: [REPORTING CHANNEL]
- Questions: [AI GOVERNANCE LEAD EMAIL]
- Questions channel: [#ai-questions or similar]

---

## Slide 26 — The bottom line

- Use AI for the boring, repetitive, and creative parts of your day
- Don't use it for the parts that need your judgment
- If in doubt, ask [AI GOVERNANCE LEAD] or [HR LEAD]
- Better a slow question than a fast incident

---

## Slide 27 — What happens next

1. Take the quiz (5 questions, 2 minutes)
2. Sign the AI Acceptable Use Policy Acknowledgment
3. You'll get access to approved tools through [SSO / onboarding]
4. Annual refresher — we'll reach out in 12 months

---

## Slide 28 — Thank you

Questions?

[AI GOVERNANCE LEAD]
[EMAIL]
[SLACK CHANNEL]

*We refresh this training every year. If you'd like something added or clarified, let us know.*
