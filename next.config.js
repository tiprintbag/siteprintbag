/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurações para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/siteprintbag' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


