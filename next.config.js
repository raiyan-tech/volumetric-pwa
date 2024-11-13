/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'],
  },
  experimental: {
    serverActions: true,
    webpackBuildWorker: true,
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      topLevelAwait: true,
      layers: true,
    }
    
    config.module.rules.push({
      test: /\.(glb|gltf|fbx|hdr)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media',
          outputPath: 'static/media',
          name: '[hash].[ext]',
        },
      },
    })

    return config
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig 