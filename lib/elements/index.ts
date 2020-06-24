export * from './buttons'
export * from './icons'
export * from './images'
export * from './notifications'
export * from './progresses'
export * from './tables'
export * from './tags'
export * from './title'

import {h, FunctionalComponent} from 'vue'

/** https://bulma.io/documentation/elements/box/ */

export const BBox: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'box'}, ctx.slots.default!())
}

/** https://bulma.io/documentation/elements/content/ */

export const BContent: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'content'}, ctx.slots.default!())
}
