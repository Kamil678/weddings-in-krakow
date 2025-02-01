<template>
  <section class="page portfolio">
    <h2 class="page__title">{{ $t("navPortfolio") }}</h2>
    <div class="portfolio__gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="portfolio__gallery__item"
      >
        <img :src="image.src" :alt="image.alt" loading="lazy" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";

const images = Array.from({ length: 72 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../assets/portfolio/image-${i + 1}.webp`, import.meta.url).href,
  alt: `Portfolio image ${i + 1} showcasing design work`,
  isLoaded: false,
}));

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document
    .querySelectorAll("img[data-src]")
    .forEach((img) => observer.observe(img));
});
</script>

<style lang="scss">
.portfolio {
  &__gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 3.125rem;

    @media (min-width: $sm-screen) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    @media (min-width: $md-screen) {
      margin-top: 6.25rem;
    }

    @media (min-width: $xl-screen) {
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    &__item {
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
