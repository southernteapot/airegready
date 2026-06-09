import { getAllArticles } from './articles/index.js'
import { discoveryPages } from './discovery-pages.js'
import { getAvailableProducts, getProductHref, getProductKind } from './marketing.js'
import { getAllRegulations } from './regulations/index.js'
import { SITE_URL } from './seo.js'

const STATIC_PAGE_DEFINITIONS = [
  ...discoveryPages.map((page) => ({
    url: `/${page.slug}`,
    title: page.title,
    description: page.description,
    searchTags: [page.eyebrow, 'AI governance', 'template', 'checklist'],
    changeFrequency: 'monthly',
    priority: 0.72,
    lastModifiedSource: null,
  })),
  {
    url: '/catalog',
    title: 'AI Governance Catalog',
    description:
      'AI governance starter kits, acceptable use policy kits, risk tools, vendor review packets, training resources, and jurisdiction guides.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.85,
    lastModifiedSource: 'latest',
  },
  {
    url: '/resources',
    title: 'Resource Library',
    description:
      'Plain-English AI regulations, framework comparisons, readiness checklists, and templates in one place.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModifiedSource: 'latest',
  },
  {
    url: '/compare',
    title: 'AI Regulatory Comparison',
    description: 'Side-by-side comparison of major AI regulations and frameworks.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModifiedSource: 'regulations',
  },
  {
    url: '/assessment',
    title: 'AI Readiness Assessment',
    description:
      'Free AI readiness assessment to see where you stand on adoption, guardrails, and risk.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModifiedSource: null,
  },
  {
    url: '/glossary',
    title: 'AI Glossary',
    description: 'Definitions of key AI terms in plain English.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModifiedSource: null,
  },
  {
    url: '/timeline',
    title: 'AI Regulation Timeline',
    description: 'Key dates and milestones for AI frameworks worldwide.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModifiedSource: 'latest',
  },
  {
    url: '/faq',
    title: 'FAQ',
    description: 'Common questions about AI readiness and regulation.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.6,
    lastModifiedSource: null,
  },
  {
    url: '/about',
    title: 'About AIRegReady',
    description: 'What this site does, who it is for, and how content is produced.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModifiedSource: null,
  },
  {
    url: '/contact',
    title: 'Contact AIRegReady',
    description:
      'Contact AIRegReady about practical AI governance resources, catalog questions, corrections, and general inquiries.',
    searchTags: [],
    changeFrequency: 'yearly',
    priority: 0.5,
    lastModifiedSource: null,
  },
  {
    url: '/checklist',
    title: 'AI Readiness Checklist',
    description: 'Practical checklist for getting AI-ready with interactive progress tracking.',
    searchTags: [],
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModifiedSource: null,
  },
  {
    url: '/free-sample',
    title: 'Free Sample: AI Use Inventory Template',
    description:
      'Download a free AI use inventory template from the paid AI Governance Starter Kit in PDF and DOCX, no email required.',
    searchTags: ['free template', 'AI inventory', 'sample'],
    changeFrequency: 'monthly',
    priority: 0.75,
    lastModifiedSource: null,
  },
  {
    url: '/legal',
    title: 'Legal',
    description: 'Legal information for AIRegReady.',
    searchTags: [],
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModifiedSource: null,
  },
]

function parseDate(value) {
  if (!value) return null
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

function sortByDateDesc(items, getDate) {
  return [...items].sort((a, b) => {
    const aDate = getDate(a)
    const bDate = getDate(b)
    return (bDate?.getTime() || 0) - (aDate?.getTime() || 0)
  })
}

function addOptionalLastModified(entry, lastModified) {
  return lastModified ? { ...entry, lastModified } : entry
}

function toRssDate(value) {
  const parsed = parseDate(value)
  return parsed ? parsed.toUTCString() : null
}

export function getArticleRecords() {
  return sortByDateDesc(
    getAllArticles().map((article) => ({
      ...article,
      url: `/blog/${article.slug}`,
      publishedAt: article.date,
      modifiedAt: article.dateModified || article.date,
    })),
    (article) => parseDate(article.modifiedAt)
  )
}

export function getRegulationRecords() {
  return sortByDateDesc(
    getAllRegulations().map((regulation) => ({
      ...regulation,
      url: `/regulations/${regulation.slug}`,
      modifiedAt: regulation.lastReviewedIso || null,
    })),
    (regulation) => parseDate(regulation.modifiedAt)
  )
}

export function getProductRecords() {
  return getAvailableProducts().map((product) => ({
    ...product,
    url: getProductHref(product),
    description: product.helps,
    tags: [getProductKind(product), ...product.inside],
  }))
}

export function getLatestArticleDate() {
  const latest = getArticleRecords()[0]
  return latest ? parseDate(latest.modifiedAt) : null
}

export function getLatestRegulationDate() {
  const latest = getRegulationRecords()[0]
  return latest ? parseDate(latest.modifiedAt) : null
}

export function getStaticPageRecords() {
  const latestArticleDate = getLatestArticleDate()
  const latestRegulationDate = getLatestRegulationDate()
  const latestOverallDate = latestArticleDate && latestRegulationDate
    ? new Date(Math.max(latestArticleDate.getTime(), latestRegulationDate.getTime()))
    : latestArticleDate || latestRegulationDate || null

  return STATIC_PAGE_DEFINITIONS.map((page) => {
    let lastModified = null

    if (page.lastModifiedSource === 'articles') lastModified = latestArticleDate
    if (page.lastModifiedSource === 'regulations') lastModified = latestRegulationDate
    if (page.lastModifiedSource === 'latest') lastModified = latestOverallDate

    return {
      ...page,
      lastModified,
    }
  })
}

export function getSearchIndex() {
  const regulations = getRegulationRecords().map((regulation) => ({
    type: 'regulation',
    title: regulation.title,
    description: regulation.description,
    url: regulation.url,
    tags: [regulation.status],
  }))

  const articles = getArticleRecords().map((article) => ({
    type: 'article',
    title: article.title,
    description: article.description,
    url: article.url,
    tags: [article.category, article.readTime],
  }))

  const pages = getStaticPageRecords().map((page) => ({
    type: 'page',
    title: page.title,
    description: page.description,
    url: page.url,
    tags: page.searchTags,
  }))

  const products = getProductRecords().map((product) => ({
    type: 'product',
    title: product.title,
    description: product.description,
    url: product.url,
    tags: product.tags,
  }))

  return [...regulations, ...articles, ...products, ...pages]
}

export function getSitemapEntries(siteUrl = SITE_URL) {
  const articles = getArticleRecords()
  const regulations = getRegulationRecords()
  const products = getProductRecords()
  const staticPages = getStaticPageRecords()
  const latestArticleDate = getLatestArticleDate()
  const latestRegulationDate = getLatestRegulationDate()
  const latestOverallDate = latestArticleDate && latestRegulationDate
    ? new Date(Math.max(latestArticleDate.getTime(), latestRegulationDate.getTime()))
    : latestArticleDate || latestRegulationDate || null

  return [
    addOptionalLastModified(
      {
        url: siteUrl,
        changeFrequency: 'weekly',
        priority: 1,
      },
      latestOverallDate
    ),
    addOptionalLastModified(
      {
        url: `${siteUrl}/regulations`,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      latestRegulationDate
    ),
    ...regulations.map((regulation) =>
      addOptionalLastModified(
        {
          url: `${siteUrl}${regulation.url}`,
          changeFrequency: 'weekly',
          priority: 0.8,
        },
        parseDate(regulation.modifiedAt)
      )
    ),
    addOptionalLastModified(
      {
        url: `${siteUrl}/blog`,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      latestArticleDate
    ),
    ...articles.map((article) =>
      addOptionalLastModified(
        {
          url: `${siteUrl}${article.url}`,
          changeFrequency: 'monthly',
          priority: 0.7,
        },
        parseDate(article.modifiedAt)
      )
    ),
    ...products.map((product) => ({
      url: `${siteUrl}${product.url}`,
      changeFrequency: 'monthly',
      priority: 0.75,
    })),
    ...staticPages.map((page) =>
      addOptionalLastModified(
        {
          url: `${siteUrl}${page.url}`,
          changeFrequency: page.changeFrequency,
          priority: page.priority,
        },
        page.lastModified
      )
    ),
  ]
}

export function buildFeedXml(siteUrl = SITE_URL) {
  const articles = getArticleRecords()
  const latestArticle = articles[0]
  const lastBuildDate = latestArticle ? toRssDate(latestArticle.modifiedAt) : null

  const items = articles
    .map((article) => {
      const link = `${siteUrl}${article.url}`
      const pubDate = toRssDate(article.publishedAt)

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

  const lastBuildDateLine = lastBuildDate ? `    <lastBuildDate>${lastBuildDate}</lastBuildDate>\n` : ''

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AIRegReady - Practical AI Guidance</title>
    <description>Practical information on AI adoption, governance, regulations, and what they mean for real-world use</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
${lastBuildDateLine}${items}
  </channel>
</rss>`
}
