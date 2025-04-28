import type { Block } from 'payload/types'

export const ContentBlock: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock', // Optional: Helps with TypeScript types
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
} 