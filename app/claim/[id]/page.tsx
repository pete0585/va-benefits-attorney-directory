'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { Shield, CheckCircle, Loader2, AlertCircle, Star } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ token?: string; verified?: string }>
}

export default function ClaimPage({ params, searchParams }: PageProps) {
  const { id } = use(params)
  const { token, verified } = use(searchParams)

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [verifyState, setVerifyState] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle')
  const [showUpgrade, setShowUpgrade] = useState(false)

  useEffect(() => {
    if (token) {
      setVerifyState('verifying')
      fetch(`/api/claim/verify?token=${encodeURIComponent(token)}&id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setVerifyState('success')
            setShowUpgrade(true)
          } else {
            setVerifyState('error')
          }
        })
        .catch(() => setVerifyState('error'))
    } else if (verified === 'true') {
      setVerifyState('success')
      setShowUpgrade(true)
    }
  }, [token, id, verified])

  async function handleClaim(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const res = await fetch('/api/claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listing_id: id, email }),
    })

    const data = await res.json()
    setSubmitting(false)

    if (!res.ok) {
      setError(data.error ?? 'Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
  }

  async function handleUpgrade(tier: string) {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ listing_id: id, tier }),
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  if (verifyState === 'verifying') {
    return (
      <div className="min-h-64 flex items-center justify-center py-20">
        <div className="text-center">
          <Loader2 className="w-10 h-10 text-brand-navy animate-spin mx-auto mb-4" aria-label="Loading" />
          <p className="text-gray-600">Verifying your claim...</p>
        </div>
      </div>
    )
  }

  if (verifyState === 'error') {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <AlertCircle className="w-12 h-12 text-brand-red mx-auto mb-4" aria-label="Error" />
        <h1 className="text-xl font-bold text-gray-900 mb-2">Verification Failed</h1>
        <p className="text-gray-600 mb-6">
          This verification link has expired or is invalid. Please request a new claim link below.
        </p>
        <Link href={`/claim/${id}`} className="bg-brand-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-navy-dark transition-colors">
          Request New Link
        </Link>
      </div>
    )
  }

  if (verifyState === 'success' || showUpgrade) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl border border-surface-border shadow-sm p-8 text-center mb-6">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" aria-label="Success" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Listing Claimed!</h1>
          <p className="text-gray-600">
            Your profile is now claimed. Upgrade to start receiving inquiries from veterans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-brand-navy shadow-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-brand-navy" aria-label="Verified" />
              <h2 className="font-bold text-gray-900">Verified</h2>
              <span className="ml-auto text-brand-navy font-bold">$149/yr</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-2 mb-5">
              {['Photo & bio', 'Practice area tags', 'Contact form from veterans', 'VA Verified badge', 'Above free listings in search'].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0" aria-label="Included" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('verified')}
              className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Upgrade to Verified
            </button>
          </div>

          <div className="bg-white rounded-xl border border-brand-gold shadow-sm p-6 relative">
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
              Best Value
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-brand-gold" aria-label="Featured" />
              <h2 className="font-bold text-gray-900">Featured</h2>
              <span className="ml-auto text-brand-gold-dark font-bold">$299/yr</span>
            </div>
            <ul className="text-sm text-gray-700 space-y-2 mb-5">
              {['Everything in Verified', '#1 position in your market', 'Featured badge in search', 'Category sponsorship slot', 'Monthly inquiry report'].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0" aria-label="Included" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleUpgrade('featured')}
              className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-semibold py-2.5 rounded-lg transition-colors"
            >
              Upgrade to Featured
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" aria-label="Sent" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h1>
        <p className="text-gray-600">
          We sent a verification link to <strong>{email}</strong>. Click it to claim your listing.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-navy/10 rounded-full mb-4">
          <Shield className="w-7 h-7 text-brand-navy" aria-label="Claim" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Claim Your Listing</h1>
        <p className="text-gray-600">
          Enter your professional email to receive a verification link.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
        <form onSubmit={handleClaim} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Professional Email <span className="text-brand-red">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourfirm.com"
              className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Send Verification Link'}
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          We&apos;ll send a one-time link to verify you are the attorney named in this listing.
        </p>
      </div>
    </div>
  )
}
