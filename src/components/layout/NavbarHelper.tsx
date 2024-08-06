import React from 'react'
import Navbar from '@/components/layout/Navbar'
import { getLoggedInUser, getUserGroups } from '@/utils/actions/user.actions'

const NavbarHelper = async () => {
  const user = await getLoggedInUser()
  console.log(user)

  const userGroups = await getUserGroups('66c51364-b0d6-4568-85a6-aa6c5e142dd8')
  console.log(userGroups)

  return <Navbar userId={user.id} userGroups={userGroups} />
}

export default NavbarHelper
