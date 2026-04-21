import { ImageResponse } from 'next/og'
import { getRegulation, getAllRegulationSlugs } from '@/lib/regulations'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export function generateStaticParams() {
  return getAllRegulationSlugs().map((slug) => ({ slug }))
}

export default async function OpenGraphImage({ params }) {
  const { slug } = await params
  const regulation = getRegulation(slug)

  if (!regulation) {
    return new ImageResponse(<div />, size)
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #fbf8f2 0%, #f0e7da 100%)',
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
            }}
          >
            <div style={{ fontSize: 46 }}>{regulation.icon}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div
                style={{
                  fontSize: 18,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#9E7A56',
                  fontWeight: 700,
                }}
              >
                AI regulation guide
              </div>
              <div style={{ display: 'flex', fontSize: 24, color: '#5B6770' }}>
                Last reviewed {regulation.lastReviewed}
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              padding: '10px 18px',
              borderRadius: 999,
              background: 'rgba(158,122,86,0.12)',
              color: '#6A4F33',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {regulation.status}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: 980 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 70,
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            {regulation.title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              lineHeight: 1.35,
              color: '#46515A',
            }}
          >
            {regulation.description}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
          }}
        >
          <div style={{ display: 'flex', color: '#5B6770' }}>
            Plain-English requirements, scope, timelines, and source documents
          </div>
          <div style={{ display: 'flex', color: '#9E7A56', fontWeight: 700 }}>airegready.com</div>
        </div>
      </div>
    ),
    size
  )
}
