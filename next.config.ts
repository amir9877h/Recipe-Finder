import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.spoonacular.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["img.spoonacular.com"],
  },
};

export default nextConfig;
