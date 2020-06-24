import {FunctionalComponent, h, PropType} from 'vue'
import {
  BGridSize,
  BResponsiveBoolProp,
  BResponsiveProp,
  resolveCssClasses
} from './helpers'

/** https://bulma.io/documentation/columns/ */
type BColumnsGap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
type BColumnsGapProp = BResponsiveProp<BColumnsGap>
type BColumnSize =
  | BGridSize
  | 'full'
  | 'half'
  | 'one-third'
  | 'two-thirds'
  | 'one-quarter'
  | 'three-quarters'
  | 'one-fifth'
  | 'two-fifths'
  | 'three-fifths'
  | 'four-fifths'
type BColumnSizeProp = BResponsiveProp<BColumnSize>
export const BColumns: FunctionalComponent<{
  mobile?: boolean
  desktop?: boolean
  multiline?: boolean
  centered?: boolean
  vcentered?: boolean
  gapless?: boolean
  gap?: BColumnsGapProp
}> = function (cssProps, ctx) {
  return h(
    'div',
    {
      class: [
        resolveCssClasses('columns', cssProps),
        cssProps.gap && 'is-variable'
      ]
    },
    ctx.slots.default!()
  )
}
BColumns.props = {
  mobile: Boolean,
  desktop: Boolean,
  multiline: Boolean,
  centered: Boolean,
  vcentered: Boolean,
  gapless: Boolean,
  gap: [String, Object] as PropType<BColumnsGapProp>
}
export const BColumn: FunctionalComponent<{
  size?: BColumnSizeProp
  offset?: BColumnSizeProp
  narrow?: BResponsiveBoolProp
}> = function ({offset, ...cssProps}, ctx) {
  return h(
    'div',
    {
      class: [
        resolveCssClasses('column', cssProps),
        offset && `is-offset-${offset}`
      ]
    },
    ctx.slots.default!()
  )
}
BColumn.props = {
  size: [String, Object] as PropType<BColumnSizeProp>,
  offset: [String, Object] as PropType<BColumnSizeProp>,
  narrow: [String, Object] as PropType<BResponsiveBoolProp>
}
