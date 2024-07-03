import React from 'react'
import './_styles/landing.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return <React.Fragment>{children}</React.Fragment>
}
