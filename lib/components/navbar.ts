import {h, defineComponent, ref, FunctionalComponent} from 'vue'

export interface BNavbarProps {
  container?: boolean
}
export const BNavbar = defineComponent({
  props: {
    container: Boolean
  },
  setup(props, ctx) {
    const isExpanded = ref(false)
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
                  'class': 'navbar-burger',
                  'role': 'button',
                  'aria-label': 'menu',
                  'aria-expanded': isExpanded.value
                },
                [
                  h('span', {'aria-hidden': true}),
                  h('span', {'aria-hidden': true}),
                  h('span', {'aria-hidden': true})
                ]
              )
          ]),
        (startSlot || endSlot) &&
          h('div', {class: 'navbar-menu'}, [
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

export const BNavbarLink: FunctionalComponent = function (_props, ctx) {
  return h('a', {class: 'navbar-item'}, ctx.slots.default!())
}

export const BNavbarDropdown: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'navbar-item'}, ctx.slots.default!())
}
