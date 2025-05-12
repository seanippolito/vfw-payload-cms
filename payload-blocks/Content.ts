import type { Block } from 'payload'

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
