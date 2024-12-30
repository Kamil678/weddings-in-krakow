<template>
  <div class="dropdown" ref="dropdownRef" @click="toggleDropdown">
    <button class="dropdown__button">
      <img
        :src="currentLanguage.flagImg"
        height="16"
        class="dropdown__button__img-flag"
      />
      {{ currentLanguage.label }}
      <span class="dropdown__button__arrow">
        <img
          v-if="isOpenChangeLanguageMenu && !smallScreen"
          src="../../assets/shared/chevron-up-ico.svg"
        />
        <img
          v-if="isOpenChangeLanguageMenu && smallScreen"
          src="../../assets/shared/chevron-up-ico-white.svg"
        />
        <img
          v-if="!isOpenChangeLanguageMenu && !smallScreen"
          src="../../assets/shared/chevron-down-ico.svg"
        />
        <img
          v-if="!isOpenChangeLanguageMenu && smallScreen"
          src="../../assets/shared/chevron-down-ico-white.svg"
        />
      </span>
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
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const props = defineProps({
  smallScreen: {
    type: Boolean,
    deafult: false,
  },
});

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
  languages.find((lang) => lang.code === locale.value)
);
const isOpenChangeLanguageMenu = ref(false);

const toggleDropdown = () => {
  isOpenChangeLanguageMenu.value = !isOpenChangeLanguageMenu.value;
};

const changeLanguage = (languageCode) => {
  currentLanguage.value = languages.find((lang) => lang.code === languageCode);
  isOpenChangeLanguageMenu.value = false;
  locale.value = languageCode;
  localStorage.setItem("language", languageCode);
};
</script>

<style scoped lang="scss">
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

    .dropdown__button {
      padding: 0 !important;
      color: #fff !important;

      .dropdown__button__arrow {
        color: #fff !important;
      }
    }

    .dropdown__menu {
      min-width: 90px;
      color: #000;
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
</style>
