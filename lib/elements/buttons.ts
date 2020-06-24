import {FunctionalComponent, h, PropType} from 'vue'
import {BColor, BSize, resolveCssClasses, BAlign} from '../helpers'

/** https://bulma.io/documentation/elements/button/ */

type BButtonTag = 'a' | 'button' | 'input'

type BButtonColor = BColor | 'text'

export const BButton: FunctionalComponent<{
  tag?: BButtonTag
  color?: BButtonColor
  light?: boolean
  size?: BSize
  fullwidth?: boolean
  outlined?: boolean
  inverted?: boolean
  rounded?: boolean
  selected?: boolean
  hovered?: boolean
  focused?: boolean
  active?: boolean
  loading?: boolean
  static?: boolean
}> = function ({tag, ...cssProps}, ctx) {
  return h(
    tag || 'button',
    {class: resolveCssClasses('button', cssProps)},
    ctx.slots.default!()
  )
}
BButton.props = {
  tag: String as PropType<BButtonTag>,
  color: String as PropType<BButtonColor>,
  light: Boolean,
  size: String as PropType<BSize>,
  fullwidth: Boolean,
  outlined: Boolean,
  inverted: Boolean,
  rounded: Boolean,
  selected: Boolean,
  hovered: Boolean,
  focused: Boolean,
  active: Boolean,
  loading: Boolean,
  static: Boolean
}

export const BButtons: FunctionalComponent<{
  size?: BSize
  align?: BAlign
  addons?: boolean
}> = function (props, ctx) {
  return h(
    'div',
    {
      class: [
        'buttons',
        props.size && `are-${props.size}`,
        props.align && `is-${props.align}`,
        props.addons && 'has-addons'
      ]
    },
    ctx.slots.default!()
  )
}

export const BButtonsGroup: FunctionalComponent<{}> = function (props, ctx) {
  return h(
    'div',
    {
      class: []
    },
    ctx.slots.default!()
  )
}
