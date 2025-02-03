<template>
  <section class="page portfolio">
    <h2 class="page__title">{{ $t("navPortfolio") }}</h2>
    <div class="portfolio__gallery">
      <div
        v-for="image in currentPageImages"
        :key="image.id"
        class="portfolio__gallery__item"
      >
        <div class="image-loader">
          <div class="pulse-loader">
            <div class="pulse-loader__circle"></div>
            <div class="pulse-loader__circle"></div>
            <div class="pulse-loader__circle"></div>
          </div>
        </div>
        <img
          :data-src="image.src"
          :alt="image.alt"
          class="lazy-image"
          ref="imageRefs"
        />
      </div>
    </div>

    <div class="pagination">
      <button
        class="pagination__button"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        {{ $t("portfolioPrevious") }}
      </button>

      <div class="pagination__pages">
        <button
          v-for="pageNum in totalPages"
          :key="pageNum"
          class="pagination__page"
          :class="{ 'pagination__page--active': pageNum === currentPage }"
          @click="changePage(pageNum)"
        >
          {{ pageNum }}
        </button>
      </div>

      <button
        class="pagination__button"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        {{ $t("portfolioNext") }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

const IMAGES_PER_PAGE = 15;
const currentPage = ref(1);

const images = Array.from({ length: 72 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../assets/portfolio/image-${i + 1}.webp`, import.meta.url).href,
  alt: `Portfolio image ${i + 1}`,
  isLoaded: false,
}));

const totalPages = computed(() => Math.ceil(images.length / IMAGES_PER_PAGE));

const currentPageImages = computed(() => {
  const start = (currentPage.value - 1) * IMAGES_PER_PAGE;
  const end = start + IMAGES_PER_PAGE;
  return images.slice(start, end);
});

const changePage = (newPage) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;
    window.scrollTo({
      top: document.querySelector(".portfolio__gallery").offsetTop,
      behavior: "smooth",
    });
  }
};

const onImageLoad = (event) => {
  const img = event.target;
  img.classList.add("loaded");
  const loader = img.previousElementSibling;
  if (loader) {
    loader.classList.add("hidden");
  }
};

const loadCurrentPageImages = () => {
  setTimeout(() => {
    document.querySelectorAll(".lazy-image").forEach((img) => {
      if (img.dataset.src && !img.src) {
        img.src = img.dataset.src;
        img.onload = onImageLoad;
      }
    });
  }, 100);
};

watch(currentPage, () => {
  loadCurrentPageImages();
});

onMounted(() => {
  loadCurrentPageImages();
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
    margin-bottom: 2rem;

    @media (min-width: $sm-screen) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    @media (min-width: $xl-screen) {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    &__item {
      overflow: hidden;
      position: relative;
      aspect-ratio: 1;
      background: #f5f5f5;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      img.loaded {
        opacity: 1;
      }
    }
  }
}

.pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: $sm-screen) {
    flex-direction: row;
    padding-top: 2rem;
  }

  &__button {
    padding: 0.5rem 1rem;
    background: #f5f5f5;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover:not(:disabled) {
      background: #e0e0e0;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (min-width: $sm-screen) {
      padding: 0.75rem 1rem;
    }
  }

  &__pages {
    display: flex;
    gap: 0.5rem;
  }

  &__page {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: $gray-color;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover:not(&--active) {
      background: #e0e0e0;
    }

    &--active {
      background: $primary-color;
      color: #fff;
    }

    @media (min-width: $sm-screen) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}

.image-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  &.hidden {
    display: none;
  }
}

.pulse-loader {
  display: flex;
  align-items: center;
  gap: 6px;

  &__circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $primary-color;
    animation: pulse 1.4s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
