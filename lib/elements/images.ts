import {h, FunctionalComponent, PropType, mergeProps} from 'vue'

/** https://bulma.io/documentation/elements/image/ */
type BImageSize = '16' | '24' | '32' | '48' | '64' | '96' | '128'
type BImageRatio =
  | 'square'
  | '1by1'
  | '2by1'
  | '3by1'
  | '1by2'
  | '3by2'
  | '1by3'
  | '2by3'
  | '4by3'
  | '5by3'
  | '3by4'
  | '5by4'
  | '3by5'
  | '4by5'
  | '16by9'
  | '9by16'
export const BImage: FunctionalComponent<{
  size?: BImageSize
  ratio?: BImageRatio
  fullwidth?: boolean
  tag: string
  rounded?: boolean
}> = function (props, ctx) {
  return h(
    'figure',
    {
      class: [
        'image',
        props.fullwidth && `is-${props.fullwidth}`,
        props.size && `is-${props.size}x${props.size}`,
        props.ratio && `is-${props.ratio}`
      ]
    },
    [
      h(
        props.tag,
        mergeProps(ctx.attrs, {
          class: {
            'is-rounded': props.rounded,
            'has-ratio': props.tag !== 'img' && props.ratio
          }
        })
      )
    ]
  )
}
BImage.inheritAttrs = false
BImage.props = {
  size: String as PropType<BImageSize>,
  ratio: String as PropType<BImageRatio>,
  fullwidth: Boolean,
  tag: {type: String, default: 'img'}
}
