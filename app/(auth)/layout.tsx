// app/layout.tsx
import '../globals.css'
import React from 'react'
import _isEmpty from 'lodash/isEmpty'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme-provider'
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

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <Link rel="shortcut icon" href="/public/assets/favicon.ico" />
        </Head>
        <body
          className="flex min-h-screen flex-1 flex-col
          items-center px-6 pb-10 pt-28 max-md:pb-32 sm:px-10"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>

        {process.browser && !_isEmpty(GOOGLE_ANALYTICS_ID) && (
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        )}
      </html>
    </ClerkProvider>
  )
}
