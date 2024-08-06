'use server'

import { createClient } from '../supabase/server' // Assuming you're using this in server components

export async function getLoggedInUser() {
  const supabase = createClient() // Get a Supabase client instance

  try {
    const {
      data: { user },
      error
    } = await supabase.auth.getUser()

    if (error) {
      throw error
    }

    return user // User object or null if not logged in
  } catch (error) {
    console.error('Error getting user information:', error)
    throw error // Re-throw error for higher-level handling (middleware)
  }
}

export async function getUserGroups(userId: string) {
  const supabase = createClient()

  try {
    const { data: groups, error } = await supabase
      .from('groups')
      .select('*') // Fetch all group details
      .contains('member_ids', [userId]) // Filter by groups that contain the user's ID

    if (error) {
      throw error
    }

    return groups as { id: string; name: string; member_ids: string[] }[] // Assuming your group schema
  } catch (error) {
    console.error('Error fetching user groups:', error)
    throw error
  }
}
