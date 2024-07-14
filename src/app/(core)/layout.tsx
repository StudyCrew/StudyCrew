import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function ApplicationLayout({
  children
}: LayoutProps): JSX.Element {
  return <React.Fragment>{children}</React.Fragment>
}
