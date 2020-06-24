import {FunctionalComponent, h} from 'vue'
import {BColor, BSize} from '../helpers'

export const BField: FunctionalComponent<{
  color?: BColor
  size?: BSize
  label?: string
  help?: string
}> = function (props, ctx) {
  const labelContents = ctx.slots.label ? ctx.slots.label() : props.label
  const labelBlock =
    labelContents && h('label', {class: 'label'}, labelContents)

  const helpContents = ctx.slots.help ? ctx.slots.help() : props.help
  const helpBlock = helpContents && h('p', {class: 'help'}, helpContents)

  return h('div', {class: 'field'}, [
    labelBlock,
    ctx.slots.default?.({}),
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
