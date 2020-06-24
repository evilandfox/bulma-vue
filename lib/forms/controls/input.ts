import {
  h,
  vModelText,
  mergeProps,
  withDirectives,
  FunctionalComponent,
  PropType,
  VNode
} from 'vue'
import {BColor, BSize, BInputState} from '../../helpers'

type BInputType = 'text' | 'password' | 'email' | 'tel' | 'number'

const toIconSize = (size: undefined | BSize) => {
  switch (size) {
    case 'medium':
      return undefined
    case 'large':
      return 'medium'
    default:
      return 'small'
  }
}
const renderInputControl = (
  input: VNode,
  iconLeft: undefined | VNode[],
  iconRight: undefined | VNode[],
  size: undefined | BSize,
  isLoading: boolean,
  isExpanded: undefined | boolean
) =>
  h(
    'div',
    {
      class: [
        'control',
        size && `is-${size}`,
        isLoading && 'is-loading',
        isExpanded && 'is-expanded',
        iconLeft && 'has-icons-left',
        iconRight && 'has-icons-right'
      ]
    },
    [
      input,
      iconLeft &&
        h('span', {class: ['icon is-left', toIconSize(size)]}, iconLeft),
      iconRight &&
        h('span', {class: ['icon is-right', toIconSize(size)]}, iconRight)
    ]
  )

export const BInput: FunctionalComponent<
  {
    modelValue: string | number
    expanded?: boolean
    color?: BColor
    size?: BSize
    type?: BInputType
    state?: BInputState
    rounded?: boolean
  },
  {
    'update:modelValue': (modelValue: string | number) => void
  }
> = function (props, ctx) {
  const input = withDirectives(
    h(
      'input',
      mergeProps(ctx.attrs, {
        'type': props.type,
        'disabled': props.state === 'disabled',
        'class': [
          'input',
          props.color && `is-${props.color}`,
          props.size && `is-${props.size}`,
          {
            'is-rounded': props.rounded,
            'is-focused': props.state === 'focused',
            'is-active': props.state === 'active',
            'is-hovered': props.state === 'hovered'
          }
        ],
        'onUpdate:modelValue': (value: string | number) =>
          ctx.emit('update:modelValue', value)
      })
    ),
    [[vModelText, props.modelValue]]
  )
  return renderInputControl(
    input,
    ctx.slots['icon-left']?.(),
    ctx.slots['icon-right']?.(),
    props.size,
    props.state === 'loading',
    props.expanded
  )
}
BInput.inheritAttrs = false
BInput.props = {
  modelValue: {type: [String, Number], required: true},
  expanded: Boolean,
  color: String as PropType<BColor>,
  size: String as PropType<BSize>,
  type: {
    type: String as PropType<BInputType>,
    default: 'text'
  },
  state: String as PropType<BInputState>,
  rounded: Boolean
}
BInput.emits = {
  'update:modelValue': (modelValue) => {
    const type = typeof modelValue
    return type === 'string' || type === 'number'
  }
}

export const BInputStatic: FunctionalComponent<{
  value: string | number
  expanded?: boolean
  size?: BSize
  iconLeft?: string
  iconRight?: string
}> = function (props, ctx) {
  const input = h(
    'input',
    mergeProps(ctx.attrs, {
      type: 'text',
      readonly: true,
      class: ['input', 'is-static', props.size && `is-${props.size}`],
      value: `${props.value}`
    })
  )
  return renderInputControl(
    input,
    ctx.slots['icon-left']?.(),
    ctx.slots['icon-right']?.(),
    props.size,
    false,
    props.expanded
  )
}
BInputStatic.inheritAttrs = false
BInputStatic.props = {
  value: {type: [String, Number], required: true},
  expanded: Boolean,
  size: String as PropType<BSize>,
  iconLeft: String,
  iconRight: String
}
