import { defineStore } from "pinia"
import Cookies from "js-cookie"
export interface IMeData {
  id: number | null
  fullName: string
  phone: string
  role: string
  remunerations?: number
}
export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: ""
  }),

  getters: {
    isAuthenticated: state => state.token !== ""
  },

  actions: {
    setToken(token: string) {
      this.token = token
    },

    /**
     * @param me IMeData
     */
    onLogin() {
      // login logic
    },

    onLogout() {
      // logout logic
      this.token = ""
    }
  },

  persist: {
    key: "auth",
    storage: {
      getItem: (key: string) => Cookies.get(key) as string,
      setItem: (key: string, value: string) => Cookies.set(key, value, { expires: 365 })
    }
  }
})
