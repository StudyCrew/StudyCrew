import { currentUser } from '@clerk/nextjs'
import React from 'react'
import { redirect } from 'next/navigation'
import Logout from '@/components/shared/Logout'
import { type IUser } from '@/lib/models/user'
import { getUserInfo } from '@/lib/actions/user.actions'
// import AccountProfile from '@/components/forms/AccountProfile'

export default async function page(): Promise<JSX.Element | null> {
  const user = await currentUser()
  if (!user) return null

  const userInfo: IUser | null = await getUserInfo(user.id)
  if (userInfo?.onboarded) redirect('/')

  // const userData: IUser = {
  //  clerkId: user.id,
  //  _id: userInfo?._id ?? '',
  //  username: userInfo
  //    ? userInfo?.username
  //    : user.emailAddresses[0].emailAddress,
  //  name: userInfo?.name ? userInfo?.name : user.firstName ?? '',
  //  bio: userInfo?.bio ? userInfo?.bio : '',
  //  image: userInfo ? userInfo.image : user?.imageUrl,
  //  onboarded: userInfo ? userInfo?.onboarded : false
  // }
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <div className="flex justify-between">
        <h1 className="head-text text-3xl leading-6 font-bold text-black">
          Onboarding
        </h1>
        <Logout placement="logout" />
      </div>
      <p className="mt-3 text-base leading-6 font-normal text-black">
        Complete your profile now to join the StudyCrew
      </p>
      <section className="mt-9 p-10">
        {/* <AccountProfile user={userData} btnTitle="Continue" /> */}
      </section>
    </main>
  )
}
