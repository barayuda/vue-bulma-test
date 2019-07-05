<template>
  <section class="section navigation is-padding-nav-less">
    <nav class="navbar is-fixed-top" :class="{'has-shadow': scrollPosition > 60}" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/images/logo-dana-with-typography@2x.png" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-burger-menu"
          @click="showMenu = !showMenu"
          :class="{ 'is-active': showMenu }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbar-burger-menu"
        class="navbar-menu"
        :class="{ 'is-active': showMenu }"
      >
        <div class="navbar-end">
          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/contact">Contact Us</router-link>
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link" to="/kontak">Contact Us</router-link>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/api">API</router-link>
            </div>
          </div> -->
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
      scrollPosition: null
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>
