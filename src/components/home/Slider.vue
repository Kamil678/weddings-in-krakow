<template>
  <Carousel :slides="slides" indicators controls :interval="4000" />
</template>
<script setup>
import Carousel from "./carousel/Carousel.vue";

const slides = [
  {
    id: 1,
    src: new URL("../../assets/home/slides/slide-1.webp", import.meta.url).href,
    alt: "The newlyweds kissing in front of firecrackers",
  },
  {
    id: 2,
    src: new URL("../../assets/home/slides/slide-2.webp", import.meta.url).href,
    alt: "The newlyweds taking their vows",
  },
  {
    id: 3,
    src: new URL("../../assets/home/slides/slide-3.webp", import.meta.url).href,
    alt: "The newlyweds kissing in front of guests",
  },
  {
    id: 4,
    src: new URL("../../assets/home/slides/slide-4.webp", import.meta.url).href,
    alt: "The bride and groom in the wedding hall",
  },
  {
    id: 5,
    src: new URL("../../assets/home/slides/slide-5.webp", import.meta.url).href,
    alt: "The newlyweds first dance",
  },
];
</script>
