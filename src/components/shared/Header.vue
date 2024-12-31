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
            class="hamburegr-image"
          />
        </button>
        <button
          v-if="openMenu"
          @click="(openMenu = false), (isOpenChangeLanguageMenu = false)"
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
            :to="link.path"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = !openMenu"
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
import LanguageDropdown from "./LanguageDropdown.vue";

const openMenu = ref(false);

const { locale, t } = useI18n();
console.log(locale.value);
const navLinks = [
  { path: "/", label: "navHome" },
  { path: "/offer", label: "navOffer" },
  { path: "/portfolio", label: "navPortfolio" },
  { path: "/opinions", label: "navOpinions" },
  { path: "/humanist-weddings", label: "navHumanistWeddings" },
  { path: "/wedding-day-coordination", label: "navWeddingDayCoordination" },
  { path: "/offer-halls", label: "navOfferHalls" },
  { path: "/contact", label: "navContact" },
];

const filteredNavLinks = computed(() => {
  if (locale.value === "pl") {
    return navLinks;
  }

  return navLinks.filter((link) => link.path !== "/offer-halls");
});
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

      @media (min-width: $sm-screen) {
        min-width: 90px;
      }
    }

    &__list {
      position: absolute;
      left: 0;
      right: 0;
      top: -555px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      list-style: none;
      background-color: $primary-color;
      padding: 1rem;
      transition: top 0.3s ease-out, transform 0.3s ease-out;
      // background-color: rgba(161, 109, 139, 0.6);
      // backdrop-filter: blur(10px);
      // -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      color: white;

      @media (min-width: $sm-screen) {
        top: -515px;
      }

      @media (min-width: $xl-screen) {
        top: -75px;
        gap: 1.5rem 3rem;
        flex-direction: row;
        transition: top 0.2s ease-out, transform 0.2s ease-out;
      }

      &--open {
        top: 93px;

        @media (min-width: $sm-screen) {
          top: 110px;
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

        &--change-language-element {
          margin-left: 0;
          &:hover::before {
            width: 0;
          }

          @media (min-width: $xxxl-screen) {
            margin-left: 10px;
          }
        }
      }

      &__change-language-btn {
        background-color: transparent;
        border: none;
        text-transform: uppercase;
        font-size: 1.125rem;
        line-height: 20px;
        border-left: 2px solid #000;
        padding-left: 5px;
        cursor: pointer;
      }

      &__link {
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        line-height: 18px;
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

        .hamburegr-image {
          width: 1.625rem;
          height: 1.625rem;
        }

        @media (min-width: $sm-screen) {
          min-width: 90px;
        }
      }
    }
  }
}
</style>
