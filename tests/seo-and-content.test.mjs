import assert from 'node:assert/strict'
import path from 'node:path'
import test from 'node:test'
import { pathToFileURL } from 'node:url'

async function importLocalModule(relativePath) {
  const absolutePath = path.join(process.cwd(), relativePath)
  return import(pathToFileURL(absolutePath).href)
}

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const { buildPageMetadata } = await importLocalModule('src/lib/seo.js')
const {
  buildFeedXml,
  getArticleRecords,
  getRegulationRecords,
  getSearchIndex,
  getSitemapEntries,
} = await importLocalModule('src/lib/site-content.js')
const { getProductBySlug, isPurchasableProduct } = await importLocalModule('src/lib/marketing.js')

test('regulation records expose stable machine-readable review dates', () => {
  const usStateLaws = getRegulationRecords().find((regulation) => regulation.slug === 'us-state-laws')

  assert.ok(usStateLaws)
  assert.equal(usStateLaws.modifiedAt, '2026-06-05')
})

test('sitemap entries use canonical stable dates instead of build-time dates', () => {
  const regulationEntry = getSitemapEntries().find(
    (entry) => entry.url === 'https://airegready.com/regulations/us-state-laws'
  )

  assert.ok(regulationEntry?.lastModified instanceof Date)
  assert.equal(regulationEntry.lastModified.toISOString().slice(0, 10), '2026-06-05')
})

test('search index is generated from the canonical live content layer', () => {
  const searchIndex = getSearchIndex()

  assert.ok(searchIndex.some((entry) => entry.type === 'regulation' && entry.url === '/regulations/eu-ai-act'))
  assert.ok(searchIndex.some((entry) => entry.type === 'article' && entry.url === '/blog/texas-traiga-guide'))
  assert.ok(searchIndex.some((entry) => entry.type === 'page' && entry.url === '/timeline'))
})

test('starter kit exposes live purchase metadata and buyer FAQ', () => {
  const starterKit = getProductBySlug('ai-governance-starter-kit')

  assert.ok(starterKit)
  assert.equal(starterKit.price, 19)
  assert.equal(starterKit.priceCurrency, 'USD')
  assert.equal(starterKit.purchaseUrl, 'https://airegready.gumroad.com/l/kfadzn')
  assert.equal(starterKit.purchaseCta, 'Buy for $19')
  assert.equal(starterKit.faq.length, 8)
  assert.ok(starterKit.faq.some((item) => item.question === 'Is this legal advice?'))
  assert.ok(starterKit.inside.includes('risk tiering decision tree'))
  assert.ok(starterKit.inside.includes('risk register'))
  assert.ok(starterKit.faq.some((item) => item.question === 'Couldn’t I just ask ChatGPT to make this?'))
  assert.ok(starterKit.faq.some((item) => item.answer.includes('Fourteen editable documents')))
})

test('solo builder launch kit is preview-only in product, search, and sitemap records', () => {
  const soloBuilder = getProductBySlug('solo-builder-ai-launch-kit')
  const searchIndex = getSearchIndex()
  const sitemapEntries = getSitemapEntries()

  assert.ok(soloBuilder)
  assert.equal(soloBuilder.title, 'Solo Builder AI Launch Kit')
  assert.equal(soloBuilder.purchaseUrl, undefined)
  assert.equal(soloBuilder.price, undefined)
  assert.equal(soloBuilder.priceCurrency, undefined)
  assert.equal(isPurchasableProduct(soloBuilder), false)
  assert.ok(soloBuilder.inside.includes('AI Claims Checklist'))
  assert.ok(searchIndex.some((entry) => entry.type === 'product' && entry.url === '/catalog/solo-builder-ai-launch-kit'))
  assert.ok(sitemapEntries.some((entry) => entry.url === 'https://airegready.com/catalog/solo-builder-ai-launch-kit'))
})

test('feed XML uses the latest article date rather than the current build date', () => {
  const articleRecords = getArticleRecords()
  const latestArticle = articleRecords[0]
  const feedXml = buildFeedXml()
  const expectedLastBuildDate = new Date(latestArticle.modifiedAt).toUTCString()

  assert.match(
    feedXml,
    new RegExp(`<lastBuildDate>${escapeForRegExp(expectedLastBuildDate)}</lastBuildDate>`)
  )
  assert.match(feedXml, /<link>https:\/\/airegready\.com\/blog\/texas-traiga-guide<\/link>/)
})

test('page metadata helper emits canonical and social metadata', () => {
  const metadata = buildPageMetadata({
    title: 'Example Title',
    description: 'Example Description',
    path: '/example',
    imagePath: '/example/opengraph-image',
    type: 'article',
  })

  assert.equal(metadata.alternates.canonical, 'https://airegready.com/example')
  assert.equal(metadata.openGraph.images[0].url, 'https://airegready.com/example/opengraph-image')
  assert.deepEqual(metadata.twitter.images, ['https://airegready.com/example/opengraph-image'])
})
