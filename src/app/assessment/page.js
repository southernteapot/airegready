import AssessmentTool from '@/components/AssessmentTool'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'AI Readiness Assessment',
  description:
    'Free AI readiness assessment — see where you stand on adoption, guardrails, and risk, what gaps matter most, and which frameworks deserve attention.',
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
