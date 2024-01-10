import { type Robots } from 'next/dist/lib/metadata/types/metadata-types'

const robots: Robots = {
	index: true,
	follow: true,
	nocache: false,
	googleBot: {
		index: true,
		follow: true,
		noimageindex: true,
		'max-image-preview': 'large',
		'max-video-preview': 'large',
		'max-snippet': -1
	}
}

export default robots
