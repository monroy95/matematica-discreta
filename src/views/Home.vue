<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Euclides />
  </div>
</template>

<script>
// @ is an alias to /src
import Euclides from "../components/Euclides.vue";

export default {
  name: "Home",
  components: {
    Euclides,
  },
};
</script>
