import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iiitdwd.ac.in',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.iiitdwd.ac.in',
        pathname: '/**'
      },
      {
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**'
      }
    ],
    domains: ['avatar.vercel.sh']
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'https://iiitdwd.ac.in/images/:path*'
      },
      {
        source: '/docs/:path*',
        destination: 'https://iiitdwd.ac.in/docs/:path*'
      }
    ];
  },
  trailingSlash: true
};

export default nextConfig;
