import {
  FunctionalComponent,
  PropType,
  h,
  mergeProps,
  withDirectives,
  vModelSelect
} from 'vue'
import {BColor, BSize, BInputState} from '../../helpers'

export const BSelect: FunctionalComponent<
  {
    options: Record<string, string>
    modelValue: string
    expanded?: boolean
    color?: BColor
    size?: BSize
    state?: BInputState
    rounded?: boolean
    // multiple?: Boolean
  },
  {
    'update:modelValue': (modelValue: string) => void
  }
> = function (props, ctx) {
  const sizeCssCls = props.size && `is-${props.size}`
  const select = withDirectives(
    h(
      'select',
      mergeProps(ctx.attrs, {
        'disabled': props.state === 'disabled',
        'class': {
          'is-hovered': props.state === 'hovered',
          'is-focused': props.state === 'focused',
          'is-active': props.state === 'active'
        },
        'onUpdate:modelValue': (value: string) =>
          ctx.emit('update:modelValue', value)
      }),
      Object.entries(props.options).map(([value, label]) =>
        h('option', {key: value, value}, label)
      )
    ),
    [[vModelSelect, props.modelValue]]
  )
  const selectContainer = h(
    'div',
    {
      class: [
        'select',
        props.color && `is-${props.color}`,
        sizeCssCls,
        props.rounded && 'is-rounded',
        props.state === 'loading' && 'is-loading'
      ]
    },
    select
  )
  const icon =
    ctx.slots.icon &&
    h('span', {class: ['icon is-left', sizeCssCls]}, ctx.slots.icon())
  return h(
    'div',
    {
      class: [
        'control',
        ctx.slots.icon && 'has-icons-left',
        props.expanded && 'is-expanded'
      ]
    },
    [selectContainer, icon]
  )
}
BSelect.inheritAttrs = false
BSelect.props = {
  options: {type: Object, required: true},
  modelValue: {type: String, required: true},
  expanded: Boolean,
  color: String as PropType<BColor>,
  size: String as PropType<BSize>,
  state: String as PropType<BInputState>,
  rounded: Boolean
}
BSelect.emits = {
  'update:modelValue': (modelValue) => typeof modelValue === 'string'
}
