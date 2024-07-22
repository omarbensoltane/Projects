import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user') || '{}') || null,
    users: [
      { username: 'user1', password: 'password1', role: 'user' },
      { username: 'user2', password: 'password2', role: 'user' },
      { username: 'admin', password: 'adminpassword', role: 'admin' }
    ]
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    clearUser (state) {
      state.user = null
      localStorage.removeItem('user')
    },
    addUser (state, user) {
      state.users.push(user)
    },
    deleteUser (state, username) {
      state.users = state.users.filter(user => user.username !== username)
    }
  }
})

export default store
