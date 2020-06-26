import {h, FunctionalComponent} from 'vue'
import {BSizeUpper, resolveCssClasses, BAlign} from '../helpers'

export const BTabs: FunctionalComponent<{
  size?: BSizeUpper
  align?: BAlign
  type?: 'boxed' | 'toggle' | 'toggle-rounded'
  fullwidth?: boolean
}> = function (cssProps, ctx) {
  return h(
    'div',
    {class: resolveCssClasses('tabs', cssProps)},
    h('ul', ctx.slots.default!())
  )
}

export const BTab: FunctionalComponent<{active?: boolean}> = function (
  props,
  ctx
) {
  return h(
    'li',
    {class: [props.active && 'is-active']},
    h('a', ctx.attrs, ctx.slots.default!())
  )
}
BTab.inheritAttrs = false
BTab.props = {
  active: Boolean
}
