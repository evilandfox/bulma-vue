import {FunctionalComponent, h, PropType, Slot} from 'vue'
import {BColor, BGridSize, BSizeUpper, resolveCssClasses} from './helpers'

/** https://bulma.io/documentation/layout/footer/ */

export const BFooter: FunctionalComponent = function (_props, ctx) {
  return h('footer', {class: 'footer'}, ctx.slots.default!())
}

/** https://bulma.io/documentation/layout/container/ */

export const BContainer: FunctionalComponent<{
  fluid?: boolean
  widescreen?: boolean
  fullhd?: boolean
}> = function (cssProps, ctx) {
  return h(
    'div',
    {class: resolveCssClasses('container', cssProps)},
    ctx.slots.default!()
  )
}
// TODO заменить на responsive пропсы
BContainer.props = {
  fluid: Boolean,
  widescreen: Boolean,
  fullhd: Boolean
}

/** https://bulma.io/documentation/layout/level/ */

export const BLevel: FunctionalComponent = function (_props, ctx) {
  return h('div', {class: 'level'}, [
    ctx.slots.left &&
      h('div', {class: 'level-left'}, wrapLevelItems(ctx.slots.left)),
    ctx.slots.default && wrapLevelItems(ctx.slots.default),
    ctx.slots.right &&
      h('div', {class: 'level-right'}, wrapLevelItems(ctx.slots.right))
  ])
}
const wrapLevelItems = (slot: Slot) =>
  slot().map((node) => h('div', {class: 'level-item'}, node))

/** https://bulma.io/documentation/layout/media-object/ */

export const BMedia: FunctionalComponent = function (_props, ctx) {
  return h('article', {class: 'media'}, [
    ctx.slots.left && h('div', {class: 'media-left'}, ctx.slots.left()),
    ctx.slots.default &&
      h('div', {class: 'media-content'}, ctx.slots.default()),
    ctx.slots.right && h('div', {class: 'media-right'}, ctx.slots.right())
  ])
}

/** https://bulma.io/documentation/layout/section/ */

export const BSection: FunctionalComponent<{
  size?: BSizeUpper
}> = function (cssProps, ctx) {
  return h(
    'section',
    {class: resolveCssClasses('section', cssProps)},
    ctx.slots.default!()
  )
}
BSection.props = {size: String as PropType<BSizeUpper>}

/** https://bulma.io/documentation/layout/tiles/ */

export const BTile: FunctionalComponent<{
  ancestor?: boolean
  parent?: boolean
  child?: boolean
  vertical?: boolean
  size?: BGridSize
}> = function (cssProps, ctx) {
  return h(
    'div',
    {class: resolveCssClasses('tile', cssProps)},
    ctx.slots.default!()
  )
}
BTile.props = {
  ancestor: Boolean,
  parent: Boolean,
  child: Boolean,
  vertical: Boolean,
  size: String as PropType<BGridSize>
}

/** https://bulma.io/documentation/layout/hero/ */

type BHeroSize = BSizeUpper | 'fullheight' | 'fullheight-with-navbar'
export const BHero: FunctionalComponent<{
  color?: BColor
  bold?: boolean
  size?: BHeroSize
}> = function (cssProps, ctx) {
  return h(
    'section',
    {
      class: resolveCssClasses('hero', cssProps)
    },
    [
      ctx.slots.head && h('div', {class: 'hero-head'}, ctx.slots.head()),
      h('div', {class: 'hero-body'}, ctx.slots.default!()),
      ctx.slots.foot && h('div', {class: 'hero-foot'}, ctx.slots.foot())
    ]
  )
}
BHero.props = {
  color: String as PropType<BColor>,
  bold: Boolean,
  size: String as PropType<BHeroSize>
}
