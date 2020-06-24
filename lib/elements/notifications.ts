import {FunctionalComponent, h} from 'vue'
import {BColor} from '../helpers'
import {PropType} from 'vue'

export const BNotification: FunctionalComponent<
  {closable?: boolean; color?: BColor; light?: boolean},
  {close: () => void}
> = function (props, ctx) {
  return h(
    'div',
    {
      class: [
        'notification',
        props.color && `is-${props.color}`,
        props.light && `is-light`
      ]
    },
    [
      props.closable &&
        h('button', {class: 'delete', onClick: () => ctx.emit('close')}),
      ctx.slots.default!()
    ]
  )
}
BNotification.props = {
  closable: Boolean,
  color: String as PropType<BColor>,
  light: Boolean
}
