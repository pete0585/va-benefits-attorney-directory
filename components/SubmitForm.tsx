'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle } from 'lucide-react'
import { PRACTICE_AREAS, STATE_NAMES } from '@/lib/utils'

const schema = z.object({
  full_name: z.string().min(2, 'Name is required'),
  law_firm_name: z.string().optional(),
  va_registration_number: z.string().optional(),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  website: z.string().url('Must be a valid URL (include https://)').optional().or(z.literal('')),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  bio: z.string().max(1000, 'Max 1000 characters').optional(),
  practice_areas: z.array(z.string()).optional(),
  accepts_remote: z.boolean().optional(),
  free_consultation: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>

export default function SubmitForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setServerError('')
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      setServerError(err.error ?? 'Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" aria-label="Success" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Listing Submitted!</h2>
        <p className="text-gray-600">
          Your listing has been submitted and will appear in the directory within 24 hours.
          Check your email for instructions on how to claim and upgrade your profile.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl border border-surface-border shadow-sm p-6 sm:p-8 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Attorney Information</h2>
        <p className="text-sm text-gray-600">Basic info for your directory listing.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            {...register('full_name')}
            className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
            placeholder="John Smith"
          />
          {errors.full_name && <p className="text-xs text-brand-red mt-1">{errors.full_name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Law Firm Name</label>
          <input
            {...register('law_firm_name')}
            className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
            placeholder="Smith Veterans Law"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
            placeholder="john@smithveteranslaw.com"
          />
          {errors.email && <p className="text-xs text-brand-red mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City <span className="text-brand-red">*</span>
          </label>
          <input
            {...register('city')}
            className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
            placeholder="Houston"
          />
          {errors.city && <p className="text-xs text-brand-red mt-1">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State <span className="text-brand-red">*</span>
          </label>
          <select
            {...register('state')}
            className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-white"
          >
            <option value="">Select state</option>
            {Object.entries(STATE_NAMES).sort((a, b) => a[1].localeCompare(b[1])).map(([abbr, name]) => (
              <option key={abbr} value={abbr}>{name}</option>
            ))}
          </select>
          {errors.state && <p className="text-xs text-brand-red mt-1">{errors.state.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
          <input
            {...register('website')}
            type="url"
            className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
            placeholder="https://smithveteranslaw.com"
          />
          {errors.website && <p className="text-xs text-brand-red mt-1">{errors.website.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">VA Registration Number</label>
          <input
            {...register('va_registration_number')}
            className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy font-mono"
            placeholder="Your OGC registration number"
          />
          <p className="text-xs text-gray-500 mt-1">Found at va.gov/ogc/apps/accreditation/</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio / About</label>
        <textarea
          {...register('bio')}
          rows={4}
          className="w-full border border-surface-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy resize-none"
          placeholder="Tell veterans about your practice, experience, and why you fight for them..."
        />
        {errors.bio && <p className="text-xs text-brand-red mt-1">{errors.bio.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Practice Areas</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.entries(PRACTICE_AREAS).map(([key, label]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={key}
                {...register('practice_areas')}
                className="accent-brand-navy w-4 h-4"
              />
              <span className="text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" {...register('accepts_remote')} className="accent-brand-navy w-4 h-4" />
          <span className="text-sm text-gray-700">Accepts remote clients</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" {...register('free_consultation')} className="accent-brand-navy w-4 h-4" />
          <span className="text-sm text-gray-700">Free consultation</span>
        </label>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Listing (Free)'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Basic listings are free. Upgrade to Verified ($149/yr) for a contact form, photo, and top placement.
      </p>
    </form>
  )
}
