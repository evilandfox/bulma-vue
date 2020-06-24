<template>
  <b-container>
    <div class="notification">
      This container is
      <strong>centered</strong>
      on desktop.
    </div>
  </b-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {BContainer} from '/@lib/'

export default defineComponent({
  components: {BContainer}
})
</script>
