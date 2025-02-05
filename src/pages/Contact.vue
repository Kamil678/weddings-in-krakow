<template>
  <main class="page contact">
    <h1 class="page__title">{{ $t("navContact") }}</h1>
    <section class="contact__container">
      <img
        src="/src/assets/contact/contact.webp"
        alt="A photo of Marta Wątor drinking coffee"
        class="contact__container__image"
      />
      <ContactForm />
    </section>
    <section class="contact__boxes">
      <ContactBox
        v-for="(contact, index) in contactData"
        :key="index"
        :icon="contact.icon"
        :title="contact.title"
        :data="contact.data"
        :href="contact.href"
        :target="contact.target"
      />
    </section>
  </main>
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
    data: "+48698831528",
    href: "tel:+48698831528",
  },
  {
    icon: "fa-solid fa-envelope",
    title: t("contactEmail"),
    data: "weddingsinkrakow@gmail.com",
    href: "mailto:weddingsinkrakow@gmail.com",
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
