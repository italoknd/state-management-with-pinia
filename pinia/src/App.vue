<template>
  <div>
    <h2>Hello, my name is {{ user.name }}</h2>
    <h2>Thats my name using mapState {{ name }}</h2>
  </div>
</template>

<script>
import { useLoggedInUserStore } from '@/stores/loggedUsers'
import { mapState } from 'pinia'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  setup() {
    const user = useLoggedInUserStore()
    user.name
    return { user }
  },
  computed: {
    ...mapState(useLoggedInUserStore, ['name'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
