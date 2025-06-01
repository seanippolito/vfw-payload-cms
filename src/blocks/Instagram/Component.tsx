'use client'
import React from 'react'

import type { InstagramBlock as InstagramBlockProps } from '@/payload-types'

import { InstagramEmbed } from 'react-social-media-embed'

export const InstagramBlock: React.FC<InstagramBlockProps> = ({ permalink }) => {
  return (
    <div className="bg-card place-items-center">
      {permalink ? <InstagramEmbed url={permalink} width={500} height={1000}/> : null}
    </div>
  )
}
