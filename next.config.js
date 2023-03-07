/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/Liquid-list/' : '',
  reactStrictMode: true
}

module.exports = nextConfig
