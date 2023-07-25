/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
  },
}

module.exports = nextConfig
