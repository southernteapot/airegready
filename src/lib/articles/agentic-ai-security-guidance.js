export const agenticAiSecurityGuidance = {
  slug: 'agentic-ai-security-guidance',
  title: 'Agentic AI Needs Security Controls, Not Just Prompt Rules',
  description:
    'New NSA, CISA, and allied guidance on agentic AI turns AI-agent governance into a practical security problem: least privilege, secure design, tool controls, monitoring, human accountability, and incident response.',
  category: 'AI Governance',
  categorySlug: 'federal-policy',
  date: '2026-06-04',
  displayDate: 'June 4, 2026',
  readTime: '8 min read',
  featured: true,

  sections: [
    {
      title: null,
      content:
        'AI agents are moving from demos into real workflows. That changes the risk.\n\nA chatbot can produce a bad answer. An agent can read email, query a database, call an API, open a ticket, modify a file, submit a form, message a customer, or trigger another agent. That is why the new joint guidance from NSA, CISA, and allied cybersecurity agencies matters. The guidance treats agentic AI as a security architecture problem, not just a prompt-engineering problem.\n\nThe practical message is blunt: **if an AI system can take action, govern it like a system with privileges.**',
    },
    {
      title: 'What the New Guidance Says',
      content:
        'On April 30, 2026, NSA announced joint guidance titled **Careful Adoption of Agentic AI Services**, co-authored with CISA and cyber agencies from Australia, Canada, New Zealand, and the United Kingdom. The guidance focuses on large-language-model-based agentic AI systems used in government, critical infrastructure, defense, and industry settings.\n\nThe agencies define agentic AI systems as systems composed of one or more agents that rely on an AI model to interpret the world, make decisions, and take actions. Compared with ordinary generative AI, agentic systems can pursue underspecified goals, act autonomously, use tools, maintain memory, and create longer plans.\n\nThat is the governance shift. The risk is not only whether the model hallucinates. The risk is whether an autonomous workflow with credentials and tools does something harmful faster than people can understand, approve, or stop.',
    },
    {
      title: 'The Five Risk Categories',
      content:
        'The guidance groups agentic AI security risk into five practical categories.',
      list: [
        '**Privilege risks.** Over-privileged agents can turn a single compromise or prompt injection into a broader incident because the agent already has access to systems, data, tools, or workflows.',
        '**Design and configuration risks.** Poor architecture, weak defaults, excessive third-party permissions, static access controls, or unclear trigger conditions can create failure paths before the agent ever runs.',
        '**Behavior risks.** Agents can misinterpret goals, optimize the wrong metric, bypass instructions, pursue unexpected strategies, or behave differently in real use than in tests.',
        '**Structural risks.** Multi-agent systems, external tools, memory stores, data sources, and downstream integrations create interconnected attack surfaces and cascading failure paths.',
        '**Accountability risks.** Agentic systems can make it hard to reconstruct who approved an action, why it happened, what data influenced it, and who had authority to stop it.',
      ],
    },
    {
      title: 'Why Prompt Rules Are Not Enough',
      content:
        'Many teams respond to agent risk by writing better prompts. That is useful, but insufficient.\n\nThe guidance gives a simple example: a malicious instruction embedded in a phishing email could manipulate an email-monitoring agent into downloading malware. The problem is not only the model. It is the surrounding system: the email source, the tool the agent can call, the permissions assigned to the agent, the validation layer, and the monitoring that should catch unexpected action.\n\nThis is why agentic AI breaks lightweight governance. A policy that says "do not do dangerous things" is not a security boundary. A system prompt is not identity and access management. A disclaimer is not an approval gate. If an agent can invoke tools, the controls need to live around the tools, identities, logs, and workflows too.',
    },
    {
      title: 'The MCP Warning Is a Sign of What Comes Next',
      content:
        'NSA followed the agentic AI guidance with a May 20, 2026 cybersecurity information sheet on the Model Context Protocol, or MCP. MCP is used to connect AI systems to services and tools. That makes it attractive for agent workflows and risky for the same reason.\n\nNSA warned that MCP adoption is accelerating in business, finance, legal, software development, and other sectors, including sensitive tasks involving personal information. The agency said MCP can simplify integration but requires careful implementation because of risks around serialization, trust boundaries, dynamic tool invocation, implicit trust relationships, context sharing, and agent misuse.\n\nThe important point is broader than MCP. Agent security is not one component. It is a chain. Weak assumptions in data sources, tool servers, identity systems, memory, prompts, approvals, or logs can compound into an incident.',
    },
    {
      title: 'A Minimum Control Set for AI Agents',
      content:
        'Before connecting an agent to real systems, teams should be able to answer basic control questions. If the answer is unknown, the agent is not ready for production.',
      list: [
        '**Owner.** Who owns the agent, approves changes, reviews incidents, and has authority to disable it?',
        '**Purpose.** What exact job is the agent allowed to do, and what jobs are outside scope?',
        '**Data boundary.** What data can it read, store, summarize, transmit, or write back?',
        '**Tool boundary.** What tools can it call, under what conditions, and with what rate limits or allowlists?',
        '**Credential model.** Does it use a named agent identity, temporary credentials, least privilege, and revocation paths?',
        '**Human approvals.** Which actions require approval before execution, especially writes, deletes, purchases, access changes, customer messages, or production changes?',
        '**Logging.** Can the team reconstruct inputs, retrieved context, tool calls, outputs, approvals, errors, and final actions?',
        '**Containment.** How do you pause, roll back, disable tools, revoke credentials, quarantine outputs, or stop a cascading workflow?',
        '**Testing.** Has the system been tested for prompt injection, tool misuse, data exfiltration, goal drift, unexpected autonomy, and vendor-component failure?',
      ],
    },
    {
      title: 'Vendor Due Diligence Has to Change',
      content:
        'A lot of organizations will not build their own agent platform. They will buy it from a SaaS vendor, workflow automation vendor, customer-support platform, productivity suite, or cloud provider. That does not remove accountability.\n\nProcurement questions should move beyond "does this use AI?" and into operational controls.',
      list: [
        '**Agent identities.** Does each agent have a distinct identity in logs and access-control systems?',
        '**Permission design.** Can permissions be scoped per agent, task, tool, data source, tenant, and time window?',
        '**Tool governance.** Can administrators approve, deny, rate-limit, or sandbox tool calls?',
        '**Audit logs.** Are prompts, retrieved context, tool calls, approvals, and final actions exportable for review?',
        '**Failure handling.** What happens when the model refuses, hallucinates, loses context, loops, calls the wrong tool, or conflicts with another agent?',
        '**Incident support.** Will the vendor preserve evidence, support investigation, and disclose security-relevant agent behavior?',
        '**Data handling.** Are prompts, files, memory, logs, and tool outputs used for training, retained, encrypted, or shared with subprocessors?',
      ],
    },
    {
      title: 'A Simple Agent Launch Gate',
      content:
        'Agent governance does not have to start with a giant framework. A practical launch gate can prevent most avoidable mistakes.',
      table: {
        headers: ['Gate', 'Question', 'Minimum Evidence'],
        rows: [
          [
            'Scope',
            'Is the agent limited to a clear, low-risk task?',
            'Use-case summary, prohibited actions, and owner approval.',
          ],
          [
            'Access',
            'Does the agent have the least privilege needed?',
            'Access review, tool list, credential design, and revocation path.',
          ],
          [
            'Human control',
            'Can humans approve, pause, override, and stop it?',
            'Approval map, kill switch, escalation path, and rollback process.',
          ],
          [
            'Monitoring',
            'Can unusual behavior be detected and reconstructed?',
            'Logs for inputs, context, tool calls, approvals, outputs, and actions.',
          ],
          [
            'Testing',
            'Has the agent been tested against realistic misuse?',
            'Prompt-injection, tool-misuse, data-leak, and failure-mode tests.',
          ],
          [
            'Incident response',
            'Does the incident plan cover agent failure and agent compromise?',
            'Playbook, contacts, evidence-retention steps, and vendor support path.',
          ],
        ],
      },
    },
    {
      title: 'Where to Start',
      content:
        'For most businesses, the right first move is not to ban agents or deploy them everywhere. It is to put them in bounded, observable workflows.',
      list: [
        '**Start with low-risk tasks.** Summaries, drafts, internal triage, research support, and read-only workflows are safer first deployments than production writes or financial approvals.',
        '**Use read-only before write access.** Let the agent recommend before it acts. Add write permissions only after logs, tests, and approval gates are working.',
        '**Avoid sensitive systems at first.** Do not start with HR decisions, medical workflows, legal advice, customer money movement, identity changes, or production infrastructure changes.',
        '**Keep humans accountable.** Name the owner, approver, monitor, incident lead, and shutdown authority before launch.',
        '**Version prompts and policies.** Treat prompts, tool instructions, allowlists, and escalation rules as controlled artifacts, not informal chat text.',
        '**Review after real use.** Compare expected behavior to actual tool calls, user overrides, error patterns, and incidents before expanding scope.',
      ],
    },
    {
      title: 'The Bottom Line',
      content:
        'Agentic AI is not just a more convenient chatbot. It is software with goals, tools, memory, and authority. That makes it useful. It also makes it part of the security perimeter.\n\nThe new NSA, CISA, and allied guidance is valuable because it avoids the usual AI abstraction. It points teams back to concrete controls: least privilege, secure design, third-party management, monitoring, human oversight, accountability, and incident response.\n\nThe core rule is straightforward: if an AI agent can act on behalf of the business, the business needs to know what it can access, what it can do, who approved it, how to reconstruct what happened, and how to stop it.',
    },
  ],

  takeaways: [
    'NSA, CISA, and allied cyber agencies released joint guidance on careful adoption of agentic AI services in April 2026.',
    'Agentic AI differs from ordinary generative AI because it can use tools, memory, goals, planning workflows, and autonomous actions.',
    'The guidance identifies five risk categories: privilege, design and configuration, behavior, structural, and accountability risks.',
    'Prompt rules are not enough because agent risk also lives in identities, permissions, tools, data sources, memory, logs, and workflows.',
    'NSA separately warned that MCP-based agent workflows need careful security design around trust boundaries, dynamic tool invocation, context sharing, and agent misuse.',
    'A practical launch gate should cover scope, access, human control, monitoring, testing, and incident response before agents touch production systems.',
  ],

  sources: [
    {
      title: 'NSA - Guidance on agentic artificial intelligence systems',
      url: 'https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4475134/nsa-joins-the-asds-acsc-and-others-to-release-guidance-on-agentic-artificial-in/',
    },
    {
      title: 'Joint guidance PDF - Careful Adoption of Agentic AI Services',
      url: 'https://media.defense.gov/2026/Apr/30/2003922823/-1/-1/0/CAREFUL%20ADOPTION%20OF%20AGENTIC%20AI%20SERVICES_FINAL.PDF',
    },
    {
      title: 'New Zealand NCSC - Careful Adoption of Agentic AI Services',
      url: 'https://www.ncsc.govt.nz/protect-your-organisation/careful-adoption-of-agentic-ai-services/',
    },
    {
      title: 'UK NCSC - Thinking carefully before adopting agentic AI',
      url: 'https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai',
    },
    {
      title: 'NSA - Model Context Protocol security design considerations',
      url: 'https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/nsa-releases-security-design-considerations-for-ai-driven-automation-leveraging/',
    },
    {
      title: 'NSA PDF - MCP security design considerations for AI-driven automation',
      url: 'https://www.nsa.gov/Portals/75/documents/Cybersecurity/CSI_MCP_SECURITY.pdf?ver=bmgiSbNQLP6Z_GiWtRt6bg%3D%3D',
    },
    {
      title: 'NCSC - Guidelines for secure AI system development',
      url: 'https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development',
    },
  ],

  relatedArticles: [
    'white-house-ai-cybersecurity-order',
    'minimum-viable-guardrails',
    'ai-incident-response',
    'ai-vendor-due-diligence',
    'shadow-ai-compliance',
  ],
  relatedRegulations: ['federal-policy', 'nist-ai-rmf', 'sector-rules'],
}
