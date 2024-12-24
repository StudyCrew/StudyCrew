import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import icons from '@/metadata/icons'
import robots from '@/metadata/robot'
import twitter from '@/metadata/twitter'
import openGraph from '@/metadata/openGraph'
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
