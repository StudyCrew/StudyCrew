import { Fragment } from 'react'
import './_styles/landing.css'

interface LandingLayoutProps {
  children: React.ReactNode
}

export default function LandingLayout({
  children
}: LandingLayoutProps): JSX.Element {
  return <Fragment>{children}</Fragment>
}
