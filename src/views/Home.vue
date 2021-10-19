<template>
  <div>
    <MCD />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MCD from "../components/MCD.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    MCD,
  },
});
</script>
