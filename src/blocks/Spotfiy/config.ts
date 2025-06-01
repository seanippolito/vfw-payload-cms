import type { Block } from 'payload'

export const Spotify: Block = {
  slug: 'spotify',
  interfaceName: 'SpotifyBlock',
  fields: [
    {
      name: 'permalink',
      type: 'text',
    },
  ],
  labels: {
    plural: 'Spotify Embed',
    singular: 'Spotify Embed',
  },
}
