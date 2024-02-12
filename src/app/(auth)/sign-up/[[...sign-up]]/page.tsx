import React from 'react'
import { type Metadata } from 'next'
import { SignUp } from '@clerk/nextjs'

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL ?? 'localhost:3000'}`
  ),
  title: 'Sign Up | StudyCrew',
  description: 'Sign up now to start your journey to a better education.'
}

export default function Page(): JSX.Element {
  return <SignUp />
}
