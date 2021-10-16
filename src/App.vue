<template>
  <div id="nav" class="texto">
    |
    <router-link to="/">MCD</router-link> |
    <router-link to="/grafos">GRAFOS</router-link>
    |
  </div>
  <router-view />
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(167, 167, 167);
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
