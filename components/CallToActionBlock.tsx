import Link from 'next/link'
import type { Page } from '@/payload-types'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlockComponent: React.FC<Props> = ({ label, url, style }) => {
  const baseClasses = "inline-block px-6 py-3 text-base font-medium rounded-md text-center transition-colors duration-200"
  
  const styles = {
    primary: `bg-vfw-red text-white hover:bg-red-700`,
    secondary: `bg-transparent text-vfw-red border-2 border-vfw-red hover:bg-vfw-red hover:text-white`,
  }
  
  const styleClasses = styles[style || 'primary'] // Default to primary

  return (
    <div className="my-6 text-center"> {/* Added margin and centering */}
      <Link href={url || '#'} className={`${baseClasses} ${styleClasses}`}>
        {label || 'Learn More'}
      </Link>
    </div>
  )
} 