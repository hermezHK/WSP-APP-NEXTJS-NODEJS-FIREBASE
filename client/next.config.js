/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1250977034,
    NEXT_PUBLIC_ZEGO_SERVER_ID : "37627a3a8a66fb337d85b8089b5ac200"
  },
  images : {
    domains: ["localhost"],
  }
};

module.exports = nextConfig;
