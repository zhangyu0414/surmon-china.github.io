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
          Loading...
        </template>
      </suspense>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount } from 'vue'
  import { StoreNames, useStore } from './store'

  export default defineComponent({
    name: 'App',
    setup() {
      const store = useStore()
      onBeforeMount(() => {
        store.dispatch(StoreNames.Init)
      })
    }
  })
</script>
