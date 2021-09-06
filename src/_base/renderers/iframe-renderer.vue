<template>
  <iframe class="legacy-iframe" :src="src" />
</template>

<script setup lang="ts">
  defineProps<{ src: string }>()
</script>

<style>
  body {
    overflow: hidden;
  }
</style>

<style scoped>
  .legacy-iframe {
    width: 100vw;
    height: 100vh;
    border: none;
  }
</style>
