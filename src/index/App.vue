<script setup lang="ts">
  import { ref } from 'vue'
  const countdown = ref(0)
</script>

<template>
  <div class="index">
    <div class="countdown">{{ countdown }}</div>
    <p>To github.com...</p>
  </div>
</template>

<style>
  .index {
    width: 100%;
    height: 100vh;
  }
</style>
