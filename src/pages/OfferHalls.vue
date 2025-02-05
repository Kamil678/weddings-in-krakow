<template>
  <main class="page offer-halls">
    <h1 class="page__title">Oferta dla sal</h1>
    <section class="offer-halls__boxes">
      <Box v-for="offer in offers" :offer="offer" :key="offer.number" />
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
import Box from "../components/offer-halls/Box.vue";

const linkToDownloadPdf = new URL(
  "../../assets/offer-halls/oferta-dla-sal.pdf",
  import.meta.url
).href;
const offers = [
  {
    number: 1,
    title: "Audyt ofert weselnych",
    img: new URL("../assets/offer-halls/offer-1.webp", import.meta.url).href,
    content:
      "Usługa obejmuje kompleksową analizę oferty weselnej zarówno w zakresie proponowanych usług gastronomicznych oraz dodatkowych będących w aktualnej ofercie. Zajmujemy się oceną atrakcyjności tych usług pod względem dopasowania do preferencji Par Młodych , obowiązujących i nadchodzących trendów oraz analizą wyceny usług w odniesieniu do cen rynkowych.",
  },
  {
    number: 2,
    title: "Audyt social mediów",
    img: new URL("../assets/offer-halls/offer-2.webp", import.meta.url).href,
    content:
      "Każda obecnie działająca firma powinna istnieć w social mediach, jeśli chce utrzymać bądź zdobyć znaczącą pozycję na rynku. Pracując na codzień z Parami Młodymi i organizując dla nich ich wymarzone wesela, doskonale wiemy czego Młode Pary szukają na kanałach społecznościowych i co chciałyby tam zobaczyć. Wykonując dla Was taki audyt, podpowiadamy co należy poprawić lub czego brakuje. Możemy również stworzyć dla Was materiały, które staną się Waszą sztandarową wizytówką i wyróżnikiem wśród innych konkurencyjnych obiektów.",
  },
  {
    number: 3,
    title: "Audyt w dniu wesela",
    img: new URL("../assets/offer-halls/offer-3.webp", import.meta.url).href,
    content:
      "Największy sprawdzian umiejętności obsługi wesel następuje w dniu realizacji. Możemy być wtedy z Wami i obserwować jak przebiega koordynacja dnia ślubu ze strony obiektu. Pełny raport naszych spostrzeżeń, który może stanowić również podstawę szkoleń dla Waszej załogi, będzie do Waszej dyspozycji. Czas takiego audytu następuje od samego rana, aż do wieczora.",
  },
  {
    number: 4,
    title: "Kompleksowa organizacja dni otwartych",
    img: new URL("../assets/offer-halls/offer-4.webp", import.meta.url).href,
    content:
      "Chcesz pokazać się i przybliżyć swoją ofertę klientom? Najlepszym sposobem prezentacji jest zaproszenie potencjalnych klientów do siebie poprzez organizacje dni otwartych / targów ślubnych. Mamy bogate doświadczenie w organizacji tego typu eventów dla wielu obiektów, w różnych lokalizacjach i rodzajach lokali. Po rozpoznaniu Waszego rynku oraz grupy docelowej klientów oraz bieżącej oferty i możliwości jakie ma Wasz lokal przygotujemy specjalny i spersonalizowany event.",
  },
  {
    number: 5,
    title: "Organizacja targów ślubnych",
    img: new URL("../assets/offer-halls/offer-5.webp", import.meta.url).href,
    content:
      "Targi ślubne to uwielbiane przez Pary Młode wydarzenia, podczas których mają okazję znaleźć swojego przyszłego usługodawcę lub nawet miejsce swojego wesela czy innej uroczystości. Dysponujemy odpowiednimi kontaktami, które sprawią, że organizacja tak ogromnego eventu, jakim są targi, przebiegnie sprawnie, a przede wszystkim z sukcesem.",
  },
];
</script>

<style lang="scss">
.offer-halls {
  &__boxes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 50px;
    justify-items: center;
    margin-top: 3.125rem;

    @media (min-width: $sm-screen) {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }

    @media (min-width: $md-screen) {
      margin-top: 6.25rem;
    }

    @media (min-width: $xl-screen) {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }

    @media (min-width: $xxxl-screen) {
      grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    }
  }
}
</style>
