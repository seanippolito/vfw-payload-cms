import type { Block } from 'payload/types'

export const ImageBlock: Block = {
  slug: 'image',
  interfaceName: 'ImageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming 'media' is the slug of your Media collection
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'alignment',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'center',
      admin: {
        description: 'How the image should be aligned within the block.'
      }
    }
  ],
} 