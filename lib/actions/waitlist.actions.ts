'use server'

import Waitlist from '../models/waitlist'
import { connectToDB } from '../mongoose'

const maxSpots = 2500

export const getTotalWaitlistCount = async (): Promise<number> => {
  try {
    await connectToDB()

    const count = await Waitlist.countDocuments()
    return count
  } catch (error: any) {
    throw new Error(`Failed to get waitlist count: ${error.message}`)
  }
}

export const addToWaitlist = async (
  email: string
): Promise<typeof Waitlist> => {
  try {
    await connectToDB()

    const waitlistRecord = await Waitlist.findOneAndUpdate(
      {
        email
      },
      {
        email
      },
      { upsert: true, new: true }
    )
    return waitlistRecord
  } catch (error: any) {
    throw new Error(`Failed to add to waitlist: ${error.message}`)
  }
}

export const getSpotsLeft = async (): Promise<number> => {
  try {
    await connectToDB()

    const totalWaitlistCount = await getTotalWaitlistCount()
    return maxSpots - totalWaitlistCount
  } catch (error: any) {
    throw new Error(`Failed to get waitlist count: ${error.message}`)
  }
}
