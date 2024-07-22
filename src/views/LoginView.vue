<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field v-model="username" label="Username" required></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
      <v-btn type="submit">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'LoginView',
  setup () {
    const username = ref('')
    const password = ref('')
    const router = useRouter()
    const store = useStore()

    const users = [
      { username: 'user1', password: 'password1', role: 'user' },
      { username: 'user2', password: 'password2', role: 'user' },
      { username: 'admin', password: 'adminpassword', role: 'admin' }
    ]

    const login = () => {
      const user = users.find(user => user.username === username.value && user.password === password.value)
      if (user) {
        store.commit('setUser', user)
        router.push({ name: 'profile' })
      } else {
        alert('Invalid username or password')
      }
    }

    return { username, password, login }
  }
})
</script>
