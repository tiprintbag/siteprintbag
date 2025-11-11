/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurações para GitHub Pages
  basePath: '/siteprintbag',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


