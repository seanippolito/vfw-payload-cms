import type { CollectionConfig } from 'payload'

export const Officers: CollectionConfig = {
  slug: 'officers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'organization'],
    // Enable sorting if needed
    // defaultSort: 'sortOrder', // Requires adding a 'sortOrder' field
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Title / Position',
      type: 'text',
      required: true,
    },
    {
      name: 'organization',
      label: 'Organization / Committee (e.g., VFW Post, American Legion, House Committee)',
      type: 'text', // Could be a select or relationship if organizations are predefined
    },
    {
      name: 'contactInfo',
      label: 'Contact Info (Optional - e.g., email)',
      type: 'text',
    },
    // {
    //   name: 'sortOrder',
    //   label: 'Sort Order',
    //   type: 'number',
    //   admin: {
    //     step: 1,
    //   }
    // }
  ],
} 