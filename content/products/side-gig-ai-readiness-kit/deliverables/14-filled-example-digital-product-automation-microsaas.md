# Filled Example: Digital Product, Automation, Or Micro-SaaS

Purpose: Show how the kit can apply to a small commercial AI product that is more than a draft, but not an enterprise system.

## When To Use It

Use this example if you sell a digital product, automation, prompt product, lightweight SaaS, support tool, customer workflow, or productized AI service.

## How To Read It

This is fictional. It shows a practical record for a low-stakes support-drafting tool. Your product may need deeper review if it handles sensitive data, regulated topics, or real-world decisions.

## Example Project

Project: ReplyDraft

Scenario: A solo builder sells a micro-SaaS tool that helps small online shops draft customer support replies from incoming support messages. Users review and send the replies themselves.

## Project Snapshot Excerpt

| Field | Example answer |
| --- | --- |
| Project name | ReplyDraft |
| Owner | ReplyDraft Labs |
| Date | 2026-06-08 |
| Stage | Public launch after private beta |
| What the project does | Drafts suggested customer support replies for small online shop owners. |
| Who uses it | Store owners and support assistants at small ecommerce businesses. |
| Who pays for it | Store owners pay a monthly subscription. |
| Where AI is used | AI reads a support message and drafts a suggested reply based on selected tone and store policy notes. |
| AI model/vendor/tool | Text-generation API through hosted provider. |
| Human review points | User reviews and edits each reply before sending. No automatic sending in v1. |
| User data involved | Customer support message text, customer name if included, order context pasted by user, store policy snippets. |
| Outputs produced | Draft support replies. |
| Public claims made | Draft replies faster; keep a consistent tone; review before sending. |
| Main risks or unknowns | Users may paste payment details or sensitive customer data; AI may invent refund promises; vendor settings need review. |
| Next review date | 30 days after launch. |

## Claims Review Excerpt

| Original claim | Concern | Safer rewrite | Where updated | Date |
| --- | --- | --- | --- | --- |
| Automate customer support instantly. | Implies full automation and no review. | Draft support replies your team can review before sending. | Homepage | 2026-06-08 |
| Never send the wrong reply again. | Implies guaranteed correctness. | Reduce blank-page time with structured reply drafts and review prompts. | Product page | 2026-06-08 |
| Handles all customer issues for your store. | Too broad and may include sensitive or complex disputes. | Helps draft routine support replies for common ecommerce questions. | Pricing page draft | 2026-06-08 |

## Vendor / Model Dependency Excerpt

| Field | Example answer |
| --- | --- |
| Vendor, model, or tool | Hosted text-generation API, model version recorded in app config. |
| API or platform | API integration through server-side app. |
| Data-use settings to verify | Confirm whether support messages are used for vendor training or improvement. |
| Terms/policy links to review | Vendor terms, privacy policy, data-use settings page. |
| Prompt location | Server-side prompt template in app repository. |
| Known limitations | May invent store policy details, misunderstand customer tone, or miss edge cases. |
| Fallback plan | Disable generation and show manual reply editor if API fails. |
| What changes if vendor changes behavior | Re-test sample support messages, update claims/disclosures, and pause launch if output quality drops. |
| Last reviewed date | 2026-06-08. |

## User FAQ Excerpt

### Do you use AI?

Yes. ReplyDraft uses AI to draft suggested customer support replies from the message and store policy details you provide.

### Do replies send automatically?

No. ReplyDraft creates a draft. You review, edit, and send the final reply.

### What data does the AI process?

The AI processes the support message and any store policy details you provide. Avoid pasting payment card details, passwords, government IDs, sensitive personal information, or information you do not need for the reply.

### Can I rely on the output?

Treat each reply as a draft. Check order details, store policies, refund promises, shipping timelines, and tone before sending.

### How do I report a problem?

Use the in-app feedback form or email [SUPPORT EMAIL OR FORM] with the draft, the original message, and what looked wrong.

## Incident Log Sample

| Date | Reporter/source | Issue type | Description | User impact | Data involved | Immediate action | Root cause or suspected cause | Change made | Follow-up needed | Status | Owner | Review date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-06-18 | Beta user | Incorrect output | Draft promised a refund even though the store policy said store credit only. | User caught before sending. | Support message and policy note. | Asked user to discard draft and confirm policy manually. | Prompt did not emphasize policy hierarchy. | Updated prompt to quote relevant policy before drafting. | Re-test refund examples. | Monitoring | Owner | 2026-06-25 |

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
- [ ] Add in-product reminder not to paste payment details or passwords.
- [ ] Test refund, shipping delay, angry customer, and unclear policy examples.

Final launch decision: Launch only after vendor setting verification, in-product data warning, and four test cases are complete.

## Review Carefully If

- The product starts sending replies automatically.
- Users paste sensitive customer, payment, health, legal, or identity data.
- ReplyDraft expands into chargeback, credit, insurance, employment, legal, or regulated customer decisions.
- Claims start promising accuracy, resolution rates, revenue improvements, or guaranteed customer satisfaction.

Short boundary: This worksheet is educational information, not legal advice. It is a starting point for documenting your AI project and spotting questions to review. Specific legal, privacy, contractual, or regulatory obligations should be reviewed with qualified counsel or the appropriate advisor.
