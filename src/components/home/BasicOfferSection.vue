<template>
  <section class="basic-offer">
    <div class="basic-offer__container">
      <h2>{{ $t("homeBasicOfferTitle") }}</h2>
      <div class="basic-offer__container__box">
        <div class="basic-offer__container__box__image">
          <img
            src="../../assets/home/basic-offer-image-1.webp"
            alt="The newlyweds"
          />
        </div>
        <div class="basic-offer__container__box__content">
          <p>
            {{ $t("homeBasicOfferText1") }}
          </p>
        </div>
      </div>
      <div
        class="basic-offer__container__box basic-offer__container__box--second"
      >
        <div class="basic-offer__container__box__content">
          <p>
            {{ $t("homeBasicOfferText2") }}
          </p>
        </div>
        <div class="basic-offer__container__box__image">
          <img
            src="../../assets/home/basic-offer-image-2.webp"
            alt="The newlyweds"
          />
        </div>
      </div>
      <Button
        :text="$t('homeBasicOfferButton')"
        href="/offer"
        class="basic-offer__container__button"
      />
    </div>
  </section>
</template>
<script setup>
import Button from "../shared/Button.vue";
</script>

<style lang="scss">
.basic-offer {
  padding: 0 1.5rem 3rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1800px;
  margin: 0 auto;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    h2 {
      font-family: "Domine", serif;
      font-weight: 700;
      font-size: 40px;
      line-height: 44px;
      margin-bottom: 0;
      text-align: center;

      @media (min-width: $md-screen) {
        font-size: 50px;
        line-height: 54px;
        margin-bottom: 50px;
      }
    }

    &__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 30px;

      &--second {
        flex-direction: column-reverse;
      }

      &__image {
        width: 100%;
        padding: 0;

        img {
          width: 100%;
          border-radius: 10px;
          transition: transform 0.4s ease;

          &:hover {
            transform: scale(1.05);
          }
        }

        @media (min-width: $md-screen) {
          padding: 0 50px;
        }

        @media (min-width: $lg-screen) {
          width: 50%;
          text-align: left;
          padding: 0;
        }
      }

      &__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #000;
        padding: 0;

        p {
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

        @media (min-width: $md-screen) {
          padding: 0 50px;
        }

        @media (min-width: $lg-screen) {
          width: 50%;
          text-align: left;
          padding: 0;
        }
      }

      @media (min-width: $lg-screen) {
        flex-direction: row;
        gap: 50px;
        margin-top: 0;
      }

      @media (min-width: $xl-screen) {
        gap: 100px;
      }
    }
  }

  @media (min-width: $md-screen) {
    padding: 0 3rem $sectionSpace 3rem;
  }
}
</style>
