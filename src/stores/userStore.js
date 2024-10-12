// src/stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    user: null
  }),
  actions: {
    login(user) {
      this.isLoggedIn = true
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('isLoggedIn', 'true')
    },
    logout() {
      this.isLoggedIn = false
      this.user = null
      localStorage.removeItem('user')
      localStorage.removeItem('isLoggedIn')
    },
    checkLoginStatus() {
      const user = localStorage.getItem('user')
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      if (isLoggedIn && user) {
        this.user = JSON.parse(user)
        this.isLoggedIn = true
      }
    }
  }
})
