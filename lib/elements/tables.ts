import {h, FunctionalComponent, PropType} from 'vue'
import {resolveCssClasses} from '../helpers'

export const BTable: FunctionalComponent<{
  container?: boolean
  bordered?: boolean
  striped?: boolean
  narrow?: boolean
  hoverable?: boolean
  fullwidth?: boolean
}> = function ({container, ...cssProps}, ctx) {
  const table = h('table', {class: resolveCssClasses('table', cssProps)}, [
    ctx.slots.head && h('thead', null, ctx.slots.head()),
    h('tbody', null, ctx.slots.default!()),
    ctx.slots.foot && h('tfoot', null, ctx.slots.foot())
  ])
  if (!container) {
    return table
  } else {
    return h('div', {class: 'table-container'}, [table])
  }
}
BTable.props = {
  container: Boolean,
  bordered: Boolean,
  striped: Boolean,
  narrow: Boolean,
  hoverable: Boolean,
  fullwidth: Boolean
}

export const BRow: FunctionalComponent<{selected?: boolean}> = function (
  props,
  ctx
) {
  return h(
    'tr',
    {class: {'is-selected': props.selected}},
    ctx.slots.default!()
  )
}
BRow.props = {
  selected: Boolean
}

export const BCell: FunctionalComponent = function (_props, ctx) {
  return h('td', null, ctx.slots.default?.())
}

export const BHeadCell: FunctionalComponent = function (_props, ctx) {
  return h('th', null, ctx.slots.default?.())
}
