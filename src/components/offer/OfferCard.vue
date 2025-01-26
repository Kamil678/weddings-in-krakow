<template>
  <div class="offer">
    <div class="offer__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
    <h3 class="offer__title">{{ title }}</h3>
    <div class="offer__content">
      <div
        class="content-text"
        ref="contentRef"
        :class="{ expanded: isExpanded }"
      >
        <slot></slot>
      </div>
      <button v-if="showButton" @click="toggleExpand" class="show-more-button">
        {{
          isExpanded ? `${$t("opinionsSeeLess")}` : `${$t("opinionsSeeMore")}`
        }}
      </button>
    </div>
    <slot name="offer_price"></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "Offer image",
  },
});

const isExpanded = ref(false);
const showButton = ref(false);
const contentRef = ref(null);

function checkContentOverflow() {
  if (contentRef.value) {
    const actualHeight = contentRef.value.scrollHeight;
    showButton.value = actualHeight > 190;
  }
}

function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}

onMounted(() => {
  nextTick(() => {
    checkContentOverflow();
  });
});
</script>

<style lang="scss">
.offer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 50px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-bottom: 50px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &__image {
    width: 100%;

    img {
      width: 100%;
      border-top-left-radius: 30px;
    }
  }

  &__title {
    font-family: "Domine", serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    padding: 0 30px;
    text-align: center;
    color: $primary-color;
    min-height: auto;

    @media (min-width: $md-screen) {
      font-size: 36px;
      line-height: 46px;
    }

    @media (min-width: $lg-screen) {
      min-height: 92px;
    }
  }

  &__content {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;

    .content-text {
      font-size: 20px;
      line-height: 24px;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
      max-height: 190px;

      &.expanded {
        max-height: max-content;
      }
    }

    ul {
      font-size: 20px;
      line-height: 24px;
      padding-left: 20px;
    }

    p {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__price {
    width: 100%;
    font-family: "Domine", serif;
    margin-top: auto;
    padding: 0 30px;
    font-size: 26px;
    line-height: 30px;
    font-weight: 500;
    text-align: center;
    color: $primary-color;
  }

  &__price-list {
    font-family: "Domine", serif;
    color: $primary-color;
    font-size: 20px;
    font-weight: 500;
    margin-top: 5px;
    padding-left: 20px;
    text-align: left;
  }

  .show-more-button {
    background-color: $primary-color;
    width: fit-content;
    padding: 15px 40px;
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    border: none;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    font-weight: 500;
    align-self: center;
    margin-top: 20px;

    @media (min-width: $md-screen) {
      font-size: 18px;
      line-height: 22px;
    }

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
