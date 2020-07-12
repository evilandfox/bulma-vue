<template>
  <p>{{ result }}</p>
</template>

<script lang="ts">
import {defineComponent, Suspense} from 'vue'
import {BBox} from '/@lib/'

export default defineComponent({
  components: {BBox, Suspense},
  async setup() {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return {result: 'WIP'}
  }
})
</script>
