import {
  FunctionalComponent,
  PropType,
  h,
  mergeProps,
  withDirectives,
  vModelText
} from 'vue'
import {BColor, BSize, BInputState} from '../../helpers'

export const BTextarea: FunctionalComponent<
  {
    modelValue: string
    expanded?: boolean
    color?: BColor
    size?: BSize
    state?: BInputState
    fixedSize?: boolean
  },
  {
    'update:modelValue': (modelValue: string) => void
  }
> = function (props, ctx) {
  const sizeCssCls = props.size && `is-${props.size}`
  const input = withDirectives(
    h(
      'textarea',
      mergeProps(ctx.attrs, {
        'disabled': props.state === 'disabled',
        'class': [
          'textarea',
          props.color && `is-${props.color}`,
          sizeCssCls,
          {
            'is-focused': props.state === 'focused',
            'is-hovered': props.state === 'hovered',
            'is-active': props.state === 'active',
            'has-fixed-size': props.fixedSize
          }
        ],
        'onUpdate:modelValue': (value: string) =>
          ctx.emit('update:modelValue', value)
      })
    ),
    [[vModelText, props.modelValue]]
  )
  return h(
    'div',
    {
      class: [
        'control',
        sizeCssCls,
        props.state === 'loading' && 'is-loading',
        props.expanded && 'is-expanded'
      ]
    },
    input
  )
}
BTextarea.inheritAttrs = false
BTextarea.props = {
  modelValue: {type: String, required: true},
  expanded: Boolean,
  color: String as PropType<BColor>,
  size: String as PropType<BSize>,
  state: String as PropType<BInputState>,
  fixedSize: Boolean
}
BTextarea.emits = {
  'update:modelValue': (modelValue) => typeof modelValue === 'string'
}
