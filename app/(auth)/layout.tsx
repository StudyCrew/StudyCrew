// app/layout.tsx
import '../globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import icons from '@/lib/metadata/icons'
import openGraph from '@/lib/metadata/openGraph'
import robots from '@/lib/metadata/robot'
import twitter from '@/lib/metadata/twitter'

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
  return (
    <ClerkProvider>
      <html lang="en">
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
      </html>
    </ClerkProvider>
  )
}
