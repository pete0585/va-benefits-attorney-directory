-- VA Benefits Attorney Directory Schema
-- Supabase project: fbuqrnzofktepkzyfmhy

-- ─── va_listings ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS va_listings (
  id                      UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug                    TEXT        UNIQUE NOT NULL,
  full_name               TEXT        NOT NULL,
  law_firm_name           TEXT,
  va_registration_number  TEXT,
  va_accreditation_date   DATE,
  bio                     TEXT,
  photo_url               TEXT,
  phone                   TEXT,
  email                   TEXT,
  website                 TEXT,
  address_line1           TEXT,
  city                    TEXT        NOT NULL,
  state                   TEXT        NOT NULL,
  zip                     TEXT,
  latitude                DOUBLE PRECISION,
  longitude               DOUBLE PRECISION,
  practice_areas          TEXT[]      DEFAULT '{}',
  states_licensed         TEXT[]      DEFAULT '{}',
  accepts_remote          BOOLEAN     DEFAULT false,
  free_consultation       BOOLEAN     DEFAULT false,
  consultation_fee        TEXT,
  listing_tier            TEXT        DEFAULT 'free'  CHECK (listing_tier IN ('free','verified','featured')),
  is_va_accredited        BOOLEAN     DEFAULT true,
  is_verified             BOOLEAN     DEFAULT false,
  is_active               BOOLEAN     DEFAULT true,
  is_approved             BOOLEAN     DEFAULT true,
  stripe_customer_id      TEXT,
  stripe_subscription_id  TEXT,
  subscription_expires_at TIMESTAMPTZ,
  claimed_at              TIMESTAMPTZ,
  claimed_by              TEXT,
  source                  TEXT,
  do_not_email            BOOLEAN     DEFAULT false,
  email_source            TEXT,
  search_vector           TSVECTOR,
  created_at              TIMESTAMPTZ DEFAULT now(),
  updated_at              TIMESTAMPTZ DEFAULT now()
);

-- Full-text search vector update trigger
CREATE OR REPLACE FUNCTION va_listings_search_vector_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', coalesce(NEW.full_name, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.law_firm_name, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW.city, '')), 'C') ||
    setweight(to_tsvector('english', coalesce(NEW.state, '')), 'C') ||
    setweight(to_tsvector('english', array_to_string(NEW.practice_areas, ' ')), 'D');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS va_listings_tsvector_update ON va_listings;
CREATE TRIGGER va_listings_tsvector_update
  BEFORE INSERT OR UPDATE ON va_listings
  FOR EACH ROW EXECUTE FUNCTION va_listings_search_vector_update();

-- Indexes
CREATE INDEX IF NOT EXISTS va_listings_state_idx           ON va_listings(state);
CREATE INDEX IF NOT EXISTS va_listings_tier_idx            ON va_listings(listing_tier);
CREATE INDEX IF NOT EXISTS va_listings_active_approved_idx ON va_listings(is_active, is_approved);
CREATE INDEX IF NOT EXISTS va_listings_search_vector_idx   ON va_listings USING GIN(search_vector);
CREATE INDEX IF NOT EXISTS va_listings_slug_idx            ON va_listings(slug);
CREATE INDEX IF NOT EXISTS va_listings_practice_areas_idx  ON va_listings USING GIN(practice_areas);


-- ─── va_claims ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS va_claims (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id   UUID        REFERENCES va_listings(id),
  email        TEXT        NOT NULL,
  token        TEXT        NOT NULL UNIQUE,
  verified     BOOLEAN     DEFAULT false,
  verified_at  TIMESTAMPTZ,
  expires_at   TIMESTAMPTZ NOT NULL,
  status       TEXT        DEFAULT 'pending',
  nudge_sent_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS va_claims_listing_id_idx ON va_claims(listing_id);
CREATE INDEX IF NOT EXISTS va_claims_token_idx      ON va_claims(token);


-- ─── va_payments ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS va_payments (
  id                      UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id              UUID        REFERENCES va_listings(id),
  stripe_session_id       TEXT,
  stripe_payment_intent_id TEXT,
  amount                  INTEGER,
  tier                    TEXT,
  status                  TEXT,
  created_at              TIMESTAMPTZ DEFAULT now()
);


-- ─── va_leads ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS va_leads (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  veteran_name     TEXT,
  veteran_phone    TEXT,
  veteran_email    TEXT,
  claim_description TEXT,
  state            TEXT,
  routed_to        UUID        REFERENCES va_listings(id),
  lead_fee         INTEGER,
  status           TEXT        DEFAULT 'new',
  created_at       TIMESTAMPTZ DEFAULT now()
);


-- ─── admin_users ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id    UUID  PRIMARY KEY REFERENCES auth.users(id),
  role  TEXT  NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT now()
);


-- ─── Row-Level Security ───────────────────────────────────────────────────────
ALTER TABLE va_listings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE va_claims    ENABLE ROW LEVEL SECURITY;
ALTER TABLE va_payments  ENABLE ROW LEVEL SECURITY;
ALTER TABLE va_leads     ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users  ENABLE ROW LEVEL SECURITY;

-- Public can read active, approved listings
CREATE POLICY "Public read active listings"
  ON va_listings FOR SELECT
  USING (is_active = true AND is_approved = true);

-- Service role bypass (used by server-side code)
CREATE POLICY "Service role full access listings"
  ON va_listings FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access claims"
  ON va_claims FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access payments"
  ON va_payments FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access leads"
  ON va_leads FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access admin_users"
  ON admin_users FOR ALL
  USING (auth.role() = 'service_role');
