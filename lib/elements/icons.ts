import {FunctionalComponent, PropType, h} from 'vue'
import {BSize, resolveCssClasses, BColor} from '../helpers'

/** https://bulma.io/documentation/elements/icon/ */

const toFaSize = (size?: BSize) => {
  switch (size) {
    case 'small':
      return null
    case 'medium':
      return '2x'
    case 'large':
      return '3x'
    default:
      return 'lg'
  }
}

export const BIcon: FunctionalComponent<{
  size?: BSize
  color?: BColor
}> = function ({size, ...cssTextProps}, ctx) {
  const iconCss = resolveCssClasses('icon', {size})
  return h(
    'span',
    {class: resolveCssClasses(iconCss, cssTextProps, 'has-text-')},
    ctx.slots.default!()
  )
}
BIcon.props = {
  size: String as PropType<BSize>,
  color: String as PropType<BColor>
}
BIcon.inheritAttrs = false
