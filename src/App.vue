<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <IndexPage></IndexPage>
  </div>
</template>

<script>
import IndexPage from '@/pages/index.vue'

export default {
  name: 'App',
  components: {
    IndexPage
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
