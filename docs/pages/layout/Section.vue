<template>
  <b-section>
    <b-container>
      <b-title>Section</b-title>
      <b-subtitle>
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </b-subtitle>
    </b-container>
  </b-section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {BSection, BContainer, BTitle, BSubtitle} from '/@lib/'

export default defineComponent({
  components: {BSection, BContainer, BTitle, BSubtitle}
})
</script>
