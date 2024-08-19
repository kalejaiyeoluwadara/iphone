import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
  webpack(config) {
    return config;
  },
});

export default nextConfig;
