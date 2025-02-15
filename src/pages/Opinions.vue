<template>
  <main class="page opinions">
    <h1 class="page__title">{{ $t("navOpinions") }}</h1>
    <section class="opinions__boxes">
      <OpinionBox
        v-for="(opinion, index) in opinions"
        :key="opinion.id"
        :opinion="opinion"
        :index="index"
        :active="activeOpinion === index"
        @toggle="toggleText(index)"
      />
    </section>
    <div class="opinions__more-opinions">
      <a
        href="https://g.page/r/CZ7k7KfNH0txEAE/review"
        target="_blank"
        class="opinions__more-opinions__btn"
        >{{ $t("opinionsSeeMoreOpinions") }}</a
      >
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import OpinionBox from "../components/opinions/OpinionBox.vue";

const opinions = [
  {
    id: 1,
    name: "Typhaine & Simon",
    img: new URL("../assets/opinions/opinion-1.webp", import.meta.url).href,
    content:
      "Where do we even begin to thank Marta? She was so much more than a wedding planner for us; she was a true friend, guide, and support through one of the most important times in our lives. From the first meeting, Marta took the time to listen to every detail of our dream wedding, making us feel completely seen and heard. Her warmth, kindness, and sense of humor kept us grounded through every step, and her calm confidence reassured us even on the most stressful days. Our wedding was a blend of English, Polish, and French, and Marta’s language skills brought everyone together beautifully. She made every single guest feel welcome, comfortable, and included—no small feat with three languages in play! It was heartwarming to see how effortlessly she brought people together, creating a space where everyone felt like family. Beyond her ability to unite people, Marta has an incredible eye for talent. She introduced us to the most amazing vendors, from the hairstylists to the barmen to the florist (to name a few), who truly understood our style and vision. Every recommendation felt like it had been made just for us, and we owe so much of our day’s magic to the wonderful people Marta brought into our lives. But above all, what we’ll remember most about Marta is her honesty, humor, and the way she made us feel cared for. She was never afraid to give us a gentle push when we were dragging our feet, but always did so with a laugh and a smile that made the process fun. We genuinely couldn’t have done it without her steady guidance, love, and unwavering support. Thank you, Marta, from the bottom of our hearts. You helped us create memories that will last a lifetime, and we couldn’t be more grateful to have had you by our side. Anyone would be lucky to have you as their wedding planner, but even luckier to know you.",
  },
  {
    id: 2,
    name: "Iga & Kuba",
    img: new URL("../assets/opinions/opinion-2.webp", import.meta.url).href,
    content:
      "If you're searching for a wedding planner in Krakow – look no further than Marta. My experience with her is something I will treasure forever, as she is not just a part of our wedding day memories, but an integral part of our entire journey. What began as a professional relationship grew over nearly two years of planning into a true friendship, and that’s a gift I never expected to find. My husband and I live in Texas, but with our Polish roots, we always dreamed of getting married in Krakow. The thought of planning a wedding from overseas was overwhelming, and we reached out to 15 wedding planners in search of the perfect fit. But after one conversation with Marta, I canceled the rest of my calls. Her experience and expertise are evident from her website, social media, and glowing testimonials. But there was something about Marta—something that made me trust her completely, even from our very first conversation. Marta embodies professionalism, hard work, and meticulous attention to detail. But above all, she has a rare and innate ability to connect with people. In an industry where it’s easy to feel like just another client, Marta stands out for how deeply she cares. She doesn’t just plan your wedding; she becomes your confidant, your sounding board, your problem-solver, and your greatest support. I never anticipated just how much we’d get to know each other throughout this process, and I am endlessly grateful because her unwavering support made planning our wedding not only manageable but genuinely enjoyable. Her expertise in all things wedding-related in Krakow was invaluable. She guided us in everything from decor concepts and hairstyle ideas to attractions for our guests. Marta took the time to truly understand our vision and our personalities, and that care was reflected in every recommendation she made. Without her, I could never have imagined the wedding of my dreams because she thought of details and possibilities I never would have on my own. What sets Marta apart is her client-first mentality. She respected our budget, never pressured us, and always provided multiple options—each thoughtfully selected and highly recommended. Her priority was always our happiness, and I believe that’s the key to her success: she can truly do it all, with no limits, and she does it with heart. As our wedding day approached, I was in awe of Marta’s organizational skills. She crafted a detailed plan and vendor contact sheet that left nothing to chance. I realized then how impossible it would have been for me to handle everything on my own, and how grateful I was to have Marta by my side. Our church was an hour from the venue, yet Marta was there for the ceremony, ensuring everything ran smoothly, guiding our guests, and even helping me adjust my dress and veil before walking down the aisle. Her team was equally incredible, setting up at the venue first thing in the morning while she was with us, handling everything with the same care and precision. On the day of the wedding, time seemed to fly. But Marta kept us on track, quietly managing every detail and going above and beyond, even when it wasn’t her responsibility. Seeing her still there after midnight, saying our goodbyes was deeply emotional, and I realized how invested I had become in her success. Marta’s work ethic, creativity, and, most of all, her heart are rare qualities in this industry, and I am excited to see her grow and spread her magic to all the happy couples out there. I could go on forever, recounting each special moment from our time working together, but I’ll leave it at this: I hope every future bride reading this has the opportunity to work with Marta. You will not only have the wedding of your dreams but also the joy of crossing paths with someone as special as she is. And that, in the end, is truly priceless.",
  },
  {
    id: 3,
    name: "Michalina & Eivind",
    img: new URL("../assets/opinions/opinion-3.webp", import.meta.url).href,
    content:
      "I am writing to wholeheartedly recommend Marta for her outstanding services as a wedding planner. From the moment we met her, it was clear that she is the kindest person you can imagine, always ready to help with a smile. As a couple who is not very organized, we were reallyyyyy overwhelmed by the prospect of planning our wedding. However, Marta made the entire process smooth and stress-free. It truly felt like being a guest at our own wedding, as she took care of every detail, no matter how small. Her professionalism and dedication are unmatched. She managed everything, ensuring our day was perfect in every way. We cannot imagine a better wedding planner and will always recommend her to anyone in need of wedding planning services. Marta, we love you and miss you already, you are simply the best!",
  },
  {
    id: 4,
    name: "Daria & Wojtek",
    img: new URL("../assets/opinions/opinion-4.webp", import.meta.url).href,
    content:
      "Marta is a wonderful person, with a great energy, whom you can quickly feel comfortable with. She made our wedding preparation a enjoyable process where we didn’t have to worry about anything. Marta has a rich book of specialists to recommend in various fields - we were so happy to work with florist Agnieszka, make-up artist Mia or the Photographer from Sztuka Studio. And most importantly - the coordination of our Big Day :-) Marta took care of everything! We felt like guests at our own wedding party. Marta, thank you for your commitment and organizing the most beautiful party we could have dreamed of.",
  },
  {
    id: 5,
    name: "Justyna & Arek",
    img: new URL("../assets/opinions/opinion-5.webp", import.meta.url).href,
    content:
      "Z całego serca rekomendujemy współpracę ze wspaniałym Zespołem Weddings in Krakow. Początkowo podjęliśmy starania, aby samodzielnie zorganizować nasz dzień ślubu, jednak nawiązanie kontaktu z Panią Martą i Sylwią oraz całym Zespołem, oceniamy jako najlepszą decyzję, aby uświetnić ten wyjątkowy dzień , a przede wszystkim cieszyć się każdą jego sekundą, bowiem o wszelkie inne aspekty zadbały Profesjonalistki, które oddają się swojej pracy (pasji) całym sercem. Kilkadziesiąt dni przygotowań, kilkaset minut rozmów, konsultacji i wsparcia - to nieoceniona pomoc w tymże jakże ważnym okresie życia. Z całą stanowczością możemy stwierdzić, że bez Weddings i Krakow nasz ślub nie przebiegłby w tak cudowny i wyjątkowy sposób. Poza wsparciem w momentach podejmowania wyboru w zakresie współpracy z podwykonawcami, mogliśmy liczyć na pomoc również w sytuacjach kryzysowych, które w mgnieniu oka były rozwiązywane, jak również znaleźliśmy idealne oparcie na pomoc ze stresem i emocjami, które sięgały zenitu. Dzięki Weddings in Krakow wiemy, że dzień ślubu to beztroska którą można się cieszyć, bowiem wszystkim innym (ustalanie scenariuszu dnia ślubu, dekoracje, organizacja transportu, hotel dla gości, współpraca z orkiestrą, koordynacja dnia ślubu, serwisu tortu, podziękowania dla Rodziców, bieżąca współpraca z salą) - zajmą się właśnie ONE. Dziękujemy w imieniu własnym oraz naszych Rodziców <3.",
  },
  {
    id: 6,
    name: "Aleksandra & Enda",
    img: new URL("../assets/opinions/opinion-6.webp", import.meta.url).href,
    content:
      "We can’t thank Marta enough for everything she has done for us. Over two years of planning our big day and she was always just a call or message away. Nothing ever is a problem. All of our dreams and ideas she made reality and organised everything to perfection. We don’t live in Poland and having Marta based in Krakow knowing all the best vendors and services was the best decision we’ve made for our polish/irish wedding day. She made everything so easy and stress-free. Marta helped with all the documents we required to get married in Krakow, and she knew exactly what we needed. Our wedding day would never be the same without Marta, Sylwia and Paulina. The girls handled everything so we could enjoy the day and spend time with our guests. It’s kind of bitter sweet how our work together is now over but we’re both so happy to have gained a friend in Krakow.",
  },
  {
    id: 7,
    name: "Edyta & Robert",
    img: new URL("../assets/opinions/opinion-7.webp", import.meta.url).href,
    content:
      "Kiedy się zaręczyliśmy z Robertem, wiedzieliśmy dokładnie że bez profesjonalnej pomocy się nie obędzie, zwłaszcza przygotowując ślub i przyjęcie międzynarodowe w Polsce! Już po pierwszym spotkaniu z Martą wiedzialiśmy, że trafiliśmy w dzisiątkę! Kontakowa, pomocna, zorganizowana z głową pełną pomysłów dodatkowo życzliwa i zawsze uśmiechnięta – właśnie kogoś takiego potrzebowaliśmy. Nasz ślub był w rzeczy samej bajkowy, ponad 100 gości z 14 krajów świata – od dalekiego Peru przez USA aż do naszej pieknej Polski i Szwajcarii. Ten dzień nadal budzi ogormne emocje nie tylko u nas ale także naszych gości, którzy określili nasz ślub jako niezapomniany. Każdej przyszłej parze młodej polecam Martę, gdyż moge wam zagwarnatować, że sprosta ona waszym oczekiwaniom a nawet dołozy tak zwany ekstra mile! Gdyby bylo mozliwe dalibyśmy 6 gwiazdek aby podkreślić jak profesjonalana i pomocna byla Marta i jak wdzięczni jesteśmy za jej pracę ! Dziękujemy !",
  },
  {
    id: 8,
    name: "Marta & Tomek",
    img: new URL("../assets/opinions/opinion-8.webp", import.meta.url).href,
    content:
      "Powiedziałam to już kilka razy i powtórzę jeszcze jeden raz: nie mam pojęcia, jak organizację wesela ogarniają osoby, które nie mają pomocy Marty. Od znalezienia wszystkich podwykonawców, przez kosztorys, wypożyczenie dekoracji, negocjacje, dopilnowanie wszystkich realizacji, aż po osobiste rozłożenie winietek i służenie białą nitką, kiedy suknia panny młodej nawaliła podczas pierwszego tańca - Marta była n i e z a s t ą p i o n a. W dniu swojego ślubu musiałam martwić się tylko o to, żeby wstać na umówioną godzinę makijażu, dotrzeć na miejsce i dobrze się bawić. O wszystko inne zatroszczyła się Marta. Jej doświadczenie, znajomości w branży, ale też zwykłe ludzkie zrozumienie były warte każdych pieniędzy (które w skali całego wesela wcale nie są dużym wydatkiem). To dzięki niej udało nam się zrealizować ślub i wesele na naszych zasadach, opartych na niekiedy szalonych pomysłach. Polecam współpracę z Martą każdemu, kto chce mieć spokój ducha i pewność, że wszystko pójdzie dobrze w najważniejszym dniu w swoim życiu!",
  },
  {
    id: 9,
    name: "Natalia & Dawid",
    img: new URL("../assets/opinions/opinion-9.webp", import.meta.url).href,
    content:
      "Cóż mogę napisać... Bez Marty ten ślub i wesele chyba nie odbyłyby się. Chociaż Marta koordynowała tylko dzień ślubu i wesela to jej praca to było znacznie znacznie więcej. Pomogła wybrać nam fotografkę i wideooperatora. Nie zliczę sytuacji, kiedy pomagała nam z najmniejszymi decyzjami, zawsze służyła radą i pomysłami. Uświadomiła nas w wielu kwestiach, które powinniśmy jeszcze rozważyć przed naszym wielkim dniem. Marta swoim doświadczeniem, osobowością i dobrocią pokazuje jak świetnym człowiekiem jest, odpowiednim na swoim miejscu. Dzięki niej nie musieliśmy się o nic martwić. Z czystym sercem poleciłabym Martę każdemu.",
  },
  {
    id: 10,
    name: "Basia & Marcin",
    img: new URL("../assets/opinions/opinion-10.webp", import.meta.url).href,
    content:
      "Nie ma słów którymi jesteśmy w stanie wyrazić nasz zachwyt nad ślubem i weselem zorganizowanym przez Sylwię. Naprawdę, jeśli szukacie kogoś kto jest w stanie zrealizować najbardziej szalone pomysły to to jest idealna osoba. Nasza wizja wesela w górach była piękna, ale rzeczywista realizacja przerosła nasze najśmielsze marzenia. Dzięki Sylwii skargi innych par na stresy przedślubne były nam totalnie obce. Znalazła nam najlepszych możliwych podwykonawców, skoordynowała ich prace, dbała o nas w dzień ślubu, a także przed i poprowadziła najpiękniejszą ceremonię we wszechświecie. Dzięki niej byliśmy w stanie rzeczywiście cieszyć się tym dniem i wybawić do białego rana zamiast zajmować się organizacyjnymi tematami. Nie można też zapomnieć o tym, że jest to po prostu cudowna osoba pełna ciepła, zaangażowania i poczucia humoru. Cokolwiek tu napiszemy nigdy nie odda tego ogromu wsparcia, które otrzymaliśmy. Mieliśmy idealny ślub i wesele, które goście wspominają do dziś. Jeśli chcecie to przebić to tylko z Sylwią. Pozdrawiamy, Szelugi",
  },
  {
    id: 11,
    name: "Kasia & Joe",
    img: new URL("../assets/opinions/opinion-11.webp", import.meta.url).href,
    content:
      "From the moment we reached out to Marta at Weddings in Krakow, we knew we were in good hands. With her expertise and support, we were able to plan the wedding of our dreams in Krakow, all the way from Canada! We cannot say enough about Marta's professionalism and enthusiasm, as well as her outstanding organization and communication skills. She was able to guide us through venue and vendor selection with ease and had great suggestions for the ceremony and floorplan of the venue. We really appreciated that we could trust her with much of the logistics of the big day, knowing that she understood our budget and vision. Marta surpassed our expectations with her problem solving skills, attention to detail and empathy. She went out of her way to ensure our questions were answered and was so accessible throughout all stages of planning and coordination of the day. The peace of mind we received is priceless and we couldn't be happier or more grateful to have partnered with a true expert in the field. Thank you from the bottom of our hearts!",
  },
  {
    id: 12,
    name: "Anna & Andrew",
    img: new URL("../assets/opinions/opinion-12.webp", import.meta.url).href,
    content:
      "We are extremely grateful to Marta for helping us achieve the wedding day of our dreams. Marta was there for us each and every step of the way and sorted out any issues or problems we had with ease. She was incredibly supportive and wholly dedicated to guiding and advising on making the right decisions each time. We found Marta easy to work with, she kept in regular communication, was very proactive with organizing and thinking of all the different things we hadn’t ever considered. During the day itself, Marta really took care of everything. Our day was absolutely perfect, very enjoyable from start to finish! We couldn’t have had a more beautiful day, and we couldn’t have had it without Marta. Thank you, Marta, for all your hard work, ensuring everything on our day went perfectly!",
  },
  {
    id: 13,
    name: "Klaudia & Maciek",
    img: new URL("../assets/opinions/opinion-13.webp", import.meta.url).href,
    content:
      "Marta pomogła nam w organizacji naszego ślubu i wesela (15.06.2024). Świetny kontakt, bardzo szybka odpwiedź na wszelkie pytania i problemu. Zawsze wyselekcjonowane najlepsze opcje do wyboru. O wszystko zadbała i dopilnowała za co jesteśmy mega wdzięczni. 🫶 Przez ostatnie dwa lata pomogała nam zadbać o każdy szczegół, by ten dzień był wyjątkowy, niezapomniany i taki jak sobie wymarzyliśmy. Marta jest przesympatyczną i ciepłą osobą, bardzo miło wspominamy całą organizację i polecamy wszystkim. Ślub i wesele powinny być dniem miłości i zabawy, więc naprawdę warto oddać koordynację tego dnia w pewne ręce. Jeszcze raz dziękujemy za wszystko! ",
  },
  {
    id: 14,
    name: "Celine & James",
    img: new URL("../assets/opinions/opinion-14.webp", import.meta.url).href,
    content:
      "I can honestly say that deciding to have Marta help us plan our wedding in Krakow was the best decision we ever made as a couple (apart from marrying eachother!). She is simply a JOY to work with, and puts an incredible amount of love, care and attention to detail into your wedding, and is also super friendly and genuine person on top of that. We knew we wanted to have a beautiful Polish wedding but living in the UK, we needed help to make our dream come true and Marta exceeded all our expectations and made it the most beautiful day of our lives! Having her guide us through the process, keep us on time with next steps and her experience in helping us choose the best vendors made the whole wedding planning journey SO much more fun and took away almost all the stress. On the day of our wedding, it was such a comfort and pleasure to have her and her wonderful colleagues Paulina and Natalia there to reassure, support and make the day absolutely perfect. We were able to enjoy our wedding day as guests, knowing all the details we're taken care of. We are so grateful everything was so beautiful and we can't imagine being able to put on a quarter of this wedding without your help! We whole heartededly recommend her to anyone considering it. We had so many of our friends and family said it's the best wedding they've ever been to and we can't thank you enough for the beautiful memories! You have gained our life-long friendship and gratitude",
  },
  {
    id: 15,
    name: "Natalia & Benjamin",
    img: new URL("../assets/opinions/opinion-15.webp", import.meta.url).href,
    content:
      "Nasza niesamowita Marta zapewniła nam doskonałość w dniu ślubu. Jej profesjonalizm, zaangażowanie i oddanie sprawiły, że nasz ślub był absolutnie magiczny. Nie musieliśmy się o nic martwić, ponieważ miała wszystko pod kontrolą. Dziękujemy jej z całego serca za nieocenioną pomoc i polecamy ją wszystkim, którzy pragną zorganizować niezapomniane wesele.",
  },
  {
    id: 16,
    name: "Camilla & Robin",
    img: new URL("../assets/opinions/opinion-16.webp", import.meta.url).href,
    content:
      "Polecamy gorąco usługi Weddinga in Kraków. Marta była naszą koordynatorką ślubną, ale w rzeczywistości zrobiła dużo więcej. Pomogła nam w wielu kwestiach organizacyjnych i aby ten dzień był wyjątkowy i taki jak my ! Jej obecność w tym dniu pozwoliła nam w pełni bawić z naszymi gościami ! Co więcej, jesteśmy parą francusko-polską, ale dla Marty nie stanowi to problemu ponieważ mówi po polsku i francusku ! Marta jest stworzona to tej pracy i mieliśmy dużo szczęścia, że w tym wyjątkowym dniu znalazła się wśród naszych usługodawców!",
  },
  {
    id: 17,
    name: "Olena & Adam",
    img: new URL("../assets/opinions/opinion-17.webp", import.meta.url).href,
    content:
      "Marta to wspaniała celebrantka ślubna, która z pełnym zaangażowaniem podchodzi do swojej pracy. Jest nie tylko niezwykle miła i empatyczna, ale także profesjonalna, co sprawia, że ceremonia jest pięknie zorganizowana i wyjątkowa. Jestem pewna że z nią każdy ślub stanie się niezapomnianym przeżyciem. Bardzo dziękujemy i polecamy!",
  },
  {
    id: 18,
    name: "Monika & David",
    img: new URL("../assets/opinions/opinion-18.webp", import.meta.url).href,
    content:
      "Bardzo polecamy usługi Weddings in Kraków. Marta pomogła zorganizować nam wesele polsko-hiszpańskie od samego początku do samego końca. Mieszkamy za granicą więc ogrom przygotowań zdalnych trochę nas przerażał ale zupełnie niepotrzebnie - Marta pomogła znaleźć nam idealną salę i świetnych usługodawców. Służyła też nieocenionym wsparciem w planowaniu ceremonii humanistycznej w dwóch językach. W dniu wesela mogliśmy się zrelaksować i dobrze bawić z naszymi gośćmi, bo Marta czuwała żeby wszystko szło zgodnie z planem. Nasi goście byli zachwyceni, nawet osoby, które nie lubią wesel powiedziały nam, że to było najlepsze wesele, na którym byli. Z całego serca polecamy!",
  },
  {
    id: 19,
    name: "Patricia & Simon",
    img: new URL("../assets/opinions/opinion-19.webp", import.meta.url).href,
    content:
      "Jakie to było wspaniałe doświadczenie dzięki Marcie! Od momentu, kiedy pojawiła się na naszym ślubie, cały stres z nas opadł. Marta przejęła wszystko w swoje ręce i zadbała o to, abyśmy nie musieli martwić się o cokolwiek, tak jak przewidywała! Dzięki Marcie mogliśmy w pełni cieszyć się każdą chwilą, nie martwiąc się o logistykę czy czas. Nasi goście bawili się świetnie, a wszystko przebiegło bez zarzutu. Widać było, że Marta ma oko do szczegółów i dokładnie wie, jak poprowadzić dzień w sposób perfekcyjny. Jeśli szukasz kogoś, kto zadba o to, aby Twój dzień ślubu przebiegł sprawnie i bezstresowo, Marta to absolutnie osoba, której potrzebujesz. Nie mogliśmy sobie wyobrazić lepszego koordynatora ślubnego!",
  },
  {
    id: 20,
    name: "Justyna & Lucas",
    img: new URL("../assets/opinions/opinion-20.webp", import.meta.url).href,
    content:
      "Z całego serca polecam Martę! Dzięki jej profesjonalizmowi i zaangażowaniu, nasze wesele było nie tylko pięknie zorganizowane, ale również przebiegło bez problemów. Już od pierwszego spotkania wiedzieliśmy, że jesteśmy w dobrych rękach. Marta zadbała o każdy detal – od pomocy w wyborze idealnej dla nas lokalizacji, przez dekoracje, aż po koordynację dostawców przed i w dniu ślubu. Co więcej, jej spokój i opanowanie sprawiły, że mogliśmy cieszyć się tym wyjątkowym dniem, nie martwiąc się o żadne niespodzianki. Wszystko było dopięte na ostatni guzik, a goście byli zachwyceni. Jeśli marzycie o ślubie i weselu bez stresu, to zdecydowanie warto skorzystać z usług Marty :) Justyna & Lucas",
  },
  {
    id: 21,
    name: "Oliwia & Tomasz",
    img: new URL("../assets/opinions/opinion-21.webp", import.meta.url).href,
    content:
      "Z Weddings in Kraków współpracowaliśmy przy organizacji naszego ślubu i wesela, które odbyło się 15.06.2024. Szczerze mówiąc nie wiem jak udałoby nam się to wszystko ogarnąć bez pomocy dziewczyn! Poznaliśmy Martę i Sylwię, która koordynowała nasz dzień. Praca dziewczyn przerosła nasze oczekiwania. Zaczęliśmy organizację na własną rękę, ale cieszę się, że w porę zdecydowaliśmy się na współpracę. Wszyscy poleceni usługodawcy przez dziewczyny byli trafieni w dziesiątkę! Odpowiednie osoby na odpowiednim stanowisku. Pełen profesjonalizm, umiejętność słuchania i ogromna pomysłowość. W dniu ślubu Sylwia była naszym aniołem w tle. Jej obecność była gwarancją, że wszystko będzie jak w zegarku, a uśmiech i żarcik od razu ściągał niepotrzebny stres. Rozwiązywała wszystkie problemy i skrzętnie doglądała wszystkiego. Dzięki jej obecności mogliśmy czerpać z naszego dnia na maksa bo wiedzieliśmy, że Sylwia na pewno czuwa i zadba o każdego, aby nikomu nic nie brakowało. Bardzo dziękujemy za wspólną przygodę i wypite kawy na spotkaniach. Ciężko nam wyrazić słowami jak bardzo jesteśmy wdzięczni za pomoc. Polecamy każdemu!",
  },
  {
    id: 22,
    name: "Aleksandra & Jay",
    img: new URL("../assets/opinions/opinion-22.webp", import.meta.url).href,
    content:
      "I couldn't imagine my wedding without Marta! If you are thinking about adding a coordinator to your wedding and you are wondering who to hire, don't hesitate - go for Marta! She did a great job helping us with planning the wedding and she was taking care about all the things that needed to be taken care of! Thanks to her me and my fiance didn't need to worry about anything and we could enjoy our special day to the fullest. After all this is YOUR day! Marta managed all our international guest in the best way and everyone felt great. The ceremony that Marta hold for us was pure magic! We couldn't imagine better quality of service. Thank you one more time!",
  },
  {
    id: 23,
    name: "Ania & Blake",
    img: new URL("../assets/opinions/opinion-23.webp", import.meta.url).href,
    content:
      "I reached out to Marta 15 months in advance of our wedding. She works very fast to identify possible vendors and venues to enable decision making, where we had our main contracts locked in within the first 4 months of planning. With Marta, no is not an option - any idea is followed with options for execution. She is your partner since day 1. 80% of our guests were flying into Poland from the USA and have said that this is the best wedding that they have attended. I'm fortunate to not only have worked with a resourceful and well organized planner that has made planning a wedding from across the Atlantic a breeze, but also to walk away a new life time friend in Krakow. Highly recommend working with her!",
  },
];

const activeOpinion = ref(null);

const toggleText = (index) => {
  activeOpinion.value = activeOpinion.value === index ? null : index;
};
</script>

<style lang="scss">
.opinions {
  overflow-x: hidden; // Dodaj to

  &__more-opinions {
    display: flex;
    align-items: center;
    justify-content: center;

    &__btn {
      display: block;
      border: none;
      background-color: $primary-color;
      width: fit-content;
      padding: 15px 25px;
      border-radius: 30px;
      font-size: 18px;
      line-height: 20px;
      cursor: pointer;
      font-weight: 500;
      text-decoration: none;
      color: #fff;

      &:hover {
        opacity: 0.9;
      }

      @media (min-width: $md-screen) {
        font-size: 20px;
        line-height: 22px;
        padding: 20px 30px;
      }
    }
  }
}
</style>
