/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

// const repo = 'liquid-list'

const nextConfig = {
  // assetPrefix: isProd ? `/${repo}/` : '',
  // basePath: isProd ? `/${repo}` : '',
  reactStrictMode: true,
}

module.exports = nextConfig
