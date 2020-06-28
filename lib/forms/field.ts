import {FunctionalComponent, h} from 'vue'
import {BColor, BSize} from '../helpers'

export const BField: FunctionalComponent<{
  color?: BColor
  size?: BSize
  label?: string
  help?: string
}> = function ({label: propLabel, help: propHelp, color, size}, ctx) {
  const labelContents = ctx.slots.label ? ctx.slots.label() : propLabel
  const labelBlock =
    labelContents &&
    h('label', {class: ['label', size && `is-${size}`]}, labelContents)

  const helpContents = ctx.slots.help ? ctx.slots.help() : propHelp
  const helpBlock =
    helpContents &&
    h('p', {class: ['help', color && `is-${color}`]}, helpContents)

  return h('div', {class: 'field'}, [
    labelBlock,
    ctx.slots.default?.({color, size}),
    helpBlock
  ])
}

export const BFieldHorizontal: FunctionalComponent<{
  color?: BColor
  size?: BSize
  label?: string
  help?: string
}> = function (props, ctx) {
  const labelContents = ctx.slots.label ? ctx.slots.label() : props.label
  const labelBlock =
    labelContents && h('label', {class: 'label'}, labelContents)

  // const helpContents = ctx.slots.help ? ctx.slots.help() : props.help
  // const helpBlock = helpContents && h('p', {class: 'help'}, helpContents)

  return h('div', {class: 'field is-horizontal'}, [
    h('div', {class: 'field-label'}, labelBlock),
    h('div', {class: 'field-body'})
  ])
}
