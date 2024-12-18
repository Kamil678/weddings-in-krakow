<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseover="$emit('mouseenter')"
      @mouseleave="$emit('mouseout')"
    >
      <div
        :style="{ backgroundImage: `url(${slide.src})` }"
        class="carousel-item__image"
      ></div>
    </div>
  </transition>
</template>
<script setup>
import { defineProps, computed, defineEmits } from "vue";
const props = defineProps({
  slide: Object,
  currentSlide: Number,
  index: Number,
  direction: String,
});
defineEmits(["mouseenter", "mouseout"]);

const transitionEffect = computed(() => {
  return props.direction === "right" ? "slide-out" : "slide-in";
});
</script>

<style lang="scss">
.carousel-item {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &__image {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    @media (min-width: $xl-screen) {
      background-size: cover;
    }
  }
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-from {
  transform: translateX(100%);
}

.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
