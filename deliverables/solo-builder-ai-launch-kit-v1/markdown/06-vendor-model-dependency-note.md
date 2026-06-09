# Vendor / Model Dependency Note

Purpose: Track which AI systems your project depends on and what could change if the vendor, model, API, platform, prompt, or settings change.

## When To Use It

Use this when your project relies on an AI model, API, chatbot, plugin, no-code platform, automation tool, local model, dataset, hosted AI feature, browser extension, or agent workflow.

Update it when you change vendors, models, prompts, data-use settings, pricing assumptions, fallback options, or user-facing behavior.

## What This Produces

You should finish with:

- a record of the AI vendor/model/tool your offer depends on
- links or locations for terms, settings, prompts, and account controls
- known limitations and support risks
- a fallback plan if the tool changes, fails, or becomes inappropriate for the workflow

## Dependency Summary

| Field | Answer |
| --- | --- |
| Project name | [PROJECT NAME] |
| Date | [DATE] |
| Owner | [OWNER] |
| Vendor, model, or tool | [VENDOR / MODEL / TOOL] |
| API or platform | [API / web app / no-code platform / plugin / local model / automation tool / other] |
| Model version | [MODEL VERSION OR UNKNOWN] |
| Feature or workflow using it | [WHERE IT IS USED] |
| Data sent to it | [DATA TYPES] |
| User-facing claim that depends on it | [CLAIM OR NONE] |
| Last reviewed date | [DATE] |
| Next review date | [DATE] |

## Vendor And Settings Review

| Item | Notes | Link or location | Status |
| --- | --- | --- | --- |
| Terms or service terms |  |  | [Reviewed / Needs review / Not applicable] |
| Privacy policy or data policy |  |  | [Reviewed / Needs review / Not applicable] |
| Data-use settings |  |  | [Verified / Needs review / Not applicable] |
| Retention or logging settings |  |  | [Verified / Needs review / Not applicable] |
| Training or improvement settings |  |  | [Verified / Needs review / Not applicable] |
| Account security settings |  |  | [Verified / Needs review / Not applicable] |
| Rate limits or usage limits |  |  | [Reviewed / Needs review / Not applicable] |
| Pricing or billing assumptions |  |  | [Reviewed / Needs review / Not applicable] |
| Uptime, outage, or reliability notes |  |  | [Reviewed / Needs review / Not applicable] |
| Data export or deletion controls |  |  | [Reviewed / Needs review / Not applicable] |

## Prompt And Instruction Locations

| Prompt or instruction | Where it lives | Who can edit it? | Last updated | Needs review? |
| --- | --- | --- | --- | --- |
| System instruction |  |  |  | [Yes / No] |
| Main user prompt template |  |  |  | [Yes / No] |
| Safety or refusal instruction |  |  |  | [Yes / No] |
| Output formatting instruction |  |  |  | [Yes / No] |
| Evaluation or test prompt |  |  |  | [Yes / No] |
| No-code automation step |  |  |  | [Yes / No] |

## Known Limitations

Mark limitations that apply and add any project-specific notes.

- [ ] May hallucinate or invent details.
- [ ] May miss context from uploaded or pasted information.
- [ ] May produce outdated information.
- [ ] May produce biased, offensive, low-quality, or generic output.
- [ ] May fail on long, messy, unusual, or ambiguous inputs.
- [ ] May change behavior after a vendor update.
- [ ] May be unavailable due to outage, rate limit, billing issue, or account suspension.
- [ ] May create outputs that need IP, likeness, privacy, or platform review.
- [ ] Other: [NOTES]

## Fallback Plan

| Question | Answer |
| --- | --- |
| What happens if the vendor is down? |  |
| What happens if the model changes behavior? |  |
| What happens if output quality drops? |  |
| What happens if the price changes? |  |
| What happens if the vendor changes terms, data-use settings, or retention settings? |  |
| Can users still complete the workflow without AI? |  |
| Who decides whether to pause the feature? |  |
| How will users, clients, or customers be told if the change matters to them? |  |

## Vendor Change Impact

If the vendor changes behavior, terms, model quality, pricing, or settings, what would need to change?

| Area | Possible impact | Action if it changes |
| --- | --- | --- |
| Product behavior |  |  |
| User-facing claims |  |  |
| Disclosure or FAQ |  |  |
| Data handling |  |  |
| Pricing or margins |  |  |
| Support process |  |  |
| Testing or review |  |  |
| Change log |  |  |

## Review Carefully If

- You send user data, client data, sensitive data, credentials, payment data, or confidential files to the vendor.
- Your landing page makes claims that depend on a specific model capability.
- The vendor, model, price, terms, data-use setting, retention setting, or prompt changed since your last review.
- There is no fallback if the vendor is unavailable or output quality drops.

Short boundary: This worksheet is educational information, not legal advice. It helps you document vendor/model dependencies and spot questions to review. Review specific legal, privacy, contractual, security, platform, or regulatory obligations with qualified counsel or the appropriate advisor.
