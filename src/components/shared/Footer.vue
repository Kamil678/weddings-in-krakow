<template>
  <footer class="footer">
    <div class="footer__contact-container">
      <div class="footer__contact-container__links">
        <router-link to="/" class="footer__contact-container__links__link">{{
          $t("navHome")
        }}</router-link>
        <router-link to="/" class="footer__contact-container__links__link">{{
          $t("navOffer")
        }}</router-link>
        <router-link to="/" class="footer__contact-container__links__link">{{
          $t("navProtfolio")
        }}</router-link>
        <router-link to="/" class="footer__contact-container__links__link">{{
          $t("navOpinions")
        }}</router-link>
        <router-link to="/" class="footer__contact-container__links__link">{{
          $t("navHumanistWeddings")
        }}</router-link>
        <router-link to="/" class="footer__contact-container__links__link">{{
          $t("navWeddingDayCoordination")
        }}</router-link>
        <router-link to="/" class="footer__contact-container__links__link">{{
          $t("navOfferHalls")
        }}</router-link>
        <router-link to="/" class="footer__contact-container__links__link">{{
          $t("navContact")
        }}</router-link>
        <!-- <div class="footer__contact-container__info__data-container">
          <div class="footer__contact-container__info__data-container__data">
            <i
              class="fa-regular fa-envelope footer__contact-container__info__data-container__data__icon"
            ></i>
            <a
              href="mailto:kontakt.weddingfriends@gmail.com"
              class="footer__contact-container__info__data-container__data__link"
              >kontakt.weddingfriends@gmail.com</a
            >
          </div>
          <div class="footer__contact-container__info__data-container__data">
            <i
              class="fa-solid fa-phone footer__contact-container__info__data-container__data__icon"
            ></i>
            <a
              href="tel:+48603612175"
              class="footer__contact-container__info__data-container__data__link"
              >Magda: 603612175</a
            >
          </div>
          <div class="footer__contact-container__info__data-container__data">
            <i
              class="fa-solid fa-phone footer__contact-container__info__data-container__data__icon"
            ></i>
            <a
              href="tel:+48663316266"
              class="footer__contact-container__info__data-container__data__link"
              >Ewelina: 663316266</a
            >
          </div>
          <div class="footer__contact-container__info__data-container__data">
            <i
              class="fa-solid fa-location-dot footer__contact-container__info__data-container__data__icon"
            ></i>
            <p
              class="footer__contact-container__info__data-container__data__static"
            >
              32-200 Miechów ul. Partyzantów 59
            </p>
          </div>
        </div> -->
      </div>
      <div class="footer__contact-container__logo-media">
        <Logo />
        <div class="footer__contact-container__logo-media__items">
          <a
            href="https://www.facebook.com/weddingsinkrakow"
            class="footer__contact-container__logo-media__items__item"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/weddingsinkrakow/"
            class="footer__contact-container__logo-media__items__item"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://pl.pinterest.com/weddingsinkrakow/"
            class="footer__contact-container__logo-media__items__item"
          >
            <i class="fa-brands fa-pinterest"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/marta-w%C4%85tor-99b15225/"
            class="footer__contact-container__logo-media__items__item"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC-s-vZlIeG8Z5P02sc-0wOQ"
            class="footer__contact-container__logo-media__items__item"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div class="footer__contact-container__contact">
        <h4 class="footer__contact-container__contact__title">
          {{ $t("navContact") }}
        </h4>
        <div class="footer__contact-container__contact__data">
          <i
            class="fa-regular fa-envelope footer__contact-container__contact__data__icon"
          ></i>
          <a
            href="mailto:kontakt.weddingfriends@gmail.com"
            class="footer__contact-container__contact__data__link"
          >
            weddingsinkrakow@gmail.com</a
          >
        </div>
        <div class="footer__contact-container__contact__data">
          <i
            class="fa-solid fa-phone footer__contact-container__contact__data__icon"
          ></i>
          <a
            href="tel:+48603612175"
            class="footer__contact-container__contact__data__link"
          >
            +48698831528</a
          >
        </div>
        <div class="footer__contact-container__contact__data">
          <i
            class="fa-solid fa-location-dot footer__contact-container__contact__data__icon"
          ></i>
          <p class="footer__contact-container__contact__data__static">
            Żabiniec, Kraków
          </p>
        </div>
      </div>
    </div>
    <div class="footer__copyright-container">
      <p class="footer__copyright-container__text">
        Copyright 2024 &copy; Marta Wątor - Weddings in Krakow
      </p>
      <p class="footer__copyright-container__text">
        Website created by Kamil Pigulak
      </p>
    </div>
  </footer>
</template>
<script setup>
import Logo from "./Logo.vue";
</script>

<style lang="scss">
.footer {
  background-color: $gray-color;

  &__contact-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: $xxl-screen;
    margin: 0 auto;
    padding: 30px;
    gap: 30px;

    @media (min-width: $lg-screen) {
      flex-direction: row;
      align-items: start;
    }

    &__logo-media {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;

      &__items {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        @media (min-width: $lg-screen) {
          justify-content: flex-start;
        }

        &__item {
          text-decoration: none;
          color: $primary-color;
          transform: translateY(0);

          &:hover {
            transform: translateY(-5px);
          }

          .fa-brands {
            font-size: 30px;

            @media (min-width: $lg-screen) {
              font-size: 40px;
            }
          }
        }
      }
    }

    &__links,
    &__media {
      padding: 0 30px;
      background-color: $gray-color;
      width: fit-content;
    }

    &__links {
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      @media (min-width: $lg-screen) {
        display: flex;
      }

      &__link {
        text-decoration: none;
        color: #000;

        &:hover {
          color: $primary-color;
        }
      }
    }

    &__contact {
      min-width: 225px;
      display: flex;
      flex-direction: column;
      align-items: ce;
      gap: 20px;

      &__title {
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;

        @media (min-width: $md-screen) {
          font-size: 20px;
          line-height: 24px;
        }

        @media (min-width: $lg-screen) {
          font-size: 24px;
          line-height: 28px;
          text-align: left;
        }
      }

      &__data {
        display: flex;
        align-items: center;
        gap: 10px;

        &__icon {
          color: $primary-color;
          font-size: 20px;
          width: 20px;

          @media (min-width: $md-screen) {
            font-size: 23px;
            width: 23px;
          }
        }

        &__link {
          text-decoration: none;
          color: #000;
          cursor: pointer;
          font-weight: 400;
        }

        &__link,
        &__static {
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }

  &__copyright-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: $primary-color;
    padding: 20px;
    font-size: 12px;

    &__text {
      text-align: center;
    }
  }
}
</style>
