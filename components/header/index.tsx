'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import NavLinks from './nav-links'

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex flex-row w-full h-20 items-center justify-around mx-auto shadow shadow-cyan-600 bg-gray-400/10 mb-20">
      <div className="relative top-4 text-2xl text-cyan-500 hover:text-cyan-500/90">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo cyberpunk"
            width={0}
            height={0}
            sizes="100vw"
            className="max-w-[100px] w-[150px] h-auto"
          />
        </Link>
      </div>
      <nav className="flex flex-row h-full py-4 self-baseline">
        <NavLinks />
      </nav>
    </header>
  )
}
