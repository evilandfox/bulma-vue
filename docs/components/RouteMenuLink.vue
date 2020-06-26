<template>
  <router-link :to="{name: name}" custom #default="{href, navigate, isActive}">
    <b-menu-item :href="href" :active="isActive" @click="navigate">
      <slot />
    </b-menu-item>
  </router-link>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {BMenuItem} from '/@lib/'

export default defineComponent({
  components: {BMenuItem},
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>
