<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/record">Record</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="fade-nav">

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    console.log('Version 1803270126')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 4rem;
}
#nav {
  padding: 6rem 0;
  width: 100%;
  position: fixed;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-nav {
  height: 20rem;
}
</style>
