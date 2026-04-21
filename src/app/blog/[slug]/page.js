import { getArticle, getAllArticleSlugs } from '@/lib/articles'
import ArticleLayout from '@/components/ArticleLayout'
import { buildPageMetadata } from '@/lib/seo'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}

  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
    imagePath: `/blog/${slug}/opengraph-image`,
    type: 'article',
    publishedTime: article.date,
    modifiedTime: article.dateModified || article.date,
    section: article.category,
  })
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.dateModified || article.date,
    publisher: {
      '@type': 'Organization',
      name: 'AIRegReady',
      url: 'https://airegready.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://airegready.com/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout article={article} />
    </>
  )
}
