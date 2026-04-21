function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export async function POST(request) {
  try {
    const { readiness, guardrails, risk, frameworkCount, timestamp } = await request.json()

    if (
      !isNonEmptyString(readiness) ||
      !isNonEmptyString(guardrails) ||
      !isNonEmptyString(risk) ||
      !Number.isInteger(frameworkCount) ||
      frameworkCount < 0 ||
      !isNonEmptyString(timestamp)
    ) {
      return Response.json({ ok: false }, { status: 400 })
    }

    console.log(
      JSON.stringify({
        event: 'assessment_complete',
        readiness,
        guardrails,
        risk,
        frameworkCount,
        timestamp,
      })
    )

    return Response.json(
      { ok: true },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }
}
