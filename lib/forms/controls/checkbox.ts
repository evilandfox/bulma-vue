import {FunctionalComponent, h, withDirectives, vModelCheckbox} from 'vue'

export const BCheckboxItem: FunctionalComponent<
  {
    modelValue: boolean
    disabled?: boolean
  },
  {
    'update:modelValue': (value: boolean) => void
  }
> = function (props, ctx) {
  return h(
    'label',
    {
      class: 'checkbox',
      disabled: props.disabled ? '' : null
    },
    [
      withDirectives(
        h('input', {
          'type': 'checkbox',
          'disabled': props.disabled,
          'onUpdate:modelValue': (value: boolean) =>
            ctx.emit('update:modelValue', value)
        }),
        [[vModelCheckbox, props.modelValue]]
      ),
      ctx.slots.default!()
    ]
  )
}
BCheckboxItem.props = {
  modelValue: {type: Boolean, required: true},
  disabled: Boolean
}
