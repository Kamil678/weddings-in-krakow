<template>
  <main class="humanist-weddings">
    <section class="humanist-weddings__header">
      <div class="humanist-weddings__header__info">
        <h1>{{ $t("navHumanistWeddings") }}</h1>
        <p>
          {{ $t("humanistWeddingsHeaderText") }}
        </p>
      </div>
      <img
        src="../assets/humanist-weddings/humanist-weddings-header.webp"
        alt="The bride and groom kissing against the backdrop of colorful firecrackers"
        class="humanist-weddings__header__image"
      />
    </section>
    <section
      class="humanist-weddings__section humanist-weddings__section--faq-container"
    >
      <h2 class="humanist-weddings__section__title">
        {{ $t("humanistWeddingsMostOftenAskedQuestions") }}
      </h2>
      <div class="humanist-weddings__section--faq-container__faq">
        <div class="humanist-weddings__section--faq-container__faq__questions">
          <Question
            v-for="(question, index) in questions"
            :key="index"
            :index="index"
            :question="question"
            :active="activeQuestion === index"
            @toggle="toggleQuestion(index)"
          />
        </div>
        <div class="humanist-weddings__section--faq-container__faq__image">
          <img
            src="../assets/humanist-weddings/humanist-weddings-faq.webp"
            alt="A photo of a humanist wedding"
          />
        </div>
      </div>
      <Button
        :text="$t('navContact')"
        href="/contact"
        class="humanist-weddings__section--faq-container__btn"
      />
    </section>
    <section
      class="humanist-weddings__section humanist-weddings__section--realizations"
    >
      <h2
        class="humanist-weddings__section__title humanist-weddings__section--realizations__title"
      >
        {{ $t("humanistWeddingsRealizationTitle") }}
      </h2>
      <p class="humanist-weddings__section--realizations__text">
        {{ $t("humanistWeddingsRealizationText") }}
      </p>
      <div class="humanist-weddings__section--realizations__gallery">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="humanist-weddings__section--realizations__gallery__item"
        >
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import Question from "../components/humanist-weddings/Question.vue";
import Button from "../components/shared/Button.vue";
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
      "../assets/humanist-weddings/realization-1.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 1",
  },
  {
    id: 2,
    src: new URL(
      "../assets/humanist-weddings/realization-2.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 2",
  },
  {
    id: 3,
    src: new URL(
      "../assets/humanist-weddings/realization-3.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 3",
  },
  {
    id: 4,
    src: new URL(
      "../assets/humanist-weddings/realization-4.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 4",
  },
  {
    id: 5,
    src: new URL(
      "../assets/humanist-weddings/realization-5.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 5",
  },
  {
    id: 6,
    src: new URL(
      "../assets/humanist-weddings/realization-6.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 6",
  },
  {
    id: 7,
    src: new URL(
      "../assets/humanist-weddings/realization-7.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 7",
  },
  {
    id: 8,
    src: new URL(
      "../assets/humanist-weddings/realization-8.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 8",
  },
  {
    id: 9,
    src: new URL(
      "../assets/humanist-weddings/realization-9.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 9",
  },
  {
    id: 10,
    src: new URL(
      "../assets/humanist-weddings/realization-10.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 10",
  },
  {
    id: 11,
    src: new URL(
      "../assets/humanist-weddings/realization-11.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 11",
  },
  {
    id: 12,
    src: new URL(
      "../assets/humanist-weddings/realization-12.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 12",
  },
  {
    id: 13,
    src: new URL(
      "../assets/humanist-weddings/realization-13.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 13",
  },
  {
    id: 14,
    src: new URL(
      "../assets/humanist-weddings/realization-14.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 14",
  },
  {
    id: 15,
    src: new URL(
      "../assets/humanist-weddings/realization-15.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 15",
  },
  {
    id: 17,
    src: new URL(
      "../assets/humanist-weddings/realization-17.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 17",
  },
  {
    id: 18,
    src: new URL(
      "../assets/humanist-weddings/realization-18.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 18",
  },
  {
    id: 19,
    src: new URL(
      "../assets/humanist-weddings/realization-19.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 19",
  },
  {
    id: 20,
    src: new URL(
      "../assets/humanist-weddings/realization-20.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 20",
  },
  {
    id: 21,
    src: new URL(
      "../assets/humanist-weddings/realization-21.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 21",
  },
  {
    id: 22,
    src: new URL(
      "../assets/humanist-weddings/realization-22.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 22",
  },
  {
    id: 23,
    src: new URL(
      "../assets/humanist-weddings/realization-23.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 23",
  },
  {
    id: 24,
    src: new URL(
      "../assets/humanist-weddings/realization-24.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 24",
  },
  {
    id: 25,
    src: new URL(
      "../assets/humanist-weddings/realization-25.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 25",
  },
  {
    id: 26,
    src: new URL(
      "../assets/humanist-weddings/realization-26.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 26",
  },
  {
    id: 27,
    src: new URL(
      "../assets/humanist-weddings/realization-27.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 27",
  },
  {
    id: 28,
    src: new URL(
      "../assets/humanist-weddings/realization-28.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 28",
  },
  {
    id: 29,
    src: new URL(
      "../assets/humanist-weddings/realization-29.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 29",
  },
  {
    id: 30,
    src: new URL(
      "../assets/humanist-weddings/realization-30.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 30",
  },
  {
    id: 31,
    src: new URL(
      "../assets/humanist-weddings/realization-31.webp",
      import.meta.url
    ).href,
    alt: "Image from gallery 31",
  },
];

const activeQuestion = ref(null);

const toggleQuestion = (index) => {
  activeQuestion.value = activeQuestion.value === index ? null : index;
};
</script>

<style lang="scss">
.humanist-weddings {
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

      h1 {
        font-family: "Domine", serif;
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
      font-family: "Domine", serif;
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
      display: flex;
      flex-direction: column;
      align-items: center;

      &__faq {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 50px;
        width: 100%;

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

        @media (min-width: $lg-screen) {
          max-width: 1400px;
          margin: 0 auto;
        }
      }

      &__btn {
        margin-top: 50px;
        padding-left: 50px;
        padding-right: 50px;
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
