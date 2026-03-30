import AssessmentTool from '@/components/AssessmentTool'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'AI Compliance Risk Assessment',
  description:
    'Free 7-question assessment to identify which AI regulations may apply to you and where your compliance exposure is highest.',
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
