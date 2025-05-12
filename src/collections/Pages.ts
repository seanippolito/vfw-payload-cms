import type { CollectionConfig } from 'payload'
import { blocks } from '../../payload-blocks' // Import blocks from the index file

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
      // TODO: Add validation to ensure slug format
      // TODO: Add hook to generate slug from title
    },
    {
      name: 'layout', // Named 'layout' for consistency with Payload conventions
      type: 'blocks',
      required: true,
      minRows: 1,
      blocks: blocks, // Use the imported blocks array
    },
  ],
} 