import {createRouter, createWebHistory} from 'vue-router'

export interface RoutesGroup {
  label: string
}

export interface RouteMeta {
  label: string
  group?: RoutesGroup
}

export const router = createRouter({
  history: createWebHistory(),
  routes: []
})
