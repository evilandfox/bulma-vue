<template>
  <b-menu>
    <b-menu-group label="General">
      <b-menu-item>Dashboard</b-menu-item>
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
  </b-menu>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {BMenu, BMenuGroup, BMenuItem} from '/@lib/'

export default defineComponent({
  components: {BMenu, BMenuGroup, BMenuItem}
})
</script>
