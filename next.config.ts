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
<<<<<<< HEAD
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**'
      }
    ],
    domains: ['avatar.vercel.sh']
=======
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
  trailingSlash: true,
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
>>>>>>> 3a8f3f8c2aa464e594301caffd9216937b1c0586
  }
};

export default nextConfig;
