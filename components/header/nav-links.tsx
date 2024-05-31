'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Cards',
    href: '/cards',
  },
  { name: 'About', href: '/about' },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <ul className='flex flex-row items-end justify-around gap-x-8 text-lg'>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx('hover:opacity-70 hover:text-cyan-400', {
                'text-cyan-400': pathname === link.href,
              })}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
