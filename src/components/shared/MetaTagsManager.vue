// components/MetaTagsManager.vue
<script setup>
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { watchEffect } from "vue";

const { locale } = useI18n();
const route = useRoute();

const updateMetaTags = () => {
  // Usuń stare meta tagi
  document
    .querySelectorAll("[data-vue-router-controlled]")
    .forEach((el) => el.remove());

  if (route.meta.metaTags && route.meta.metaTags[locale.value]) {
    const metaData = route.meta.metaTags[locale.value];

    // Aktualizuj title
    document.title = metaData.title;

    // Dodaj meta description
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.setAttribute("name", "description");
    descriptionMeta.setAttribute("content", metaData.description);
    descriptionMeta.setAttribute("data-vue-router-controlled", "");
    document.head.appendChild(descriptionMeta);

    // Dodaj meta keywords
    const keywordsMeta = document.createElement("meta");
    keywordsMeta.setAttribute("name", "keywords");
    keywordsMeta.setAttribute("content", metaData.keywords);
    keywordsMeta.setAttribute("data-vue-router-controlled", "");
    document.head.appendChild(keywordsMeta);

    // Dodaj Open Graph tagi
    const ogTitleMeta = document.createElement("meta");
    ogTitleMeta.setAttribute("property", "og:title");
    ogTitleMeta.setAttribute("content", metaData.title);
    ogTitleMeta.setAttribute("data-vue-router-controlled", "");
    document.head.appendChild(ogTitleMeta);

    const ogDescriptionMeta = document.createElement("meta");
    ogDescriptionMeta.setAttribute("property", "og:description");
    ogDescriptionMeta.setAttribute("content", metaData.description);
    ogDescriptionMeta.setAttribute("data-vue-router-controlled", "");
    document.head.appendChild(ogDescriptionMeta);
  }
};

watchEffect(updateMetaTags);
</script>

<template></template>
