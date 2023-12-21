import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

const openGraph: OpenGraph = {
	type: 'website',
	siteName: 'StudyCrew',
	title: {
		default: 'StudyCrew',
		template: '% - PWA App'
	},
	description: 'Making education more accessible, collaborative, and engaging.',
	images: [
		{
			url: '/assets/maskable_icon_x48',
			type: 'image/png',
			width: '48',
			height: '48'
		},
		{
			url: '/assets/maskable_icon_x72',
			type: 'image/png',
			width: '72',
			height: '72'
		},
		{
			url: '/assets/maskable_icon_x96.png',
			type: 'image/png',
			width: '96',
			height: '96'
		},
		{
			url: '/assets/maskable_icon_x128.png',
			type: 'image/png',
			width: '128',
			height: '128'
		},
		{
			url: '/assets/maskable_icon_x192.png',
			type: 'image/png',
			width: '192',
			height: '192'
		},
		{
			url: '/assets/maskable_icon_x384.png',
			type: 'image/png',
			width: '384',
			height: '384'
		}
	]
}

export default openGraph
