import {router, RouteMeta, RoutesGroup} from '/@docs/router'

const group: RoutesGroup = {label: 'Layout'}

const addLayoutRoute = (
  subpath: string,
  component: () => Promise<typeof import('*.vue')>,
  label: string
) => {
  const name = `layout-${subpath}`
  const path = `/layout/${subpath}/`
  const meta: RouteMeta = {label, group}
  router.addRoute({
    name,
    path,
    component,
    meta
  })
}

addLayoutRoute('container', () => import('./Container.vue'), 'Container')

addLayoutRoute('level', () => import('./Level.vue'), 'Level')

addLayoutRoute(
  'media-object',
  () => import('./MediaObject.vue'),
  'Media Object'
)

addLayoutRoute('hero', () => import('./Hero.vue'), 'Hero')

addLayoutRoute('section', () => import('./Section.vue'), 'Section')

addLayoutRoute('footer', () => import('./Footer.vue'), 'Footer')

addLayoutRoute('tiles', () => import('./Tiles.vue'), 'Tiles')
