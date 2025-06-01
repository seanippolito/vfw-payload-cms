'use client'
import React from 'react'

import type { SpotifyBlock as SpotifyBlockProps } from '@/payload-types'
import SpotifyEmbed from '@/components/SpotifyEmbed'

export const SpotifyBlock: React.FC<SpotifyBlockProps> = ({ permalink }) => {
  return (
    <div className="bg-card place-items-center">
      {permalink ? <SpotifyEmbed embedUrl={permalink} /> : null}
    </div>
  )
}
