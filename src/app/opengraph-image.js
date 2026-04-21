import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #f6efe6 0%, #fffaf5 48%, #efe3d3 100%)',
          color: '#20262B',
          padding: '56px',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 16,
                background: '#9E7A56',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
              }}
            >
              AI
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>AIRegReady</span>
              <span style={{ fontSize: 18, fontWeight: 500, color: '#5B6770' }}>
                Plain-English AI regulation guidance
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              fontSize: 18,
              color: '#6A4F33',
            }}
          >
            <span style={{ padding: '8px 14px', borderRadius: 999, background: 'rgba(158,122,86,0.12)' }}>
              Regulations
            </span>
            <span style={{ padding: '8px 14px', borderRadius: 999, background: 'rgba(158,122,86,0.12)' }}>
              Assessment
            </span>
            <span style={{ padding: '8px 14px', borderRadius: 999, background: 'rgba(158,122,86,0.12)' }}>
              Timeline
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: 920 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 18,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#9E7A56',
              fontWeight: 700,
            }}
          >
            AI resources for real-world use
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            Regulations, frameworks, and practical AI readiness guidance.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 24,
            color: '#5B6770',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: 780 }}>
            <span>EU AI Act, NIST AI RMF, U.S. state laws, timelines, checklists, and explainers.</span>
          </div>
          <div style={{ color: '#9E7A56', fontWeight: 700 }}>airegready.com</div>
        </div>
      </div>
    ),
    size
  )
}
