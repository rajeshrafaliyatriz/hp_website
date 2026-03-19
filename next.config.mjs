/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip type checking for legacy files during build
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
