'use server'

import React from 'react'
import { getUserInfo } from '@/lib/actions/user.actions'
import { UserButton, currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

async function Page (): Promise<JSX.Element | null> {
	const user = await currentUser()
	if (!user) return null

	const userInfo = await getUserInfo(user.id)
	if (!userInfo?.onboarded) redirect('/onboarding')

	return (
		<div>
			<UserButton afterSignOutUrl="/sign-in" />
		</div>
	)
}

export default Page
