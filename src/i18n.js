// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)          // грузим JSON из /public/locales/{lng}/{ns}.json
  .use(LanguageDetector)     // детект по localStorage, navigator.language и т.п.
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    supportedLngs: ["ru", "kk", "en"],
    ns: ["common"],
    defaultNS: "common",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    detection: {
      // сначала localStorage → потом html lang → потом браузер
      order: ["localStorage", "htmlTag", "navigator"],
      caches: ["localStorage"]
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

export default i18n;
