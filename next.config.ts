import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_CLOUDFLARE_TOKEN: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN,
  },
};

export default nextConfig;
