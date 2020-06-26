<template>
  <b-media>
    <template #left>
      <b-image
        size="64"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </template>
    <template #right>
      <button class="delete"></button>
    </template>
    <b-content>
      <p>
        <strong>John Smith</strong>
        <small>@johnsmith</small>
        <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
        magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
        sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </b-content>
    <b-level mobile>
      <template #left>
        <b-level-item tag="a">
          <b-icon size="small">
            <i class="fas fa-reply"></i>
          </b-icon>
        </b-level-item>
        <b-level-item tag="a">
          <b-icon size="small">
            <i class="fas fa-retweet"></i>
          </b-icon>
        </b-level-item>
        <b-level-item tag="a">
          <b-icon size="small">
            <i class="fas fa-heart"></i>
          </b-icon>
        </b-level-item>
      </template>
    </b-level>
  </b-media>

  <hr />

  <b-media>
    <template #left>
      <b-image
        size="64"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </template>
    <div class="field">
      <b-textarea modelValue="" placeholder="Add a comment..." />
    </div>
    <b-level>
      <template #left>
        <b-level-item>
          <b-button color="info">Submit</b-button>
        </b-level-item>
      </template>
      <template #right>
        <b-level-item>
          <b-checkbox-item :modelValue="false">
            Press enter to submit
          </b-checkbox-item>
        </b-level-item>
      </template>
    </b-level>
  </b-media>

  <hr />

  <b-media>
    <template #left>
      <b-image
        size="64"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </template>
    <b-content>
      <p>
        <strong>Barbara Middleton</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros
        lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris
        sit amet dolor blandit rutrum. Nunc in tempus turpis.
        <br />
        <small>
          <a>Like</a>
          ·
          <a>Reply</a>
          · 3 hrs
        </small>
      </p>
    </b-content>
    <b-media>
      <template #left>
        <b-image
          size="48"
          src="https://bulma.io/images/placeholders/96x96.png"
        />
      </template>
      <b-content>
        <p>
          <strong>Sean Brown</strong>
          <br />
          Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
          feugiat.
          <br />
          <small>
            <a>Like</a>
            ·
            <a>Reply</a>
            · 2 hrs
          </small>
        </p>
      </b-content>
      <b-media>
        Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem
        cursus ullamcorper sit amet nec massa.
      </b-media>
      <b-media>
        Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent
        malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt
        iaculis diam non, porta aliquet tortor.
      </b-media>
    </b-media>

    <b-media>
      <template #left>
        <b-image
          size="48"
          src="https://bulma.io/images/placeholders/96x96.png"
        />
      </template>
      <b-content>
        <p>
          <strong>Kayli Eunice</strong>
          <br />
          Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
          Maecenas varius felis sit amet magna vestibulum euismod malesuada
          cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
          <br />
          <small>
            <a>Like</a>
            ·
            <a>Reply</a>
            · 2 hrs
          </small>
        </p>
      </b-content>
    </b-media>
  </b-media>
  <b-media>
    <template #left>
      <b-image
        size="64"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </template>
    <div class="field">
      <b-textarea modelValue="" placeholder="Add a comment..." />
    </div>
    <div class="field">
      <p class="control">
        <b-button>Post comment</b-button>
      </p>
    </div>
  </b-media>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {
  BMedia,
  BImage,
  BContent,
  BLevel,
  BLevelItem,
  BIcon,
  BTextarea,
  BCheckboxItem,
  BButton
} from '/@lib/'

export default defineComponent({
  components: {
    BMedia,
    BImage,
    BContent,
    BLevel,
    BLevelItem,
    BIcon,
    BTextarea,
    BCheckboxItem,
    BButton
  }
})
</script>
