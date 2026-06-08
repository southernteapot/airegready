# Vendor / Model Dependency Note

Purpose: Track which AI systems your project depends on and what could change if the vendor, model, API, platform, or settings change.

## When To Use It

Use this when your project relies on an AI model, API, chatbot, plugin, no-code platform, automation tool, local model, dataset, or hosted AI feature.

Update it when you change vendors, models, prompts, data-use settings, pricing assumptions, fallback options, or user-facing behavior.

## How To Fill It Out

Record practical facts. Link to the vendor pages you rely on. If you have not reviewed something yet, write Needs review rather than guessing.

## Dependency Summary

| Field | Answer |
| --- | --- |
| Project name | [PROJECT NAME] |
| Date | [DATE] |
| Owner | [OWNER] |
| Vendor, model, or tool | [VENDOR / MODEL / TOOL] |
| API or platform | [API, web app, no-code platform, plugin, local model, other] |
| Model version | [MODEL VERSION OR UNKNOWN] |
| Feature or workflow using it | [WHERE IT IS USED] |
| Last reviewed date | [DATE] |
| Next review date | [DATE] |

## Vendor And Settings Review

| Item | Notes | Link or location | Status |
| --- | --- | --- | --- |
| Terms or service terms |  |  | [ ] Reviewed [ ] Needs review |
| Privacy policy or data policy |  |  | [ ] Reviewed [ ] Needs review |
| Data-use settings |  |  | [ ] Verified [ ] Needs review |
| Retention or logging settings |  |  | [ ] Verified [ ] Needs review |
| Training or improvement settings |  |  | [ ] Verified [ ] Needs review |
| Security or account settings |  |  | [ ] Verified [ ] Needs review |
| Rate limits or usage limits |  |  | [ ] Reviewed [ ] Needs review |
| Pricing or billing assumptions |  |  | [ ] Reviewed [ ] Needs review |
| Uptime or reliability notes |  |  | [ ] Reviewed [ ] Needs review |

## Prompt And Instruction Locations

| Prompt or instruction | Where it lives | Who can edit it? | Last updated |
| --- | --- | --- | --- |
| System instruction |  |  |  |
| Main user prompt template |  |  |  |
| Safety or refusal instruction |  |  |  |
| Output formatting instruction |  |  |  |
| Evaluation or test prompt |  |  |  |

## Known Limitations

List limitations you already know about.

- [ ] May hallucinate or invent details.
- [ ] May miss context from uploaded or pasted information.
- [ ] May produce outdated information.
- [ ] May produce biased, offensive, or low-quality output.
- [ ] May fail on long, messy, or unusual inputs.
- [ ] May change behavior after a vendor update.
- [ ] May be unavailable due to outage, rate limit, or billing issue.
- [ ] Other: [NOTES]

## Fallback Plan

| Question | Answer |
| --- | --- |
| What happens if the vendor is down? |  |
| What happens if the model changes behavior? |  |
| What happens if the price changes? |  |
| What happens if the vendor changes data-use terms or settings? |  |
| Can users still complete the workflow without AI? |  |
| Who decides whether to pause the feature? |  |

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

## Review Carefully If

- You send user data, client data, sensitive data, or confidential files to the vendor.
- Your landing page makes claims that depend on a specific model capability.
- The vendor, model, price, terms, or data-use setting changed since your last review.
- There is no fallback if the vendor is unavailable or output quality drops.

Short boundary: This worksheet is educational information, not legal advice. It is a starting point for documenting your AI project and spotting questions to review. Specific legal, privacy, contractual, or regulatory obligations should be reviewed with qualified counsel or the appropriate advisor.
