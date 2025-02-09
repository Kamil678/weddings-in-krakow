<template>
  <div class="box">
    <div class="box__header">
      <div class="box__header__first-element">
        <div class="box__header__first-element__number-container">
          <div class="box__header__first-element__number-container__number">
            {{ offer.number }}
          </div>
        </div>
        <div class="box__header__first-element__triangle"></div>
      </div>
      <h3 class="box__header__title">{{ offer.title }}</h3>
    </div>
    <div class="box__image">
      <img :src="offer.img" :alt="offer.title" />
    </div>
    <div class="box__content">
      <p class="box__content__text">
        {{ offer.content }}
      </p>
    </div>
    <div class="box__more-info">
      <p class="box__more-info__text">
        Chcesz dowiedzieć się więcej? Sprawdź pełną ofertę
      </p>
      <a
        href="/public/oferta-dla-sal.pdf"
        target="_blank"
        class="box__more-info__btn btn"
      >
        <i class="fa-solid fa-download"></i>
        Pełna oferta
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Button from "../shared/Button.vue";

const props = defineProps({
  offer: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.box {
  justify-self: center;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &:hover {
    .box__more-info {
      bottom: 0;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-top: 30px;

    &__first-element {
      display: flex;
      align-items: center;

      &__number-container {
        width: 100px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: rgba($primary-color, 0.9);

        &__number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
          border-radius: 50%;
          font-size: 26px;
          font-weight: 500;
          color: #fff;
          background-color: $primary-color;
        }
      }

      &__triangle {
        width: 0;
        height: 0;
        border-top: 35px solid transparent;
        border-bottom: 35px solid transparent;

        border-left: 35px solid rgba($primary-color, 0.9);
      }
    }

    &__title {
      font-weight: 500;
      font-size: 28px;
      line-height: 32px;
      text-align: center;
      padding: 0 30px;
      margin-top: 30px;
      width: 100%;

      @media (min-width: $md-screen) {
        width: auto;
        font-size: 32px;
        line-height: 36px;
        margin-top: 0;
      }
    }

    @media (min-width: $md-screen) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__image {
    width: 100%;
    padding: 30px;

    img {
      width: 100%;
      border-radius: 10px;
    }

    @media (min-width: $md-screen) {
      padding: 50px 30px 30px 30px;
    }
  }

  &__content {
    padding: 0 30px 30px 30px;

    &__text {
      text-align: center;
      font-size: 16px;
      line-height: 22px;

      @media (min-width: $md-screen) {
        font-size: 18px;
        line-height: 24px;
        padding: 0 30px 50px 30px;
      }

      @media (min-width: $xl-screen) {
        font-size: 20px;
        line-height: 26px;
      }
    }
  }

  &__more-info {
    position: absolute;
    width: 100%;
    bottom: -100%;
    left: 0;
    background-color: rgba(161, 109, 139, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: transform 0.2s ease, bottom 0.2s ease;

    &__text {
      text-align: center;
      font-size: 16px;
      line-height: 22px;
      color: #fff;

      @media (min-width: $md-screen) {
        font-size: 18px;
        line-height: 24px;
      }

      @media (min-width: $xl-screen) {
        font-size: 20px;
        line-height: 26px;
      }
    }

    &__btn {
      .fa-solid {
        margin-right: 10px;
      }
    }
  }
}
</style>
