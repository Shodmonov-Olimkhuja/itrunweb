import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./locales/ru.json";
import tj from "./locales/tj.json";
import en from "./locales/en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: ru,
            },
            tj: {
                translation: tj,
            },
            en: {
                translation: en,
            },
        },

        fallbackLng: "ru",

        supportedLngs: ["ru", "tj", "en"],

        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: false,
        },
    });

export default i18n;