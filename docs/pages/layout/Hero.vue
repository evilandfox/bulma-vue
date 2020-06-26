<template>
  <b-hero>
    <b-container>
      <b-title>Hero title</b-title>
      <b-subtitle>Hero subtitle</b-subtitle>
    </b-container>
  </b-hero>

  <hr />

  <b-hero color="primary">
    <b-container>
      <b-title>Primary title</b-title>
      <b-subtitle>Primary subtitle</b-subtitle>
    </b-container>
  </b-hero>

  <hr />

  <b-hero color="success" bold>
    <b-container>
      <b-title>Success bold title</b-title>
      <b-subtitle>Success bold subtitle</b-subtitle>
    </b-container>
  </b-hero>

  <hr />

  <b-hero color="danger" size="medium">
    <b-container>
      <b-title>Medium title</b-title>
      <b-subtitle>Medium subtitle</b-subtitle>
    </b-container>
  </b-hero>

  <hr />

  <b-hero color="info" size="large">
    <b-container>
      <b-title>Large title</b-title>
      <b-subtitle>Large subtitle</b-subtitle>
    </b-container>
  </b-hero>

  <hr />

  <b-hero color="warning" size="fullheight">
    <b-container>
      <b-title>Fullheight title</b-title>
      <b-subtitle>Fullheight subtitle</b-subtitle>
    </b-container>
  </b-hero>

  <hr />

  <b-hero color="primary" size="medium">
    <template #head>
      <b-navbar container>
        <template #brand>
          <b-navbar-link>
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </b-navbar-link>
        </template>
        <template #end>
          <b-navbar-link active>Home</b-navbar-link>
          <b-navbar-link>Examples</b-navbar-link>
          <b-navbar-link>Documentation</b-navbar-link>
          <b-navbar-block>
            <b-button color="primary" inverted>
              <b-icon>
                <i class="fab fa-github"></i>
              </b-icon>
              <span>Download</span>
            </b-button>
          </b-navbar-block>
        </template>
      </b-navbar>
    </template>
    <b-container class="has-text-centered">
      <b-title>Title</b-title>
      <b-subtitle>Subtitle</b-subtitle>
    </b-container>
    <template #foot>
      <nav class="tabs">
        <b-container>
          <ul>
            <li class="is-active"><a>Overview</a></li>
            <li><a>Modifiers</a></li>
            <li><a>Grid</a></li>
            <li><a>Elements</a></li>
            <li><a>Components</a></li>
            <li><a>Layout</a></li>
          </ul>
        </b-container>
      </nav>
    </template>
  </b-hero>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {
  BHero,
  BContainer,
  BTitle,
  BSubtitle,
  BNavbar,
  BNavbarBlock,
  BNavbarLink,
  BButton,
  BIcon
} from '/@lib/'

export default defineComponent({
  components: {
    BHero,
    BContainer,
    BTitle,
    BSubtitle,
    BNavbar,
    BNavbarBlock,
    BNavbarLink,
    BButton,
    BIcon
  }
})
</script>
