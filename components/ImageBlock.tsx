import Image from 'next/image'
import type { Page, Media } from '@/payload-types'

type Props = Extract<Page['layout'][0], { blockType: 'image' }>

export const ImageBlockComponent: React.FC<Props> = ({ image, caption, alignment }) => {
  // Upload field returns relation (ID) or full object
  const imageUrl = typeof image === 'object' && image !== null ? image.url : null
  const altText = typeof image === 'object' && image !== null ? image.alt : 'Image'

  if (!imageUrl) {
    return <p>[Image Block: Image not selected or available]</p>
  }

  let alignClass = 'mx-auto' // Default: center
  if (alignment === 'left') alignClass = 'mr-auto'
  if (alignment === 'right') alignClass = 'ml-auto'

  return (
    <figure className={`my-6 ${alignClass} max-w-full w-auto`}>
      <Image
        src={imageUrl}
        alt={altText || caption || 'Block Image'}
        width={1000} // Adjust default width/height or fetch from media data
        height={600}
        className="object-contain" // Adjust object-fit as needed
      />
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-2">{caption}</figcaption>
      )}
    </figure>
  )
} 