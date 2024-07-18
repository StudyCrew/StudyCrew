import AccountForm from './account-form'
import { createClient } from '@/utils/supabase/server'

export default async function Account(): Promise<JSX.Element> {
  const supabase = createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  return <AccountForm user={user} />
}