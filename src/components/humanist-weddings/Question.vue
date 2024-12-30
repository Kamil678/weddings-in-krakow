<template>
  <div class="question-container">
    <div class="question-container__question">
      <p class="question-container__question__text">{{ question.title }}</p>
      <button class="question-container__question__button" @click="toggle">
        <i v-if="!active" class="fa-solid fa-plus"></i>
        <i v-if="active" class="fa-solid fa-minus"></i>
      </button>
    </div>
    <div v-show="active" class="question-container__answer">
      <p>{{ question.answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  question: {
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

const emit = defineEmits(["toggle"]);

const toggle = () => {
  emit("toggle", props.index);
};
</script>

<style lang="scss">
.question-container {
  padding: 20px;
  background-color: rgba(161, 109, 139, 0.3);
  border-radius: 10px;
  width: 100%;

  &__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    &__text {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;

      @media (min-width: $md-screen) {
        font-size: 18px;
        line-height: 24px;
      }

      @media (min-width: $xl-screen) {
        font-size: 20px;
        line-height: 26px;
      }
    }

    &__button {
      border: none;
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;

      .fa-solid {
        font-size: 20px;
      }
    }
  }

  &__answer {
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
    color: rgba($color: #000000, $alpha: 0.8);

    @media (min-width: $xl-screen) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media (min-width: $md-screen) {
    padding: 30px;
  }
}
</style>
