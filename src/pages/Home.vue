<template>
  <div class="home">
    <Main msg="Welcome to Your Vue.js App" />
    <section class="section photo-grid">
      Photo Grid here...
    </section>
  </div>
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
