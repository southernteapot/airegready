import { getAllRegulations } from './regulations'
import { getAllArticles } from './articles'

export function getSearchIndex() {
  const regulations = getAllRegulations().map((r) => ({
    type: 'regulation',
    title: r.title,
    description: r.description,
    url: `/regulations/${r.slug}`,
    tags: [r.status],
  }))

  const articles = getAllArticles().map((a) => ({
    type: 'article',
    title: a.title,
    description: a.description,
    url: `/blog/${a.slug}`,
    tags: [a.category, a.readTime],
  }))

  const pages = [
    {
      type: 'page',
      title: 'AI Regulatory Comparison',
      description:
        'Side-by-side comparison of major AI regulations and frameworks.',
      url: '/compare',
      tags: [],
    },
    {
      type: 'page',
      title: 'AI Compliance Risk Assessment',
      description:
        'Free interactive tool to assess your AI compliance risk level.',
      url: '/assessment',
      tags: [],
    },
    {
      type: 'page',
      title: 'FAQ',
      description: 'Common questions about AI compliance and regulation.',
      url: '/faq',
      tags: [],
    },
    {
      type: 'page',
      title: 'AI Compliance Glossary',
      description: 'Definitions of key AI compliance terms.',
      url: '/glossary',
      tags: [],
    },
    {
      type: 'page',
      title: 'AI Regulation Timeline',
      description: 'Key dates and deadlines for AI regulations worldwide.',
      url: '/timeline',
      tags: [],
    },
    {
      type: 'page',
      title: 'About AIRegReady',
      description:
        'What this site does, who it is for, and how content is produced.',
      url: '/about',
      tags: [],
    },
  ]

  return [...regulations, ...articles, ...pages]
}
