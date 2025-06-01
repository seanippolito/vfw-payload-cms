import type { Block } from 'payload'

export const YouTube: Block = {
  slug: 'youtube',
  interfaceName: 'YouTubeBlock',
  fields: [
    {
      name: 'permalink',
      type: 'text',
    },
  ],
  labels: {
    plural: 'YouTube Embed',
    singular: 'YouTube Embed',
  },
}
