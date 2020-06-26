<template>
  <b-tabs>
    <b-tab active>Pictures</b-tab>
    <b-tab>Music</b-tab>
    <b-tab>Videos</b-tab>
    <b-tab>Documents</b-tab>
  </b-tabs>

  <hr />

  <b-tabs align='centered' type='boxed'>
    <b-tab active>
      <b-icon size="small"><i class="fas fa-image"></i></b-icon>
      <span>Pictures</span>
    </b-tab>
    <b-tab>
      <b-icon size="small"><i class="fas fa-music"></i></b-icon>
      <span>Music</span>
    </b-tab>
    <b-tab>
      <b-icon size="small"><i class="fas fa-film"></i></b-icon>
      <span>Videos</span>
    </b-tab>
    <b-tab>
      <b-icon size="small"><i class="far fa-file-alt"></i></b-icon>
      <span>Documents</span>
    </b-tab>
  </b-tabs>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {BTabs, BTab, BIcon} from '/@lib/'

export default defineComponent({
  components: {BTabs, BTab, BIcon}
})
</script>
