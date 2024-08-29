import { Toaster } from '@/components/ui/toaster'
import { GoogleAnalytics } from '@next/third-parties/google'
import _isEmpty from 'lodash/isEmpty'
import type { Metadata, Viewport } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

import '@/app/globals.css'
import metadataConfig from '@/config/metadata'

const { GOOGLE_ANALYTICS_ID } = process.env

export const viewport: Viewport = {
  themeColor: '#3A86FF'
}

export const metadata: Metadata = metadataConfig

export default function RootLayout({ children }: PropsWithChildren) {
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
