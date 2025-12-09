import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import tr from './locales/tr.json';
import en from './locales/en.json';

i18n
    // Detect user language
    .use(LanguageDetector)
    // Pass the i18n instance to react-i18next
    .use(initReactI18next)
    // Init i18next
    .init({
        resources: {
            tr: {
                translation: tr
            },
            en: {
                translation: en
            }
        },
        fallbackLng: 'tr', // Default language is Turkish
        debug: false,
        interpolation: {
            escapeValue: false // React already does escaping
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
