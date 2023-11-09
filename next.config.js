const nextConfig = {
    images: {
      domains: [
        'raw.githubusercontent.com',
        'steamcdn-a.akamaihd.net',
        'community.cloudflare.steamstatic.com',
      ],
    },
    webpack: (config, { isServer }) => {
      // This will ensure that the json file is included in the server-side build
      if (isServer) {
        config.node = {
          __dirname: true,
        };
      }
  
      return config;
    },
    staticPageGenerationTimeout: 120000,
  };
  
  module.exports = nextConfig;