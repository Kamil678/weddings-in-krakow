<template>
  <div
    class="opinion-box"
    :class="[
      opinion.id % 2 !== 0
        ? 'opinion-box--reverse opinion-box--slide-right'
        : 'opinion-box--slide-left',
    ]"
  >
    <div class="opinion-box__image-container">
      <img :src="opinion.img" :alt="`Photo ${opinion.name}`" />
    </div>
    <div class="opinion-box__content-container">
      <p class="opinion-box__content-container__content">
        {{ active ? opinion.content : truncatedContent(opinion.content) }}
      </p>
      <button
        type="button"
        v-if="opinion.content.length > 1000"
        @click="toggle"
        class="opinion-box__content-container__show-more-button btn"
      >
        {{ active ? `${$t("opinionsSeeLess")}` : `${$t("opinionsSeeMore")}` }}
      </button>
      <p class="opinion-box__content-container__name">
        {{ opinion.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  opinion: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

function truncatedContent(content) {
  const truncateLength = 1000;
  return content.length > truncateLength
    ? content.slice(0, truncateLength) + "..."
    : content;
}

const emit = defineEmits(["toggle"]);

const toggle = () => {
  emit("toggle", props.index);
};
</script>

<style lang="scss">
@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.opinion-box {
  max-width: $xxl-screen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px 100px;
  margin: 0 auto;
  padding: 50px 0;
  border-bottom: 3px solid $primary-color;

  &:last-child {
    border-bottom: none;
  }

  &--reverse {
    flex-direction: column;

    @media (min-width: $xl-screen) {
      flex-direction: row-reverse !important;
    }
  }

  &--slide-in {
    animation: 0.8s ease-out both;
  }

  &--slide-left {
    animation: 0.8s ease-out both;
    animation-name: slide-in-left;
  }

  &--slide-right {
    animation: 0.8s ease-out both;
    animation-name: slide-in-right;
  }

  &__image-container {
    width: 100%;

    img {
      width: 100%;
      border-radius: 10px;
    }

    @media (min-width: $md-screen) {
      width: 60%;
      margin: 0 auto;
    }

    @media (min-width: $xl-screen) {
      width: 50%;
    }
  }

  &__content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__content {
      text-align: center;
      font-size: 16px;
      line-height: 22px;

      @media (min-width: $md-screen) {
        font-size: 18px;
        line-height: 24px;
      }
    }

    &__name {
      font-family: "Domine", serif;
      font-size: 26px;
      line-height: 36px;
      font-weight: 700;
      text-align: center;
      margin-top: 30px;
    }

    &__show-more-button {
      margin-top: 30px;
    }

    @media (min-width: $md-screen) {
      width: 80%;
      margin: 0 auto;
    }

    @media (min-width: $xl-screen) {
      width: 50%;
    }
  }

  @media (min-width: $xl-screen) {
    flex-direction: row;
    padding: 100px 30px;
  }
}
</style>
