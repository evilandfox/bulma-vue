import {h, FunctionalComponent, PropType} from 'vue'
import {BColor, BSize} from '../helpers'

export const BProgress: FunctionalComponent<{
  value?: number
  color?: BColor
  size?: BSize
}> = function (props) {
  const cssClasses = [
    'progress',
    props.color && `is-${props.color}`,
    props.size && `is-${props.size}`
  ]
  return props.value
    ? h(
        'progress',
        {class: cssClasses, value: `${props.value}`, max: '100'},
        `${props.value}%`
      )
    : h('progress', {class: cssClasses, max: '100'})
}
BProgress.props = {
  value: Number,
  color: String as PropType<BColor>,
  size: String as PropType<BSize>
}
