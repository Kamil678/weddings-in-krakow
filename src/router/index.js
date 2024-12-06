import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
  },
});

export default router;
