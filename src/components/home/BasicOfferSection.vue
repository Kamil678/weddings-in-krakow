<template>
  <section class="basic-offer">
    <div class="basic-offer__container">
      <div class="basic-offer__container__content">
        <h2>Co oferuję?</h2>
        <p>
          W mojej ofercie znajdują się: kompleksowa i częściowa organizacja
          ślubu, koordynacja dnia ślubu, tłumaczenia podczas uroczystości,
          konsultacje ślubne, ślub LAST MINUTE oraz typowanie podwykonawców.
          Ceny moich usług nie są sztywne, dlatego w pierwszej kolejności
          zapraszam przyszłą Parę Młodą na rozmowę, podczas której ustalamy
          oczekiwany zakres moich zadań. Na tej podstawie jestem w stanie
          określić całkowitą kwotę usługi. Po podpisaniu umowy przechodzimy
          prosto do działania! Dokładny opis usług wraz z szacunkowymi cenami
          możecie znaleźć w zakładce „Oferta”. Zapraszam również do zapoznania
          się z moim portfolio, filmami na Youtube oraz innymi kanałami Social
          Media, dzięki którym poznacie mnie i mój styl pracy jeszcze lepiej!
        </p>
      </div>
      <div class="basic-offer__container__image-container">
        <div class="basic-offer__container__image-container__image">
          <img
            src="../../assets/home/basic-offer-image-1.webp"
            alt="The newlyweds"
          />
        </div>
        <div class="basic-offer__container__image-container__image">
          <img
            src="../../assets/home/basic-offer-image-2.webp"
            alt="The newlyweds"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>

<style lang="scss">
.basic-offer {
  padding: 100px 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: $primary-color;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 50px;
      color: #000;
      padding: 0 100px;

      h2 {
        font-family: "Cormorant Upright", serif;
        font-weight: 700;
        font-size: 50px;
        line-height: 54px;
      }

      p {
        font-size: 18px;
        line-height: 26px;
      }
    }

    &__image-container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 100px;

      &__image {
        width: 40%;
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
