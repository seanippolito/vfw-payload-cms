import React, { Fragment } from 'react'

import { ContentBlockComponent } from '../../components/ContentBlock'
import { ImageBlockComponent } from '../../components/ImageBlock'
import { CallToActionBlockComponent } from '../../components/CallToActionBlock'
import type { Page } from '@/payload-types'

// Map block slugs to components
const blockComponents = {
  content: ContentBlockComponent,
  image: ImageBlockComponent,
  cta: CallToActionBlockComponent,
  // Add other block types here
}


export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
