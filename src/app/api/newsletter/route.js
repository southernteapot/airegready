const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const BUTTONDOWN_API_URL = 'https://api.buttondown.com/v1/subscribers'

async function subscribeViaButtondown(email) {
  const apiKey = process.env.BUTTONDOWN_API_KEY

  if (!apiKey) {
    console.log(`[newsletter] BUTTONDOWN_API_KEY not set — logging only: ${email}`)
    return { success: true, message: 'Thanks for subscribing!' }
  }

  const res = await fetch(BUTTONDOWN_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  if (res.status === 201) {
    return { success: true, message: 'Thanks for subscribing!' }
  }

  if (res.status === 409) {
    return { success: true, message: "You're already subscribed!" }
  }

  // Try to extract an error message from the Buttondown response
  let detail = 'Unable to subscribe. Please try again.'
  try {
    const data = await res.json()
    if (data.detail) {
      detail = data.detail
    } else if (Array.isArray(data.email) && data.email.length > 0) {
      detail = data.email[0]
    }
  } catch {
    // Buttondown returned non-JSON; use the default message
  }

  return { success: false, status: res.status, error: detail }
}

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

    const result = await subscribeViaButtondown(trimmed)

    if (result.success) {
      return Response.json(
        { success: true, message: result.message },
        { status: 200 }
      )
    }

    // Buttondown rejected the request (invalid email, rate limit, etc.)
    return Response.json(
      { error: result.error },
      { status: result.status >= 400 && result.status < 500 ? 400 : 502 }
    )
  } catch {
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
