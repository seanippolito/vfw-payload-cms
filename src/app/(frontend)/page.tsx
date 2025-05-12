import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { RenderBlocks } from '../../blocks/RenderBlocks'
import type { Page } from '@/payload-types'

async function getHomePageData(): Promise<Page | null> {
  const payload = await getPayload({ config: configPromise })
  try {
    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: 'home' },
      },
      limit: 1,
      depth: 2,
    })

    return result.docs[0] || null
  } catch (error) {
    console.error('Error fetching home page:', error)
    return null
  }
}

export default async function HomePage() {
  const page = await getHomePageData()

  if (!page) {
    return <div>Homepage not found in CMS. Please create a page with the slug 'home'.</div>
  }

  return (
    <article>
      <RenderBlocks layout={page.layout} />
    </article>
  )
}
