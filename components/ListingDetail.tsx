'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Shield, CheckCircle, MapPin, Phone, Globe, Mail, Wifi,
  Star, ExternalLink, ChevronRight, Send
} from 'lucide-react'
import type { Listing } from '@/lib/types'
import { PRACTICE_AREAS, STATE_NAMES, formatPhone } from '@/lib/utils'

interface ListingDetailProps {
  listing: Listing
}

export default function ListingDetail({ listing }: ListingDetailProps) {
  const [contactSent, setContactSent] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const isVerified = listing.listing_tier === 'verified' || listing.listing_tier === 'featured'
  const isFeatured = listing.listing_tier === 'featured'

  async function handleContact(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 800))
    setContactSent(true)
    setSubmitting(false)
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: listing.full_name,
    description: listing.bio ?? `VA-accredited attorney in ${listing.city}, ${listing.state}`,
    url: listing.website ?? undefined,
    telephone: listing.phone ?? undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: listing.city,
      addressRegion: listing.state,
      addressCountry: 'US',
    },
    areaServed: listing.states_licensed.length > 0 ? listing.states_licensed : [listing.state],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <ChevronRight className="w-4 h-4" aria-label=">" />
          <Link href="/listings" className="hover:text-brand-navy">Attorneys</Link>
          <ChevronRight className="w-4 h-4" aria-label=">" />
          <span className="text-gray-900 font-medium truncate">{listing.full_name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className={`bg-white rounded-xl border ${isFeatured ? 'border-brand-gold' : 'border-surface-border'} shadow-sm p-6`}>
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  {listing.photo_url ? (
                    <img
                      src={listing.photo_url}
                      alt={listing.full_name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-brand-navy/20"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-brand-navy/10 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-brand-navy/30" aria-label="Attorney" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{listing.full_name}</h1>
                      {listing.law_firm_name && (
                        <p className="text-gray-600 mt-1">{listing.law_firm_name}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {isFeatured && (
                        <span className="flex items-center gap-1 text-xs bg-brand-gold/20 text-brand-gold-dark font-semibold px-3 py-1.5 rounded-full border border-brand-gold">
                          <Star className="w-3.5 h-3.5" aria-label="Featured" />
                          Featured
                        </span>
                      )}
                      {isVerified && (
                        <span className="flex items-center gap-1 text-xs bg-brand-navy/10 text-brand-navy font-semibold px-3 py-1.5 rounded-full">
                          <CheckCircle className="w-3.5 h-3.5" aria-label="Verified" />
                          VA Accredited Verified
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 shrink-0 text-brand-navy" aria-label="Location" />
                      {listing.city}, {STATE_NAMES[listing.state] ?? listing.state}
                    </span>
                    {listing.accepts_remote && (
                      <span className="flex items-center gap-1.5 text-brand-navy-light font-medium">
                        <Wifi className="w-4 h-4" aria-label="Remote" />
                        Accepts Remote Clients
                      </span>
                    )}
                    {listing.free_consultation && (
                      <span className="flex items-center gap-1.5 text-green-700 font-medium">
                        <Star className="w-4 h-4" aria-label="Free consultation" />
                        Free Consultation
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {listing.bio && (
                <div className="mt-6 pt-6 border-t border-surface-border">
                  <h2 className="font-semibold text-gray-900 mb-3">About</h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{listing.bio}</p>
                </div>
              )}
            </div>

            {listing.practice_areas.length > 0 && (
              <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Practice Areas</h2>
                <div className="flex flex-wrap gap-2">
                  {listing.practice_areas.map((area) => (
                    <Link
                      key={area}
                      href={`/listings?practice_area=${area}`}
                      className="flex items-center gap-1.5 text-sm bg-brand-navy/5 hover:bg-brand-navy/10 text-brand-navy px-3 py-2 rounded-lg font-medium transition-colors"
                    >
                      {PRACTICE_AREAS[area] ?? area}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {listing.states_licensed.length > 0 && (
              <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Licensed In</h2>
                <div className="flex flex-wrap gap-2">
                  {listing.states_licensed.map((s) => (
                    <Link
                      key={s}
                      href={`/listings?state=${s}`}
                      className="text-sm bg-surface text-gray-700 hover:bg-surface-border px-3 py-1.5 rounded-lg border border-surface-border transition-colors"
                    >
                      {STATE_NAMES[s] ?? s}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h2 className="font-semibold text-amber-900 mb-2">What is VA Accreditation?</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                VA-accredited attorneys are approved by the Department of Veterans Affairs to represent veterans in claims and appeals proceedings. Only VA-accredited attorneys can charge fees for VA disability representation. Always verify your attorney&apos;s accreditation at{' '}
                <a
                  href="https://www.va.gov/ogc/apps/accreditation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:no-underline"
                >
                  va.gov/ogc/apps/accreditation/
                </a>.
              </p>
              {listing.va_registration_number && (
                <div className="mt-3 pt-3 border-t border-amber-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-amber-700 font-medium">VA Registration Number</p>
                    <p className="text-sm font-mono font-semibold text-amber-900">{listing.va_registration_number}</p>
                  </div>
                  <a
                    href={`https://www.va.gov/ogc/apps/accreditation/attorney/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-amber-700 hover:text-amber-900 font-medium"
                  >
                    Verify <ExternalLink className="w-3.5 h-3.5" aria-label="External link" />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-3">
                {listing.phone && (
                  <a
                    href={`tel:${listing.phone}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-brand-navy text-white hover:bg-brand-navy-dark transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0" aria-label="Phone" />
                    <div>
                      <p className="text-xs opacity-75">Call Now</p>
                      <p className="font-semibold">{formatPhone(listing.phone)}</p>
                    </div>
                  </a>
                )}
                {listing.website && isVerified && (
                  <a
                    href={listing.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-surface-border hover:border-brand-navy/30 hover:bg-surface transition-colors"
                  >
                    <Globe className="w-5 h-5 text-gray-500 shrink-0" aria-label="Website" />
                    <div>
                      <p className="text-xs text-gray-500">Website</p>
                      <p className="text-sm font-medium text-brand-navy truncate">{listing.website.replace(/^https?:\/\//, '')}</p>
                    </div>
                  </a>
                )}
                {listing.consultation_fee && (
                  <div className="text-sm text-gray-600 bg-surface px-4 py-3 rounded-lg">
                    <span className="font-medium">Consultation:</span> {listing.consultation_fee}
                  </div>
                )}
              </div>

              {isVerified && (
                <div className="mt-4 pt-4 border-t border-surface-border">
                  {contactSent ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" aria-label="Sent" />
                      <p className="text-sm font-medium text-green-800">Message sent!</p>
                      <p className="text-xs text-green-700 mt-1">The attorney will be in touch shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleContact} className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">Send a Message</p>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full border border-surface-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                      <input
                        type="email"
                        placeholder="Your email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full border border-surface-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                      <input
                        type="tel"
                        placeholder="Your phone (optional)"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full border border-surface-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                      <textarea
                        placeholder="Briefly describe your claim..."
                        required
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full border border-surface-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy resize-none"
                      />
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-60"
                      >
                        <Send className="w-4 h-4" aria-label="Send" />
                        {submitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Is this your listing?</h2>
              <p className="text-sm text-gray-600 mb-4">
                Claim your profile to update your information, add your photo, and start receiving contact inquiries from veterans.
              </p>
              <Link
                href={`/claim/${listing.id}`}
                className="block text-center border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Claim This Listing
              </Link>
            </div>

            {listing.listing_tier === 'free' && (
              <div className="bg-brand-navy rounded-xl p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold" aria-label="Upgrade" />
                  <h2 className="font-semibold">Upgrade Your Listing</h2>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Get a Verified badge, contact form, and top search placement for $149/year.
                </p>
                <Link
                  href={`/claim/${listing.id}`}
                  className="block text-center bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
                >
                  Claim &amp; Upgrade
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
