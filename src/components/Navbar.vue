<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" :href="logoLink">
        <img :src="logo" width="112" height="28" />
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-burger-menu" @click="showMenu = !showMenu" :class="{ 'is-active': showMenu }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-burger-menu" class="navbar-menu" :class="{ 'is-active': showMenu }">
      <div class="navbar-end">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <a class="navbar-item" :href="logoLink">
          Beranda
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Dokumentasi
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              API
            </a>
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Kontak</strong>
            </a>
            <a class="button is-light">
              Karir
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    logo: String,
    logoLink: String
  },
  data() {
    return {
      showMenu: false
    }
  }
};
</script>
