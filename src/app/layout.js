import { Playfair_Display, DM_Sans } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ReadingProgress from '@/components/ReadingProgress'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://airegready.com'),
  title: {
    default: 'AIRegReady — AI Resources for Real-World Use',
    template: '%s | AIRegReady',
  },
  description:
    'Frameworks, assessments, and plain-English AI information for real-world use. Free readiness assessment, regulatory comparisons, checklists, and templates covering the EU AI Act, NIST AI RMF, U.S. state AI laws, and more.',
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
    url: 'https://airegready.com',
    siteName: 'AIRegReady',
    title: 'AIRegReady — AI Resources for Real-World Use',
    description:
      'Frameworks, assessments, and plain-English AI information. Free tools and regulatory breakdowns.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRegReady — AI Resources for Real-World Use',
    description:
      'Frameworks, assessments, and plain-English AI information. Free readiness tools and regulatory breakdowns.',
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
    canonical: 'https://airegready.com',
    types: {
      'application/rss+xml': 'https://airegready.com/feed.xml',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="7yPLVDgBZG3wROlZt4wxHmVqh4I6KOgJERk-IXgMevM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-accent-text focus:px-4 focus:py-2 focus:rounded-md focus:font-sans focus:text-sm"
        >
          Skip to main content
        </a>
        <ReadingProgress />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AIRegReady',
              url: 'https://airegready.com',
              description:
                'Practical AI readiness guidance for founders, startups, and small businesses.',
            }),
          }}
        />
        <NavBar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
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
