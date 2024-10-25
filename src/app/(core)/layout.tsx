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
      {' '}
      {/* 🚨 gap-1 is useful to separate potential overlapping between the primary sidebar and children */}
      <NavbarHelper />
      <div className={'flex-1 px-4 md:px-6 lg:px-10'}>
        <PageHeader />
        {children}
      </div>
    </div>
  )
}
