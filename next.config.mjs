/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", 
                       "rc-notification", "rc-tooltip", "rc-tree", "rc-table", "echarts", "zrender"],
  
  async rewrites() {
    return [
      {
        source: '/api/place/:path*',
        destination: 'https://maps.googleapis.com/maps/api/place/:path*',
      },
    ];
 },
};

export default nextConfig;
