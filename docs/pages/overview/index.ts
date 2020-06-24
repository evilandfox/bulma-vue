import {router, RoutesGroup, RouteMeta} from '/@docs/router'

const group: RoutesGroup = {
  label: 'Get started'
}

const introduceMeta: RouteMeta = {
  label: 'Introduce',
  group
}
router.addRoute({
  name: 'introduce',
  path: '/',
  component: () => import('./Home.vue'),
  meta: introduceMeta
})
