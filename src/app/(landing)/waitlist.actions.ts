'use server'

const maxSpots = 2500

export const getTotalWaitlistCount = async (): Promise<number> => {
  try {
    return 0
  } catch (err: any) {
    throw new Error(`Failed to get waitlist count: ${(err as Error).message}`)
  }
}

export const addToWaitlist = async (email: string): Promise<any> => {
  try {
    return null
  } catch (err: any) {
    throw new Error(`Failed to add to waitlist: ${(err as Error).message}`)
  }
}

export const getSpotsLeft = async (): Promise<number> => {
  try {
    return 0
  } catch (err: any) {
    throw new Error(`Failed to get waitlist count: ${(err as Error).message}`)
  }
}
