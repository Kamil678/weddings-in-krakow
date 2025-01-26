<template>
  <section class="page contact">
    <h2 class="contact__title">{{ $t("navContact") }}</h2>
    <div class="contact__container">
      <img
        src="/src/assets/contact/contact.webp"
        alt="A photo of Marta Wątor drinking coffee"
        class="contact__container__image"
      />
      <ContactForm />
    </div>
    <div class="contact__boxes">
      <ContactBox
        v-for="(contact, index) in contactData"
        :key="index"
        :icon="contact.icon"
        :title="contact.title"
        :data="contact.data"
        :href="contact.href"
        :target="contact.target"
      />
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import ContactForm from "../components/contact/ContactForm.vue";
import ContactBox from "../components/contact/ContactBox.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const contactData = computed(() => [
  {
    icon: "fa-solid fa-phone",
    title: t("contactPhone"),
    data: "663316266",
    href: "tel:+48663316266",
  },
  {
    icon: "fa-solid fa-envelope",
    title: t("contactEmail"),
    data: "kontakt.weddingfriends@gmail.com",
    href: "mailto:kontakt.weddingfriends@gmail.com",
  },
  {
    icon: "fa-solid fa-location-dot",
    title: t("contactAddress"),
    data: "Żabiniec 71/7, 31-215 Kraków",
    href: "https://maps.app.goo.gl/2xxHKotRixZw9piSA",
    target: true,
  },
]);
</script>

<style lang="scss">
.contact {
  &__title {
    font-family: "Domine", serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    text-align: center;

    @media (min-width: $md-screen) {
      font-size: 50px;
      line-height: 54px;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3.125rem;
    max-width: $xxxl-screen;
    margin: 3.125rem auto;

    &__image {
      width: 100%;
      border-radius: 10px;

      @media (min-width: $md-screen) {
        width: 80%;
      }

      @media (min-width: $lg-screen) {
        width: 50%;
      }

      @media (min-width: $xl-screen) {
        width: 40%;
      }
    }

    @media (min-width: $md-screen) {
      margin: $sectionSpace auto;
    }

    @media (min-width: $lg-screen) {
      flex-direction: row;
    }

    @media (min-width: $xl-screen) {
      gap: 3.125rem 6.25rem;
    }
  }

  &__boxes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    padding: 0 30px;
    margin-top: 50px;

    @media (min-width: $sm-screen) {
      padding: 0 50px;
    }
  }
}
</style>
