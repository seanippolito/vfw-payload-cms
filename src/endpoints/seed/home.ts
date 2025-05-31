import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
}

// Extract reusable constants
const defaultRichText = (text: string) => ({
  root: {
    type: 'root',
    format: '' as const,
    indent: 0,
    version: 1,
    children: [
      {
        type: 'paragraph',
        format: '' as const,
        indent: 0,
        version: 1,
        children: [
          {
            mode: 'normal',
            text,
            type: 'text',
            style: '',
            detail: 0,
            format: 0,
            version: 1,
          },
        ],
        direction: 'ltr' as const,
        textStyle: '',
        textFormat: 0,
      },
    ],
    direction: 'ltr' as const,
  },
})

const defaultMeta = {
  title: null,
  image: null,
  description: null,
}

// Helper function to create columns
const createColumn = (text: string) => ({
  size: 'full' as const,
  richText: defaultRichText(text),
  enableLink: null,
  link: {
    type: 'reference' as const,
    newTab: null,
    url: null,
    label: '',
    appearance: 'default' as const,
  },
})

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
                                                                                    heroImage,
                                                                                    metaImage,
                                                                                  }) => ({
  id: 9,
  label: 'Home |',
  title: 'Home',
  hero: {
    type: 'highImpact',
    richText: defaultRichText('This is Seeded data'),
    links: [],
    media: heroImage,
  },
  layout: [
    {
      blockName: 'Seeded Content',
      columns: [createColumn('Seeded Column')],
      blockType: 'content',
    },
  ],
  meta: defaultMeta,
  slug: 'home',
  _status: 'published',
})