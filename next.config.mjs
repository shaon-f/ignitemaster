const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Required for <Image> in static export
  },
};

export default nextConfig;
