import AssessmentTool from '@/components/AssessmentTool'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'AI Readiness Assessment',
  description:
    'Free 7-question assessment to see how AI-ready your organization is — including which regulations apply and where to focus first.',
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
