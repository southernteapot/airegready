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
          background: 'linear-gradient(135deg, #07111F 0%, #0B1B2F 52%, #123253 100%)',
          color: '#F8FAFD',
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
                background: 'linear-gradient(135deg, #0F5E9C 0%, #2CA6A4 100%)',
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
              <span style={{ fontSize: 18, fontWeight: 500, color: '#ADC4DE' }}>
                Practical AI governance resources
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              fontSize: 18,
              color: '#9BE1DC',
            }}
          >
            <span style={{ padding: '8px 14px', borderRadius: 999, background: 'rgba(155,225,220,0.12)' }}>
              Catalog
            </span>
            <span style={{ padding: '8px 14px', borderRadius: 999, background: 'rgba(155,225,220,0.12)' }}>
              Templates
            </span>
            <span style={{ padding: '8px 14px', borderRadius: 999, background: 'rgba(155,225,220,0.12)' }}>
              Trackers
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
              color: '#9BE1DC',
              fontWeight: 700,
            }}
          >
            AI governance resource library
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            AI governance documents your team can actually use.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 24,
            color: '#ADC4DE',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: 780 }}>
            <span>Templates, checklists, playbooks, trackers, and jurisdiction guides for internal readiness work.</span>
          </div>
          <div style={{ color: '#9BE1DC', fontWeight: 700 }}>airegready.com</div>
        </div>
      </div>
    ),
    size
  )
}
