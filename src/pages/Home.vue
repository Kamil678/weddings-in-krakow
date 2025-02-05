<template>
  <main>
    <h1 class="visually-hidden">Weddings in Krakow</h1>
    <Slider />
    <AboutSection />
    <BasicOfferSection />
    <MapSection />
  </main>
</template>
<script setup>
import Slider from "../components/home/Slider.vue";
import AboutSection from "../components/home/AboutSection.vue";
import BasicOfferSection from "../components/home/BasicOfferSection.vue";
import MapSection from "../components/home/MapSection.vue";
</script>

<style lang="scss">
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
