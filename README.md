# FindVAAttorney.com — VA Benefits Attorney Directory

The only directory built specifically for veterans seeking VA-accredited legal representation.

**Domain:** findvaattorney.com  
**Repo:** pete0585/va-benefits-attorney-directory  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Supabase · Stripe · Vercel

---

## Quick Start (Local Development)

```bash
npm install
cp .env.example .env.local
# Fill in env vars (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

All vars are already set in Vercel (set by bootstrap agent). For local dev, copy from `.env.example`:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `STRIPE_VERIFIED_PRICE_ID` | Stripe price ID for Verified tier ($149/yr) |
| `STRIPE_FEATURED_PRICE_ID` | Stripe price ID for Featured tier ($299/yr) |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | `hello@mail.findvaattorney.com` |
| `NEXT_PUBLIC_SITE_URL` | `https://findvaattorney.com` |
| `INBOUND_WEBHOOK_SECRET` | Resend inbound webhook secret |

---

## Database Setup

The Supabase migration is pre-applied. Tables live in the shared Directories project (`fbuqrnzofktepkzyfmhy`) with `va_` prefix:

- `va_listings` — Attorney profiles
- `va_claims` — Claim verification tokens
- `va_payments` — Stripe payment records
- `va_leads` — Future lead routing table

To apply manually (if needed):

```bash
# Via Supabase CLI
supabase db push --db-url "postgresql://..."

# Or paste supabase/migrations/001_initial_schema.sql into the Supabase SQL editor
```

---

## Seeding

```bash
npx tsx scripts/seed.ts
```

For production seeding, query the VA OGC database at `va.gov/ogc/apps/accreditation/` by state (A-Z last name queries), then enrich with DataForSEO Google Maps for phone/website data. Seed priority: TX, CA, FL, NY, VA, NC (highest veteran populations).

---

## Stripe Products

- **Verified** — $149/year — `price_1Tdsk0GzK9SiblueW8oPfizt`
- **Featured** — $299/year — `price_1Tdsk1GzK9Sibluej11sMXlP`
- **Webhook** — `we_1Tdsk9GzK9SiblueiGtk9689`

Stripe webhook is already configured. For local testing use Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## Vercel Deployment

The project is already deployed at findvaattorney.com via Vercel. The GitHub repo is linked for auto-deploy on push.

For a fresh deploy:

1. Connect repo in Vercel dashboard
2. Set all env vars (or they're already set from bootstrap)
3. Push to `main` → auto-deploy

---

## Resend (Email)

- **Sending subdomain:** `mail.findvaattorney.com`
- **From address:** `hello@mail.findvaattorney.com`
- **Inbound webhook:** `https://www.findvaattorney.com/api/inbound-email` (always www)

⚠️ The `send.mail` MX record must be added manually in Namecheap dashboard. See DNS records in `agents/directory-bootstrap/output/va-benefits-attorney/va-benefits-attorney-dns-records.md`.

---

## Revenue Model

| Tier | Price | Features |
|---|---|---|
| Free | $0 | Name, location, VA registration number, phone |
| Verified | $149/yr | Photo, bio, practice areas, contact form, verified badge, top placement |
| Featured | $299/yr | #1 position, featured badge, category sponsorship slot, monthly report |

Lead routing (Month 6+): $75-150/qualified inquiry routed to paid attorneys.

---

## IndexNow

Key: `a578ac87cda0775380cbfee0dde3179b`  
File: `public/a578ac87cda0775380cbfee0dde3179b.txt`

Submit sitemap after new pages are published:
```bash
node skills/indexnow/indexnow.js submit-sitemap findvaattorney.com a578ac87cda0775380cbfee0dde3179b
```
