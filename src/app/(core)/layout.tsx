import React from 'react'
import NavbarHelper from '@/components/layout/NavbarHelper'

interface LayoutProps {
  children: React.ReactNode
}

export default function ApplicationLayout({
  children
}: LayoutProps): JSX.Element {
  return (
    <main className={'flex bg-gray-100 gap-1'}>
      {' '}
      {/* 🚨 gap-1 is useful to separate potential overlapping between the primary sidebar and children */}
      <NavbarHelper />
      {children}
    </main>
  )
}
