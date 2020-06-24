import {FunctionalComponent, h} from 'vue'
import {PropType} from 'vue'

type BTitleSize = '1' | '2' | '3' | '4' | '5' | '6'

export const BTitle: FunctionalComponent<{
  size?: BTitleSize
  spaced?: boolean
}> = function (props, ctx) {
  if (!props.size) {
    return h(
      'h3',
      {class: ['title', props.spaced && 'is-spaced']},
      ctx.slots.default!()
    )
  } else {
    return h(
      'h' + props.size,
      {class: ['title', props.spaced && 'is-spaced', `is-${props.size}`]},
      ctx.slots.default!()
    )
  }
}
BTitle.props = {
  size: String as PropType<BTitleSize>,
  spaced: Boolean
}

export const BSubtitle: FunctionalComponent<{size?: BTitleSize}> = function (
  props,
  ctx
) {
  if (!props.size) {
    return h('h5', {class: 'subtitle'}, ctx.slots.default!())
  } else {
    return h(
      'h' + props.size,
      {class: ['subtitle', `is-${props.size}`]},
      ctx.slots.default!()
    )
  }
}
BSubtitle.props = {
  size: String as PropType<BTitleSize>
}
