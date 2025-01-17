<template>
  <section class="about">
    <div class="about__container">
      <div class="about__container__info">
        <h1>{{ $t("homeAboutWelcome") }}</h1>
        <p
          v-html="$t('homeAboutText1')"
          class="about__container__info__text"
        ></p>
        <p class="about__container__info__text">{{ $t("homeAboutText2") }}</p>
        <p class="about__container__info__text">{{ $t("homeAboutText3") }}</p>
        <Button
          :text="$t('homeAboutContactBtn')"
          href="/contact"
          class="about__container__info__btn"
        />
      </div>
      <div class="about__container__image">
        <img src="../../assets/home/about-image.webp" alt="Marta Wątor photo" />
      </div>
    </div>
  </section>
</template>
<script setup>
import Button from "../shared/Button.vue";
</script>

<style lang="scss">
.about {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 50px 100px;
    width: 100%;
    height: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0;

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #000;
      height: 100%;
      width: 100%;
      text-align: center;

      h1 {
        font-family: "Domine", serif;
        font-weight: 700;
        font-size: 44px;
        line-height: 50px;
        margin-bottom: 50px;

        @media (min-width: $md-screen) {
          font-size: 60px;
          line-height: 66px;
        }
      }

      &__text {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;

        &:nth-child(4) {
          margin-bottom: 50px;
        }

        span {
          font-weight: 600;
        }

        @media (min-width: $md-screen) {
          font-size: 18px;
          line-height: 22px;
        }
      }

      @media (min-width: $lg-screen) {
        align-items: start;
        text-align: left;
        width: 55%;
      }
    }

    &__image {
      width: 100%;
      img {
        width: 100%;
      }

      @media (min-width: $md-screen) {
        width: 70%;
      }

      @media (min-width: $lg-screen) {
        width: 45%;
      }
    }

    @media (min-width: $sm-screen) {
      padding: 0 50px;
    }

    @media (min-width: $lg-screen) {
      flex-direction: row;
      padding: 0;
    }
  }

  @media (min-width: $md-screen) {
    padding: $sectionSpace 50px;
  }
}
</style>
