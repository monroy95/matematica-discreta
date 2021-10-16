<template>
  <div class="home">
    <MCD msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MCD from "@/components/MCD.vue";

export default {
  name: "Home",
  components: {
    MCD,
  },
};
</script>

<style scoped>
</style>
