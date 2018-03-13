<template>
  <div id="app">
    <p>
      <router-link to="/home">/home</router-link>
      <router-link to="/about">/about</router-link>
      <router-link to="/about/team">/about/team</router-link>
      <router-link to="/about/contact">/about/contact</router-link>
    </p>
    <p>
      <router-link to="/product/1">Product 1</router-link>
      <router-link to="/product/2">Product 2</router-link>
      <router-link to="/product/3">Product 3</router-link>
    </p>
    <button @click="goToAbout()">Go to about</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mount () {
  },
  methods: {
    goToAbout () {
      this.$router.push('/about')
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
