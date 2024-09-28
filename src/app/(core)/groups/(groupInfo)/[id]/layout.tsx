import React from 'react'
import { SecondaryNavbar } from '@/components/layout/SecondaryNavbar'

interface GroupsLayoutProps {
  children: React.ReactNode
}

export default function GroupInfoLayout({
  children
}: GroupsLayoutProps): React.ReactElement {
  return (
    <div className={'flex h-full w-full m-0'}>
      <div className={'min-w-[10%] h-screen border-r border-gray-200'}>
        <SecondaryNavbar />
      </div>
      <div className={'max-w-[90%]'}>{children}</div>
    </div>
  )
}
