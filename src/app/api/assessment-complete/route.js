export async function POST(request) {
  try {
    const { riskLevel, score, regulationCount, timestamp } = await request.json()

    // Log to server console (visible in Cloudflare Pages function logs)
    console.log(
      JSON.stringify({
        event: 'assessment_complete',
        riskLevel,
        score,
        regulationCount,
        timestamp,
      })
    )

    return Response.json({ ok: true })
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }
}
