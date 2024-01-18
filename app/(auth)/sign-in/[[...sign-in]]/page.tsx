import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL ?? 'localhost:3000'}`),
  title: 'Sign In | StudyCrew',
  description:
  'Sign in to continue your journey to a better education.'
}

export default function Page(): JSX.Element {
  return <SignIn />
}
