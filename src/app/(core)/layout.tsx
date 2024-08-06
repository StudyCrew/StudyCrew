import React from 'react'
import NavbarHelper from '@/components/layout/NavbarHelper'

interface LayoutProps {
  children: React.ReactNode
}

export default function ApplicationLayout({
  children
}: LayoutProps): JSX.Element {
  return (
    <main className={'flex'}>
      <NavbarHelper />
      {children}
    </main>
  )
}
