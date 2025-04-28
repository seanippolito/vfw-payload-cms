import { ContentBlockComponent } from './ContentBlock'
import { ImageBlockComponent } from './ImageBlock'
import { CallToActionBlockComponent } from './CallToActionBlock'
import type { Page } from '@/payload-types'

// Map block slugs to components
const blockComponents = {
  content: ContentBlockComponent,
  image: ImageBlockComponent,
  cta: CallToActionBlockComponent,
  // Add other block types here
}

type Props = {
  layout: Page['layout']
}

export const BlocksRenderer: React.FC<Props> = ({ layout }) => {
  if (!layout) {
    return null
  }

  return (
    <div>
      {layout.map((block, index) => {
        const BlockComponent = blockComponents[block.blockType]

        if (BlockComponent) {
          // Pass the block data as props to the specific component
          // Ensure keys are unique and stable
          return <BlockComponent key={block.id || index} {...block} />
        }

        console.warn(`Block type "${block.blockType}" not found in blockComponents map.`)
        return <p key={block.id || index}>[Unknown Block Type: {block.blockType}]</p>
      })}
    </div>
  )
} 