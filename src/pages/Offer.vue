<template>
  <section class="page offers">
    <h2 class="page__title">{{ $t("navOffer") }}</h2>
    <div class="offers__container">
      <OfferCard
        :title="$t('offer1Title')"
        :imageSrc="image1"
        imageAlt="Table prepared for a wedding"
      >
        <ul>
          <li>{{ $t("offer1ContentText1") }}</li>
          <li>{{ $t("offer1ContentText2") }}</li>
          <li>{{ $t("offer1ContentText3") }}</li>
          <li>{{ $t("offer1ContentText4") }}</li>
          <li>{{ $t("offer1ContentText5") }}</li>
          <li>{{ $t("offer1ContentText6") }}</li>
          <li>
            {{ $t("offer1ContentText7") }}
          </li>
        </ul>
        <template #offer_price>
          <div class="offer__price">
            <p>{{ $t("offerServiceCost") }}: 15 500 {{ $t("offerPLN") }}</p>
          </div>
        </template>
      </OfferCard>
      <OfferCard
        :title="$t('offer2Title')"
        :imageSrc="image2"
        imageAlt="Table prepared for a wedding"
      >
        <p class="offer__content__text">
          {{ $t("offer2ContentText1") }}
        </p>

        <p class="offer__content__text" style="margin-top: 20px">
          {{ $t("offer2ContentText2") }}
        </p>
        <template #offer_price>
          <div class="offer__price">
            <p>
              {{ $t("offerServiceCost") }}:
              {{ $t("offerServiceCostIndividual") }}
            </p>
          </div>
        </template>
      </OfferCard>
      <OfferCard
        :title="$t('offer3Title')"
        :imageSrc="image3"
        imageAlt="Table prepared for a wedding"
        show-more
      >
        <p class="offer__content__text">
          {{ $t("offer3ContentText1") }}
        </p>
        <div style="margin-top: 20px">
          <p class="offer__content__text">{{ $t("offerCostIncluded") }}</p>
          <ul>
            <li>{{ $t("offer3ContentText2") }}</li>
            <li>
              {{ $t("offer3ContentText3") }}
            </li>
            <li>
              {{ $t("offer3ContentText4") }}
            </li>
          </ul>
        </div>
        <template #offer_price>
          <div class="offer__price">
            <p>
              {{ $t("offerServiceCost") }}: {{ $t("offerFrom") }} 2500
              {{ $t("offerPLN") }}
            </p>
          </div>
        </template>
      </OfferCard>
      <OfferCard
        :title="$t('offer4Title')"
        :imageSrc="image4"
        imageAlt="Table prepared for a wedding"
        show-more
      >
        <p class="offer__content__text">
          {{ $t("offer4ContentText1") }}
        </p>
        <div style="margin-top: 20px">
          <p class="offer__content__text">{{ $t("offerCostIncluded") }}</p>
          <ul>
            <li>{{ $t("offer4ContentText2") }}</li>
            <li>{{ $t("offer4ContentText3") }}</li>
            <li>{{ $t("offer4ContentText4") }}</li>
            <li>{{ $t("offer4ContentText5") }}</li>
            <li>{{ $t("offer4ContentText6") }}</li>
            <li>{{ $t("offer4ContentText7") }}</li>
          </ul>
        </div>
        <template #offer_price>
          <div class="offer__price">
            <p>{{ $t("offerServiceCost") }}:</p>
            <ul class="offer__price-list">
              <li>6000 {{ $t("offerPLN") }} {{ $t("offer4ContentText8") }}</li>
              <li>7000 {{ $t("offerPLN") }} {{ $t("offer4ContentText9") }}</li>
            </ul>
          </div>
        </template>
      </OfferCard>
      <OfferCard
        :title="$t('offer5Title')"
        :imageSrc="image5"
        imageAlt="Table prepared for a wedding"
      >
        <p class="offer__content__text">
          {{ $t("offer5ContentText1") }}
        </p>
        <template #offer_price>
          <div class="offer__price">
            <p>
              {{ $t("offerServiceCost") }}: 300 {{ $t("offerPLN") }}/{{
                $t("offerHours")
              }}
            </p>
          </div>
        </template>
      </OfferCard>
      <OfferCard
        :title="$t('offer6Title')"
        :imageSrc="image6"
        imageAlt="Table prepared for a wedding"
        show-more
      >
        <p class="offer__content__text">
          {{ $t("offer6ContentText1") }}
        </p>

        <p class="offer__content__text" style="margin-top: 20px">
          {{ $t("offer6ContentText2") }}
        </p>
        <template #offer_price>
          <div class="offer__price">
            <p>{{ $t("offerServiceCost") }}:</p>
            <ul class="offer__price-list">
              <li>
                {{ $t("offer6ContentText3") }} 1800 - 2500 {{ $t("offerPLN") }}
              </li>
              <li>
                {{ $t("offer6ContentText4") }} 2000 - 2500 {{ $t("offerPLN") }}
              </li>
              <li>{{ $t("offer6ContentText5") }} 1500 {{ $t("offerPLN") }}</li>
            </ul>
          </div>
        </template>
      </OfferCard>
      <OfferCard
        :title="$t('offer7Title')"
        :imageSrc="image7"
        imageAlt="Table prepared for a wedding"
      >
        <p class="offer__content__text">
          {{ $t("offer7ContentText1") }}
        </p>
        <template #offer_price>
          <div class="offer__price">
            <p>
              {{ $t("offerServiceCost") }}:
              {{ $t("offerServiceCostIndividual") }}
            </p>
          </div>
        </template>
      </OfferCard>
    </div>
  </section>
</template>
<script setup>
import OfferCard from "../components/offer/OfferCard.vue";

const image1 = new URL("../assets/offer/offer-1.webp", import.meta.url).href;
const image2 = new URL("../assets/offer/offer-2.webp", import.meta.url).href;
const image3 = new URL("../assets/offer/offer-3.webp", import.meta.url).href;
const image4 = new URL("../assets/offer/offer-4.webp", import.meta.url).href;
const image5 = new URL("../assets/offer/offer-5.webp", import.meta.url).href;
const image6 = new URL("../assets/offer/offer-6.webp", import.meta.url).href;
const image7 = new URL("../assets/offer/offer-7.webp", import.meta.url).href;
</script>

<style lang="scss">
.offers {
  &__container {
    margin-top: $sectionSpace;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    gap: 30px;
    opacity: 0;
    animation: fadeIn 0.8s forwards;

    @media (min-width: $lg-screen) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: $xxl-screen) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }

    .offer {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInBox 1s ease-out forwards;
    }

    .offer:nth-child(1) {
      animation-delay: 0s;
    }
    .offer:nth-child(2) {
      animation-delay: 0.2s;
    }
    .offer:nth-child(3) {
      animation-delay: 0.4s;
    }
    .offer:nth-child(4) {
      animation-delay: 0.6s;
    }
    .offer:nth-child(5) {
      animation-delay: 0.8s;
    }
    .offer:nth-child(6) {
      animation-delay: 1s;
    }

    @keyframes fadeInBox {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>
