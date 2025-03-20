import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true
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
      }
    ]
  },
  trailingSlash: true
};

export default nextConfig;
