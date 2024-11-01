'use server'

import { createClient } from '../supabase/server'

export async function getNotificationsAction() {
  const supabase = createClient()

  try {
    const {
      data: {
        user: { id }
      },
      error: userError
    } = await supabase.auth.getUser()
    if (userError) {
      throw userError
    }

    const { data: notifications, error: notificationsError } = await supabase
      .from('notifications')
      .select('*')
      .contains('user_ids', [id])

    if (notificationsError) {
      throw notificationsError
    }

    return notifications
  } catch (error) {
    console.error('Error getting notifications:', error)
    throw error
  }
}
