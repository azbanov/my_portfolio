/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/phoenixframework/phoenix/main/priv/static/**',
      },
    ],
  },
}

module.exports = nextConfig
