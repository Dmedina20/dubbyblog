/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dub.co",
        port: "",
        pathname: "/_next/**",
      },
    ],
  },
};

module.exports = nextConfig;
