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

export const BRadio: FunctionalComponent<{
  modelValue: string
}> = function (props, ctx) {
  console.log(ctx.slots)
  return h(
    'div',
    {class: 'control'},
    Object.entries(ctx.slots)
      .filter(([_, slot]) => typeof slot === 'function')
      .map(([value, slot]) =>
        h(
          'label',
          {
            class: 'radio'
          },
          [
            withDirectives(
              h('input', {
                'type': 'radio',
                'value': value,
                'onUpdate:modelValue': (value: string) =>
                  ctx.emit('update:modelValue', value)
              }),
              [[vModelRadio, props.modelValue]]
            ),
            slot!()
          ]
        )
      )
  )
}
