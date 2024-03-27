import '@/app/globals.css'
import React from 'react'

export default function LegalLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return <div className="max-w-6xl mx-auto">{children}</div>
}
