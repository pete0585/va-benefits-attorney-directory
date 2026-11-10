import { createServiceClient } from '@/lib/supabase/server'
import { createInboundHandler } from '@/lib/directory-inbound'

export const POST = createInboundHandler({
  "tenant": "directories--va-benefits-attorney",
  "directory": "va-benefits-attorney",
  "domains": [
    "findvaattorney.com",
    "mail.findvaattorney.com"
  ]
}, { db: async () => createServiceClient() })
