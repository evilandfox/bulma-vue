import {FunctionalComponent, PropType, h} from 'vue'
import {BColor, BSizeUpper, resolveCssClasses} from '../helpers'

export const BTag: FunctionalComponent<{
  size?: BSizeUpper
  color?: BColor
  light?: boolean
  rounded?: boolean
}> = function (cssProps, ctx) {
  return h('span', {class: resolveCssClasses('tag', cssProps)}, [
    ctx.slots.default!()
  ])
}
BTag.props = {
  size: String as PropType<BSizeUpper>,
  color: String as PropType<BColor>,
  light: Boolean,
  rounded: Boolean
}

export const BTagClosable: FunctionalComponent<
  {
    size?: BSizeUpper
    color?: BColor
    light?: boolean
    rounded?: boolean
  },
  {close: () => void}
> = function (props, ctx) {
  return h(BTag, props, [
    ctx.slots.default!(),
    h('button', {class: 'delete', onClick: () => ctx.emit('close')})
  ])
}
BTagClosable.inheritAttrs = false

export const BTagDelete: FunctionalComponent<
  {},
  {close: () => void}
> = function (_props, ctx) {
  return h('a', {class: 'tag is-delete', onClick: () => ctx.emit('close')})
}

export const BTags: FunctionalComponent<{
  size?: BSizeUpper
  addons?: boolean
}> = function (props, ctx) {
  return h(
    'div',
    {
      class: [
        'tags',
        props.size && `are-${props.size}`,
        props.addons && 'has-addons'
      ]
    },
    ctx.slots.default!()
  )
}
BTags.props = {
  size: String as PropType<BSizeUpper>,
  addons: Boolean
}
