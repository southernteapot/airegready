import { ImageResponse } from 'next/og'
import { getArticle, getAllArticleSlugs } from '@/lib/articles'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export default async function OpenGraphImage({ params }) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    return new ImageResponse(<div />, size)
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #07111F 0%, #0B1B2F 54%, #123253 100%)',
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
            }}
          >
            <div
              style={{
                fontSize: 18,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#9BE1DC',
                fontWeight: 700,
              }}
            >
              {article.category}
            </div>
            <div
              style={{
                display: 'flex',
                width: 6,
                height: 6,
                borderRadius: 999,
                background: '#9BE1DC',
              }}
            />
            <div style={{ display: 'flex', fontSize: 20, color: '#ADC4DE' }}>{article.displayDate}</div>
          </div>
          <div style={{ display: 'flex', fontSize: 26, fontWeight: 700, color: '#9BE1DC' }}>AIRegReady</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: 1000 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 62,
              lineHeight: 1.08,
              fontWeight: 700,
            }}
          >
            {article.title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              lineHeight: 1.35,
              color: '#D8E6F5',
              maxWidth: 980,
            }}
          >
            {article.description}
          </div>
        </div>

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
              padding: '10px 18px',
              borderRadius: 999,
              background: 'rgba(155,225,220,0.12)',
              color: '#9BE1DC',
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Practical AI guidance and regulatory analysis
          </div>
          <div style={{ display: 'flex', fontSize: 22, color: '#ADC4DE' }}>{article.readTime}</div>
        </div>
      </div>
    ),
    size
  )
}
