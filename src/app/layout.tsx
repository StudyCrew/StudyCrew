import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import icons from '@/metadata/icons'
import _isEmpty from 'lodash/isEmpty'
import robots from '@/metadata/robot'
import twitter from '@/metadata/twitter'
import openGraph from '@/metadata/openGraph'
import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Toaster } from '@/components/ui/toaster'

import '@/app/globals.css'

const { GOOGLE_ANALYTICS_ID } = process.env

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
      <body>
        {children}
        <Toaster />
      </body>

      {process.browser && !_isEmpty(GOOGLE_ANALYTICS_ID) && (
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  )
}

export default RootLayout
