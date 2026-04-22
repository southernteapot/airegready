function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function normalizeString(value) {
  return isNonEmptyString(value) ? value.trim() : null
}

export async function POST(request) {
  try {
    const payload = await request.json()
    const timestamp = normalizeString(payload?.timestamp)
    const frameworkCount = Number.isInteger(payload?.frameworkCount) && payload.frameworkCount >= 0
      ? payload.frameworkCount
      : 0

    if (!timestamp) {
      return Response.json({ ok: false }, { status: 400 })
    }

    const schemaVersion = Number.isInteger(payload?.schemaVersion) && payload.schemaVersion > 0
      ? payload.schemaVersion
      : null

    console.log(
      JSON.stringify({
        event: 'assessment_complete',
        schemaVersion,
        shortTrack: payload?.shortTrack === true,
        entity: normalizeString(payload?.entity),
        location: normalizeString(payload?.location),
        role: normalizeString(payload?.role),
        marketExposure: normalizeString(payload?.marketExposure),
        priority: normalizeString(payload?.priority),
        readiness: normalizeString(payload?.readiness),
        guardrails: normalizeString(payload?.guardrails),
        risk: normalizeString(payload?.risk),
        frameworkCount,
        primaryRecommendation: normalizeString(payload?.primaryRecommendation),
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
