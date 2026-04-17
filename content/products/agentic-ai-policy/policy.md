# Agentic AI Policy

**Company:** [COMPANY NAME]
**Version:** 1.0
**Effective date:** [DATE]
**Owner:** [AI GOVERNANCE LEAD]
**Next review:** [DATE + 12 months]

> **How to use this policy.** Agentic AI — AI systems that can plan, act, and use tools autonomously to accomplish goals — create a distinct class of risk beyond traditional generative AI. They can browse, code, buy, send, call, deploy, and iterate on behalf of users. This policy addresses approval, oversight, logging, and boundaries for agentic AI use at [COMPANY NAME].

---

## 1. Scope

This policy covers any AI system that:

- Plans multi-step actions to accomplish a user's goal
- Uses tools (APIs, scripts, browsers, shells, file systems, databases)
- Executes actions that affect external state (sends messages, makes purchases, runs code, files records)
- Operates with limited or no step-by-step human approval
- Iterates based on feedback without direct human intervention

It applies regardless of whether the agent is internal, vendor-provided, or embedded in a larger product.

## 2. Definitions

- **"Agent"** — an AI system within the scope above
- **"Tool"** — any function, API, application, or process the agent can invoke
- **"Authority"** — the set of tools, data, accounts, and actions the agent is permitted to use
- **"Principal"** — the user or system on whose behalf the agent acts
- **"Deploy"** — to make the agent operational in a non-research / non-sandbox environment

## 3. Guiding principles

1. **Humans in the loop at the right points** — not every step, but the right steps
2. **Least privilege** — narrowest set of tools and permissions necessary
3. **Bounded scope** — clear goal and clear stopping conditions
4. **Observability** — every action is logged and reviewable
5. **Reversibility** — changes are reversible where feasible; irreversible actions get extra scrutiny
6. **Human accountability** — a named human is accountable for every deployed agent

## 4. Approval requirements

Before deploying an agent beyond sandbox, obtain:

- Business owner named
- AI Impact Assessment completed
- Security review of the agent's tools and authorizations
- Legal / privacy review for data access and outbound actions
- Executive Sponsor approval for Tier 3 agents

Sandbox is encouraged. Production is deliberate.

## 5. Authority scoping

For each agent, document:

- **Goal**: what the agent is meant to accomplish
- **Boundaries**: out-of-scope tasks
- **Tools**: exact list, with scope per tool
- **Accounts**: which identities the agent may assume
- **Data**: what data the agent may read / write
- **Budget**: cost ceiling (compute, API calls, dollars)
- **Runtime limit**: time ceiling per task
- **Failure behavior**: what happens on error

Default to the narrowest scope that accomplishes the goal.

## 6. Prohibited capabilities

Agents at [COMPANY NAME] may not, absent explicit per-use authorization:

- Make financial commitments (purchases, contracts, wire transfers) above [$ THRESHOLD]
- Send messages to customers or third parties without human review
- Modify production systems or code in ways that can't be rolled back easily
- Access production databases beyond read-only for approved queries
- Perform deletions that can't be recovered
- Sign documents or create legal obligations
- Initiate employment actions (hiring, discipline, termination)
- Take actions in regulated domains (healthcare advice, legal advice, financial advice) without qualified human review
- Perform actions that would violate any [COMPANY NAME] policy or applicable law if done by a human

Specifically prohibited under current law in many jurisdictions (do not attempt to authorize around these):

- Actions that would constitute unauthorized practice of law
- Actions that would constitute unauthorized practice of medicine
- Actions that would violate hiring discrimination law
- Actions that would violate unfair and deceptive practices law

## 7. Human-in-the-loop design

For each agent, define:

- **Pre-action approval** — for what classes of actions a human approves before execution
- **Asynchronous notification** — for what actions a human is notified after the fact
- **Periodic review** — sampled review of autonomous actions
- **Escalation** — when the agent asks for human help

Typical pattern: low-stakes actions autonomous; medium-stakes actions notified; high-stakes actions approved.

## 8. Logging and observability

Every agent action logs:

- Timestamp
- Agent identity and version
- Principal identity
- Tool invoked
- Arguments
- Result (including errors)
- Cost incurred
- Authorization path used

Logs are tamper-evident, retained per policy, and accessible to incident responders.

## 9. Kill switch and circuit breakers

Every deployed agent must support:

- **Kill switch** — an authorized human can stop the agent immediately
- **Rate limits** — requests / actions / dollars per time window
- **Circuit breakers** — automatic stop on anomaly (cost spike, error rate, unexpected tool use)
- **Time-outs** — max runtime per task

Kill switches must be tested regularly (quarterly) and the test logged.

## 10. Prompt-injection defenses

Agents are particularly vulnerable to indirect prompt injection via content they process (web pages, documents, emails, user inputs). Required defenses:

- Treat third-party content as untrusted input
- Restrict tool access based on the trust level of the content being processed
- Avoid tools that can take irreversible actions on untrusted-derived instructions
- Monitor for anomalous tool-use patterns
- Limit the blast radius of any single session

## 11. Outbound communication controls

Agents that can send messages, post content, or otherwise affect third parties:

- Drafts-only by default; human sends
- If autonomous sending permitted, restricted channels (e.g., internal only)
- Templates and content categories pre-approved
- Monitoring for unintended sends
- Recipient list restrictions

## 12. Financial controls

Agents that can spend money:

- Budget limits per task, per day, per week
- Spending categories restricted
- Alerts on threshold breach
- Segregation from billing / reconciliation
- Audit trail

## 13. Autonomy levels

Documented autonomy level for each agent:

| Level | Description |
| --- | --- |
| **L0** | Read-only / observation |
| **L1** | Proposes actions; human executes |
| **L2** | Executes low-stakes actions; reports |
| **L3** | Executes broader scope; escalates high-stakes |
| **L4** | Extensive autonomous action within scope |
| **L5** | Near-complete autonomy (not deployed at [COMPANY NAME]) |

Increases in autonomy level require re-approval.

## 14. Principal-agent conflicts

When an agent acts on behalf of a user, it must:

- Serve the user's stated goals within policy
- Not take actions that benefit [COMPANY NAME] at the user's expense without disclosure
- Not manipulate the user
- Provide the user with meaningful visibility into what it's doing

## 15. Third-party agents

Third-party agents (vendor-provided, external API agents) using our data or acting in our systems:

- Subject to the AI Vendor Risk Assessment
- Contract includes kill switch, logging, incident cooperation
- Authorities narrowly scoped
- Regularly reviewed

## 16. Research and experimentation

Research with agents in controlled sandboxes is encouraged. Guardrails:

- Sandbox isolation from production data and external accounts
- No real customer data in sandbox without approval
- Findings documented
- Graduation to production follows the full approval path

## 17. Incident handling

For agent-originated incidents:

- Kill switch first
- Preserve logs
- Identify scope of actions taken
- Roll back where possible
- Notify affected parties
- Post-incident review focused on authority scoping and oversight gaps

## 18. Training

Operators of agents and principals using them trained on:

- What the agent can and cannot do
- How to interrupt and review
- How to spot anomalies
- How to report concerns

## 19. Review cadence

Each deployed agent reviewed:

- Initially before deploy
- Monthly for the first quarter
- Quarterly thereafter
- After any material change
- After any incident

## 20. Common traps

- Over-scoping authorities because "the agent needs flexibility"
- No human-in-the-loop for irreversible actions
- No kill switch tested
- Letting untrusted content drive tool use
- Forgetting that vendor agents inherit company liability
- Running autonomous agents against production without sandbox graduation

---

## Disclaimer

This document is educational only. It is not legal advice.
