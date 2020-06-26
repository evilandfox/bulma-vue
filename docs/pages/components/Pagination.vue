<template>
  <b-pagination v-model="currentPage" :totalCount="15" />

  <hr>

  <b-pagination v-model="currentPage" :totalCount="15" size='large' />

  <hr>

  <b-pagination v-model="currentPage" :totalCount="15" order='centered' />

  <hr>

  <b-pagination v-model="currentPage" :totalCount="15" rounded />
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {BPagination} from '/@lib/'

export default defineComponent({
  components: {BPagination},
  setup() {
    const currentPage = ref(5)
    return {currentPage}
  }
})
</script>
