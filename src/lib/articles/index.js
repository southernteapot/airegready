import { euAiActRiskClassification } from './eu-ai-act-risk-classification'
import { usStatesAiHiring } from './us-states-ai-hiring'
import { shadowAiCompliance } from './shadow-ai-compliance'
import { nistAiRmfPractice } from './nist-ai-rmf-practice'

const articles = {
  'eu-ai-act-risk-classification': euAiActRiskClassification,
  'us-states-ai-hiring': usStatesAiHiring,
  'shadow-ai-compliance': shadowAiCompliance,
  'nist-ai-rmf-practice': nistAiRmfPractice,
}

export function getAllArticles() {
  return Object.values(articles)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      category: a.category,
      date: a.date,
      displayDate: a.displayDate,
      readTime: a.readTime,
      featured: a.featured,
    }))
}

export function getArticle(slug) {
  return articles[slug] || null
}

export function getAllArticleSlugs() {
  return Object.keys(articles)
}
