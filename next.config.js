/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/dermatology/ayurveda/:slug*',
        destination: '/ayurveda/:slug*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
