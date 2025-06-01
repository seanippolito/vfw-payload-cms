import type { Block } from 'payload'

export const Instagram: Block = {
  slug: 'instagram',
  interfaceName: 'InstagramBlock',
  fields: [
    {
      name: 'permalink',
      type: 'text',
    },
  ],
  labels: {
    plural: 'Instagram Embed',
    singular: 'Instagram Embed',
  },
}
