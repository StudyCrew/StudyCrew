import React from 'react'
import Navbar from '@/components/layout/navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function ApplicationLayout({
  children
}: LayoutProps): JSX.Element {
  return (
    <main className={'flex'}>
      <Navbar />
      {children}
    </main>
  )
}
