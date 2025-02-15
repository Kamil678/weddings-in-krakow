<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__nav__buttons-wrap">
        <button
          v-if="!openMenu"
          @click="openMenu = true"
          class="header__nav__buttons-wrap__mobile-menu-btn"
        >
          <img
            src="../../assets/shared/icon-hamburger.svg"
            alt="Hamburger icon"
            class="hamburger-image"
          />
        </button>
        <button
          v-if="openMenu"
          @click="closeMenu"
          class="header__nav__close-menu-btn"
        >
          &times;
        </button>
        <Logo />
        <LanguageDropdown />
      </div>
      <ul
        :class="{ 'header__nav__list--open': openMenu }"
        class="header__nav__list"
      >
        <li
          v-for="(link, index) in filteredNavLinks"
          :key="index"
          class="header__nav__list__element"
        >
          <router-link
            :to="getLocalizedPath(link.name)"
            class="header__nav__list__link"
            :exact="link.name === 'Home'"
            :class="{ active: isLinkActive(link) }"
            @click="toggleMenu"
            >{{ $t(link.label) }}</router-link
          >
        </li>
        <LanguageDropdown class="dropdown--small-screen" small-screen />
      </ul>
    </nav>
  </header>
</template>

<script setup>
import Logo from "./Logo.vue";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import LanguageDropdown from "./LanguageDropdown.vue";
import { debounce } from "lodash";
import { getCorrectPath } from "@/router";

const openMenu = ref(false);
const isOpenChangeLanguageMenu = ref(false);
const route = useRoute();

const { locale, t } = useI18n();

const navLinks = [
  { name: "Home", label: "navHome" },
  { name: "Offer", label: "navOffer" },
  { name: "Portfolio", label: "navPortfolio" },
  { name: "Opinions", label: "navOpinions" },
  { name: "HumanistWeddings", label: "navHumanistWeddings" },
  { name: "WeddingDayCoordination", label: "navWeddingDayCoordination" },
  { name: "OfferHalls", label: "navOfferHalls" },
  { name: "Contact", label: "navContact" },
];

const getLocalizedPath = (name) => {
  if (name === "Home") return "/";
  return getCorrectPath(name);
};

const isLinkActive = (link) => {
  if (link.name === "Home") {
    return route.path === "/";
  }

  const currentPath = route.path.toLowerCase();
  const linkPath = getLocalizedPath(link.name).toLowerCase();

  return currentPath === linkPath;
};

const filteredNavLinks = computed(() => {
  if (locale.value === "pl") {
    return navLinks;
  }
  return navLinks.filter((link) => link.name !== "OfferHalls");
});

const closeMenu = debounce(() => {
  openMenu.value = false;
  isOpenChangeLanguageMenu.value = false;
}, 200);

const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &__nav {
    width: 100%;
    margin: 0 auto;
    position: relative;

    &__close-menu-btn {
      background-color: transparent;
      color: #000;
      border: none;
      font-size: 43.5px;
      min-width: auto;
      text-align: start;
      cursor: pointer;
    }

    &__list {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: translateY(-100%);
      transition: transform 0.3s ease-out;
      background-color: $primary-color;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      list-style: none;
      color: white;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);

      @media (min-width: $sm-screen) {
        transform: translateY(-100%);
      }

      @media (min-width: $xl-screen) {
        transform: translateY(-75px);
        gap: 1.5rem 3rem;
        flex-direction: row;
      }

      &--open {
        transform: translateY(93px);

        @media (min-width: $sm-screen) {
          transform: translateY(110px);
        }
      }

      &__element {
        position: relative;
        padding: 10px 0;

        &::before {
          transition: ease 0.2s;
          height: 3px;
          content: "";
          position: absolute;
          background-color: #fff;
          width: 0%;
          bottom: 0;
        }

        &:has(.active) {
          font-weight: 500;
          &::before {
            width: 100%;
          }
        }

        &:hover::before {
          width: 100%;
        }
      }

      &__link {
        text-decoration: none;
        color: #fff;
        font-size: 1.1rem;
        line-height: 20px;
        transition: ease 0.3s;
      }
    }

    &__buttons-wrap {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 0 1.5rem;
      position: relative;
      z-index: 2;
      background-color: #fff;

      @media (min-width: $md-screen) {
        padding: 0 3rem;
      }

      @media (min-width: $xl-screen) {
        padding: 0 4.5rem;
      }

      @media (min-width: $sm-screen) {
        flex-direction: row;
      }

      &__mobile-menu-btn {
        display: block;
        background-color: transparent;
        border: none;
        cursor: pointer;
        min-width: auto;
        text-align: left;

        .hamburger-image {
          width: 1.625rem;
          height: 1.625rem;
        }
      }
    }
  }
}
</style>
