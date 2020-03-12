const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  includePaths: [path.resolve('node_modules')],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
