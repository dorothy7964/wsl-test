import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import translationEn from './translation.en.json';
import translationKo from './translation.ko.json';

const resources = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
  },
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'en', // use en if detected lng is not available
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    supportedLngs: Object.keys(resources),
  });

export default i18n;
