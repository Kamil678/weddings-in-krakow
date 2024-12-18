<template>
  <Carousel :slides="slides" indicators controls :interval="4000" />
</template>
<script setup>
import Carousel from "./carousel/Carousel.vue";

const slides = [
  {
    id: 1,
    src: new URL("../../assets/home/slides/slide-1.webp", import.meta.url).href,
    alt: "The newlyweds cuddling",
  },
  {
    id: 2,
    src: new URL("../../assets/home/slides/slide-2.webp", import.meta.url).href,
    alt: "The newlyweds first dance",
  },
  {
    id: 3,
    src: new URL("../../assets/home/slides/slide-3.webp", import.meta.url).href,
    alt: "The newlyweds in a car",
  },
  {
    id: 4,
    src: new URL("../../assets/home/slides/slide-4.webp", import.meta.url).href,
    alt: "The newlyweds' car",
  },
  {
    id: 5,
    src: new URL("../../assets/home/slides/slide-5.webp", import.meta.url).href,
    alt: "The newlyweds' car",
  },
];
</script>
