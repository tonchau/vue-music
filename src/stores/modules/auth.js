import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authModalShow: false,
    userLoggedIn: false
  }),
  getters: {},
  actions: {
    toggleAuthModal() {
      this.authModalShow = !this.authModalShow
      console.log(this.authModalShow)
    }
  }
})
