import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // @ts-expect-error: tsconfigPaths is valid but not yet typed in NextConfig
  experimental: {
    tsconfigPaths: true,
  },
};

export default nextConfig;
