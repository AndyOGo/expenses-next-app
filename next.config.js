const path = require('path');
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  includePaths: [path.resolve('node_modules')]
})
