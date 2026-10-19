/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: '/experience', destination: '/#experience', permanent: false },
      { source: '/projects', destination: '/#work', permanent: false },
    ];
  },
};

export default nextConfig;
