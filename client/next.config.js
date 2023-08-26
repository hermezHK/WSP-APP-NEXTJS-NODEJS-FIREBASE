/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID : YOUR-ID,
    NEXT_PUBLIC_ZEGO_SERVER_ID : "YOUR-ID-SERVER"
  },
  images : {
    domains: ["localhost"],
  }
};

module.exports = nextConfig;
