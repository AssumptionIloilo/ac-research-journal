require('dotenv').config();

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'publications.assumptioniloilo.edu.ph',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};
