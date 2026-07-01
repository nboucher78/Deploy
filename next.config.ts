import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

  // Headers for security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/activites",
        destination: "/activites",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
