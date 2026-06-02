import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { slugify } from '@/lib/utils'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { full_name, law_firm_name, va_registration_number, email, phone, website, city, state, bio, practice_areas, accepts_remote, free_consultation } = body as {
    full_name?: string
    law_firm_name?: string
    va_registration_number?: string
    email?: string
    phone?: string
    website?: string
    city?: string
    state?: string
    bio?: string
    practice_areas?: string[]
    accepts_remote?: boolean
    free_consultation?: boolean
  }

  if (!full_name || !email || !city || !state) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const supabase = await createServiceClient()

  const baseSlug = slugify(`${full_name}-${city}-${state}`.toLowerCase())
  let slug = baseSlug
  let attempt = 0

  while (true) {
    const { data } = await supabase.from('va_listings').select('id').eq('slug', slug).single()
    if (!data) break
    attempt++
    slug = `${baseSlug}-${attempt}`
  }

  const { error } = await supabase.from('va_listings').insert({
    slug,
    full_name,
    law_firm_name: law_firm_name || null,
    va_registration_number: va_registration_number || null,
    email,
    phone: phone || null,
    website: website || null,
    city,
    state: (state as string).toUpperCase(),
    bio: bio || null,
    practice_areas: practice_areas ?? [],
    states_licensed: [state.toUpperCase()],
    accepts_remote: accepts_remote ?? false,
    free_consultation: free_consultation ?? false,
    listing_tier: 'free',
    is_va_accredited: true,
    is_verified: false,
    is_active: true,
    is_approved: false,
    source: 'self_submit',
  })

  if (error) {
    console.error('Submit error:', error)
    return NextResponse.json({ error: 'Failed to submit listing' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
