import {FunctionalComponent, h, mergeProps} from 'vue'

export const BMenu: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'menu'}, ctx.slots.default!())
}

export const BMenuGroup: FunctionalComponent<{label?: string}> = function (
  props,
  ctx
) {
  return [
    props.label && h('p', {class: 'menu-label'}, props.label),
    h('ul', {class: 'menu-list'}, ctx.slots.default!())
  ]
}

export const BMenuItem: FunctionalComponent<{active?: boolean}> = function (
  props,
  ctx
) {
  return h('li', null, [
    h(
      'a',
      mergeProps({class: [props.active && 'is-active']}, ctx.attrs),
      ctx.slots.default!()
    ),
    ctx.slots.nested && h('ul', null, ctx.slots.nested())
  ])
}
BMenuItem.props = {active: Boolean}
BMenuItem.inheritAttrs = false
