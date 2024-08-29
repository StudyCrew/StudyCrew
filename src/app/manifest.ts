import siteConfig from '@/config/site'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F2F7FF',
    theme_color: '#3A86FF',
    icons: [
      {
        src: '/assets/maskable_icon_x48',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: '/assets/maskable_icon_x72',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/assets/maskable_icon_x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/assets/maskable_icon_x128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: '/assets/maskable_icon_x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/assets/maskable_icon_x384.png',
        sizes: '384x384',
        type: 'image/png'
      }
    ]
  }
}
