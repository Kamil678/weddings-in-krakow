<template>
  <footer class="footer">
    <div class="footer__contact-container">
      <div class="footer__contact-container__links">
        <router-link
          v-for="(link, index) in filteredFooterLinks"
          :key="index"
          :to="link.to"
          class="footer__contact-container__links__link"
        >
          {{ $t(link.label) }}
        </router-link>
      </div>
      <div class="footer__contact-container__logo-media">
        <Logo />
        <SocialMediaLinks :links="socialMediaLinks" />
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
          <a
            href="https://maps.app.goo.gl/2xxHKotRixZw9piSA"
            target="_blank"
            class="footer__contact-container__contact__data__link"
          >
            Żabiniec, Kraków
          </a>
        </div>
      </div>
    </div>
    <div class="footer__copyright-container">
      <p class="footer__copyright-container__text">
        Copyright 2025 &copy; Marta Wątor - Weddings in Krakow
      </p>
      <p class="footer__copyright-container__text">
        Website created by Kamil Pigulak
      </p>
    </div>
  </footer>
</template>
<script setup>
import { computed } from "vue";
import Logo from "./Logo.vue";
import SocialMediaLinks from "./SocialMediaLinks.vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();

const footerLinks = [
  { to: "/", label: "navHome" },
  { to: "/offer", label: "navOffer" },
  { to: "/portfolio", label: "navPortfolio" },
  { to: "/opinions", label: "navOpinions" },
  { to: "/humanist-weddings", label: "navHumanistWeddings" },
  { to: "/wedding-day-coordination", label: "navWeddingDayCoordination" },
  { to: "/offer-halls", label: "navOfferHalls" },
  { to: "/contact", label: "navContact" },
];

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/weddingsinkrakow",
    icon: "fa-brands fa-facebook",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/weddingsinkrakow/",
    icon: "fa-brands fa-instagram",
    label: "Instagram",
  },
  {
    href: "https://pl.pinterest.com/weddingsinkrakow/",
    icon: "fa-brands fa-pinterest",
    label: "Pinterest",
  },
  {
    href: "https://www.linkedin.com/in/marta-w%C4%85tor-99b15225/",
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/channel/UC-s-vZlIeG8Z5P02sc-0wOQ",
    icon: "fa-brands fa-youtube",
    label: "YouTube",
  },
];

const filteredFooterLinks = computed(() => {
  if (locale.value === "pl") {
    return footerLinks;
  }
  return footerLinks.filter((link) => link.to !== "/offer-halls");
});
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

    &__logo-media {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    &__links {
      padding: 0 30px;
      background-color: $gray-color;
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
      display: flex;
      flex-direction: column;
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

          &:hover {
            color: $primary-color;
          }
        }

        &__link,
        &__static {
          font-size: 14px;
          line-height: 16px;
        }
      }
    }

    @media (min-width: $lg-screen) {
      flex-direction: row;
      align-items: start;
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
    color: #fff;

    &__text {
      text-align: center;
    }
  }
}
</style>
