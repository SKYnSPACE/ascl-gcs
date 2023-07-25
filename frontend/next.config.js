/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    COMM_SERVER: process.env.COMM_SERVER,
    VIDEO_URL: process.env.VIDEO_URL,
  },
  images: {
    domains: ['143.248.99.244'],
  },
}

module.exports = nextConfig
