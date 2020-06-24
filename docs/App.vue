<template>
  <b-section>
    <b-container>
      <b-columns>
        <b-column size="3">
          <b-menu>
            <template v-for="route in routes">
              <b-menu-group v-if="'name' in route">
                <router-link
                  :to="{name: route.name}"
                  custom
                  #default="{href, navigate, isActive}"
                >
                  <b-menu-item
                    :href="href"
                    :active="isActive"
                    @click="navigate"
                  >
                    {{ route.label }}
                  </b-menu-item>
                </router-link>
              </b-menu-group>
              <b-menu-group v-else :label="route.label">
                <router-link
                  v-for="groupRoute in route.items"
                  :to="{name: groupRoute.name}"
                  custom
                  #default="{href, navigate, isActive}"
                >
                  <b-menu-item
                    :href="href"
                    :active="isActive"
                    @click="navigate"
                  >
                    {{ groupRoute.label }}
                  </b-menu-item>
                </router-link>
              </b-menu-group>
            </template>
          </b-menu>

          <!--b-menu>
            <b-menu-group label="General">
              <b-menu-item href="https://vk.com" target="_blank">
                Dashboard
              </b-menu-item>
              <b-menu-item>Customers</b-menu-item>
            </b-menu-group>

            <b-menu-group label="Administration">
              <b-menu-item>Team Settings</b-menu-item>
              <b-menu-item active>
                Manage Your Team
                <template #nested>
                  <b-menu-item>Members</b-menu-item>
                  <b-menu-item>Plugins</b-menu-item>
                  <b-menu-item>Add a member</b-menu-item>
                </template>
              </b-menu-item>
              <b-menu-item>Invitations</b-menu-item>
              <b-menu-item>Cloud Storage Environment Settings</b-menu-item>
              <b-menu-item>Authentication</b-menu-item>
            </b-menu-group>

            <b-menu-group label="Transactions">
              <b-menu-item>Payments</b-menu-item>
              <b-menu-item>Transfers</b-menu-item>
              <b-menu-item>Balance</b-menu-item>
            </b-menu-group>
          </b-menu-->
        </b-column>
        <b-column>
          <router-view />
        </b-column>
      </b-columns>
    </b-container>
  </b-section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {
  BSection,
  BContainer,
  BColumns,
  BColumn,
  BMenu,
  BMenuGroup,
  BMenuItem
} from '/@lib/'
import {useRouter, RouteRecord} from 'vue-router'
import {RoutesGroup, RouteMeta} from './router'

interface MenuItem {
  label: string
  name: string | symbol
  // children?: MenuItem[]
}
interface MenuGroup {
  label: string
  items: MenuItem[]
}
type Menu = (MenuItem | MenuGroup)[]

function getMenu(routes: RouteRecord[]): Menu {
  const result = [] as Menu
  const groups = new WeakMap<RoutesGroup, MenuGroup>()
  for (let route of routes) {
    const meta = route.meta as RouteMeta
    if (!meta.label) continue
    const menuItem = {
      label: meta.label,
      name: route.name!
    }
    if (meta.group) {
      let groupItem = groups.get(meta.group)
      if (!groupItem) {
        groupItem = {
          label: meta.group.label,
          items: []
        }
        groups.set(meta.group, groupItem)
        result.push(groupItem)
      }
      groupItem.items.push(menuItem)
    } else {
      result.push(menuItem)
    }
  }
  return result
}

export default defineComponent({
  components: {
    BSection,
    BContainer,
    BColumns,
    BColumn,
    BMenu,
    BMenuGroup,
    BMenuItem
  },
  setup() {
    const router = useRouter()
    return {
      routes: getMenu(router.getRoutes())
    }
  }
})
</script>
