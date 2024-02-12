'use server'

import Waitlist from '@/models/waitlist'
import { MAX_WAITLIST_SPOTS } from '@/const'

// TODO: Use custom error class
export const getTotalWaitlistCount = async (): Promise<number> => {
  try {
    return await Waitlist.countDocuments()
  } catch (error: any) {
    throw new Error(`Failed to get waitlist count: ${error.message}`)
  }
}

// TODO: Use custom error class
// TODO: Extract
export const addEmailToWaitlist = async (
  email: string
): Promise<typeof Waitlist> => {
  try {
    return await Waitlist.findOneAndUpdate(
      { email },
      { email },
      { upsert: true, new: true }
    )
  } catch (error: any) {
    throw new Error(`Failed to add to waitlist: ${error.message}`)
  }
}

// TODO: Use custom error class
export const getSpotsLeft = async (): Promise<number> => {
  try {
    const totalWaitlistCount = await getTotalWaitlistCount()

    return Math.max(MAX_WAITLIST_SPOTS - totalWaitlistCount, 0)
  } catch (error: any) {
    throw new Error(`Failed to get waitlist count: ${error.message}`)
  }
}
