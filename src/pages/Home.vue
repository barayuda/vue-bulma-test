<template>
  <div class="home">
    <Main msg="Welcome to Your Vue.js App" />
    <section v-if="isLoading" class="section">Fetching photos...</section>
    <photos-list v-if="!isLoading" :photos="computedPhotos">
      <template slot-scope="photos">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img 
                class="h-16 w-16 rounded-full mr-2"
                :src="`${photos.thumbnailUrl}`"
                :alt="photos.title"
              />
            </figure>
            <div class="card-content is-overlay is-clipped">
              <span class="tag is-info">
                {{ photos.title }}
              </span>       
            </div>
          </div>
        </div>
      </template>
    </photos-list>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import PhotosList from "@/components/PhotosList.vue";
import { DataFactory } from "@/data/dataFactory";

const PhotosRepository = DataFactory.get('photos');

export default {
  name: "home",
  components: {
    Main,
    PhotosList
  },
  data() {
    return {
      isLoading: false,
      photos: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.isLoading = true;
      const { data } = await PhotosRepository.get();
      this.isLoading = false;
      this.photos = data;
    }
  },
  computed: {
    computedPhotos() {
      return this.photos.slice(0, 16);
    }
  }
};
</script>
