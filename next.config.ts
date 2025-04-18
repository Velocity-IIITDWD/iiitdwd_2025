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
  trailingSlash: true
};

export default nextConfig;
