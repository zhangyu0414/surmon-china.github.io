<template>
  <div class="main">
    <transition
      name="fade"
      mode="out-in"
    >
      <suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <loading />
        </template>
      </suspense>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount } from 'vue'
  import { StoreNames, useStore } from './store'
  import Loading from '@/components/layout/loading.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Loading
    },
    setup() {
      const store = useStore()
      onBeforeMount(() => {
        store.dispatch(StoreNames.Init)
      })
    }
  })
</script>
