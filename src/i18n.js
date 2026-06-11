import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import locales
import vi from './locales/vi.json';
import en from './locales/en.json';

const resources = {
  vi: { translation: vi },
  en: { translation: en },
};

export const languageNames = {
  vi: 'Tiếng Việt',
  en: 'English',
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
