require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    domains: [
      'localhost',
      process.env.NEXT_PUBLIC_SERVER_URL?.replace('https://', ''),
      'github.com',
    ],
  },
};
