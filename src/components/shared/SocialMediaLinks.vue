<template>
  <div class="social-media-links">
    <a
      v-for="(link, index) in links"
      :key="index"
      :href="link.href"
      class="social-media-links__item"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="link.label"
    >
      <i :class="link.icon"></i>
    </a>
  </div>
</template>

<script setup>
defineProps(["links"]);
</script>

<style lang="scss" scoped>
.social-media-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: $lg-screen) {
    justify-content: flex-start;
  }

  &__item {
    text-decoration: none;
    color: $primary-color;
    transform: translateY(0);

    &:hover {
      transform: translateY(-5px);
    }

    i {
      font-size: 30px;

      @media (min-width: $lg-screen) {
        font-size: 40px;
      }
    }
  }
}
</style>
