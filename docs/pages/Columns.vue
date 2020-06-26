<template>
  <b-columns>
    <b-column>
      <content-primary>First column</content-primary>
    </b-column>
    <b-column>
      <content-primary>Second column</content-primary>
    </b-column>
    <b-column>
      <content-primary>Third column</content-primary>
    </b-column>
    <b-column>
      <content-primary>Fourth column</content-primary>
    </b-column>
  </b-columns>

  <hr />

  <b-columns>
    <b-column size="full">
      <content-primary>is-full</content-primary>
    </b-column>
  </b-columns>
  <b-columns
    v-for="size in [
      'four-fifths',
      'three-quarters',
      'two-thirds',
      'three-fifths',
      'half',
      'two-fifths',
      'one-third',
      'one-quarter',
      'one-fifth'
    ]"
  >
    <b-column :size="size">
      <content-primary>is-{{ size }}</content-primary>
    </b-column>
    <b-column>
      <content-base>&nbsp;</content-base>
    </b-column>
    <b-column>
      <content-base>&nbsp;</content-base>
    </b-column>
  </b-columns>

  <hr />

  <b-columns v-for="sizeIndex in 12" :key="sizeIndex">
    <b-column :size="`${sizeIndex}`">
      <content-primary>{{ sizeIndex }}</content-primary>
    </b-column>
    <b-column v-for="restColumnIndex in (12-sizeIndex)">
      <content-base>&nbsp;</content-base>
    </b-column>
  </b-columns>

  <hr />

  <b-columns mobile>
    <b-column size="half" offset="one-quarter">
      <content-primary>
        <p>is-half</p>
        <p>is-offset-one-quarter</p>
      </content-primary>
    </b-column>
  </b-columns>
  <b-columns mobile>
    <b-column size="three-fifths" offset="one-fifth">
      <content-primary>
        <p>is-three-fifths</p>
        <p>is-offset-one-fifth</p>
      </content-primary>
    </b-column>
  </b-columns>
  <b-columns mobile>
    <b-column size="4" offset="8">
      <content-primary>
        <p>is-4</p>
        <p>is-offset-8</p>
      </content-primary>
    </b-column>
  </b-columns>
  <b-columns mobile>
    <b-column size="11" offset="1">
      <content-primary>
        <p>is-11</p>
        <p>is-offset-1</p>
      </content-primary>
    </b-column>
  </b-columns>

  <hr />

  <b-columns>
    <b-column narrow>
      <b-box style="width: 200px;">
        <b-title size='5'>Narrow column</b-title>
        <b-subtitle>This column is only 200px wide.</b-subtitle>
      </b-box>
    </b-column>
    <b-column>
      <b-box>
        <b-title size='5'>Flexible column</b-title>
        <b-subtitle>This column will take up the remaining space available.</b-subtitle>
      </b-box>
    </b-column>
  </b-columns>
</template>

<script lang="ts">
import {defineComponent, h} from 'vue'
import {BColumns, BColumn, BNotification, BBox, BTitle, BSubtitle} from '/@lib/'

const ContentBase = defineComponent({
  setup(_props, ctx) {
    return () =>
      h(
        BNotification,
        {
          class: ['has-text-centered', 'has-text-weight-medium']
        },
        ctx.slots.default
      )
  }
})

const ContentPrimary = defineComponent({
  setup(_props, ctx) {
    return () =>
      h(
        BNotification,
        {
          color: 'primary',
          class: ['has-text-centered', 'has-text-weight-medium']
        },
        ctx.slots.default
      )
  }
})

export default defineComponent({
  components: {
    BColumns,
    BColumn,
    BBox,
    BTitle,
    BSubtitle,
    ContentBase,
    ContentPrimary
  }
})
</script>
