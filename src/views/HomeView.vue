<template>
  <v-container>
    <h1>Home</h1>
    <v-btn @click="navigateTo('login')">Go to Login</v-btn>
    <v-btn @click="navigateTo('profile')">Go to Profile</v-btn>
    <v-btn @click="navigateTo('user-management')">Go to User Management</v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HomeView',
  setup () {
    const router = useRouter()

    const navigateTo = (route: string) => {
      const routeExists = router.resolve({ name: route }).matched.length > 0
      if (routeExists) {
        router.push({ name: route })
      } else {
        console.error(`No match for route name: ${route}`)
      }
    }

    return { navigateTo }
  }
})
</script>
