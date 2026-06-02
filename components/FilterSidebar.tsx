'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { STATE_NAMES, PRACTICE_AREAS } from '@/lib/utils'

export default function FilterSidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentState = searchParams.get('state') ?? ''
  const currentPracticeArea = searchParams.get('practice_area') ?? ''
  const currentTier = searchParams.get('tier') ?? ''
  const currentQ = searchParams.get('q') ?? ''

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    params.delete('page')
    router.push(`/listings?${params.toString()}`)
  }

  function clearAll() {
    router.push('/listings')
  }

  const hasFilters = currentState || currentPracticeArea || currentTier || currentQ

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Filters</h2>
        {hasFilters && (
          <button onClick={clearAll} className="text-sm text-brand-red hover:underline">
            Clear all
          </button>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
        <select
          value={currentState}
          onChange={(e) => updateFilter('state', e.target.value)}
          className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy"
        >
          <option value="">All States</option>
          {Object.entries(STATE_NAMES).sort((a, b) => a[1].localeCompare(b[1])).map(([abbr, name]) => (
            <option key={abbr} value={abbr}>{name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Practice Area</label>
        <select
          value={currentPracticeArea}
          onChange={(e) => updateFilter('practice_area', e.target.value)}
          className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy"
        >
          <option value="">All Practice Areas</option>
          {Object.entries(PRACTICE_AREAS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Listing Type</label>
        <div className="space-y-2">
          {[
            { value: '', label: 'All Listings' },
            { value: 'featured', label: 'Featured' },
            { value: 'verified', label: 'Verified' },
            { value: 'free', label: 'Basic' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tier"
                value={opt.value}
                checked={currentTier === opt.value}
                onChange={() => updateFilter('tier', opt.value)}
                className="accent-brand-navy"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
