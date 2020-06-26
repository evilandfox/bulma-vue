<template>
  <b-section>
    <b-container>
      <b-columns>
        <b-column size="3">
          <b-menu>
            <b-menu-group label="Get started">
              <route-menu-link name="intro">Introdution</route-menu-link>
            </b-menu-group>
            <b-menu-group label="Columns">
              <route-menu-link name="columns">Columns</route-menu-link>
            </b-menu-group>
            <b-menu-group label="Layout">
              <route-menu-link name="container">Container</route-menu-link>
              <route-menu-link name="level">Level</route-menu-link>
              <route-menu-link name="media-object">
                Media Object
              </route-menu-link>
              <route-menu-link name="hero">Hero</route-menu-link>
              <route-menu-link name="section">Section</route-menu-link>
              <route-menu-link name="footer">Footer</route-menu-link>
              <route-menu-link name="tiles">Tiles</route-menu-link>
            </b-menu-group>
            <b-menu-group label="Components">
              <route-menu-link name="menu">Menu</route-menu-link>
              <route-menu-link name="navbar">Navbar</route-menu-link>
              <route-menu-link name="pagination">Pagination</route-menu-link>
              <route-menu-link name="card">Card</route-menu-link>
              <route-menu-link name="tabs">Tabs</route-menu-link>
            </b-menu-group>
          </b-menu>
        </b-column>
        <b-column>
          <router-view />
        </b-column>
      </b-columns>
    </b-container>
  </b-section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {
  BSection,
  BContainer,
  BColumns,
  BColumn,
  BMenu,
  BMenuGroup,
  BMenuItem
} from '/@lib/'
import RouteMenuLink from './components/RouteMenuLink.vue'

export default defineComponent({
  components: {
    BSection,
    BContainer,
    BColumns,
    BColumn,
    BMenu,
    BMenuGroup,
    BMenuItem,
    RouteMenuLink
  },
  setup() {
    return {}
  }
})
</script>
