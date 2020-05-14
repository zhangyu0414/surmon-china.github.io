module.exports = {
  universal: false,
  clientEntry: './src/main.ts',
  template: './src/app.html',
  prerender: {
    fallback: true,
    routes: [
      '/',
      '/vuniversal',
      // '/naivebayes',
      // '/vue-awesome-swiper',
      // '/vue-quill-editor',
      // '/vue-video-player',
      // '/vue-codemirror',
      // '/vue-touch-ripple',
      // '/vue-drag-zone'
    ]
  },
  build: {
    analyze: true,
    css: {
      sourceMap: true,
      styleResources: {
        scss: ['./src/assets/styles/init.scss']
      }
    },
    loaders: {
      vue: {
        exposeFilename: true
      }
    }
  },
  webpack(webpackConfig, buildContext) {
    // MARK: Just run in test
    // config.resolve.alias['vue-awesome-swiper'] = path.join(__dirname, 'development', 'vue-awesome-swiper', 'src')
  }
}
