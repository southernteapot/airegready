// TODO: Connect to a real email service (Buttondown, Resend, Mailchimp, etc.)
// or a database (D1, KV, etc.) for persistent storage. Right now this only
// logs the email server-side and returns success.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const runtime = 'edge'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return Response.json(
        { error: 'Email is required.' },
        { status: 400 }
      )
    }

    const trimmed = email.trim().toLowerCase()

    if (!EMAIL_RE.test(trimmed)) {
      return Response.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // TODO: Replace console.log with actual storage / email-service call.
    // Examples:
    //   - Cloudflare KV:  await env.NEWSLETTER_KV.put(trimmed, JSON.stringify({ subscribedAt: new Date().toISOString() }))
    //   - Buttondown API: await fetch('https://api.buttondown.email/v1/subscribers', { ... })
    //   - Resend:         await fetch('https://api.resend.com/audiences/{id}/contacts', { ... })
    console.log(`[newsletter] New subscriber: ${trimmed}`)

    return Response.json(
      { success: true, message: 'Thanks for subscribing!' },
      { status: 200 }
    )
  } catch {
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
