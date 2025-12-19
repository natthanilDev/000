/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // บังคับเป็น Static export
  trailingSlash: true,       // สำคัญมาก แก้ 404 หลัง refresh
  images: {
    unoptimized: true        // ปิด Next Image optimization (เพราะไม่มี Node)
  }
};

module.exports = nextConfig;


