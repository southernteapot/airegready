import ResourcesSection from '@/components/ResourcesSection'
import Breadcrumb from '@/components/Breadcrumb'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Resource Library — AIRegReady',
  description:
    'Plain-English AI regulations, framework comparisons, readiness checklists, and templates — all in one place.',
  path: '/resources',
})

export default function ResourcesPage() {
  return (
    <div className="pt-28 pb-10 px-6">
      <div className="max-w-[1280px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
        />
      </div>
      <ResourcesSection />
    </div>
  )
}
