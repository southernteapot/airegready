import { Playfair_Display, DM_Sans } from 'next/font/google'
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
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AIRegReady',
              url: 'https://airegready.com',
              description:
                'AI compliance and regulatory guidance. Expert analysis of AI laws, practical compliance frameworks, and free risk assessment tools.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AIRegReady',
              url: 'https://airegready.com',
              description:
                'Navigate AI regulations with confidence. Expert guidance, free risk assessment, and compliance tools.',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
