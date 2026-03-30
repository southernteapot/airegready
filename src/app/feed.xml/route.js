import { getAllArticles } from '@/lib/articles'

export async function GET() {
  const articles = getAllArticles()
  const base = 'https://airegready.com'

  const items = articles
    .map((article) => {
      const link = `${base}/blog/${article.slug}`
      const pubDate = new Date(article.date).toUTCString()

      return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${article.category}]]></category>
    </item>`
    })
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AIRegReady - AI Compliance Insights</title>
    <description>Practical breakdowns of AI regulations, enforcement trends, and compliance strategies</description>
    <link>${base}/blog</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
