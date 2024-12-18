<template>
  <section class="carousel">
    <div class="carousel__inner">
      <CarouselIndicators
        v-if="indicators"
        :total="slides.length"
        :current-index="currentSlide"
        @switch-image="switchSlide($event)"
      />
      <CarouselItem
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      />
      <CarouselControls
        v-if="controls"
        @prevImage="clickPrevImage"
        @nextImage="clickNextImage"
      />
    </div>
  </section>
</template>
<script setup>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";
import { defineProps, ref, onBeforeUnmount, onMounted } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  controls: {
    type: Boolean,
    deafult: false,
  },
  indicators: {
    type: Boolean,
    deafult: false,
  },
  interval: {
    type: Number,
    deafult: 4000,
  },
});

const currentSlide = ref(0);
const slideInterval = ref(null);
const direction = ref("right");

const setCurrentSlide = (index) => {
  currentSlide.value = index;
};

const clickPrevImage = (step = -1) => {
  const index =
    currentSlide.value > 0
      ? currentSlide.value + step
      : props.slides.length - 1;
  setCurrentSlide(index);
  direction.value = "left";
  startSlideTimer();
};

const next = (step = 1) => {
  const index =
    currentSlide.value < props.slides.length - 1
      ? currentSlide.value + step
      : 0;
  setCurrentSlide(index);
  direction.value = "right";
};

const clickNextImage = (step = 1) => {
  next(step);
  startSlideTimer();
};

const startSlideTimer = () => {
  stopSlideTimer();
  slideInterval.value = setInterval(() => {
    next();
  }, props.interval);
};

const stopSlideTimer = () => {
  clearInterval(slideInterval.value);
};

const switchSlide = (index) => {
  const step = index - currentSlide.value;

  if (step > 0) {
    clickNextImage(step);
  } else {
    clickPrevImage(step);
  }
};

onMounted(() => {
  startSlideTimer();
});

onBeforeUnmount(() => {
  stopSlideTimer();
});
</script>

<style lang="scss">
.carousel {
  display: flex;
  justify-content: center;
  width: 100%;

  &__inner {
    height: 100%;
    width: 100%;
    position: relative;
    height: calc(100vh - 94px);
    overflow: hidden;

    @media (min-width: $md-screen) {
      height: calc(100vh - 111px);
    }
  }
}
</style>
