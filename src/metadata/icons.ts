import { type Icon } from 'next/dist/lib/metadata/types/metadata-types'

const icons: Icon[] = [
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
]

export default icons
