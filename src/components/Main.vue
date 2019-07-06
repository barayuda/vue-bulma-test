<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1">
          {{ title }}
        </h1>
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h2 class="subtitle is-size-3">
                {{ subtitle }}
              </h2>
              <a class="button">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Main",
  props: {
    title: String,
    subtitle: String,
  }
};
</script>