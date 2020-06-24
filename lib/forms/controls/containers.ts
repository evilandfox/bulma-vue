import {
  FunctionalComponent,
  h,
  mergeProps,
  withDirectives,
  vModelText
} from 'vue'

export const BControl: FunctionalComponent<{}> = function (
  props,
  {slots: {iconLeft, iconRight}}
) {
  return h('div', {class: 'control'})
}

export const BControlAddons: FunctionalComponent = function () {}

export const BControlGroup: FunctionalComponent = function () {}
