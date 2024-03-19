/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "websitedemos.net",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: "m.media-amazon.com",
      },]
  }
}

module.exports = nextConfig
