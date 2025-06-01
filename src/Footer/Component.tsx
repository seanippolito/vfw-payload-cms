import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { SocialLinks } from '@/components/SocialLinks'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const postNumber = footerData?.postNumber || 5985
  const address = footerData?.address || '12345 Somewhere Road'


  return (
    <footer className="h-100 mt-auto bg-black dark:bg-card text-white">
      <div className="relative py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="m-8 flex items-center" href="/">
          <Logo />
        </Link>

        <div>
          {postNumber && <p className="m-8">{postNumber}</p>}
          {address && <p className="m-8">{address}</p>}
        </div>

        <div className="m-8 flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <SocialLinks/>
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
