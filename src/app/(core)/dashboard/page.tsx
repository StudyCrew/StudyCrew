import React from 'react'
import { getLoggedInUser } from '@/utils/actions/user.actions'

export default async function Dashboard(): Promise<React.ReactElement> {
  const user = await getLoggedInUser()
  console.log('user', user)
  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <p>Here's your dashboard</p>
    </div>
  )
}
