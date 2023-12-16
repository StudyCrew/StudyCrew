import React from 'react'
import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import Head from 'next/head'
import Link from 'next/link'
import '../globals.css'
import '../../styles/landing.css'

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

export default async function RootLayout ({
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
					<MantineProvider>
						{children}
					</MantineProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
