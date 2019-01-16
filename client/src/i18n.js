import i18n from "i18next";
import { reactI18nextModule } from 'react-i18next';

import translationEN from './locales/en/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    }
};

i18n
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, 

        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;