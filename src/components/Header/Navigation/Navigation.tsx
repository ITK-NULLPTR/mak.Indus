'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative hidden lg:flex items-center gap-x-8 justify-center">
      {/* Home */}
      <Link href="/" className="font-medium hover:text-primary-600">
        Home
      </Link>

      {/* About */}
      <Link href="/aboutus" className="font-medium hover:text-primary-600">
        About Us
      </Link>

      {/* Shop Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="font-medium hover:text-primary-600 flex items-center gap-1 cursor-pointer">
          Shop
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-44 rounded-xl bg-white shadow-lg border border-neutral-200 overflow-hidden">
            <Link
              href="/kitchen"
              className="block px-4 py-2.5 hover:bg-neutral-100 transition-colors"
            >
              Kitchen
            </Link>

            <Link
              href="/gardening"
              className="block px-4 py-2.5 hover:bg-neutral-100 transition-colors"
            >
              Gardening
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
