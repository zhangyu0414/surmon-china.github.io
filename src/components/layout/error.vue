<template>
  <div class="error">
    <i class="iconfont icon-close" />
    <span>Error</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  export default defineComponent({
    name: 'error'
  })
</script>

<style lang="scss" scoped>
  .error {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $error;
    user-select: none;
    font-size: $font-size-huge;
    opacity: .6;

    .iconfont {
      color: $error;
      font-size: $font-size-huge;
      margin-right: $xs-gap;
    }
  }
</style>
