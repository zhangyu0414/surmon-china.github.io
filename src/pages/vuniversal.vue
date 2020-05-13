<template>
  <homepage :repositorie-id="repositorieId" :class="repositorieId">
    <template #content>
      <div>Vuniversal doc</div>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { getComponentExampleMeta, getHomePageHeadMeta } from '@/transformers/page-meta'
  import { GITHUB_REPOSITORIEL_IDS } from '@/constants'
  import Homepage from '@/components/homepage/index.async'

  const repositorieId = GITHUB_REPOSITORIEL_IDS.Vuniversal
  export default defineComponent({
    name: `page-${repositorieId}`,
    components: {
      Homepage
    },
    head: getHomePageHeadMeta(repositorieId),
    setup() {
      return {
        repositorieId
      }
    }
  })
</script>

<style lang="scss">
  .vuniversal {
    background: yellow;
  }
</style>
