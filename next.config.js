/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.dribbble.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "uploads-ssl.webflow.com",
      },
    ],
  },
};

module.exports = nextConfig;
