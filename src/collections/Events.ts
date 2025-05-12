import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'eventDate', 'startTime'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Event Title',
      type: 'text',
      required: true,
    },
    {
      name: 'eventDate',
      label: 'Date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'yyyy-MM-dd',
        },
      },
    },
    {
      name: 'startTime',
      label: 'Start Time',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          timeFormat: 'h:mm a',
        },
      },
    },
    {
      name: 'endTime',
      label: 'End Time (Optional)',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          timeFormat: 'h:mm a',
        },
      },
    },
    {
      name: 'description',
      label: 'Description (Optional)',
      type: 'richText',
    },
    // TODO: Add fields for food menu if applicable (or relate to separate menu collection?)
  ],
} 