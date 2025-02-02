<template>
  <section class="page portfolio">
    <h2 class="page__title">{{ $t("navPortfolio") }}</h2>
    <div class="portfolio__gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="portfolio__gallery__item"
      >
        <img
          :data-src="image.src"
          :alt="image.alt"
          class="lazy-image"
          loading="lazy"
          :src="image.loadingSrc"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Placeholder SVG w formacie Base64
const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23ddd' /%3E%3C/svg%3E";

// Przygotowanie listy obrazów
const images = Array.from({ length: 72 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../assets/portfolio/image-${i + 1}.webp`, import.meta.url).href,
  alt: `Portfolio image ${i + 1} showcasing design work`,
  loadingSrc: placeholder, // Przypisanie placeholdera
  isLoaded: false,
}));

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;

        img.onload = () => {
          img.classList.add("loaded");
          img.classList.remove("loading");
          observer.unobserve(img);
        };
      }
    });
  });

  // Obserwujemy obrazy
  document
    .querySelectorAll("img.lazy-image")
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
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    &__item {
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
      }

      img.loaded {
        opacity: 1;
      }
    }
  }
}

.lazy-image {
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
