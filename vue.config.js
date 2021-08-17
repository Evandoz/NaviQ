// eslint-disable-next-line @typescript-eslint/no-var-requires
const appName = require('./package.json').appName

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: appName,
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/NaviQ/' : '/',
  assetsDir: 'static',
}
