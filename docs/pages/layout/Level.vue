<template>
  <b-level>
    <template #left>
      <b-level-item>
        <b-subtitle size="5">
          <strong>123</strong>
          posts
        </b-subtitle>
      </b-level-item>
      <b-level-item>
        <div class="field has-addons">
          <b-input placeholder='Find a post' modelValue='' />
          <p class="control">
            <b-button>Search</b-button>
          </p>
        </div>
      </b-level-item>
    </template>

    <template #right>
      <b-level-item><strong>All</strong></b-level-item>
      <b-level-item><a>Published</a></b-level-item>
      <b-level-item><a>Drafts</a></b-level-item>
      <b-level-item><a>Deleted</a></b-level-item>
      <b-level-item>
        <b-button tag="a" color="success">New</b-button>
      </b-level-item>
    </template>
  </b-level>

  <hr />

  <b-level>
    <b-level-item class="has-text-centered">
      <div>
        <p class="heading">Tweets</p>
        <p class="title">3,456</p>
      </div>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <div>
        <p class="heading">Following</p>
        <p class="title">123</p>
      </div>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <div>
        <p class="heading">Followers</p>
        <p class="title">456K</p>
      </div>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <div>
        <p class="heading">Likes</p>
        <p class="title">789</p>
      </div>
    </b-level-item>
  </b-level>

  <hr />

  <b-level>
    <b-level-item class="level-item has-text-centered">
      <a>Home</a>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <a>Menu</a>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <img
        src="https://bulma.io/images/bulma-type.png"
        alt=""
        style="height: 30px;"
      />
    </b-level-item>
    <b-level-item class="has-text-centered">
      <a>Reservations</a>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <a>Contact</a>
    </b-level-item>
  </b-level>

  <hr>

  <b-level mobile>
    <b-level-item class="has-text-centered">
      <div>
        <p class="heading">Tweets</p>
        <p class="title">3,456</p>
      </div>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <div>
        <p class="heading">Following</p>
        <p class="title">123</p>
      </div>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <div>
        <p class="heading">Followers</p>
        <p class="title">456K</p>
      </div>
    </b-level-item>
    <b-level-item class="has-text-centered">
      <div>
        <p class="heading">Likes</p>
        <p class="title">789</p>
      </div>
    </b-level-item>
  </b-level>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {BLevel, BLevelItem, BInput, BSubtitle, BButton} from '/@lib/'

export default defineComponent({
  components: {BLevel, BLevelItem, BInput, BSubtitle, BButton}
})
</script>
