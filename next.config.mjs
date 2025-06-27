/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
    formats: ['image/webp'], // WebPを優先
    quality: 65,             // デフォルトより軽く
    deviceSizes: [360, 640, 768, 1024, 1280], // レスポンシブ向け
    imageSizes: [16, 32, 48, 64, 96],         // 固定用途向け
    minimumCacheTTL: 60,     // CDNキャッシュの最小秒数
  },
};

export default nextConfig;
