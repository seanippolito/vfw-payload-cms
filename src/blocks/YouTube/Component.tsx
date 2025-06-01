'use client'
import React from 'react'

import type { YouTubeBlock as YouTubeBlockProps } from '@/payload-types'
import { YouTubeEmbed } from 'react-social-media-embed'

export const YouTubeBlock: React.FC<YouTubeBlockProps> = ({ permalink }) => {
  return (
    <div className="bg-card place-items-center">
      {permalink ? <YouTubeEmbed url={permalink} width={1000} height={560} /> : null}
    </div>
  )
}
