// app/layout.tsx
import '../globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme-provider'

export const viewport: Viewport = {
	themeColor: '#3A86FF'
}

export const metadata: Metadata = {
	title: 'StudyCrew',
	description:
    'Making education more accessible, collaborative, and engaging.',
	applicationName: 'StudyCrew',
	manifest: '/manifest.json',
	icons: [
		{
			url: '/assets/maskable_icon_x48',
			type: 'image/png',
			sizes: '48x48'
		},
		{
			url: '/assets/maskable_icon_x72',
			type: 'image/png',
			sizes: '72x72'
		},
		{
			url: '/assets/maskable_icon_x96.png',
			type: 'image/png',
			sizes: '96x96'
		},
		{
			url: '/assets/maskable_icon_x128.png',
			type: 'image/png',
			sizes: '128x128'
		},
		{
			url: '/assets/maskable_icon_x192.png',
			type: 'image/png',
			sizes: '192x192',
			rel: 'apple-touch-icon'
		},
		{
			url: '/assets/maskable_icon_x384.png',
			type: 'image/png',
			sizes: '384x384',
			rel: 'apple-touch-icon'
		}
	],
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: 'StudyCrew'
	},
	formatDetection: {
		telephone: false
	},
	openGraph: {
		type: 'website',
		siteName: 'StudyCrew',
		title: {
			default: 'StudyCrew',
			template: '% - PWA App'
		},
		description: 'Making education more accessible, collaborative, and engaging.'
	},
	twitter: {
		card: 'summary',
		title: {
			default: 'StudyCrew',
			template: '% - PWA App'
		},
		description: 'Making education more accessible, collaborative, and engaging.'
	}
}

export default function RootLayout ({
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
					className='flex min-h-screen flex-1 flex-col
          items-center px-6 pb-10 pt-28 max-md:pb-32 sm:px-10'
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
