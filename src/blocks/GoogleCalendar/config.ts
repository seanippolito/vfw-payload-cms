import type { Block } from 'payload'

export const GoogleCalendar: Block = {
  slug: 'googleCalendar',
  interfaceName: 'GoogleCalendarBlock',
  fields: [
    {
      name: 'permalink',
      type: 'text',
    },
  ],
  labels: {
    plural: 'Google Calendar Embed',
    singular: 'Google Calendar Embed',
  },
}
