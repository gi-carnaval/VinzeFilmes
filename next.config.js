// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['images.prismic.io'],
//   },
// }

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io', 'img.youtube.com'],
  },
})

// module.exports = nextConfig
