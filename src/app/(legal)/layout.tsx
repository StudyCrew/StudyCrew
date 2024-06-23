import React from 'react'
import '@/app/globals.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function LegalLayout({ children }: LayoutProps): JSX.Element {
  return <div className="max-w-6xl mx-auto pt-8">{children}</div>
}
