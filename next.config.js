/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "e0.pxfuel.com",
      },
    ],
  },
};

module.exports = nextConfig;
