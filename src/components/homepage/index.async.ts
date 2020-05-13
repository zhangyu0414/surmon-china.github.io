import { defineAsyncComponent } from 'vue'
import Loading from '../layout/loading.vue'
import Error from '../layout/error.vue'

export default defineAsyncComponent({
  loader: () => import(/* webpackChunkName: 'homepage' */ './index.vue'),
  loadingComponent: Loading,
  errorComponent: Error,
  suspensible: false,
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      retry()
    } else {
      fail()
    }
  }
})
