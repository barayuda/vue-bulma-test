<template>
  <section class="section photos--list">
    <div class="columns is-multiline">
      <div
        class="column is-one-quarter-desktop is-half-tablet list--item"
        v-for="photo in photos"
        v-bind="{photo}"
        :key="photo.id"
      >
        <slot v-bind="photo"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'photos-list',
  props: {
    photos: {
      type: Array,
      required: true,
    }
  }
}
</script>
