/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // output: 'export',
  experimental: {
    nextScriptWorkers: true,
  },
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH || 'development';
  },
};

module.exports = nextConfig;
