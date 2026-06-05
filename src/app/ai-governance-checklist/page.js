import DiscoveryLandingPage from '@/components/DiscoveryLandingPage'
import { getDiscoveryPage } from '@/lib/discovery-pages'
import { buildPageMetadata } from '@/lib/seo'

const page = getDiscoveryPage('ai-governance-checklist')

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: '/ai-governance-checklist',
})

export default function Page() {
  return <DiscoveryLandingPage page={page} />
}
