'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ media, richText, links }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="relative -mt-10 flex items-center justify-center text-white" data-theme="dark">
      <div className="container mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-146 md:text-center border-sexy-red border-2 rounded-lg p-8">
          <p className="font-script">This will use the Great Vibes font family.</p>
          {richText && <RichText className="font-script mb-6 light:border-yellow-200 sexy:border-yellow-500 dark:border-yellow-800 border-2" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      {/*<div className="min-h-[80vh] select-none">*/}
      {/*  {media && typeof media === 'object' && (*/}
      {/*    <Media fill imgClassName="-z-10 object-cover" priority resource={media} />*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  )
}
