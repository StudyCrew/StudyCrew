import React from 'react'
// import { redirect } from 'next/navigation'
// import { type IUser } from '@/models/user'
// import Logout from '@/components/shared/Logout'
// import { getUserInfo } from '@/actions/user.actions'

export default function page(): JSX.Element {
  // const user = await currentUser()
  // if (!user) return null

  // const userInfo: IUser | null = await getUserInfo(user.id)
  // if (userInfo?.onboarded) redirect('/')

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <div className="flex justify-between">
        <h1 className="head-text text-3xl leading-6 font-bold text-black">
          Onboarding
        </h1>
        {/* <Logout placement="logout" /> */}
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

export {}
