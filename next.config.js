const linguiConfig = require("./lingui.config.js");
const { locales, sourceLocale } = linguiConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        resourceQuery: /raw-lingui/,
        type: "javascript/auto",
      },
    ];
    return config;
  },
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  i18n: {
    localeDetection: true,
    locales,
    defaultLocale: sourceLocale,
  },
};

module.exports = nextConfig;
