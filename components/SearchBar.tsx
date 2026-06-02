'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, MapPin } from 'lucide-react'
import { STATE_NAMES } from '@/lib/utils'

interface SearchBarProps {
  className?: string
  large?: boolean
}

export default function SearchBar({ className = '', large = false }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [q, setQ] = useState(searchParams.get('q') ?? '')
  const [state, setState] = useState(searchParams.get('state') ?? '')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (q.trim()) params.set('q', q.trim())
    if (state) params.set('state', state)
    const existing = searchParams.get('practice_area')
    if (existing) params.set('practice_area', existing)
    router.push(`/listings?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-label="Search" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Attorney name, firm, or city..."
          className={`w-full pl-10 pr-4 ${large ? 'py-4 text-base' : 'py-3 text-sm'} border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy bg-white text-gray-900 placeholder-gray-400`}
        />
      </div>

      <div className="relative sm:w-52">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-label="State" />
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={`w-full pl-10 pr-8 ${large ? 'py-4 text-base' : 'py-3 text-sm'} border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy bg-white text-gray-900 appearance-none`}
        >
          <option value="">All States</option>
          {Object.entries(STATE_NAMES).sort((a, b) => a[1].localeCompare(b[1])).map(([abbr, name]) => (
            <option key={abbr} value={abbr}>{name}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className={`bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold rounded-lg transition-colors whitespace-nowrap ${large ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'}`}
      >
        Search
      </button>
    </form>
  )
}
