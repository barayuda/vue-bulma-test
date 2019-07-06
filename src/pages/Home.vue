<template>
  <div class="home">
    <Main title="This is Static Title" :subtitle="subtitle" />
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
const HeroRepository = DataFactory.get('subtitle');

export default {
  name: "home",
  components: {
    Main,
    PhotosList
  },
  data() {
    return {
      isLoading: false,
      subtitle: "Fetching random joke...",
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
      const hero = await HeroRepository.get();
      this.subtitle = hero.data.value;
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
