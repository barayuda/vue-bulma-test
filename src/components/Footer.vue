<template>
  <footer class="footer has-text-white">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Mobile App built
          with
          <span class="icon has-text-danger">
            <i class="fas fa-heart"></i>
          </span>
          by <a href="https://petehouston.com">Pete Houston</a>
          &copy; 2019.
        </p>
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
