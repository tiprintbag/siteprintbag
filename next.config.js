/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurações para GitHub Pages (descomente para build de produção)
  // basePath: '/siteprintbag',
  // output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


