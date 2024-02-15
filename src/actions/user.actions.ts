'use server'

import { connectToDB } from '@/db'
import { revalidatePath } from 'next/cache'
import { clerkClient } from '@clerk/nextjs'
import { convertBase64ToFile } from '@/utils'
import User, { type IUser } from '@/models/user'

export async function getUserInfo(id: string): Promise<IUser | null> {
  try {
    await connectToDB()

    return await User.findOne({
      clerkId: id
    })
  } catch (err: any) {
    throw new Error(`Failed to create/update user: ${(err as Error).message}`)
  }
}

export async function updateUser(userData: IUser, path: string): Promise<void> {
  try {
    await connectToDB()

    await User.findOneAndUpdate(
      { clerkId: userData.clerkId },
      {
        _id: userData._id,
        username: userData.username,
        clerkId: userData.clerkId,
        name: userData.name,
        bio: userData.bio,
        onboarded: true
      },
      { upsert: true, new: true }
    )

    const file: File = convertBase64ToFile(userData.image)
    clerkClient.users
      .updateUserProfileImage(userData.clerkId, { file })
      .catch((err: Error) => {
        // eslint-disable-next-line no-console
        console.error(err.message)
      })

    if (path === '/profile/edit') {
      revalidatePath(path)
    }
  } catch (err: any) {
    throw new Error(`Failed to create/update user: ${(err as Error).message}`)
  }
}
