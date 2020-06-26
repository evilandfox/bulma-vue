<template>
  <b-card>
    <b-card-header>
      User data
      <template #icon>
        <i class="fas fa-angle-down"></i>
      </template>
    </b-card-header>
    <b-card-image>
      <b-image
        ratio="4by3"
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
    </b-card-image>
    <b-card-content>
      <b-media>
        <template #left>
          <b-image
            size="48"
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </template>
        <b-title size="4">John Smith</b-title>
        <b-subtitle size="6">@johnsmith</b-subtitle>
      </b-media>
      <b-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>
        .
        <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </b-content>
    </b-card-content>
    <b-card-footer>
      <b-card-footer-item>
        <a>Save</a>
      </b-card-footer-item>
      <b-card-footer-item>
        <a>Edit</a>
      </b-card-footer-item>
      <b-card-footer-item>
        <a>Delete</a>
      </b-card-footer-item>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {
  BCard,
  BCardHeader,
  BCardImage,
  BCardContent,
  BCardFooter,
  BCardFooterItem,
  BImage,
  BMedia,
  BContent,
  BTitle,
  BSubtitle
} from '/@lib/'

export default defineComponent({
  components: {
    BCard,
    BCardHeader,
    BCardImage,
    BCardContent,
    BCardFooter,
    BCardFooterItem,
    BImage,
    BMedia,
    BContent,
    BTitle,
    BSubtitle
  }
})
</script>
