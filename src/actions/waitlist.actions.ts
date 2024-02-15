'use server'

import Waitlist from '@/models/waitlist'
import { connectToDB } from '@/db'

const maxSpots = 2500

export const getTotalWaitlistCount = async (): Promise<number> => {
  try {
    await connectToDB()

    return await Waitlist.countDocuments()
  } catch (err: any) {
    throw new Error(`Failed to get waitlist count: ${(err as Error).message}`)
  }
}

export const addToWaitlist = async (
  email: string
): Promise<typeof Waitlist> => {
  try {
    await connectToDB()

    return await Waitlist.findOneAndUpdate(
      {
        email
      },
      {
        email
      },
      { upsert: true, new: true }
    )
  } catch (err: any) {
    throw new Error(`Failed to add to waitlist: ${(err as Error).message}`)
  }
}

export const getSpotsLeft = async (): Promise<number> => {
  try {
    await connectToDB()

    const totalWaitlistCount = await getTotalWaitlistCount()
    return maxSpots - totalWaitlistCount
  } catch (err: any) {
    throw new Error(`Failed to get waitlist count: ${(err as Error).message}`)
  }
}
