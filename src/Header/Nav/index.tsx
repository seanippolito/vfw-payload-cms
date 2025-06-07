'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, Menu, X } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  // State to handle the hamburger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* Hamburger menu button */}
      <button
        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        className="xl:hidden bg-transparent border-none focus:outline-none z-20"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="text-primary" />}
      </button>

      {/* Navigation items */}
      {/* TODO it is best to have the nav menu item it's own component and not mixed with the header nav*/}
      <ul
        className={`transform transition-transform duration-300 ease-in-out
        ${ isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-200'
        } flex-col xl:opacity-100 xl:translate-y-0 xl:flex xl:flex-row gap-3 items-center xl:gap-5 absolute xl:static top-0 left-0 xl:top-0 w-full bg-base-300 dark:bg-base-700 xl:w-auto xl:bg-transparent p-4 xl:p-0 shadow-md xl:shadow-none`}
      >
        {navItems.map(({ link }, i) => (
          <li key={i}>
            <CMSLink {...link} appearance="link" />
          </li>
        ))}
        <li>
          <Link href="/search">
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 text-primary" />
          </Link>
        </li>
      </ul>
    </>
  )
}
