<template>
  <transition :name="transitionEffect">
    <div class="carousel-item" v-show="currentSlide === index" @mouseover="$emit('mouseenter')" @mouseleave="$emit('mouseout')">
      <div class="carousel-item__image">
        <img :src="slide.src" :alt="slide.alt || ''" />
      </div>
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
  inset: 0; // skrót top/left/right/bottom = 0
}

.carousel-item__image {
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }
}

/* ===== TRANSITIONS ===== */

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: transform 1s ease-in-out;
  will-change: transform;
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
