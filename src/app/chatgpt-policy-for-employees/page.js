import DiscoveryLandingPage from '@/components/DiscoveryLandingPage'
import { getDiscoveryPage } from '@/lib/discovery-pages'
import { buildPageMetadata } from '@/lib/seo'

const page = getDiscoveryPage('chatgpt-policy-for-employees')

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: '/chatgpt-policy-for-employees',
})

export default function Page() {
  return <DiscoveryLandingPage page={page} />
}
