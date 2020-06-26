<template>
  <b-navbar>
    <template #brand>
      <b-navbar-link href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </b-navbar-link>
    </template>
    <template #start>
      <b-navbar-link>Home</b-navbar-link>
      <b-navbar-link>Documentation</b-navbar-link>
      <b-navbar-dropdown>
        More
        <template #content>
          <b-navbar-link>About</b-navbar-link>
          <b-navbar-link>Jobs</b-navbar-link>
          <b-navbar-link>Contact</b-navbar-link>
          <b-navbar-divider />
          <b-navbar-link>Report an issue</b-navbar-link>
        </template>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-navbar-block>
        <b-buttons>
          <b-button tag="a" color="primary">Sign up</b-button>
          <b-button tag="a" color="light">Log in</b-button>
        </b-buttons>
      </b-navbar-block>
    </template>
  </b-navbar>

  <hr>

  
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {
  BNavbar,
  BNavbarBlock,
  BNavbarLink,
  BButton,
  BButtons,
  BNavbarDropdown,
  BNavbarDivider
} from '/@lib/'

export default defineComponent({
  components: {
    BNavbar,
    BNavbarBlock,
    BNavbarLink,
    BButton,
    BButtons,
    BNavbarDropdown,
    BNavbarDivider
  }
})
</script>
