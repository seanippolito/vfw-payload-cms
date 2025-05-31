import type { Media } from '@/payload-types'

const captionLink = {
  type: 'link',
  children: [
    {
      type: 'text',
      detail: 0,
      format: 0,
      mode: 'normal',
      style: '',
      text: 'Andrew Kliatskyi',
      version: 1,
    },
  ],
  direction: 'ltr' as const,
  fields: {
    linkType: 'custom',
    newTab: true,
    url: 'https://unsplash.com/@kirp',
  },
  format: '',
  indent: 0,
  version: 2,
}

const captionText = [
    {
      type: 'text',
      detail: 0,
      format: 0,
      mode: 'normal',
      style: '',
      text: 'Photo by ',
      version: 1,
    },
    captionLink,
    {
      type: 'text',
      detail: 0,
      format: 0,
      mode: 'normal',
      style: '',
      text: ' on Unsplash.',
      version: 1,
    },
  ]

const captionRoot = {
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: captionText,
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      textFormat: 0,
      version: 1,
    },
  ],
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  version: 1,
}

export const image2: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Curving abstract shapes with an orange and blue gradient',
  caption: {
    root: captionRoot,
  },
}
