import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
    unoptimized: true,
  },
}

export default nextConfig
