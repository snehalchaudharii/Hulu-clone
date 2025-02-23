/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Hulu-clone",
  images: {
    unoptimized: true,
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
