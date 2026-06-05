import ChecklistClient from '@/components/ChecklistClient'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Free AI Readiness Checklist for Founders and New Businesses',
  description:
    'Use this free AI readiness checklist to inventory AI tools, set basic rules, flag risk, review vendors, and decide what to document next.',
  path: '/checklist',
})

export default function ChecklistPage() {
  return <ChecklistClient />
}
