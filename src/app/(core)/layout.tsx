import React from 'react'
import NavbarHelper from '@/components/layout/NavbarHelper'

interface LayoutProps {
  children: React.ReactNode
}

export default function ApplicationLayout({
  children
}: LayoutProps): JSX.Element {
  return (
    <main className={'flex bg-gray-100 h-full'}>
        <NavbarHelper />
      {children}
    </main>
  )
}
