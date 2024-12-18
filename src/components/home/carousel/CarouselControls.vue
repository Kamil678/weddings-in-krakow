<template>
  <button class="carousel-control left" @click="$emit('prevImage')">
    <i class="fa-solid fa-arrow-left"></i>
  </button>
  <button class="carousel-control right" @click="$emit('nextImage')">
    <i class="fa-solid fa-arrow-right"></i>
  </button>
</template>
<script setup>
import { defineEmits } from "vue";

defineEmits(["prevImage", "nextImage"]);
</script>

<style lang="scss">
.carousel-control {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  .fa-solid {
    color: #fff;
    font-size: 40px;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
}
</style>
