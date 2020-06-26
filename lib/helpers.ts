export type BSizeUpper = 'normal' | 'medium' | 'large'
export type BSize = 'small' | BSizeUpper

export type BAlign = 'centered' | 'right'

export type BGridSize =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

export type BColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'link'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'white'
  | 'black'

export type BColorBW =
  | 'black-bis'
  | 'black-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-ter'
  | 'white-bis'

export type BColorExt =
  | BColor
  | BColorBW
  | 'primary-light'
  | 'link-light'
  | 'info-light'
  | 'success-light'
  | 'warning-light'
  | 'danger-light'
  | 'primary-dark'
  | 'link-dark'
  | 'info-dark'
  | 'success-dark'
  | 'warning-dark'
  | 'danger-dark'

export type BInputState =
  | 'focused'
  | 'hovered'
  | 'active'
  | 'disabled'
  | 'loading'

type BResponsiveMap<T> = {
  mobile?: T
  tablet?: T
  desktop?: T
  widescreen?: T
  fullhd?: T
}
export type BResponsiveProp<T extends boolean | string> = T | BResponsiveMap<T>
export type BResponsiveBoolProp = BResponsiveProp<boolean>

export const resolveCssClasses = (
  mainClass: string,
  props: Record<string, any>,
  prefix = 'is-'
) => {
  let result = mainClass
  for (let propKey in props) {
    const propVal = props[propKey]
    if (propVal === true || propVal === '') {
      result += ` ${prefix}${propKey}`
    } else if (typeof propVal === 'string') {
      result += ` ${prefix}${propVal}`
    } else if (propVal) {
      for (let responsiveKey in propVal) {
        const responsiveVal = propVal[responsiveKey]
        if (responsiveVal === true || responsiveVal === '') {
          result += ` ${prefix}${propKey}-${responsiveKey}`
        } else if (typeof responsiveVal === 'string') {
          result += ` ${prefix}${responsiveVal}-${responsiveKey}`
        }
      }
    }
  }
  return result
}

export const range = <T>(from: number, to: number, mapper: (i: number) => T) =>
  Array.from({length: to - from + 1}, (_, i) => mapper(from + i))
