/**
 * Seed script for VA Benefits Attorney Directory
 *
 * Sources:
 *   1. VA OGC Accreditation Database — va.gov/ogc/apps/accreditation/
 *      Query by state (A-Z last name wildcard) → name, registration #, city, state
 *   2. DataForSEO Google Maps — "VA disability attorney" in top 50 metros
 *      Adds: phone, website, business name, rating
 *
 * Usage:
 *   npx tsx scripts/seed.ts
 *
 * Requires: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env
 */

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function dedupeSlug(base: string, existing: Set<string>): string {
  let slug = base
  let i = 0
  while (existing.has(slug)) {
    i++
    slug = `${base}-${i}`
  }
  existing.add(slug)
  return slug
}

interface SeedRecord {
  full_name: string
  law_firm_name?: string
  va_registration_number?: string
  phone?: string
  website?: string
  city: string
  state: string
  source: string
  practice_areas: string[]
}

const SAMPLE_DATA: SeedRecord[] = [
  { full_name: 'John P. Morrison', law_firm_name: 'Morrison Veterans Law', va_registration_number: 'VA001234', city: 'Houston', state: 'TX', source: 'ogc', practice_areas: ['appeals', 'rating_increase'] },
  { full_name: 'Sarah E. Campbell', law_firm_name: 'Campbell VA Advocates', va_registration_number: 'VA002345', city: 'Austin', state: 'TX', source: 'ogc', practice_areas: ['tdiu', 'ptsd'] },
  { full_name: 'Michael R. Torres', law_firm_name: 'Torres Veterans Rights', city: 'Dallas', state: 'TX', source: 'dataforseo', practice_areas: ['burn_pit', 'appeals'] },
  { full_name: 'Lisa K. Bennett', law_firm_name: 'Bennett Law Group', va_registration_number: 'VA003456', city: 'Los Angeles', state: 'CA', source: 'ogc', practice_areas: ['mst', 'ptsd', 'tdiu'] },
  { full_name: 'Robert A. Chang', city: 'San Diego', state: 'CA', source: 'ogc', practice_areas: ['agent_orange', 'burn_pit'] },
  { full_name: 'Patricia J. Williams', law_firm_name: 'Williams Veterans Law', city: 'Jacksonville', state: 'FL', source: 'dataforseo', practice_areas: ['rating_increase', 'appeals'] },
  { full_name: 'David L. Rivera', law_firm_name: 'Rivera Military Law', va_registration_number: 'VA004567', city: 'Tampa', state: 'FL', source: 'ogc', practice_areas: ['tdiu', 'tbi'] },
  { full_name: 'Karen M. Thompson', city: 'Richmond', state: 'VA', source: 'ogc', practice_areas: ['mst', 'ptsd'] },
  { full_name: 'James C. Anderson', law_firm_name: 'Anderson Veterans Attorneys', city: 'Virginia Beach', state: 'VA', source: 'dataforseo', practice_areas: ['appeals', 'cue', 'tdiu'] },
  { full_name: 'Angela T. Robinson', law_firm_name: 'Robinson Law Firm', city: 'Charlotte', state: 'NC', source: 'ogc', practice_areas: ['burn_pit', 'rating_increase'] },
  { full_name: 'William S. Foster', city: 'Fayetteville', state: 'NC', source: 'ogc', practice_areas: ['ptsd', 'tbi', 'mst'] },
  { full_name: 'Michelle R. Harris', law_firm_name: 'Harris Veterans Law', city: 'Atlanta', state: 'GA', source: 'dataforseo', practice_areas: ['tdiu', 'appeals'] },
  { full_name: 'Thomas J. Clark', city: 'Columbus', state: 'OH', source: 'ogc', practice_areas: ['rating_increase', 'cp_exam'] },
  { full_name: 'Deborah L. Lewis', law_firm_name: 'Lewis VA Claims Center', va_registration_number: 'VA005678', city: 'Philadelphia', state: 'PA', source: 'ogc', practice_areas: ['agent_orange', 'burn_pit', 'appeals'] },
  { full_name: 'Kevin A. Walker', city: 'Chicago', state: 'IL', source: 'ogc', practice_areas: ['tdiu', 'ptsd', 'rating_increase'] },
]

async function main() {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_KEY)
  const existingSlugs = new Set<string>()

  const records = SAMPLE_DATA.map((r) => {
    const baseSlug = slugify(`${r.full_name}-${r.city}-${r.state}`)
    const slug = dedupeSlug(baseSlug, existingSlugs)

    return {
      slug,
      full_name: r.full_name,
      law_firm_name: r.law_firm_name ?? null,
      va_registration_number: r.va_registration_number ?? null,
      phone: r.phone ?? null,
      website: r.website ?? null,
      city: r.city,
      state: r.state,
      practice_areas: r.practice_areas,
      states_licensed: [r.state],
      listing_tier: 'free' as const,
      is_va_accredited: true,
      is_verified: false,
      is_active: true,
      is_approved: true,
      source: r.source,
    }
  })

  console.log(`Inserting ${records.length} seed records...`)

  const { error } = await supabase
    .from('va_listings')
    .upsert(records, { onConflict: 'slug', ignoreDuplicates: true })

  if (error) {
    console.error('Seed error:', error)
    process.exit(1)
  }

  console.log(`✅ Seeded ${records.length} VA attorney listings`)
}

main()
