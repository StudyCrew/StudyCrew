import React from 'react'
import NavbarHelper from '@/components/layout/NavbarHelper'
import PageHeader from '@/components/layout/PageHeader'

interface LayoutProps {
  children: React.ReactNode
}

export default function ApplicationLayout({
  children
}: LayoutProps): JSX.Element {
  return (
    <div className={'flex bg-gray-100 w-screen'}>
      <NavbarHelper />
      <div className={'flex-1 px-4 md:px-12 lg:px-16'}>
        <PageHeader />
        {children}
      </div>
    </div>
  )
}
