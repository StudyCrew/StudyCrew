import { Metadata } from 'next'
import { Icon, Robots } from 'next/dist/lib/metadata/types/metadata-types'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'
import siteConfig from './site'

const icons: Icon[] = [
  {
    url: '/assets/maskable_icon_x48.png',
    type: 'image/png',
    sizes: '48x48'
  },
  {
    url: '/assets/maskable_icon_x72.png',
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
]

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

const twitter: Twitter = {
  card: 'summary',
  title: {
    default: 'StudyCrew',
    template: '% - PWA App'
  },
  description: 'Making education more accessible, collaborative, and engaging.'
}

const metadataConfig: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.applicationName,
  manifest: siteConfig.manifest,
  icons,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.title
  },
  formatDetection: {
    telephone: false
  },
  openGraph,
  robots,
  twitter
}

export default metadataConfig
