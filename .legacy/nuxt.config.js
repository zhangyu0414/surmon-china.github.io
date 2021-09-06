
  css: [
    'normalize.css/normalize.css',
    '@/assets/styles/app.scss',
    // libs and components...
    // highlight
    'highlight.js/styles/github.css',
    // quill
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
    // codemirror
    'codemirror/lib/codemirror.css',
    'codemirror/theme/base16-dark.css',
    // swiper
    'swiper/css/swiper.css'
  ],
  plugins: [
    '@/plugins/highlight',
    '@/plugins/vue-composition-api',
    { src: '@/plugins/vue-google-adsense', mode: 'client' },
    { src: '@/plugins/vue-quill-editor', mode: 'client' },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/vue-codemirror', mode: 'client' },
    { src: '@/plugins/vue-drag-zone', mode: 'client' },
  ],
  build: {
    extractCSS: true,
    extend (config, { isClient, loaders: { vue } }) {
      // MARK: Just run in test
      // config.resolve.alias['vue-awesome-swiper'] = path.join(__dirname, 'development', 'vue-awesome-swiper', 'src')
      if (isClient) {
        // https://vue-loader.vuejs.org/zh/options.html#exposefilename
        vue.exposeFilename = true
      }
    }
  }
