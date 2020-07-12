import {createRouter, createWebHistory} from 'vue-router'
import Intro from './pages/getStarted/Intro.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    // get started
    {
      name: 'intro',
      path: '/intro',
      component: Intro
    },

    // columns
    {
      name: 'columns',
      path: '/columns',
      component: () => import('./pages/Columns.vue')
    },

    // forms
    {
      name: 'forms-general',
      path: '/forms/general',
      component: () => import('./pages/Forms.vue')
    },

    // layout
    {
      name: 'container',
      path: '/layout/container',
      component: () => import('./pages/layout/Container.vue')
    },
    {
      name: 'level',
      path: '/layout/level',
      component: () => import('./pages/layout/Level.vue')
    },
    {
      name: 'media-object',
      path: '/layout/media-object',
      component: () => import('./pages/layout/MediaObject.vue')
    },
    {
      name: 'hero',
      path: '/layout/hero',
      component: () => import('./pages/layout/Hero.vue')
    },
    {
      name: 'section',
      path: '/layout/section',
      component: () => import('./pages/layout/Section.vue')
    },
    {
      name: 'footer',
      path: '/layout/footer',
      component: () => import('./pages/layout/Footer.vue')
    },
    {
      name: 'tiles',
      path: '/layout/tiles',
      component: () => import('./pages/layout/Tiles.vue')
    },

    // components
    {
      name: 'menu',
      path: '/components/menu',
      component: () => import('./pages/components/Menu.vue')
    },
    {
      name: 'navbar',
      path: '/components/navbar',
      component: () => import('./pages/components/Navbar.vue')
    },
    {
      name: 'pagination',
      path: '/components/pagination',
      component: () => import('./pages/components/Pagination.vue')
    },
    {
      name: 'card',
      path: '/components/card',
      component: () => import('./pages/components/Card.vue')
    },
    {
      name: 'tabs',
      path: '/components/tabs',
      component: () => import('./pages/components/Tabs.vue')
    }
  ]
})
