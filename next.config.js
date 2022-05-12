/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    imageUrl: process.env.IMAGE_URL
  }
}

module.exports = nextConfig
