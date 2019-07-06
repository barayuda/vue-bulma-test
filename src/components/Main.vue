<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hero title
        </h1>
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h2 class="subtitle">
                {{ msg }}
              </h2>
              <div class="box">
                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Enter your email">
                  </p>
                  <p class="control">
                    <a class="button is-info">
                      Notify Me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
const apiBasedUrl = "https://jsonplaceholder.typicode.com/photos";
const apiKey = "";

export default {
  name: "Main",
  props: {
    msg: String
  },
  data() {
    return {
      imgId: null,
      imgTitle: null,
      imgUrl: null,
      imgThumbUrl: null

    }
  },
  mounted () {
    axios
      .get('https://swapi.co/api/films/1/?format=json')
      .then((response) => {
        this.imgId = response.data.id;
        this.imgTitle = response.data.title;
        this.imgUrl = response.data.url;
        this.imgThumbUrl = response.data.thumbnailUrl;
      }).catch((error) => {
        console.log('[ERROR]:',error);
      });
  },
  methods: {

  }
};
</script>