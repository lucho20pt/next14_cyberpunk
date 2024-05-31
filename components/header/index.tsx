import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex flex-row w-full h-14 md:h-20 items-center justify-around mx-auto shadow-md shadow-cyan-500">
      <div className="text-2xl text-cyan-500 hover:text-cyan-500/90">
        <Link href="/">cyberpunk</Link>
      </div>
      <nav>
        <ul className="flex flex-row items-end justify-around gap-x-8 text-lg">
          <li>
            <Link className="hover:opacity-70 hover:text-cyan-400" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:opacity-70 hover:text-cyan-400"
              href="/cards"
            >
              Cards
            </Link>
          </li>
          <li>
            <Link
              className="hover:opacity-70 hover:text-cyan-400"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
