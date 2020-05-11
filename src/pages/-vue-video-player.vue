<template>
  <homepage
    :name="repoId"
    :repo-id="repoId"
    :description="description"
    class="vue-video-player"
  >
    <template #actions>
      <homepage-link
        icon="doc"
        text="Video.js Documentation"
        href="https://docs.videojs.com/"
      />
    </template>
    <template #content>
      <homepage-example-card
        v-for="example in examples"
        :key="example.name"
        :data="example"
        :title="example.name" 
      >
        <component :is="example.name" />
      </homepage-example-card>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { transformComponentsToNormalMaterial, getHomePageHeadMeta } from '@/transformers/page-meta'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExampleCard from '@/components/homepage/cards/example.vue'

  const repoId = 'vue-video-player'
  const description = 'Video.js component for Vue'
  const data: $TODO = {
    repoId,
    description,
    examples: [],
  }
  const components = {
    Homepage,
    HomepageLink,
    HomepageExampleCard,
  }

  const { components: exComponents, examples } = transformComponentsToNormalMaterial(
    require('@/projects/vue-video-player/examples').default
  )
  data.examples = examples
  Object.assign(components, exComponents)

  export default defineComponent({
    name: repoId,
    components,
    head: getHomePageHeadMeta(repoId, description),
    setup() {
      return data
    }
  })
</script>
