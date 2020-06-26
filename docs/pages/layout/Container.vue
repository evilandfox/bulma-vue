<template>
  <b-container>
    <div class="notification">
      This container is <strong>centered</strong> on desktop.
    </div>
  </b-container>
  
  <hr>

  <b-container fluid>
    <div class="notification">
      This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
      viewport size.
    </div>
  </b-container>
  
  <hr>

  <b-container widescreen>
    <div class="notification">
      This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
    </div>
  </b-container>
  
  <hr>

  <b-container fullhd>
    <div class="notification">
      This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
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
