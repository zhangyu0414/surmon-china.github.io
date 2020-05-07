module.exports = {
  universal: false,
  clientEntry: './src/main',
  template: './src/app.html',
  prerender: {
    fallback: true,
    // fallback: '404.html',
    routes: [
      '/',
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
    css: {
      styleResources: {
        scss: ['./src/assets/styles/init.scss']
      }
    }
  },
  webpack() {
    // MARK: Just run in test
    // config.resolve.alias['vue-awesome-swiper'] = path.join(__dirname, 'development', 'vue-awesome-swiper', 'src')
    // if (isClient) {
      // https://vue-loader.vuejs.org/zh/options.html#exposefilename
      // vue.exposeFilename = true
    // }
  }
}
