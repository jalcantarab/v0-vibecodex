/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'public/**',
        'docs/**',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.svg',
        '**/*.gif',
      ],
    },
  },
}

export default nextConfig