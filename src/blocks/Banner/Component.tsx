import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    // TODO: These themes are not be reconigzed since I am not using the config file
    <div className={cn('mx-auto my-2 p-4 w-full', className)}>
      <div
        className={cn('border py-1 px-6 flex items-center rounded', {
          'border-base-750 bg-base-400': style === 'info',
          'border-error-750 bg-error-300': style === 'error',
          'border-success-750 bg-success-300': style === 'success',
          'border-warning-750 bg-warning-300': style === 'warning',
        })}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
