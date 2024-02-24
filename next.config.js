const nextConfig = {
  images: {
    domains: [
      "utfs.io",
    ],
  },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
  
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.com',
          port: '',
        },
      ],
    },
  };
  
  module.exports = nextConfig