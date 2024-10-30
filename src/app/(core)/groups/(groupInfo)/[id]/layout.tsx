import React from 'react'
import { SecondaryNavbar } from '@/components/layout/SecondaryNavbar'

interface GroupsLayoutProps {
  children: React.ReactNode
}

export default function GroupInfoLayout({
  children
}: GroupsLayoutProps): React.ReactElement {
  return (
    <div className="flex h-screen absolute top-0 absolute left-[72px]">
      <div className="w-52 h-full border-r border-gray-200">
        <SecondaryNavbar />
      </div>
      <div className="flex-1 p-4">
        <div className="h-full overflow-auto">{children}</div>
      </div>
    </div>
  )
}
