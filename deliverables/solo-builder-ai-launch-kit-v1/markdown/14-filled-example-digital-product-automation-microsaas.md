# Filled Example: Digital Product, Automation, Or Micro-SaaS

Purpose: Show how the kit can apply to a small commercial AI product that is more than a draft, but not an enterprise system.

## When To Use It

Use this example if you sell a digital product, automation, prompt product, lightweight SaaS, support tool, customer workflow, or productized AI service.

## How To Read It

This is fictional. It shows a practical record for a low-stakes support-drafting tool. Your product may need deeper review if it handles sensitive data, regulated topics, automated decisions, or real-world outcomes.

## Example Project

Project: ReplyDraft

Scenario: A solo builder sells a micro-SaaS tool that helps small online shops draft customer support replies from incoming support messages. Users review and send the replies themselves.

The tool is for routine ecommerce support drafting. It does not send replies automatically, decide refunds, process payments, or replace store-owner judgment.

## Project Snapshot Excerpt

| Field | Example answer |
| --- | --- |
| Project name | ReplyDraft |
| Public offer name | ReplyDraft support reply assistant |
| Owner | ReplyDraft Labs |
| Date | 2026-06-08 |
| Stage | Public launch after private beta |
| What the project does | Drafts suggested customer support replies for small online shop owners. |
| Who uses it | Store owners and support assistants at small ecommerce businesses. |
| Who pays for it | Store owners pay a monthly subscription. |
| Main customer promise | Help shops draft routine replies faster while keeping the human in control. |
| Where AI is used | AI reads a support message and drafts a suggested reply based on selected tone and store policy notes. |
| AI model/vendor/tool | Text-generation API through hosted provider. |
| Inputs used by AI | Support message text, selected tone, optional order context, and store policy snippets. |
| Outputs produced | Draft support replies. |
| Human review points | User reviews and edits each reply before sending. No automatic sending in v1. |
| What the AI does not do | It does not send replies, approve refunds, process payments, make chargeback decisions, or decide customer eligibility. |
| User data involved | Customer support message text, customer name if included, order context pasted by user, store policy snippets. |
| Public claims made | Draft replies faster; keep a consistent tone; review before sending. |
| Main risks or unknowns | Users may paste payment details or sensitive customer data; AI may invent refund promises; vendor settings need review. |
| Next review date | 30 days after launch. |

## Claims Review Excerpt

| Original claim | Concern | Evidence or basis | Safer rewrite | Where updated | Publish decision | Date |
| --- | --- | --- | --- | --- | --- | --- |
| Automate customer support instantly. | Implies full automation and no review. | Product drafts only; user sends final reply. | Draft support replies your team can review before sending. | Homepage | Publish after edits | 2026-06-08 |
| Never send the wrong reply again. | Implies guaranteed correctness. | Beta showed some policy mistakes. | Reduce blank-page time with structured reply drafts and review prompts. | Product page | Publish after edits | 2026-06-08 |
| Handles all customer issues for your store. | Too broad and may include sensitive or complex disputes. | Designed for routine ecommerce questions only. | Helps draft routine support replies for common ecommerce questions. | Pricing page draft | Publish after edits | 2026-06-08 |

## Vendor / Model Dependency Excerpt

| Field | Example answer |
| --- | --- |
| Vendor, model, or tool | Hosted text-generation API, model version recorded in app config. |
| API or platform | API integration through server-side app. |
| Data sent to it | Support message text, selected tone, optional order context, and store policy snippets. |
| Data-use settings to verify | Confirm whether support messages are used for vendor training or improvement. |
| Terms/policy links to review | Vendor terms, privacy policy, data-use settings page. |
| Prompt location | Server-side prompt template in app repository. |
| Known limitations | May invent store policy details, misunderstand customer tone, or miss edge cases. |
| Fallback plan | Disable generation and show manual reply editor if API fails. |
| What changes if vendor changes behavior | Re-test sample support messages, update claims/disclosures, and pause launch if output quality drops. |
| Last reviewed date | 2026-06-08. |

## User Data And Privacy Excerpt

| Question | Example answer |
| --- | --- |
| What data does the AI process? | Support message text and any store policy details or order context entered by the user. |
| What should users avoid submitting? | Payment card details, passwords, government IDs, health information, legal details, private customer notes not needed for the reply, and API keys. |
| Are outputs stored? | Draft replies and source messages are stored in the user's workspace until deleted. Retention settings need final review. |
| Are users told AI is involved? | Yes, in onboarding, near the draft button, and in FAQ. |

## User FAQ Excerpt

### Do you use AI?

Yes. ReplyDraft uses AI to draft suggested customer support replies from the message and store policy details you provide.

### Do replies send automatically?

No. ReplyDraft creates a draft. You review, edit, and send the final reply.

### What data does the AI process?

The AI processes the support message and any store policy details you provide. Avoid pasting payment card details, passwords, government IDs, sensitive personal information, or information you do not need for the reply.

### Can I rely on the output?

Treat each reply as a draft. Check order details, store policies, refund promises, shipping timelines, customer tone, and any unusual facts before sending.

### How do I report a problem?

Use the in-app feedback form or email [your support email or contact form] with the draft, the original message, and what looked wrong.

## Incident Log Sample

| Date | Reporter/source | Issue type | What happened | User impact | Data involved | Immediate action | Change made | Follow-up needed | Status | Owner | Review date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-06-18 | Beta user | Incorrect output | Draft promised a refund even though the store policy said store credit only. | User caught before sending. | Support message and policy note. | Asked user to discard draft and confirm policy manually. | Updated prompt to quote relevant policy before drafting. | Re-test refund examples. | Monitoring | Owner | 2026-06-25 |

## Pre-Launch Checklist Excerpt

- [x] Project basics documented.
- [x] Claims reviewed and narrowed.
- [x] Data flow reviewed.
- [x] AI disclosure drafted.
- [x] FAQ drafted.
- [x] Report-a-problem path created.
- [x] Incident log ready.
- [x] Change log ready.
- [x] Human review required before sending replies.
- [ ] Vendor training/data-use setting verified.
- [ ] Add in-product reminder not to paste payment details, passwords, government IDs, or sensitive customer data.
- [ ] Test refund, shipping delay, angry customer, unclear policy, and missing order context examples.
- [ ] Add fallback message for API outage.

Final launch decision: Launch only after vendor setting verification, in-product data warning, fallback message, and five test cases are complete.

## Change Log Excerpt

| Date | Change type | What changed | Why it changed | Risk impact | User-facing impact | Docs updated | Tested or checked by | Next review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-06-08 | Launch baseline | Created public-launch record for support reply drafting tool. | Prepare before launch after private beta. | Unknown | AI disclosure and FAQ ready for onboarding. | Snapshot, claims, data intake, disclosure, FAQ, vendor note | Owner | 2026-07-08 |
| 2026-06-18 | Incident-driven change | Updated refund prompt to quote policy before drafting. | Beta draft suggested a refund against store policy. | Lower | No direct copy change; support FAQ unchanged. | Incident log, change log, vendor note | Owner | 2026-06-25 |

## Review Carefully If

- The product starts sending replies automatically.
- Users paste sensitive customer, payment, health, legal, identity, or credential data.
- ReplyDraft expands into chargeback, credit, insurance, employment, legal, health, or regulated customer decisions.
- Claims start promising accuracy, resolution rates, revenue improvements, or guaranteed customer satisfaction.

Short boundary: This example is educational information, not legal advice. It shows one practical documentation style, not a legal conclusion about any specific product.
