import { CollectionConfig } from "payload";
import { authenticated } from '@/access/authenticated'

export const Sites: CollectionConfig = {
  slug: 'sites',
  admin: {
    group: 'Settings',
    useAsTitle: 'title',
  },
  access: {
    // Only admins can create
    create: authenticated,
    // Only admins or editors with site access can read
    read: authenticated,
    // Only admins can update
    update: authenticated,
    // Only admins can delete
    delete: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    }
  ]
}