import React from 'react'
import '@/app/globals.css'

export default function LegalLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return <div className="max-w-6xl mx-auto pt-8">{children}</div>
}
