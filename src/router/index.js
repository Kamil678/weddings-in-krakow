import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Offer from "../pages/Offer.vue";
import HumanistWeddings from "../pages/HumanistWeddings.vue";
import WeddingDayCoordination from "../pages/WeddingDayCoordination.vue";
import Portfolio from "../pages/Portfolio.vue";
import OfferHalls from "../pages/OfferHalls.vue";
import Opinions from "../pages/Opinions.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/offer",
    name: "Offer",
    component: Offer,
  },
  {
    path: "/humanist-weddings",
    name: "HumanistWeddings",
    component: HumanistWeddings,
  },
  {
    path: "/wedding-day-coordination",
    name: "WeddingDayCoordination",
    component: WeddingDayCoordination,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/offer-halls",
    name: "OfferHalls",
    component: OfferHalls,
  },
  {
    path: "/opinions",
    name: "Opinions",
    component: Opinions,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
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

router.beforeEach((to, from, next) => {
  const selectedLanguage = localStorage.getItem("language");

  if (to.path === "/offer-halls" && selectedLanguage !== "pl") {
    return next({ path: "/" });
  }

  next();
});

export default router;
