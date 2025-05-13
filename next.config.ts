import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: [
    'https://9000-firebase-balayage-1747107751792.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev',
    'https://9004-firebase-balayage-1747107751792.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev',
  ],
};

export default nextConfig;
