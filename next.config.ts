import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const gatewayUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:3001';
    const engineUrl = process.env.NEXT_PUBLIC_ENGINE_URL || 'http://localhost:8000';
    
    return [
      {
        source: '/api/gateway/:path*',
        destination: `${gatewayUrl}/:path*`,
      },
      {
        source: '/api/engine/:path*',
        destination: `${engineUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
