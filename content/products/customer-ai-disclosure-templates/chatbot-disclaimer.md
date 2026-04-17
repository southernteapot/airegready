# Chatbot / Voice Assistant — Opening Disclosure

Short language to present at the start of any AI chat or voice interaction. Required under EU AI Act Art 50 (chatbots) and similar U.S. rules; best practice everywhere.

---

## Chat — opening message (short)

> 👋 Hi, I'm **[BOT NAME]**, an AI assistant from [COMPANY NAME]. I can help with common questions about [SCOPE]. If you'd like to talk to a person, just type "agent" at any time.

## Chat — opening message (longer, for higher-stakes products)

> Hi — I'm **[BOT NAME]**, an AI assistant from [COMPANY NAME].
>
> - I can help with: [SCOPE — e.g., account questions, order status, product info]
> - I can't help with: [EXCLUSIONS — e.g., legal or financial advice, medical decisions]
> - I sometimes get things wrong, so please double-check anything important.
> - For a human team member, type "**agent**" or call us at [PHONE].
>
> By chatting, you agree to our [Terms] and acknowledge our [Privacy Notice]. Your conversation may be reviewed for quality.

## Voice assistant — opening line

> Hi, this is **[BOT NAME]**, an AI assistant calling on behalf of [COMPANY NAME]. This call may be recorded. To speak with a person, say "agent" or press zero.

## Disclosure cadence

- **Every session**: show the opening message at the start.
- **After 24 hours of idle**: re-show on resume.
- **When the AI hands off to a human**: confirm the handoff ("Connecting you to a team member now").
- **When the AI takes over from a human**: confirm again ("I'm an AI assistant taking it from here").

## What to avoid

- Don't give the bot a human-looking name without "AI" or "assistant" nearby.
- Don't style the bot with a photo of a real employee.
- Don't imply the bot has authority to make decisions it can't actually make (refunds, promises, commitments).
- Don't let the bot claim to be human if asked ("are you a real person?" → always answer honestly).

## Handling the "are you a real person?" question

Your bot should be configured to answer honestly and early. Suggested response:

> I'm an AI assistant, not a human — but I can connect you with a person right now if you'd like. Just say "agent."

Test this in your system prompt / guardrails. Many deployments fail this question out of the box.

---

## Disclaimer

This template is educational and informational only. It is not legal advice. Consult qualified legal counsel for your jurisdiction before publishing.
