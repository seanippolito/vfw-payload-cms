'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import RichText from '@/components/RichText'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const postNumber = data?.postNumber ?? 5985;
  const address = data?.address ?? 'Pacific Beach, San Diego, California';

  return (
    <header className="relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-8 px-4 flex justify-between">
        <div className="flex content-end items-center gap-4">
          <Link href="/">
            <Logo loading="eager" priority="high" className="dark:invert-0" />
          </Link>
          <div>
            <h1 className="text-5xl">VFW Post {postNumber}</h1>
            <h1 className="text-3xl">{address}</h1>
          </div>
        </div>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
