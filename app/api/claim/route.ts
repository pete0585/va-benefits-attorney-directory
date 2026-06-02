import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  let body: { listing_id: string; email: string }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { listing_id, email } = body

  if (!listing_id || !email) {
    return NextResponse.json({ error: 'Missing listing_id or email' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const supabase = await createServiceClient()

  const { data: listing, error: listingError } = await supabase
    .from('va_listings')
    .select('id, full_name, slug')
    .eq('id', listing_id)
    .single()

  if (listingError || !listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
  }

  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString()

  await supabase.from('va_claims').insert({
    listing_id,
    email,
    token,
    verified: false,
    expires_at: expiresAt,
    status: 'pending',
  })

  const verifyUrl = `https://www.findvaattorney.com/claim/${listing_id}?token=${token}`

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      'User-Agent': 'curl/8.5.0',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: email,
      subject: `Claim your listing on FindVAAttorney.com — ${listing.full_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #fff;">
          <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px;">
            <div style="background: #C9A84C; width: 32px; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 18px;">🛡</div>
            <strong style="color: #1B3A6B; font-size: 18px;">FindVAAttorney.com</strong>
          </div>
          <h1 style="color: #1B3A6B; font-size: 22px; font-weight: bold; margin: 0 0 12px;">Claim Your Listing</h1>
          <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
            Click the button below to verify you are <strong>${listing.full_name}</strong> and claim your profile on FindVAAttorney.com.
          </p>
          <a href="${verifyUrl}" style="display: inline-block; background: #1B3A6B; color: #fff; font-weight: bold; font-size: 15px; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin-bottom: 20px;">
            Verify &amp; Claim Listing
          </a>
          <p style="color: #888; font-size: 13px; margin: 0 0 8px;">This link expires in 72 hours.</p>
          <p style="color: #888; font-size: 13px; margin: 0;">
            If you didn't request this, ignore this email. Your listing will remain unchanged.
          </p>
        </div>
      `,
    }),
  })

  if (!resendRes.ok) {
    console.error('Resend error:', await resendRes.text())
    return NextResponse.json({ error: 'Failed to send verification email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
