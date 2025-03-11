// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config: any, { isServer }: any) => {
        // Audio processing for Vapi
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            net: false,
            tls: false,
        };

        return config;
    },
    // Environment variables that will be available on the client side
    // Add these to your .env.local file
    env: {
        NEXT_PUBLIC_VAPI_API_KEY: process.env.NEXT_PUBLIC_VAPI_API_KEY,
        NEXT_PUBLIC_VAPI_ASSISTANT_ID:
            process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID,
    },
    // Add rewrites to proxy API requests and avoid CORS issues
    async rewrites() {
        return [
            {
                source: "/api/vapi/:path*",
                destination: "https://api.vapi.ai/:path*",
            },
        ];
    },
};

module.exports = nextConfig;

// .env.local (create this file in your project root)
// NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
// NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
