import React from 'react'
import './_styles/landing.css'

interface LandingLayoutProps {
  children: React.ReactNode
}

export default function LandingLayout({
  children
}: LandingLayoutProps): JSX.Element {
  return <React.Fragment>{children}</React.Fragment>
}
