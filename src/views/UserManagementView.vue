<template>
  <v-container v-if="isAdmin">
    <v-btn @click="addUser">Add User</v-btn>
    <v-list>
      <v-list-item v-for="user in users" :key="user.username">
        <v-list-item-content>
          <v-list-item-title>{{ user.username }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action v-if="user.role !== 'admin'">
          <v-btn @click="deleteUser(user.username)">Delete</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
  <v-container v-else>
    <p>Access denied. Admins only.</p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'UserManagementView',
  setup () {
    const store = useStore()
    const users = ref(store.state.users)
    const isAdmin = store.state.user.role === 'admin'

    const addUser = () => {
      const username = prompt('Enter username:')
      const password = prompt('Enter password:')
      const role = prompt('Enter role (user/admin):')
      if (username && password && role) {
        store.commit('addUser', { username, password, role })
      }
    }

    const deleteUser = (username: string) => {
      store.commit('deleteUser', username)
    }

    return { users, addUser, deleteUser, isAdmin }
  }
})
</script>
