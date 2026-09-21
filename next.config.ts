import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Add your real image host(s) here once products load from a CMS or storage bucket.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
