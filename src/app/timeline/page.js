import TimelineView from '@/components/TimelineView'
import { getTimelineEvents } from '@/lib/timeline-data'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'AI Regulation Timeline',
  description:
    'Major milestones and deadlines across the EU AI Act, NIST AI RMF, U.S. state AI laws, federal policy, sector rules, and global AI governance.',
  path: '/timeline',
})

export default function TimelinePage() {
  return <TimelineView events={getTimelineEvents()} />
}
