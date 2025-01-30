<template>
  <section class="page portfolio">
    <h2 class="portfolio__title">{{ $t("navPortfolio") }}</h2>
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
const images = Array.from({ length: 72 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../assets/portfolio/image-${i + 1}.webp`, import.meta.url).href,
  alt: `Portfolio image ${i + 1} showcasing design work`,
}));
</script>

<style lang="scss">
.portfolio {
  &__title {
    font-family: "Domine", serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 50px;
    text-align: center;

    @media (min-width: $md-screen) {
      font-size: 50px;
      line-height: 54px;
      margin-bottom: 100px;
    }
  }

  &__gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: $sm-screen) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
