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
        <div ref="dropdownRef" class="dropdown" @click="toggleDropdown">
          <button class="dropdown__button">
            <img
              :src="currentLanguage.flagImg"
              height="16"
              class="dropdown__button__img-flag"
            />
            {{ currentLanguage.label }}
            <span class="dropdown__button__arrow"
              ><img
                v-if="isOpenChangeLanguageMenu"
                src="../../assets/shared/chevron-up-ico.svg" />
              <img
                v-if="!isOpenChangeLanguageMenu"
                src="../../assets/shared/chevron-down-ico.svg"
            /></span>
          </button>
          <ul v-if="isOpenChangeLanguageMenu" class="dropdown__menu">
            <li
              v-for="lang in languages"
              :key="lang.code"
              @click.stop="changeLanguage(lang.code)"
              class="dropdown__menu__item"
            >
              <img
                :src="lang.flagImg"
                height="14"
                class="dropdown__button__img-flag"
              />
              {{ lang.label }}
            </li>
          </ul>
        </div>
      </div>
      <ul
        :class="{ 'header__nav__list--open': openMenu }"
        class="header__nav__list"
      >
        <li class="header__nav__list__element">
          <router-link
            to="/"
            class="header__nav__list__link"
            active-class="active"
            >{{ $t("navHome") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/offer"
            class="header__nav__list__link"
            active-class="active"
            >{{ $t("navOffer") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/portfolio"
            class="header__nav__list__link"
            active-class="active"
            >{{ $t("navProtfolio") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/opinions"
            class="header__nav__list__link"
            active-class="active"
            >{{ $t("navOpinions") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/humanist-weddings"
            class="header__nav__list__link"
            active-class="active"
            >{{ $t("navHumanistWeddings") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/wedding-day-coordination"
            class="header__nav__list__link"
            active-class="active"
            >{{ $t("navWeddingDayCoordination") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/offer-halls"
            class="header__nav__list__link"
            active-class="active"
            >{{ $t("navOfferHalls") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/contact"
            class="header__nav__list__link"
            active-class="active"
            >{{ $t("navContact") }}</router-link
          >
        </li>
        <div
          ref="dropdownRef"
          class="dropdown dropdown--small-screen"
          @click="toggleDropdown"
        >
          <button class="dropdown__button dropdown__button--small-screen">
            <img
              :src="currentLanguage.flagImg"
              height="16"
              class="dropdown__button__img-flag"
            />
            {{ currentLanguage.label }}
            <span class="dropdown__button__arrow"
              ><img
                v-if="isOpenChangeLanguageMenu"
                src="../../assets/shared/chevron-up-ico-white.svg" />
              <img
                v-if="!isOpenChangeLanguageMenu"
                src="../../assets/shared/chevron-down-ico-white.svg"
            /></span>
          </button>
          <ul
            v-if="isOpenChangeLanguageMenu"
            class="dropdown__menu dropdown__menu--small-screen"
          >
            <li
              v-for="lang in languages"
              :key="lang.code"
              @click.stop="changeLanguage(lang.code)"
              class="dropdown__menu__item"
            >
              <img
                :src="lang.flagImg"
                height="14"
                class="dropdown__button__img-flag"
              />
              {{ lang.label }}
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import Logo from "./Logo.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const openMenu = ref(false);

const { locale, t } = useI18n();

const languages = [
  {
    code: "pl",
    label: "PL",
    flagImg: new URL("../../assets/shared/pl-flag.png", import.meta.url).href,
  },
  {
    code: "en",
    label: "EN",
    flagImg: new URL("../../assets/shared/en-flag.png", import.meta.url).href,
  },
  {
    code: "fr",
    label: "FR",
    flagImg: new URL("../../assets/shared/fr-flag.png", import.meta.url).href,
  },
  {
    code: "it",
    label: "IT",
    flagImg: new URL("../../assets/shared/it-flag.png", import.meta.url).href,
  },
  {
    code: "de",
    label: "DE",
    flagImg: new URL("../../assets/shared/de-flag.png", import.meta.url).href,
  },
];

const currentLanguage = ref(
  languages.find((language) => language.code === locale.value)
);
const isOpenChangeLanguageMenu = ref(false);
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isOpenChangeLanguageMenu.value = !isOpenChangeLanguageMenu.value;
};

const changeLanguage = (languageCode) => {
  currentLanguage.value = languages.find(
    (language) => language.code === languageCode
  );
  isOpenChangeLanguageMenu.value = false;
  locale.value = languageCode;
  localStorage.setItem("language", languageCode);
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
      background-color: rgba(161, 109, 139, 0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
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

    .dropdown {
      position: relative;
      display: none;
      padding: 10px 0;
      min-width: 90px;

      @media (min-width: $sm-screen) {
        display: inline-block;
      }

      &--small-screen {
        display: inline-block;
        padding: 0;

        @media (min-width: $sm-screen) {
          display: none;
        }
      }

      &__button {
        background-color: transparent;
        border: none;
        padding: 10px 0 10px 15px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;

        &--small-screen {
          padding: 0;
          color: #fff;
        }

        &__img-flag {
          margin-right: 10px;
        }

        &__arrow {
          margin-left: 8px;

          img {
            vertical-align: middle;
          }
        }
      }

      &__menu {
        position: absolute;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 4px;
        list-style: none;
        padding: 0;
        z-index: 1000;

        &--small-screen {
          min-width: 90px;
          color: #000;
        }

        &__item {
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            background-color: $primary-color;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
