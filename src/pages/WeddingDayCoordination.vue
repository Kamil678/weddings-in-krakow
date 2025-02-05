<template>
  <main class="page page--max wedding-coordination">
    <h1 class="page__title wedding-coordination__title">
      {{ $t("weddingDayCoordinationTitle") }}
    </h1>
    <section class="wedding-coordination__header">
      <img
        src="../assets/wedding-day-coordination/wedding-coordination-day-1.webp"
        alt="Wedding planner handing out flowers to guests"
        loading="lazy"
        class="wedding-coordination__header__image"
      />
      <div class="wedding-coordination__header__info">
        <p>
          {{ $t("weddingDayCoordinationBasicDescription") }}
        </p>
      </div>
    </section>
    <section class="wedding-coordination__content">
      <div class="wedding-coordination__content__container">
        <div class="tasks">
          <div
            v-for="(task, index) in coordinationTasks"
            :key="index"
            class="tasks__item"
          >
            <div class="tasks__item__icon">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <p class="text">{{ task }}</p>
          </div>
        </div>

        <p class="text text--center">
          {{ $t("weddingDayCoordinationBasicDescription2") }}
        </p>
      </div>
    </section>

    <section class="wedding-coordination__content alt-bg">
      <div class="wedding-coordination__content__container">
        <h2>{{ $t("weddingDayCoordinationQuestion1") }}</h2>
        <div class="service-content">
          <div class="service-content__text text">
            <p>
              {{ $t("weddingDayCoordinationAnswer1") }}
            </p>
          </div>
          <div class="service-content__image">
            <img
              src="../assets/wedding-day-coordination/wedding-coordination-day-2.webp"
              alt="Wedding planner improving the bride's dress"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="wedding-coordination__content wedding-coordination__content--no-padding"
    >
      <div class="wedding-coordination__content__container">
        <h2>{{ $t("weddingDayCoordinationQuestion2") }}</h2>
        <div class="service-content service-content--reverse">
          <div class="service-content__image">
            <img
              src="../assets/wedding-day-coordination/wedding-coordination-day-3.webp"
              alt="Wedding planner organizing the party"
              loading="lazy"
            />
          </div>
          <div class="service-content__text text">
            <p>
              {{ $t("weddingDayCoordinationAnswer2") }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const coordinationTasks = computed(() => [
  t("weddingDayCoordinationTask1"),
  t("weddingDayCoordinationTask2"),
  t("weddingDayCoordinationTask3"),
  t("weddingDayCoordinationTask4"),
  t("weddingDayCoordinationTask5"),
  t("weddingDayCoordinationTask6"),
  t("weddingDayCoordinationTask7"),
  t("weddingDayCoordinationTask8"),
  t("weddingDayCoordinationTask9"),
  t("weddingDayCoordinationTask10"),
  t("weddingDayCoordinationTask11"),
  t("weddingDayCoordinationTask12"),
  t("weddingDayCoordinationTask13"),
  t("weddingDayCoordinationTask14"),
  t("weddingDayCoordinationTask15"),
  t("weddingDayCoordinationTask16"),
  t("weddingDayCoordinationTask17"),
]);
</script>

<style lang="scss" scoped>
.wedding-coordination {
  width: 100%;
  background-color: #fff;
  color: #333;

  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out forwards;

  &__header,
  &__content {
    opacity: 0;
    transform: translateY(50px);
    animation: fadeInUp 1s ease-out forwards;
  }

  &__header {
    animation-delay: 0.2s;
  }

  &__content {
    animation-delay: 0.4s;
  }

  .tasks__item {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-out forwards;
    animation-delay: calc(0.1s * var(--i));
  }

  .service-content__image img {
    transition: transform 0.4s ease;
  }

  .service-content__image img:hover {
    transform: scale(1.05);
  }

  &__title {
    color: $primary-color;

    padding: 0 1.5rem;

    @media (min-width: $md-screen) {
      padding: 0 3rem;
    }

    @media (min-width: $xl-screen) {
      padding: 0 4.5rem;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: $primary-color;
    margin-top: 3.125rem;

    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      color: #fff;
      padding: 1.875rem;

      p {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        font-size: 18px;
        line-height: 22px;

        @media (min-width: $md-screen) {
          font-size: 20px;
          line-height: 24px;
        }

        @media (min-width: $xl-screen) {
          font-size: 22px;
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
      margin-top: $sectionSpace;
    }
  }

  &__content {
    padding: 3.125rem 0;

    &--no-padding {
      padding-bottom: 0;
    }

    &.alt-bg {
      background-color: rgba(#a16d8b, 0.2);
    }

    &__container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1.5rem;

      @media (min-width: $md-screen) {
        padding: 0 3rem;
      }

      @media (min-width: $xl-screen) {
        padding: 0 4.5rem;
      }

      h2 {
        font-family: "Domine", serif;
        color: #a16d8b;
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
      }

      .tasks {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3.125rem;

        &__item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transform: translateY(0);
          transition: transform 0.3s ease, background-color 0.3s ease,
            color 0.3s ease;

          &:hover {
            background-color: $primary-color;
            transform: translateY(-10px);
            color: #fff;

            .tasks__item__icon {
              color: #fff;
            }
          }

          &__icon {
            color: #a16d8b;
            font-weight: bold;
            font-size: 1.2rem;
            transition: color 0.3s ease;
          }
        }

        @media (min-width: $sm-screen) {
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }
      }

      .service-content {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 2rem;

        &--reverse {
          flex-direction: column;
        }

        &__text {
          width: 100%;
          text-align: center;
        }

        &__image {
          width: 80%;

          img {
            border-radius: 10px;
            width: 100%;
          }
        }

        @media (min-width: $lg-screen) {
          flex-direction: row;

          &__text {
            width: 50%;
            text-align: left;
          }

          &__image {
            width: 50%;
          }
        }
      }
    }
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
