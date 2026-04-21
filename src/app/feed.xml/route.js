import { buildFeedXml } from '@/lib/site-content'

export async function GET() {
  return new Response(buildFeedXml(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
