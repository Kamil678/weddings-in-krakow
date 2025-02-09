<template>
  <div class="carousel-indicators">
    <button
      v-for="(item, index) in total"
      :key="index"
      class="carousel-indicators__item"
      :class="{ active: currentIndex === index }"
      @click="$emit('switchImage', index)"
    ></button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  total: Number,
  currentIndex: Number,
});
defineEmits(["switchImage"]);
</script>

<style lang="scss">
.carousel-indicators {
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  &__item {
    width: 15px;
    height: 15px;
    border: none;
    background-color: #fff;
    margin: 0.3em;
    border-radius: 50%;
    opacity: 0.5;
    cursor: pointer;

    &.active {
      opacity: 1;
    }
  }
}
</style>
