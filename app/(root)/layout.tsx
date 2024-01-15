import React from 'react'
import _isEmpty from 'lodash/isEmpty'
import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { GoogleAnalytics } from '@next/third-parties/google'
import { dark } from '@clerk/themes'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import Head from 'next/head'
import Link from 'next/link'
import '../globals.css'
import '../../styles/landing.css'
import icons from '@/lib/metadata/icons'
import openGraph from '@/lib/metadata/openGraph'
import robots from '@/lib/metadata/robot'
import twitter from '@/lib/metadata/twitter'

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

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en">
        <Head>
          <ColorSchemeScript />
          <Link rel="shortcut icon" href="/public/assets/favicon.ico" />
        </Head>
        <body>
          <MantineProvider>{children}</MantineProvider>
        </body>

        {process.browser && !_isEmpty(GOOGLE_ANALYTICS_ID) && (
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        )}
      </html>
    </ClerkProvider>
  )
}
