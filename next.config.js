/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/liquid-list/' : '',
  reactStrictMode: true
}

module.exports = nextConfig
