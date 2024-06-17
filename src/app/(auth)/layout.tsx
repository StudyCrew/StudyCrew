import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: LayoutProps): JSX.Element {
  return <React.Fragment>{children}</React.Fragment>
}