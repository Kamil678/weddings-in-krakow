<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/" class="header__logo">
        <img
          src="../../assets/shared/logo.png"
          alt="Wedding friends logo"
          class="header__logo__image"
        />
      </router-link>
      <ul
        :class="{ 'header__nav__list--open': openMenu }"
        class="header__nav__list"
      >
        <li>
          <button @click="openMenu = false" class="header__nav__close-menu-btn">
            &times;
          </button>
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navHome") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/about"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navOffer") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/offer"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navHumanistWeddings") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/gallery"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navWeddingDayCoordination") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/contact"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navProtfolio") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/contact"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navOpinions") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/contact"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navOfferHalls") }}</router-link
          >
        </li>
        <li class="header__nav__list__element">
          <router-link
            to="/contact"
            class="header__nav__list__link"
            active-class="active"
            @click="openMenu = false"
            >{{ $t("navContact") }}</router-link
          >
        </li>
      </ul>
      <div class="header__nav__buttons-wrap">
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
        <button
          @click="openMenu = true"
          class="header__nav__buttons-wrap__mobile-menu-btn"
        >
          <img
            src="../../assets/shared/icon-hamburger.svg"
            alt="Hamburger icon"
            class="hamburegr-image"
          />
        </button>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";

const openMenu = ref(false);

const { locale, t } = useI18n();

const languages = [
  { code: "pl", label: "PL", flagImg: "src/assets/shared/pl-flag.png" },
  { code: "en", label: "EN", flagImg: "src/assets/shared/en-flag.png" },
  { code: "fr", label: "FR", flagImg: "src/assets/shared/fr-flag.png" },
  { code: "it", label: "IT", flagImg: "src/assets/shared/it-flag.png" },
  { code: "de", label: "DE", flagImg: "src/assets/shared/de-flag.png" },
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
  openMenu.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpenChangeLanguageMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 3rem;
  z-index: 9999;
  background-color: #fff;

  &__nav {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__close-menu-btn {
      background-color: transparent;
      color: #fff;
      border: none;
      font-size: 30px;
      text-align: end;
      position: absolute;
      right: 20px;

      @media (min-width: $xxxl-screen) {
        display: none;
      }
    }

    &__list {
      display: none;
      gap: 1.5rem 2rem;
      list-style: none;

      &--open {
        display: flex;
        background-color: $primary-color;
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 0;
        min-width: 300px;
        align-items: flex-start;
        z-index: 9999;
        padding: 30px 20px;
        height: 100vh;

        .header__nav__list__link {
          color: #fff;
        }
      }

      @media (min-width: $xxxl-screen) {
        display: flex;
      }

      &__element {
        position: relative;
        padding: 10px 0;

        &::before {
          transition: ease 0.2s;
          height: 3px;
          content: "";
          position: absolute;
          background-color: $primary-color;
          width: 0%;
          bottom: 0;
        }

        &:has(.active) {
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
        color: #000;
        font-size: 1rem;
        line-height: 18px;
        transition: ease 0.3s;
      }
    }

    &__buttons-wrap {
      display: flex;
      align-items: center;
      gap: 20px;

      .dropdown {
        position: relative;
        display: inline-block;
        padding: 10px 0;

        &__button {
          background-color: transparent;
          border: none;
          padding: 10px 15px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          border: 2px solid $primary-color;

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

      &__mobile-menu-btn {
        display: block;
        background-color: transparent;
        border: none;
        cursor: pointer;

        .hamburegr-image {
          width: 1.625rem;
          height: 1.625rem;
        }

        @media (min-width: $xxxl-screen) {
          display: none;
        }
      }
    }
  }

  &__logo {
    text-decoration: none;
    text-align: center;
    font-size: 22px;
    line-height: 26px;
    color: #000;
    font-family: "Caudex", serif;

    &__image {
      width: 250px;
    }
  }
}
</style>
