import {FunctionalComponent, h, withDirectives, vModelRadio} from 'vue'

export const BRadioItem: FunctionalComponent<
  {
    modelValue: string
    value: string
    disabled?: boolean
  },
  {
    'update:modelValue': (value: string) => void
  }
> = function (props, ctx) {
  return h(
    'label',
    {
      class: 'radio',
      disabled: props.disabled ? '' : null
    },
    [
      withDirectives(
        h('input', {
          'type': 'radio',
          'value': props.value,
          'onUpdate:modelValue': (value: string) =>
            ctx.emit('update:modelValue', value),
          'disabled': props.disabled
        }),
        [[vModelRadio, props.modelValue]]
      ),
      ctx.slots.default!()
    ]
  )
}
BRadioItem.props = {
  modelValue: {type: String, required: true},
  value: {type: String, required: true},
  disabled: Boolean
}
