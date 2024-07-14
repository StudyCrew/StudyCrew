import React from 'react'

<<<<<<<< HEAD:src/app/(root)/layout.tsx
interface LayoutProps {
  children: React.ReactNode
========
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
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en">
        <Head>
          <Link rel="shortcut icon" href="/public/assets/favicon.ico" />
        </Head>
        <body>{children}</body>

        {process.browser && !_isEmpty(GOOGLE_ANALYTICS_ID) && (
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        )}
      </html>
    </ClerkProvider>
  )
>>>>>>>> platform:src/app/layout.tsx
}

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return <React.Fragment>{children}</React.Fragment>
}
