import React from 'react'
import icons from '@/metadata/icons'
import robots from '@/metadata/robot'
import twitter from '@/metadata/twitter'
import openGraph from '@/metadata/openGraph'
import type { Metadata, Viewport } from 'next'
// import { ThemeProvider } from '@/components/theme_provider'

import '@/app/globals.css'

export const viewport: Viewport = {
  themeColor: '#3A86FF'
}

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL ?? 'localhost:3000'}`
  ),
  title: 'StudyCrew',
  description: 'Making education more accessible, collaborative, and engaging.',
  applicationName: 'StudyCrew',
  manifest: '/manifest.json',
  icons,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'StudyCrew'
  },
  formatDetection: {
    telephone: false
  },
  openGraph,
  robots,
  twitter
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return <></>
}
