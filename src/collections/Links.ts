import type { CollectionConfig } from 'payload'

export const Links: CollectionConfig = {
  slug: 'links',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'url'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Link Title',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description (Optional)',
      type: 'textarea',
    },
  ],
} 