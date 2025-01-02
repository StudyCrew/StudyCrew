/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: []
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'index, follow'
        }
      ]
    }
  ]
}

module.exports = nextConfig