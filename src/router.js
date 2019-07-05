import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tentang",
      name: "about",
      // lazy-loaded applied
      component: () => import("./pages/About.vue")
    },
    {
      path: "/kontak",
      name: "contact",
      component: () => import("./pages/Contact.vue")
    }
  ]
});
