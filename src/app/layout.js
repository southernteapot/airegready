import { Playfair_Display, DM_Sans } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
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
    default: 'AIRegReady — AI Compliance & Regulatory Guidance',
    template: '%s | AIRegReady',
  },
  description:
    'Navigate AI regulations with confidence. Expert guidance on the EU AI Act, NIST AI RMF, U.S. state AI laws, and global AI governance. Free AI compliance risk assessment tool.',
  keywords: [
    'AI compliance',
    'AI regulation',
    'EU AI Act',
    'NIST AI RMF',
    'AI governance',
    'AI risk assessment',
    'AI policy',
    'artificial intelligence compliance',
    'AI regulatory framework',
    'AI risk management',
    'AI law',
  ],
  authors: [{ name: 'AIRegReady' }],
  creator: 'AIRegReady',
  publisher: 'AIRegReady',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://airegready.com',
    siteName: 'AIRegReady',
    title: 'AIRegReady — AI Compliance & Regulatory Guidance',
    description:
      'Navigate AI regulations with confidence. Expert guidance on EU AI Act, NIST AI RMF, state AI laws, and a free risk assessment tool.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRegReady — AI Compliance & Regulatory Guidance',
    description:
      'Navigate AI regulations with confidence. Free AI compliance risk assessment tool.',
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AIRegReady',
              url: 'https://airegready.com',
              description:
                'Practical AI regulatory guidance and compliance resources.',
            }),
          }}
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
