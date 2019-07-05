<template>
  <section class="section home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <Main msg="Welcome to Your Vue.js App" />
  </section>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "home",
  components: {
    Main
  }
};
</script>
