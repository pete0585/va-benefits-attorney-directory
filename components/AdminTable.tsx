'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react'
import type { Listing } from '@/lib/types'
import { STATE_NAMES } from '@/lib/utils'

interface AdminTableProps {
  listings: Listing[]
  onApprove: (id: string) => Promise<void>
  onReject: (id: string) => Promise<void>
}

export default function AdminTable({ listings, onApprove, onReject }: AdminTableProps) {
  const [processing, setProcessing] = useState<string | null>(null)

  async function handleApprove(id: string) {
    setProcessing(id)
    await onApprove(id)
    setProcessing(null)
  }

  async function handleReject(id: string) {
    setProcessing(id)
    await onReject(id)
    setProcessing(null)
  }

  if (listings.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No listings to review.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-surface-border">
        <thead className="bg-surface">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Attorney</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tier</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Source</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Submitted</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-surface-border">
          {listings.map((listing) => (
            <tr key={listing.id} className="hover:bg-surface/50">
              <td className="px-4 py-4">
                <div className="font-medium text-gray-900 text-sm">{listing.full_name}</div>
                {listing.law_firm_name && (
                  <div className="text-xs text-gray-500">{listing.law_firm_name}</div>
                )}
                {listing.email && (
                  <div className="text-xs text-brand-navy">{listing.email}</div>
                )}
              </td>
              <td className="px-4 py-4 text-sm text-gray-600">
                {listing.city}, {STATE_NAMES[listing.state] ?? listing.state}
              </td>
              <td className="px-4 py-4">
                <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full capitalize ${
                  listing.listing_tier === 'featured'
                    ? 'bg-brand-gold/20 text-brand-gold-dark'
                    : listing.listing_tier === 'verified'
                    ? 'bg-brand-navy/10 text-brand-navy'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {listing.listing_tier}
                </span>
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 capitalize">{listing.source ?? '—'}</td>
              <td className="px-4 py-4 text-sm text-gray-500">
                {new Date(listing.created_at).toLocaleDateString()}
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleApprove(listing.id)}
                    disabled={processing === listing.id}
                    className="flex items-center gap-1 text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <CheckCircle className="w-3.5 h-3.5" aria-label="Approve" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(listing.id)}
                    disabled={processing === listing.id}
                    className="flex items-center gap-1 text-xs bg-brand-red hover:bg-brand-red-dark text-white px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <XCircle className="w-3.5 h-3.5" aria-label="Reject" />
                    Reject
                  </button>
                  <a
                    href={`/listings/${listing.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-navy"
                  >
                    <ExternalLink className="w-4 h-4" aria-label="View listing" />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
