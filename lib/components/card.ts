import {FunctionalComponent, h, cloneVNode} from 'vue'

export const BCard: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'card'}, ctx.slots.default!())
}

export const BCardHeader: FunctionalComponent = function (_props, ctx) {
  return h('header', {class: 'card-header'}, [
    h('p', {class: 'card-header-title'}, ctx.slots.default!()),
    ctx.slots.icon &&
      h(
        'a',
        {class: 'card-header-icon', onClick: () => ctx.emit('click')},
        h('span', {class: 'icon'}, ctx.slots.icon())
      )
  ])
}

export const BCardImage: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'card-image'}, ctx.slots.default!())
}

export const BCardContent: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'card-content'}, ctx.slots.default!())
}

export const BCardFooter: FunctionalComponent = function (_props, ctx) {
  return h('footer', {class: 'card-footer'}, ctx.slots.default!())
}
export const BCardFooterItem: FunctionalComponent = function (_props, ctx) {
  return ctx.slots.default!().map((vnode) =>
    cloneVNode(vnode, {class: 'card-footer-item'})
  )
}
