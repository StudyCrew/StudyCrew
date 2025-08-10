import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { Metadata, Viewport } from 'next'

import '@/app/globals.css'

export const viewport: Viewport = {
  themeColor: '#3A86FF'
}

export const metadata: Metadata = {
  title: 'StudyCrew',
  description: 'Making education more accessible, collaborative, and engaging.',
  applicationName: 'StudyCrew',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'StudyCrew'
  },
  formatDetection: {
    telephone: false
  }
}

interface LayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <Head>
        <Link rel="shortcut icon" href="/public/assets/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
