<template>
  <v-container>
    <v-card>
      <v-card-title>{{ user.username }}</v-card-title>
      <v-card-text>
        <p>Role: {{ user.role }}</p>
        <p>Email: {{ user.username }}@example.com</p>
        <p>Phone: 123-456-7890</p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="logout">Logout</v-btn>
        <v-btn v-if="isAdmin" @click="goToUserManagement">User Management</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ProfileView',
  setup () {
    const router = useRouter()
    const store = useStore()
    const user = store.state.user
    const isAdmin = user.role === 'admin'

    const logout = () => {
      store.commit('clearUser')
      router.push({ name: 'login' })
    }

    const goToUserManagement = () => {
      router.push({ name: 'user-management' })
    }

    return { user, logout, isAdmin, goToUserManagement }
  }
})
</script>
