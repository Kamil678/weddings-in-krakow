<template>
  <section class="map-section">
    <h3 class="map-section__title">
      {{ $t("homeMapSectionText1") }}
      <span class="count" ref="count1">0</span> {{ $t("homeMapSectionText2") }}
      <span class="count" ref="count2">0</span> {{ $t("homeMapSectionText3") }}
    </h3>
    <img
      src="../../assets/home/map.png"
      alt="Map of where I have performed weddings"
    />
    <a
      href="https://www.weselezklasa.pl/ogloszenia-weselne/powierz-nam-organizacje-swojego-wesela,44825/"
      target="_blank"
      title="Weddings in Krakow Marta Wątor"
      class="advertisement"
      ><img
        src="https://www.weselezklasa.pl/banery/Weselezklasa/button_rekomendacji_230x120_violet_on_grey.png"
        alt="Weddings in Krakow Marta Wątor"
        border="0"
    /></a>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const count1 = ref(null);
const count2 = ref(null);

function animateNumber(element, target) {
  let current = 0;
  const increment = Math.ceil(target / 100);
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = current;
  }, 50);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumber(count1.value, 172);
        animateNumber(count2.value, 31);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

onMounted(() => {
  const mapSection = document.querySelector(".map-section");
  observer.observe(mapSection);
});
</script>

<style lang="scss">
.map-section {
  margin: 0 1.5rem 3.125rem 1.5rem;
  max-width: $xxl-screen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-family: "Domine", serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    margin-bottom: 50px;
    text-align: center;

    @media (min-width: $md-screen) {
      font-size: 44px;
      line-height: 54px;
      margin-bottom: 100px;
    }
  }

  .count {
    font-weight: bold;
    color: $primary-color;
  }

  img {
    width: 100%;
  }

  .advertisement {
    margin-top: 6.125rem;

    img {
      border-radius: 10px;
    }
  }

  @media (min-width: $md-screen) {
    margin: 3.125rem 3rem 6.25rem 3rem;
  }

  @media (min-width: $xl-screen) {
    margin: 0 4.5rem $sectionSpace 4.5rem;
  }

  @media (min-width: $xxxl-screen) {
    max-width: $xxl-screen;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
