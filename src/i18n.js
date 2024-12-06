import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import de from './locales/de.json';
import pl from "./locales/pl.json";

const messages = {
  pl,
  en,
  fr,
  it,
  de,
};
const savedLanguage = localStorage.getItem("language") || "pl";
const i18n = createI18n({
  locale: savedLanguage, 
  fallbackLocale: 'pl', 
  messages,
});

export default i18n;
