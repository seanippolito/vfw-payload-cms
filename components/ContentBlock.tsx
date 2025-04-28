import { RichText } from './RichText' // Placeholder for actual RichText serializer
import type { Page } from '@/payload-types' // Import generated types

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlockComponent: React.FC<Props> = ({ content }) => {
  if (!content) return null

  return (
    <div className="prose lg:prose-xl max-w-none"> {/* Basic prose styling */}
      <RichText content={content} />
    </div>
  )
} 