import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@base': path.resolve(__dirname, 'src', '_base'),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        'index': '/index.html',
        'veact': '/veact/index.html',
        'naivebayes': '/naivebayes/index.html',
        'vue-awesome-swiper': '/vue-awesome-swiper/index.html',
        'vue-codemirror': '/vue-codemirror/index.html',
        'vue-drag-zone': '/vue-drag-zone/index.html',
        'vue-quill-editor': '/vue-quill-editor/index.html',
        'vue-touch-ripple': '/vue-touch-ripple/index.html',
        'vue-video-player': '/vue-video-player/index.html',
      }
    }
  },
  plugins: [
    vue(),
    reactRefresh(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          `<!-- GENERAL_RESOURCE -->`,
          [
            // Google search console
            `<meta name="google-site-verification" content="CNWDKal1HwPI4bIhG5jkySW65FQxwPmYGt7K_gqjY38" />`,
            // Google analytics
            `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-84887611-2"></script>`,
            `<script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-84887611-2');
            </script>`,
          ].join('\n')
        )
      },
    }
  ]
})
