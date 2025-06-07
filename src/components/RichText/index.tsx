import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import { cn } from '@/utilities/ui'

import { BannerBlock } from '@/blocks/Banner/Component'
import { YouTubeBlock } from '@/blocks/YouTube/Component'
import { InstagramBlock } from '@/blocks/Instagram/Component'
import { SpotifyBlock } from '@/blocks/Spotfiy/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'
import { GoogleCalendarBlock } from '@/blocks/GoogleCalendar/Component'

import type {
  BannerBlock as BannerBlockProps,
  YouTubeBlock as YouTubeBlockProps,
  InstagramBlock as InstagramBlockProps,
  SpotifyBlock as SpotifyBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
  GoogleCalendarBlock as GoogleCalendarBlockProps,
} from '@/payload-types'


type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<BannerBlockProps | YouTubeBlockProps | InstagramBlockProps
  | SpotifyBlockProps | CTABlockProps | MediaBlockProps | CodeBlockProps | GoogleCalendarBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
    youtube: ({ node }) => <YouTubeBlock {...node.fields} />,
    instagram: ({ node }) => <InstagramBlock {...node.fields} />,
    spotify: ({ node }) => <SpotifyBlock {...node.fields} />,
    googleCalendar: ({ node }) => <GoogleCalendarBlock {...node.fields} />,
    mediaBlock: ({ node }) => (
      <MediaBlock
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        captionClassName="mx-auto max-w-3xl"
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        'payload-richtext',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose md:prose-md dark:prose-invert': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
