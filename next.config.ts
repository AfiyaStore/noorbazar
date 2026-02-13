// import type { NextConfig } from 'next'
// import withNextIntl from 'next-intl/plugin'

// const nextConfig: NextConfig = withNextIntl()({
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'utfs.io',
//         port: '',
//       },
//     ],
//   },
// })

// export default nextConfig
import type { NextConfig } from 'next'
import withNextIntl from 'next-intl/plugin'

const nextConfig: NextConfig = withNextIntl()({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
    ],
  },
  experimental: {
    turbo: {}, // <-- empty object disables Turbopack safely
  },
})

export default nextConfig
