import { defineStore } from 'pinia'

export const useLoggedInUserStore = defineStore({
  id: 'loggedInUser',
  state: () => ({
    name: 'John Doe',
    email: 'fake@email.com',
    username: 'jd123'
  }),
  getters: {},
  actions: {}
})
