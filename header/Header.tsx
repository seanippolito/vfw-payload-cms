// import React from 'react' // Remove this line
import Link from 'next/link'
import Image from 'next/image'

// TODO: Fetch navigation links from Payload (e.g., a Navigation Global or hardcoded for now)
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Calendar & Food Menu', href: '/calendar' }, // Example slugs
  { label: 'Links', href: '/links' },
  { label: 'Meetings', href: '/meetings' },
  { label: 'Membership', href: '/membership' },
  { label: 'Officers & Committees', href: '/officers' },
  { label: 'Programs', href: '/programs' },
  { label: 'Chaplains Corner', href: '/chaplains-corner' },
]

export const Header: React.FC = () => {
  // TODO: Get actual logo path/URL
  const logoUrl = '' // Placeholder - e.g., '/logo.svg' or full URL
  const logoAlt = 'VFW Post 5985 Logo'

  return (
    <header className="bg-white p-4 border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          {logoUrl ? (
            <Image src={logoUrl} alt={logoAlt} width={40} height={40} /> // Adjust size as needed
          ) : (
            <span className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600">Logo</span> // Placeholder if no URL
          )}
          <span className="text-lg font-semibold text-gray-800 hover:text-vfw-red">
            VFW Post 5985
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-vfw-red transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          {/* TODO: Implement mobile menu toggle (e.g., using ShadCN Sheet/Dropdown) */}
          <button className="p-2 rounded hover:bg-gray-100">
            {/* Placeholder for hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      {/* TODO: Add Mobile Menu Drawer/Panel Implementation */}
    </header>
  )
} 