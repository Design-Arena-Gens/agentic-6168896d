/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: false
  },
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
