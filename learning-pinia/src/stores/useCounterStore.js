import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
  store: () =>({
    count: 0,
    name: "Italo"
  }),

  getters: {
    doubleCount: (state) => {
      state.count * 2
    }
  },
  actions: {
    reset () {
      this.count = 0
    },
    addOne () {
      this.count++
    }
  }
})