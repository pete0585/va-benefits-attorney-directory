import { NextRequest, NextResponse } from 'next/server'
import { stripe, VERIFIED_PRICE_ID, FEATURED_PRICE_ID } from '@/lib/stripe'
import { createServiceClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  let body: { listing_id?: string; listingId?: string; tier?: string }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const listingId = body.listing_id ?? body.listingId
  const { tier } = body

  if (!listingId || !tier) {
    return NextResponse.json({ error: 'Missing listing_id and tier' }, { status: 400 })
  }

  if (tier !== 'verified' && tier !== 'featured') {
    return NextResponse.json({ error: 'Invalid tier. Must be verified or featured' }, { status: 400 })
  }

  const supabase = await createServiceClient()
  const { data: listing, error } = await supabase
    .from('va_listings')
    .select('id, full_name, email')
    .eq('id', listingId)
    .single()

  if (error || !listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
  }

  const priceId = tier === 'featured' ? FEATURED_PRICE_ID : VERIFIED_PRICE_ID
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.findvaattorney.com'

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: listing.email ?? undefined,
    allow_promotion_codes: true,
    metadata: {
      listing_id: listingId,
      tier,
      attorney_name: listing.full_name,
    },
    subscription_data: {
      metadata: { listing_id: listingId, tier },
    },
    success_url: `${siteUrl}/claim/${listingId}?verified=true`,
    cancel_url: `${siteUrl}/claim/${listingId}`,
  })

  return NextResponse.json({ url: session.url })
}
