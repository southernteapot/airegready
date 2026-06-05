import DiscoveryLandingPage from '@/components/DiscoveryLandingPage'
import { getDiscoveryPage } from '@/lib/discovery-pages'
import { buildPageMetadata } from '@/lib/seo'

const page = getDiscoveryPage('ai-policy-template-small-business')

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: '/ai-policy-template-small-business',
})

export default function Page() {
  return <DiscoveryLandingPage page={page} />
}
