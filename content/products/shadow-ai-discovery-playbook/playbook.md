# Shadow AI Discovery Playbook

**Purpose:** Find AI tools in use at [COMPANY NAME] that aren't on the approved list, and route them into governance without punishing the people who've been using them.

**Audience:** AI Governance Lead, IT/Security Lead, HR Lead

**Cadence:** First full pass at program stand-up; quarterly light pass; annual deep pass thereafter.

---

## Why this matters

Shadow AI — unapproved AI tools in use for company work — is one of the most common and most underestimated AI risks. The typical pattern:

- An employee finds a tool that solves a real problem
- They sign up with a personal or work email
- They start pasting company data to get work done
- The tool's terms allow training on their inputs — or the vendor is breached
- Nobody at the company knows until something goes wrong

You can't fix shadow AI by policy alone. You have to find it, and the people using it have to want to bring it into the light. This playbook is about running a humane discovery process that finds AI in use **without** turning it into a witch hunt.

## Two principles

1. **Amnesty and adoption, not punishment.** People using shadow AI are almost always trying to do their job better. Your job is to redirect them, not to penalize them. If punishment is the default, they hide harder.
2. **Quality of data over volume.** A short list of real tools in active use is more useful than a long list that includes every trial signup.

## Before you start

- [ ] Publish (or re-publish) the AI Acceptable Use Policy and the approved tools list
- [ ] Publish the process for requesting a new tool — make it easy
- [ ] Announce the discovery effort with an explicit amnesty
- [ ] Confirm tooling is in place to receive reports (form, survey, intake inbox)

## The amnesty message (template)

> **Subject:** We're building a complete list of AI tools we use at [COMPANY NAME] — tell us about yours
>
> Hi team,
>
> We're doing a one-time inventory of the AI tools people use for work at [COMPANY NAME]. This includes tools on your approved list **and** tools you use with a personal account or outside the formal IT process.
>
> **This is not a witch hunt.** If you're using a tool that isn't on the approved list, we want to know so we can either approve it, find an alternative, or improve our policy. No one will be disciplined for reporting a tool in this survey.
>
> Please fill this out by [DATE]:
>
> - [SURVEY LINK]
>
> It takes 5 minutes. Be honest — vague answers don't help us build a good program.
>
> Thanks,
> [AI GOVERNANCE LEAD]

## Discovery techniques

### 1. The survey (primary input)

A short survey to everyone. Questions:

1. What AI tools do you use for work? (List them.)
2. What do you use each tool for?
3. Is it a company account, a personal account used for work, or a shared account?
4. What kind of data do you put into it?
5. Roughly how often do you use it?
6. What would help us most — approving this tool, providing an alternative, or something else?

### 2. SSO / SaaS management telemetry

Ask IT to pull:

- Sign-ins to AI-branded products (OpenAI, Anthropic, Google AI Studio, Perplexity, ElevenLabs, etc.) across company SSO
- Expense reports for AI SaaS subscriptions
- Credit card charges mentioning known AI vendors
- DNS / proxy logs showing AI vendor traffic (respecting employee privacy policies)

This surfaces company-tied usage. It won't surface personal accounts.

### 3. Browser extension inventory

On managed devices, inventory extensions. Many AI tools are browser-based. Common flags:

- Any ChatGPT / Claude / Gemini / Perplexity extension
- AI writing assistants (Grammarly Pro, Copy.ai, Jasper plugins)
- AI meeting bots (Otter.ai, Fireflies, Fathom, etc.)
- AI research tools (Consensus, Elicit, etc.)

### 4. Code repository scan

Search company code repos for:

- AI provider API keys (OpenAI, Anthropic, Google AI, Cohere)
- AI SDK imports (`openai`, `anthropic`, `langchain`, `llamaindex`)
- Vector DB usage (Pinecone, Weaviate, Chroma, Qdrant)
- AI-labeled prompts and system-prompt files

Any of these means AI is embedded somewhere in your codebase and should be inventoried.

### 5. Support / help desk tickets

Review the last 6-12 months of help desk tickets for AI-related terms:

- "ChatGPT" / "Claude" / "Copilot" / "AI"
- "prompt" / "chatbot"
- Integrations and installation requests for AI products

People often ask for help with tools they're already using informally.

### 6. Marketing and content pipelines

Ask marketing, content, and design about:

- Image generation tools (Midjourney, Stable Diffusion variants, DALL·E, Adobe Firefly)
- Video tools (Runway, Descript, HeyGen, Synthesia)
- Writing tools (Jasper, Copy.ai, Claude-based assistants)
- SEO tools that use generative AI under the hood

### 7. Procurement and contracts

Review recent procurement for AI clauses or "AI" in product names. Sometimes AI features are enabled under existing SaaS contracts (Microsoft Copilot, Google Duet, Salesforce Einstein) without anyone treating them as "new AI."

### 8. Hallway conversations

Don't underestimate this. Walk through teams, ask "what AI tools are making your life easier?" Listen without note-taking on the first pass. Follow up later with a formal entry.

## Categorizing what you find

For each tool discovered:

| Field | Value |
| --- | --- |
| Tool name / vendor |  |
| Primary users (team, count) |  |
| Use cases |  |
| Data classes involved |  |
| Company-controlled or personal account |  |
| On approved list? |  |
| Risk tier estimate |  |
| Proposed action (approve, replace, investigate, discontinue) |  |

Feed this into the AI System Inventory — add rows for tools that should be approved; flag tools that need replacement.

## The response

For each tool:

### If the tool is safe and useful → approve

- Run a fast-tracked vendor risk assessment
- Add to the approved list with scope (what it can be used for, what data class)
- Set up company SSO if available
- Notify the users; move them off personal accounts
- Document

### If the tool is risky → replace

- Identify an approved alternative
- Offer help migrating
- Communicate clearly: "We're moving this off [TOOL]; here's what to use instead; here's our help"
- Set a sunset date
- Follow up

### If the tool is prohibited → discontinue

- Communicate clearly why
- Set a hard stop date
- Offer a path to meet the underlying need
- Retain records of the decision

### If the tool is unclear → investigate

- Deep-dive vendor risk assessment
- Engage Legal and Security
- Document the decision either way

## Follow-up

### 30 days after discovery pass

- Approve list updated
- Users communicated to
- Replacements started
- Record of decisions in place

### 90 days

- Replacements completed
- Inventory reflects current state
- Process updated based on what the discovery taught you

### Quarterly light pass

- Short repeat of the survey (3 questions, 2 minutes)
- Telemetry refresh
- New hire and team-change deltas

### Annual deep pass

- Full repeat of the first-time methodology
- Tune discovery techniques based on what's changed

## Running this without damaging trust

- **Stick to the amnesty.** If you punish someone for an honest report, you will never get another honest report.
- **Close the loop.** Tell people what happened to each tool they mentioned.
- **Celebrate the good finds.** "Team Y's find of [TOOL] is now approved org-wide and saving 3 hours/week per person" is the message that gets people to share next time.
- **Don't theater.** Don't announce big numbers ("we found 87 shadow AI tools!") in a way that creates pressure or shame. Treat it as hygiene, not a crisis.

## Metrics to track

- Survey response rate
- Unique tools discovered per pass
- Tools approved / replaced / discontinued
- Average time from discovery to resolution
- Re-use of replacement tools (adoption of alternatives)
- Repeat shadow finds (tools that show up twice → process gap)

---

## Disclaimer

This document is a template for educational and informational purposes only. It is not legal advice.
