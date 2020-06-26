import {FunctionalComponent, PropType, h, SetupContext} from 'vue'
import {BAlign, BSize, resolveCssClasses, range} from '../helpers'

const renderPaginationItem = (
  ctx: SetupContext,
  n: number,
  current?: boolean
) => {
  const onClick = () => ctx.emit('update:modelValue', n)
  return h(
    'li',
    h(
      'a',
      {
        class: ['pagination-link', current && 'is-current'],
        onClick
      },
      n
    )
  )
}
const renderPageEllipsis = () =>
  h('li', h('span', {class: 'pagination-ellipsis'}, '…'))

export const BPagination: FunctionalComponent<{
  modelValue: number
  totalCount: number
  beforeCount?: number
  afterCount?: number
  order?: BAlign
  rounded?: boolean
  size?: BSize
}> = function (
  {modelValue, totalCount, beforeCount = 1, afterCount = 1, ...cssProps},
  ctx
) {
  return h(
    'nav',
    {class: resolveCssClasses('pagination', cssProps), role: 'navigation'},
    [
      h(
        'a',
        {
          class: 'pagination-previous',
          ...(modelValue > 1
            ? {onClick: () => ctx.emit('update:modelValue', modelValue - 1)}
            : {disabled: ''})
        },
        ctx.slots.previous?.() ?? '←'
      ),
      h(
        'a',
        {
          class: 'pagination-next',
          ...(modelValue < totalCount
            ? {onClick: () => ctx.emit('update:modelValue', modelValue + 1)}
            : {disabled: ''})
        },
        ctx.slots.next?.() ?? '→'
      ),
      h('ul', {class: 'pagination-list'}, [
        modelValue - beforeCount > 1 + 2
          ? [
              renderPaginationItem(ctx, 1),
              renderPageEllipsis(),
              range(modelValue - beforeCount, modelValue - 1, (i) =>
                renderPaginationItem(ctx, i)
              )
            ]
          : range(1, modelValue - 1, (i) => renderPaginationItem(ctx, i)),
        renderPaginationItem(ctx, modelValue, true),
        modelValue + afterCount < totalCount - 2
          ? [
              range(modelValue + 1, modelValue + afterCount, (i) =>
                renderPaginationItem(ctx, i)
              ),
              renderPageEllipsis(),
              renderPaginationItem(ctx, totalCount)
            ]
          : range(modelValue + 1, totalCount, (i) =>
              renderPaginationItem(ctx, i)
            )
      ])
    ]
  )
}
BPagination.props = {
  modelValue: {type: Number, required: true},
  totalCount: {type: Number, required: true},
  beforeCount: Number,
  afterCount: Number,
  order: String as PropType<BAlign>,
  rounded: Boolean,
  size: String as PropType<BSize>
}
