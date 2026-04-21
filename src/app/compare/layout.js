import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'AI Regulatory Comparison Table',
  description:
    'Side-by-side comparison of major AI regulations and frameworks: EU AI Act, NIST AI RMF, U.S. State Laws, Federal Policy, Sector Rules, and Global Governance.',
  path: '/compare',
})

export default function CompareLayout({ children }) {
  return children
}
