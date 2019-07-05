<template>
  <footer class="footer has-text-white">
    <div class="container">
      <div class="columns">
        <div class="column has-text-left has-text-centered-mobile">
          <div class="footer-column">
            <div class="footer-header">
              <h3 class="is-uppercase">Follow Us</h3>
            </div>
            <nav class="level is-mobile icons-centered-mobile">
              <div class="level-left">
                <a class="level-item is-size-3" href="https://fb.com/barayuda.web.id">
                  <span class="icon"><i class="fa fa-facebook-square"></i></span>
                </a>
                <a class="level-item is-size-3" href="https://twitter.com/barayuda">
                  <span class="icon"><i class="fa fa-twitter"></i></span>
                </a>
                <a class="level-item is-size-3" href="https://instagram.com/barayudagautama">
                  <span class="icon"><i class="fa fa-instagram"></i></span>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div class="column is-four-fifths has-text-right has-text-centered-mobile is-size-7-mobile">
          <div class="footer-menu is-uppercase">
            <router-link class="footer-item" to="/home"><span class="text">Home</span></router-link>
            <router-link class="footer-item" to="/about"><span class="text">About Us</span></router-link>
            <router-link class="footer-item" to="/contact"><span class="text">Contact Us</span></router-link>
          </div>
          <div class="footer-copyright">
            <p>&copy; 2017 DANA - PT. Espay Debit Indonesia Koe. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    a {
      color: $white;
    }
  }
</style>

<script>
export default {
  name: "Footer",
  data() {
    return {
      showMenu: false
    };
  }
};
</script>
