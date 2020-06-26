<template>
  <b-tile ancestor>
    <b-tile vertical size="8">
      <b-tile>
        <b-tile parent vertical>
          <b-tile child>
            <b-notification color="primary">
              <b-title>Vertical...</b-title>
              <b-subtitle>Top tile</b-subtitle>
            </b-notification>
          </b-tile>
          <b-tile child>
            <b-notification color="warning">
              <b-title>...tiles</b-title>
              <b-subtitle>Bottom tile</b-subtitle>
            </b-notification>
          </b-tile>
        </b-tile>
        <b-tile parent>
          <b-tile child>
            <b-notification color="info">
              <b-title>Middle tile</b-title>
              <b-subtitle>With an image</b-subtitle>
              <b-image
                ratio="4by3"
                src="https://bulma.io/images/placeholders/640x480.png"
              />
            </b-notification>
          </b-tile>
        </b-tile>
      </b-tile>
      <b-tile parent>
        <b-tile child>
          <b-notification color="danger">
            <b-title>Wide tile</b-title>
            <b-subtitle>Aligned with the right tile</b-subtitle>
            <b-content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </b-content>
          </b-notification>
        </b-tile>
      </b-tile>
    </b-tile>
    <b-tile parent>
      <b-tile child>
        <b-notification color="success">
          <b-title>Tall tile</b-title>
          <b-subtitle>With even more content</b-subtitle>
          <b-content>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
              </p>
              <p>
                Suspendisse varius ligula in molestie lacinia. Maecenas varius
                eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
                maximus, augue diam porttitor lorem, et sollicitudin felis neque
                sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
                felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
              <p>
                Integer sollicitudin, tortor a mattis commodo, velit urna
                rhoncus erat, vitae congue lectus dolor consequat libero. Donec
                leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
                faucibus libero. Quisque non semper leo.
              </p>
            </div>
          </b-content>
        </b-notification>
      </b-tile>
    </b-tile>
  </b-tile>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {
  BTile,
  BBox,
  BNotification,
  BImage,
  BContent,
  BTitle,
  BSubtitle
} from '/@lib/'

export default defineComponent({
  components: {BTile, BBox, BNotification, BImage, BContent, BTitle, BSubtitle}
})
</script>
