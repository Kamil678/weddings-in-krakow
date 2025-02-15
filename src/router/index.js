import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Offer from "../pages/Offer.vue";
import HumanistWeddings from "../pages/HumanistWeddings.vue";
import WeddingDayCoordination from "../pages/WeddingDayCoordination.vue";
import Portfolio from "../pages/Portfolio.vue";
import OfferHalls from "../pages/OfferHalls.vue";
import Opinions from "../pages/Opinions.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      metaTags: {
        pl: {
          title: "Strona główna - Weddings in Krakow",
          description:
            "Weddings in Krakow, Wesele w Krakowie, Wedding Planner Kraków, Organizacja ślubów Kraków, Wesela międzynarodowe",
          keywords:
            "Weddings in Krakow, Wesele w Krakowie, Wedding Planner Kraków, Organizacja ślubów Kraków, Wesela międzynarodowe",
        },
        en: {
          title: "Home page - Weddings in Krakow",
          description:
            "Weddings in Krakow. Wedding in Krakow. Wedding Planner Krakow. Wedding organizationKrakow. International weddings.",
          keywords:
            "Weddings in Krakow, Wedding in Krakow, Wedding Planner Krakow, Wedding organization Krakow, International weddings",
        },
        de: {
          title: "Startseite - Weddings in Krakow",
          description:
            "Mariage à Cracovie. Wedding Planner Cracovie. Organisation de mariage Cracovie. Mariages internationaux.",
          keywords:
            "Mariage à Cracovie, Wedding Planner Cracovie, Organisation de mariage Cracovie, Mariages internationaux.",
        },
        fr: {
          title: "Page d'accueil - Weddings in Krakow",
          description:
            "Offre Wedding Planner Cracovie. Étendue des services d&#39;un organisateur de mariage. Organisation de mariage Cracovie. Mariage en Italie. Consultations de mariage.",
          keywords:
            "Offre Wedding Planner Cracovie, Étendue des services d'un organisateur de mariage, Organisation de mariage Cracovie, Mariage en Italie, Consultations de mariage",
        },
        it: {
          title: "Pagina iniziale - Weddings in Krakow",
          description:
            "Matrimonio a Cracovia. Organizzatore di matrimoni a Cracovia. Organizzazione matrimoni a Cracovia. Matrimoni internazionali.",
          keywords:
            "Matrimonio a Cracovia, Organizzatore di matrimoni a Cracovia, Organizzazione matrimoni a Cracovia, Matrimoni internazionali.",
        },
      },
    },
  },
  {
    path: "/:path(offer|oferta)",
    name: "Offer",
    component: Offer,
    meta: {
      plPath: "/oferta",
      enPath: "/offer",
      metaTags: {
        pl: {
          title: "Oferta - Weddings in Krakow",
          description:
            "Oferta Wedding Plannera Kraków. Zakres usług wedding plannerki. Organizacja wesel Kraków. Wesele we Włoszech. Konsultacje ślubne.",
          keywords:
            "Oferta Wedding Plannera Kraków, Zakres usług wedding plannerki, Organizacja wesel Kraków, Wesele we Włoszech, Konsultacje ślubne",
        },
        en: {
          title: "Offer - Weddings in Krakow",
          description:
            "Wedding Planner's offer Krakow. Scope of wedding planner's services. Wedding organization Krakow. Wedding in Italy. Wedding consultations.",
          keywords:
            "Wedding Planner's offer Krakow, Scope of wedding planner's services, Wedding organization Krakow, Wedding in Italy, Wedding consultations",
        },
        de: {
          title: "Angebot - Weddings in Krakow",
          description:
            "Angebot des Hochzeitsplaners Krakau. Umfang der Leistungen eines Hochzeitsplaners. Hochzeitsorganisation Krakau. Hochzeit in Italien. Hochzeitsberatung.",
          keywords:
            "Angebot des Hochzeitsplaners Krakau, Umfang der Leistungen eines Hochzeitsplaners, Hochzeitsorganisation Krakau, Hochzeit in Italien, Hochzeitsberatung",
        },
        fr: {
          title: "Offre - Weddings in Krakow",
          description:
            "Offre Wedding Planner Cracovie. Étendue des services d&#39;un organisateur de mariage. Organisation de mariage Cracovie. Mariage en Italie. Consultations de mariage.",
          keywords:
            "Offre Wedding Planner Cracovie, Étendue des services d&#39;un organisateur de mariage, Organisation de mariage Cracovie, Mariage en Italie, Consultations de mariage",
        },
        it: {
          title: "Offerta - Weddings in Krakow",
          description:
            "Offerta Wedding Planner Cracovia. Ambito dei servizi di wedding planner. Organizzazione matrimoni a Cracovia. Matrimonio in Italia. Consulenza per matrimoni.",
          keywords:
            "Offerta Wedding Planner Cracovia, Ambito dei servizi di wedding planner, Organizzazione matrimoni a Cracovia. Matrimonio in Italia, Consulenza per matrimoni",
        },
      },
    },
  },
  {
    path: "/:path(humanist-weddings|sluby-humanistyczne)",
    name: "HumanistWeddings",
    component: HumanistWeddings,
    meta: {
      plPath: "/sluby-humanistyczne",
      enPath: "/humanist-weddings",
      metaTags: {
        pl: {
          title: "Śluby Humanistyczne - Weddings in Krakow",
          description:
            "Co to jest ślub humanistyczny? Ile kosztuje ślub humanistyczny? Ślub symboliczny w Krakowie.",
          keywords:
            "Ślub humanistyczny, Koszt ślubu humanistycznego, Ślub symboliczny Kraków",
        },
        en: {
          title: "Humanist Weddings - Weddings in Krakow",
          description:
            "What is a humanist wedding? How much does a humanist wedding cost? Symbolic wedding in Krakow.",
          keywords:
            "Humanist wedding, Cost of humanist wedding, Symbolic wedding Krakow",
        },
        fr: {
          title: "Mariages humanistes - Weddings in Krakow",
          description:
            "Qu'est-ce qu'un mariage humaniste ? Combien coûte un mariage humaniste ? Mariage symbolique à Cracovie.",
          keywords:
            "Mariage humaniste, Coût du mariage humaniste, Mariage symbolique Cracovie",
        },
        de: {
          title: "Humanistische Hochzeiten - Weddings in Krakow",
          description:
            "Was ist eine humanistische Hochzeit? Was kostet eine humanistische Hochzeit? Symbolische Hochzeit in Krakau.",
          keywords:
            "Humanistische Hochzeit, Kosten der humanistischen Hochzeit, Symbolische Hochzeit Krakau",
        },
        it: {
          title: "Matrimoni umanisti - Weddings in Krakow",
          description:
            "Cos'è un matrimonio umanista? Quanto costa un matrimonio umanista? Nozze simboliche a Cracovia.",
          keywords:
            "Matrimonio umanista, Costo del matrimonio umanista, Nozze simboliche Cracovia",
        },
      },
    },
  },
  {
    path: "/:path(wedding-day-coordination|koordynacja-dnia-slubu)",
    name: "WeddingDayCoordination",
    component: WeddingDayCoordination,
    meta: {
      plPath: "/koordynacja-dnia-slubu",
      enPath: "/wedding-day-coordination",
      metaTags: {
        pl: {
          title: "Koordynacja Dnia Ślubu - Weddings in Krakow",
          description:
            "Co to jest koordynacja dnia ślubu? Ile kosztuje koordynacja dnia ślubu? Koordynatorka ślubna Kraków. Co zawiera koordynacja dnia ślubu.",
          keywords:
            "Koordynacja dnia ślubu, Koszt koordynacji ślubu, Koordynator ślubny Kraków",
        },
        en: {
          title: "Wedding Day Coordination - Weddings in Krakow",
          description:
            "What is wedding day coordination? How much does wedding day coordination cost? Wedding coordinator Krakow. What does wedding day coordination include.",
          keywords:
            "Wedding day coordination, Cost of wedding day coordination, Wedding coordinator Krakow",
        },
        fr: {
          title: "Coordination du Jour du Mariage - Weddings in Krakow",
          description:
            "Qu'est-ce que la coordination du jour du mariage ? Combien coûte la coordination du jour du mariage ? Coordonnateur de mariage Cracovie. Ce qui est inclus dans la coordination du jour du mariage.",
          keywords:
            "Coordination du jour du mariage, Coût de la coordination du mariage, Coordonnateur de mariage Cracovie",
        },
        de: {
          title: "Hochzeitstag-Koordination - Weddings in Krakow",
          description:
            "Was bedeutet Hochzeitstagkoordination? Wie viel kostet die Koordination am Hochzeitstag? Hochzeitskoordinator Krakau. Was ist in der Koordination am Hochzeitstag enthalten?",
          keywords:
            "Hochzeitstagkoordination, Kosten der Hochzeitstagkoordination, Hochzeitskoordinator Krakau",
        },
        it: {
          title: "Coordinazione del Giorno del Matrimonio - Weddings in Krakow",
          description:
            "Cos'è il coordinamento del giorno delle nozze? Quanto costa l'organizzazione del giorno del matrimonio? Coordinatrice di matrimoni a Cracovia. Cosa è incluso nel coordinamento del giorno delle nozze.",
          keywords:
            "Coordinazione del giorno del matrimonio, Costo del coordinamento del matrimonio, Coordinatrice matrimoni Cracovia",
        },
      },
    },
  },
  {
    path: "/:path(portfolio|portfolio)",
    name: "Portfolio",
    component: Portfolio,
    meta: {
      plPath: "/portfolio",
      enPath: "/portfolio",
      metaTags: {
        pl: {
          title: "Portfolio - Weddings in Krakow",
          description:
            "Portfolio Wedding Plannerki Kraków. Zdjęcia ślubne, plenery ślubne, trendy ślubne.",
          keywords:
            "Portfolio Wedding Plannerka, Zdjęcia ślubne, Plenery ślubne, Trendy ślubne",
        },
        en: {
          title: "Portfolio - Weddings in Krakow",
          description:
            "Portfolio Wedding Planner Krakow. Wedding photos, outdoor weddings, wedding trends.",
          keywords:
            "Wedding Planner portfolio, Wedding photos, Outdoor weddings, Wedding trends",
        },
        fr: {
          title: "Portfolio - Weddings in Krakow",
          description:
            "Portfolio de planificateur de mariage à Cracovie. Photos de mariage, photographie de mariage en extérieur, tendances mariage.",
          keywords:
            "Portfolio Wedding Planner, Photos de mariage, Mariage en extérieur, Tendances mariage",
        },
        de: {
          title: "Portfolio - Weddings in Krakow",
          description:
            "Hochzeitsplaner-Portfolio Krakau. Hochzeitsfotos, Hochzeitsfotografie im Freien, Hochzeitstrends.",
          keywords:
            "Hochzeitsplaner Portfolio, Hochzeitsfotos, Hochzeitsfotografie im Freien, Hochzeitstrends",
        },
        it: {
          title: "Portfolio - Weddings in Krakow",
          description:
            "Portfolio di Wedding Planner Cracovia. Foto di nozze, fotografia di matrimoni all'aperto, tendenze per i matrimoni.",
          keywords:
            "Portfolio Wedding Planner, Foto di nozze, Matrimonio all'aperto, Tendenze per i matrimoni",
        },
      },
    },
  },
  {
    path: "/:path(offer-halls|oferta-dla-sal)",
    name: "OfferHalls",
    component: OfferHalls,
    meta: {
      plPath: "/oferta-dla-sal",
      enPath: "/offer-halls",
      metaTags: {
        pl: {
          title: "Oferta Dla Sal - Weddings in Krakow",
          description:
            "Oferta dla sal weselnych. Audyt oferty weselnej. Jak zwiększyć liczbę Par Młodych na sali weselnej. Jak organizować więcej wesel?",
          keywords:
            "Oferta dla sal weselnych, Audyt sal weselnych, Jak zwiększyć liczbę Par Młodych",
        },
        en: {
          title: "Venue Offer - Weddings in Krakow",
          description:
            "Wedding venue offer. Wedding offer audit. How to increase the number of couples at a wedding venue. How to organize more weddings?",
          keywords:
            "Wedding venue offer, Wedding venue audit, Increase wedding venue bookings",
        },
        fr: {
          title: "Offre pour les Salles - Weddings in Krakow",
          description:
            "Offre pour les salles de mariage. Audit de l'offre de mariage. Comment augmenter le nombre de couples dans une salle de mariage. Comment organiser plus de mariages?",
          keywords:
            "Offre salles de mariage, Audit des salles de mariage, Augmenter les réservations des salles de mariage",
        },
        de: {
          title: "Hochzeitslocations Angebot - Weddings in Krakow",
          description:
            "Angebot für Hochzeitslocations. Hochzeitsangebot Audit. Wie man die Anzahl der Paare in einer Hochzeitslocation erhöht. Wie man mehr Hochzeiten organisiert?",
          keywords:
            "Hochzeitslocations Angebot, Hochzeitslocations Audit, Mehr Hochzeiten organisieren",
        },
        it: {
          title: "Offerta per Sale - Weddings in Krakow",
          description:
            "Offerta per sale matrimonio. Audit dell'offerta matrimoniale. Come aumentare il numero di coppie nelle sale matrimoni. Come organizzare più matrimoni?",
          keywords:
            "Offerta sale matrimoni, Audit sale matrimoni, Aumentare prenotazioni sale matrimoni",
        },
      },
    },
  },
  {
    path: "/:path(opinions|opinie)",
    name: "Opinions",
    component: Opinions,
    meta: {
      plPath: "/opinie",
      enPath: "/opinions",
      metaTags: {
        pl: {
          title: "Opinie - Weddings in Krakow",
          description:
            "Opinie o współpracy z Weddings in Kraków. Opinie o współpracy z Wedding Plannerką. Po co jest wedding planner?",
          keywords:
            "Opinie o Weddings in Kraków, Opinie Wedding Plannerka, Po co wedding planner?",
        },
        en: {
          title: "Opinions - Weddings in Krakow",
          description:
            "Opinions about cooperation with Weddings in Kraków. Opinions about cooperation with Wedding Planner. What is a wedding planner for?",
          keywords:
            "Opinions Weddings in Kraków, Wedding Planner reviews, What is a wedding planner?",
        },
        fr: {
          title: "Avis - Weddings in Krakow",
          description:
            "Avis sur la coopération avec Weddings à Cracovie. Avis sur la coopération avec le Wedding Planner. A quoi sert un wedding planner ?",
          keywords:
            "Avis Weddings à Cracovie, Avis Wedding Planner, A quoi sert un wedding planner ?",
        },
        de: {
          title: "Meinungen - Weddings in Krakow",
          description:
            "Meinungen zur Zusammenarbeit mit Weddings in Kraków. Meinungen zur Zusammenarbeit mit dem Wedding Planner. Wozu dient ein Hochzeitsplaner?",
          keywords:
            "Meinungen Weddings in Kraków, Hochzeitsplaner Meinungen, Wozu Hochzeitsplaner?",
        },
        it: {
          title: "Opinioni - Weddings in Krakow",
          description:
            "Opinioni sulla collaborazione con Weddings in Krakow. Opinioni sulla collaborazione con il Wedding Planner. A cosa serve un wedding planner?",
          keywords:
            "Opinioni Weddings in Krakow, Opinioni Wedding Planner, A cosa serve wedding planner?",
        },
      },
    },
  },
  {
    path: "/:path(contact|kontakt)",
    name: "Contact",
    component: Contact,
    meta: {
      plPath: "/kontakt",
      enPath: "/contact",
      metaTags: {
        pl: {
          title: "Kontakt - Weddings in Krakow",
          description:
            "Organizacja ślubu w Krakowie. Pomoc w organizacji wesela. Najlepsza wedding plannerka Kraków.",
          keywords:
            "Organizacja ślubu w Krakowie, Pomoc w organizacji wesela, Wedding planner Kraków",
        },
        en: {
          title: "Contact - Weddings in Krakow",
          description:
            "Wedding organization in Krakow. Help in organizing the wedding. The best wedding planner Krakow.",
          keywords:
            "Wedding organization Krakow, Help with wedding planning, Best wedding planner Krakow",
        },
        fr: {
          title: "Contact - Weddings in Krakow",
          description:
            "Organisation de mariage à Cracovie. Aide à l'organisation d'un mariage. Le meilleur organisateur de mariage de Cracovie.",
          keywords:
            "Organisation mariage Cracovie, Aide organisation mariage, Meilleur wedding planner Cracovie",
        },
        de: {
          title: "Kontakt - Weddings in Krakow",
          description:
            "Hochzeitsorganisation in Krakau. Unterstützung bei der Organisation einer Hochzeit. Der beste Hochzeitsplaner Krakaus.",
          keywords:
            "Hochzeitsorganisation Krakau, Hilfe bei Hochzeitsplanung, Bester Hochzeitsplaner Krakau",
        },
        it: {
          title: "Contatti - Weddings in Krakow",
          description:
            "Organizzazione di matrimoni a Cracovia. Assistenza nell'organizzazione del matrimonio. Il miglior wedding planner di Cracovia.",
          keywords:
            "Organizzazione matrimoni Cracovia, Aiuto pianificazione matrimonio, Miglior wedding planner Cracovia",
        },
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
  },
});

router.beforeEach((to, from, next) => {
  const selectedLanguage = localStorage.getItem("language") || "pl";

  const routeMeta = to.meta;
  if (routeMeta.plPath && routeMeta.enPath) {
    const currentPath = to.path;
    const correctPath =
      selectedLanguage === "pl" ? routeMeta.plPath : routeMeta.enPath;

    if (currentPath !== correctPath) {
      return next(correctPath);
    }
  }

  if (to.path === "/offer-halls" && selectedLanguage !== "pl") {
    return next({ path: "/" });
  }

  next();
});

export const getCorrectPath = (name) => {
  const route = routes.find((r) => r.name === name);
  if (!route || !route.meta || !route.meta.plPath) return "";

  const selectedLanguage = localStorage.getItem("language") || "pl";
  return selectedLanguage === "pl" ? route.meta.plPath : route.meta.enPath;
};

export default router;
