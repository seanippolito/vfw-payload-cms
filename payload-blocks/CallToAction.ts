import type { Block } from 'payload'

export const CallToActionBlock: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'label',
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
      name: 'style',
      type: 'select',
      options: [
        { label: 'Primary (Red)', value: 'primary' },
        { label: 'Secondary (Outline)', value: 'secondary' },
      ],
      defaultValue: 'primary',
    },
  ],
} 