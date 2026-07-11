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

  // Enable static export for Netlify/GitHub Pages
  output: "export",

  // Disable redirects and headers (not supported with static export)
  // Use _redirects file in public/ for Netlify instead
  // Use next-sitemap for sitemap generation
};

module.exports = nextConfig;
