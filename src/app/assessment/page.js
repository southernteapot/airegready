import AssessmentTool from '@/components/AssessmentTool'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'AI Readiness Assessment',
  description:
    'Free 8-question assessment to see where you stand on AI readiness — including what gaps matter most, what to do next, and which frameworks deserve attention.',
  alternates: {
    canonical: 'https://airegready.com/assessment',
  },
}

export default function AssessmentPage() {
  return (
    <div className="pt-28 pb-10 px-6">
      <div className="max-w-[720px] mx-auto">
        <Breadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Assessment' }]}
        />
      </div>
      <AssessmentTool />
    </div>
  )
}
