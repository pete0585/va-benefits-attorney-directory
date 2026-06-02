import { redirect } from 'next/navigation'
import { createClient, createServiceClient } from '@/lib/supabase/server'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  const serviceSupabase = await createServiceClient()
  const { data: profile } = await serviceSupabase
    .from('admin_users')
    .select('role')
    .eq('id', user.id)
    .single()

  if (!profile || profile.role !== 'admin') {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-brand-navy-dark text-white px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold text-lg">FindVAAttorney — Admin</h1>
        <span className="text-gray-400 text-sm">{user.email}</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  )
}
