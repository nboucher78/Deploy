/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,

  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Allow local images
    unoptimized: true,
  },

  // Enable static export for GitHub Pages
  output: "export",

  // Base path for GitHub Pages (if needed)
  // basePath: process.env.NODE_ENV === 'production' ? '/Deploy' : '',

  // Asset prefix for GitHub Pages
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Deploy/' : '',
};

module.exports = nextConfig;
