'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-brand-navy border-b border-brand-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-brand-gold rounded-sm">
              <Shield className="w-5 h-5 text-brand-navy" aria-label="Shield icon" />
            </div>
            <span className="text-white font-bold text-lg leading-tight">
              Find<span className="text-brand-gold">VA</span>Attorney
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/listings" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Find an Attorney
            </Link>
            <Link href="/listings?practice_area=tdiu" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              TDIU
            </Link>
            <Link href="/listings?practice_area=appeals" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Appeals
            </Link>
            <Link href="/listings?practice_area=burn_pit" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Burn Pit
            </Link>
            <Link href="/submit" className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors">
              Add Your Listing
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-brand-navy-dark border-t border-brand-navy px-4 py-4 space-y-3">
          <Link href="/listings" className="block text-gray-300 hover:text-white text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Find an Attorney
          </Link>
          <Link href="/listings?practice_area=tdiu" className="block text-gray-300 hover:text-white text-sm font-medium py-2" onClick={() => setOpen(false)}>
            TDIU
          </Link>
          <Link href="/listings?practice_area=appeals" className="block text-gray-300 hover:text-white text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Appeals
          </Link>
          <Link href="/listings?practice_area=burn_pit" className="block text-gray-300 hover:text-white text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Burn Pit
          </Link>
          <Link href="/submit" className="block bg-brand-red text-white text-sm font-semibold px-4 py-2 rounded-md text-center" onClick={() => setOpen(false)}>
            Add Your Listing
          </Link>
        </div>
      )}
    </nav>
  )
}
