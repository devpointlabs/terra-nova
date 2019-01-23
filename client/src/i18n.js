import i18n from "i18next";
import { reactI18nextModule, } from 'react-i18next';
// import { room_type } from './components/Room.js'

import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';


const room_type = {
    name: 'FAMILY ROOM',
}


// the translations
const resources = {
    en: {
        translation: translationEN
    },
    zh: {
        translation: translationZH
    }
};

i18n
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        key: {room_type},

        keySeparator: false, 

        interpolation: {
            escapeValue: false
        }
    });

    export default (i18n);