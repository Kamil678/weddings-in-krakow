<template>
  <section class="hummanist-weddings">
    <div class="hummanist-weddings__header">
      <div class="hummanist-weddings__header__info">
        <h2>{{ $t("navHumanistWeddings") }}</h2>
        <p>
          {{ $t("humanistWeddingsHeaderText") }}
        </p>
      </div>
      <img
        src="../assets/humanist-weddings/humanist-weddings-header.jpeg"
        class="hummanist-weddings__header__image"
      />
    </div>
    <div
      class="hummanist-weddings__section hummanist-weddings__section--faq-container"
    >
      <h3 class="hummanist-weddings__section__title">
        {{ $t("humanistWeddingsMostOftenAskedQuestions") }}
      </h3>
      <div class="hummanist-weddings__section--faq-container__faq">
        <div class="hummanist-weddings__section--faq-container__faq__questions">
          <Question
            v-for="(question, index) in questions"
            :key="index"
            :index="index"
            :question="question"
            :active="activeQuestion === index"
            @toggle="toggleQuestion(index)"
          />
        </div>
        <div class="hummanist-weddings__section--faq-container__faq__image">
          <img src="../assets/humanist-weddings/humanist-weddings-faq.jpg" />
        </div>
      </div>
    </div>
    <div
      class="hummanist-weddings__section hummanist-weddings__section--realizations"
    >
      <h3
        class="hummanist-weddings__section__title hummanist-weddings__section--realizations__title"
      >
        {{ $t("humanistWeddingsRealizationTitle") }}
      </h3>
      <p class="hummanist-weddings__section--realizations__text">
        {{ $t("humanistWeddingsRealizationText") }}
      </p>
      <div class="hummanist-weddings__section--realizations__gallery">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="hummanist-weddings__section--realizations__gallery__item"
        >
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Question from "../components/humanist-weddings/Question.vue";
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";

const { t } = useI18n();
const questions = computed(() => [
  {
    title: t("humanistWeddingsQuestion1Title"),
    answer: t("humanistWeddingsQuestion1Answer"),
  },
  {
    title: t("humanistWeddingsQuestion2Title"),
    answer: t("humanistWeddingsQuestion2Answer"),
  },
  {
    title: t("humanistWeddingsQuestion3Title"),
    answer: t("humanistWeddingsQuestion3Answer"),
  },
  {
    title: t("humanistWeddingsQuestion4Title"),
    answer: t("humanistWeddingsQuestion4Answer"),
  },
  {
    title: t("humanistWeddingsQuestion5Title"),
    answer: t("humanistWeddingsQuestion5Answer"),
  },
]);

const images = [
  {
    id: 1,
    src: new URL(
      "../assets/humanist-weddings/realization-1.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 1",
  },
  {
    id: 2,
    src: new URL(
      "../assets/humanist-weddings/realization-1.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 2",
  },
  {
    id: 3,
    src: new URL(
      "../assets/humanist-weddings/realization-2.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 3",
  },
  {
    id: 4,
    src: new URL(
      "../assets/humanist-weddings/realization-3.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 4",
  },
  {
    id: 5,
    src: new URL(
      "../assets/humanist-weddings/realization-4.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 5",
  },
  {
    id: 6,
    src: new URL(
      "../assets/humanist-weddings/realization-5.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 6",
  },
  {
    id: 7,
    src: new URL(
      "../assets/humanist-weddings/realization-6.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 7",
  },
  {
    id: 8,
    src: new URL(
      "../assets/humanist-weddings/realization-7.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 8",
  },
  {
    id: 9,
    src: new URL(
      "../assets/humanist-weddings/realization-8.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 9",
  },
  {
    id: 10,
    src: new URL(
      "../assets/humanist-weddings/realization-9.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 10",
  },
  {
    id: 11,
    src: new URL(
      "../assets/humanist-weddings/realization-10.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 11",
  },
  {
    id: 12,
    src: new URL(
      "../assets/humanist-weddings/realization-11.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 12",
  },
  {
    id: 13,
    src: new URL(
      "../assets/humanist-weddings/realization-13.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 13",
  },
  {
    id: 14,
    src: new URL(
      "../assets/humanist-weddings/realization-14.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 14",
  },
  {
    id: 15,
    src: new URL(
      "../assets/humanist-weddings/realization-15.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 15",
  },
  {
    id: 16,
    src: new URL(
      "../assets/humanist-weddings/realization-16.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 16",
  },
  {
    id: 17,
    src: new URL(
      "../assets/humanist-weddings/realization-17.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 17",
  },
  {
    id: 18,
    src: new URL(
      "../assets/humanist-weddings/realization-18.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 18",
  },
  {
    id: 19,
    src: new URL(
      "../assets/humanist-weddings/realization-19.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 19",
  },
  {
    id: 20,
    src: new URL(
      "../assets/humanist-weddings/realization-20.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 20",
  },
  {
    id: 21,
    src: new URL(
      "../assets/humanist-weddings/realization-21.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 21",
  },
  {
    id: 22,
    src: new URL(
      "../assets/humanist-weddings/realization-22.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 22",
  },
  {
    id: 23,
    src: new URL(
      "../assets/humanist-weddings/realization-23.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 23",
  },
  {
    id: 24,
    src: new URL(
      "../assets/humanist-weddings/realization-24.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 24",
  },
  {
    id: 25,
    src: new URL(
      "../assets/humanist-weddings/realization-25.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 25",
  },
  {
    id: 27,
    src: new URL(
      "../assets/humanist-weddings/realization-26.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 27",
  },
  {
    id: 28,
    src: new URL(
      "../assets/humanist-weddings/realization-27.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 28",
  },
  {
    id: 29,
    src: new URL(
      "../assets/humanist-weddings/realization-28.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 29",
  },
  {
    id: 30,
    src: new URL(
      "../assets/humanist-weddings/realization-29.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 30",
  },
  {
    id: 31,
    src: new URL(
      "../assets/humanist-weddings/realization-30.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 31",
  },
  {
    id: 32,
    src: new URL(
      "../assets/humanist-weddings/realization-31.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 32",
  },
  {
    id: 33,
    src: new URL(
      "../assets/humanist-weddings/realization-32.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 33",
  },
  {
    id: 34,
    src: new URL(
      "../assets/humanist-weddings/realization-33.jpg",
      import.meta.url
    ).href,
    alt: "Image from gallery 34",
  },
  {
    id: 35,
    src: new URL(
      "../assets/humanist-weddings/realization-34.jpeg",
      import.meta.url
    ).href,
    alt: "Image from gallery 35",
  },
];

const activeQuestion = ref(null);

const toggleQuestion = (index) => {
  activeQuestion.value = activeQuestion.value === index ? null : index;
};
</script>

<style lang="scss">
.hummanist-weddings {
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: $primary-color;

    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      color: #fff;
      padding: 50px;

      h2 {
        font-family: "Cormorant Upright", serif;
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        margin-bottom: 30px;
        text-align: center;

        @media (min-width: $md-screen) {
          font-size: 50px;
          line-height: 54px;
        }

        @media (min-width: $xxl-screen) {
          margin-bottom: 50px;
        }
      }

      p {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        line-height: 22px;

        @media (min-width: $md-screen) {
          font-size: 18px;
          line-height: 24px;
        }

        @media (min-width: $xl-screen) {
          font-size: 20px;
          line-height: 26px;
        }
      }

      @media (min-width: $lg-screen) {
        width: 50%;
        padding: 25px 30px;
      }
    }

    &__image {
      width: 100%;

      @media (min-width: $lg-screen) {
        width: 50%;
      }
    }

    @media (min-width: $lg-screen) {
      flex-direction: row;
    }
  }

  &__section {
    padding: 50px 30px;

    &__title {
      font-family: "Cormorant Upright", serif;
      font-weight: 700;
      font-size: 36px;
      line-height: 40px;
      margin-bottom: 50px;
      text-align: center;

      @media (min-width: $md-screen) {
        font-size: 46px;
        line-height: 50px;
        margin-bottom: 100px;
      }
    }

    &--faq-container {
      &__faq {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 50px;
        max-width: 1400px;
        margin: 0 auto;

        &__questions {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;

          @media (min-width: $lg-screen) {
            width: 50%;
          }
        }

        &__image {
          display: none;
          width: 50%;

          img {
            width: 100%;
            border-radius: 10px;
          }

          @media (min-width: $lg-screen) {
            display: block;
          }
        }
      }
    }

    &--realizations {
      padding-top: 0 !important;

      &__title {
        margin-bottom: 30px;
      }

      &__text {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        line-height: 22px;

        @media (min-width: $md-screen) {
          font-size: 18px;
          line-height: 24px;
        }

        @media (min-width: $xl-screen) {
          font-size: 20px;
          line-height: 26px;
        }
      }

      &__gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        box-sizing: border-box;
        margin-top: 50px;

        @media (min-width: $sm-screen) {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        @media (min-width: $xl-screen) {
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        }

        &__item {
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    @media (min-width: $md-screen) {
      padding: 100px 50px;
    }
  }
}
</style>
