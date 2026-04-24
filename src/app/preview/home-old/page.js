import Hero from '@/components/Hero'
import CountdownStrip from '@/components/CountdownStrip'
import HomeFeaturedPosts from '@/components/HomeFeaturedPosts'
import Newsletter from '@/components/Newsletter'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = {
  ...buildPageMetadata({
    title: 'Old Homepage Backup - AIRegReady',
    description:
      'Backup copy of the previous AIRegReady homepage before the product-library redesign was promoted.',
    path: '/preview/home-old',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

export default function OldHomeBackup() {
  return (
    <>
      <Hero />
      <CountdownStrip />
      <HomeFeaturedPosts />
      <Newsletter />
    </>
  )
}
