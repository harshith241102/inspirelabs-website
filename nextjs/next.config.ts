import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/founder-letter", destination: "/founders-letter", permanent: true },
      { source: "/portfolio", destination: "/platforms", permanent: true },
      { source: "/culture", destination: "/careers", permanent: true },
      { source: "/investors", destination: "/strategic-relations", permanent: true },
      { source: "/investor-relations", destination: "/strategic-relations", permanent: true },
      { source: "/ai-layer", destination: "/ai-operations", permanent: true },
      { source: "/services", destination: "/growth-engine", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
