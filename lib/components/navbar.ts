import {h, defineComponent, ref, FunctionalComponent} from 'vue'
import {resolveCssClasses} from '../helpers'

export interface BNavbarProps {
  container?: boolean
}
export const BNavbar = defineComponent({
  props: {
    container: Boolean
  },
  setup(props, ctx) {
    const isExpanded = ref(false)
    const toggle = () => {
      isExpanded.value = !isExpanded.value
    }
    return () => {
      const {brand: brandSlot, start: startSlot, end: endSlot} = ctx.slots
      const children = [
        brandSlot &&
          h('div', {class: 'navbar-brand'}, [
            brandSlot(),
            (startSlot || endSlot) &&
              h(
                'a',
                {
                  'class': ['navbar-burger', isExpanded.value && 'is-active'],
                  'role': 'button',
                  'aria-label': 'menu',
                  'aria-expanded': isExpanded.value,
                  'onClick': toggle
                },
                [
                  h('span', {'aria-hidden': true}),
                  h('span', {'aria-hidden': true}),
                  h('span', {'aria-hidden': true})
                ]
              )
          ]),
        (startSlot || endSlot) &&
          h('div', {class: ['navbar-menu', isExpanded.value && 'is-active']}, [
            startSlot && h('div', {class: 'navbar-start'}, startSlot()),
            endSlot && h('div', {class: 'navbar-end'}, endSlot())
          ])
      ]
      return h(
        'nav',
        {class: 'navbar'},
        props.container ? h('div', {class: 'container'}, children) : children
      )
    }
  }
})

export const BNavbarBlock: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'navbar-item'}, ctx.slots.default!())
}

export const BNavbarLink: FunctionalComponent<{active?: boolean}> = function (
  cssProps,
  ctx
) {
  return h(
    'a',
    {class: resolveCssClasses('navbar-item', cssProps)},
    ctx.slots.default!()
  )
}
BNavbarLink.props = {
  active: Boolean
}

export const BNavbarDropdown: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: ['navbar-item', 'has-dropdown', 'is-hoverable']}, [
    h('a', {class: 'navbar-link'}, ctx.slots.default!()),
    h('div', {class: 'navbar-dropdown'}, ctx.slots.content!())
  ])
}

export const BNavbarDivider: FunctionalComponent = function (_props, _ctx) {
  return h('hr', {class: 'navbar-divider'})
}
