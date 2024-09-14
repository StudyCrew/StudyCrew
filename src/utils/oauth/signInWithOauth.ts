import { createClient } from '@/utils/supabase/client'
import { getURL } from '@/utils'

export async function signInWithGoogle(): Promise<void> {
  const provider = 'google'

  const supabase = createClient()
  const redirectURL = getURL('/auth/callback')
  await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: redirectURL
    }
  })
}
