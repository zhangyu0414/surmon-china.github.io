import { createApp, h } from 'vue'
import IframeRenderer from '@base/renderers/iframe-renderer.vue'

import '@base/styles/app.scss'

createApp(
  h(IframeRenderer, { src: 'https://github.surmon.me/vue-drag-zone' })
).mount('#app')
