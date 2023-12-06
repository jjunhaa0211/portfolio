import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from "../@types/resources";

export const defaultNS = 'ns1';

const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
};

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        detection: DETECTION_OPTIONS,
        fallbackLng: 'en',
        supportedLngs: ['en', 'kr', 'jp'],
        debug: true,
        resources: resources,
        defaultNS,
        interpolation: {
            escapeValue: false, // react already safes from xss
        }
    });