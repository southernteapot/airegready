import { Libre_Baskerville, Inter } from 'next/font/google'
import Script from 'next/script'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { absoluteUrl, buildSocialImage } from '@/lib/seo'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(absoluteUrl('/')),
  title: {
    default: 'AIRegReady - AI Governance Resource Catalog',
    template: '%s | AIRegReady',
  },
  description:
    'Plain-English AI governance templates, checklists, playbooks, trackers, and jurisdiction guides for practical internal readiness work.',
  keywords: [
    'AI resources',
    'AI for business',
    'AI readiness',
    'AI compliance',
    'AI regulation',
    'EU AI Act',
    'NIST AI RMF',
    'AI governance',
    'AI risk assessment',
    'AI policy',
    'AI adoption',
    'AI frameworks',
  ],
  authors: [{ name: 'AIRegReady' }],
  creator: 'AIRegReady',
  publisher: 'AIRegReady',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: absoluteUrl('/'),
    siteName: 'AIRegReady',
    title: 'AIRegReady - AI Governance Resource Catalog',
    description:
      'Plain-English AI governance templates, checklists, playbooks, trackers, and jurisdiction guides.',
    images: [buildSocialImage('/opengraph-image', 'AIRegReady - AI Governance Resource Catalog')],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRegReady - AI Governance Resource Catalog',
    description:
      'Plain-English AI governance templates, checklists, playbooks, trackers, and jurisdiction guides.',
    images: [absoluteUrl('/opengraph-image')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: absoluteUrl('/'),
    types: {
      'application/rss+xml': absoluteUrl('/feed.xml'),
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="7yPLVDgBZG3wROlZt4wxHmVqh4I6KOgJERk-IXgMevM" />
        <Script src="/theme.js" strategy="beforeInteractive" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-accent-text focus:px-4 focus:py-2 focus:rounded-md focus:font-sans focus:text-sm"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AIRegReady',
              url: 'https://airegready.com',
              description:
                'Plain-English AI governance resource kits, templates, checklists, trackers, and jurisdiction guides for internal readiness work.',
            }),
          }}
        />
        <NavBar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token":"${process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN}"}`}
          />
        )}
      </body>
    </html>
  )
}
