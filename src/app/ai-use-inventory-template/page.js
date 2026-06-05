import DiscoveryLandingPage from '@/components/DiscoveryLandingPage'
import { getDiscoveryPage } from '@/lib/discovery-pages'
import { buildPageMetadata } from '@/lib/seo'

const page = getDiscoveryPage('ai-use-inventory-template')

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: '/ai-use-inventory-template',
})

export default function Page() {
  return <DiscoveryLandingPage page={page} />
}
