import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrimerrAnimalLForm from './forms/i-i-s-primerr-animal-l';
import IISPrimerrCountryLForm from './forms/i-i-s-primerr-country-l';
import IISPrimerrForestLForm from './forms/i-i-s-primerr-forest-l';
import IISPrimerrAnimalEForm from './forms/i-i-s-primerr-animal-e';
import IISPrimerrCountryEForm from './forms/i-i-s-primerr-country-e';
import IISPrimerrForestEForm from './forms/i-i-s-primerr-forest-e';
import IISPrimerrAnimalModel from './models/i-i-s-primerr-animal';
import IISPrimerrBurrowModel from './models/i-i-s-primerr-burrow';
import IISPrimerrCountryModel from './models/i-i-s-primerr-country';
import IISPrimerrForestModel from './models/i-i-s-primerr-forest';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-primerr-animal': IISPrimerrAnimalModel,
    'i-i-s-primerr-burrow': IISPrimerrBurrowModel,
    'i-i-s-primerr-country': IISPrimerrCountryModel,
    'i-i-s-primerr-forest': IISPrimerrForestModel
  },

  'application-name': 'Primerr',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Primerr',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Primerr',
          title: 'Primerr'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        primerr: {
          caption: 'Primerr',
          title: 'Primerr',
          'i-i-s-primerr-animal-l': {
            caption: 'Animal',
            title: ''
          },
          'i-i-s-primerr-forest-l': {
            caption: 'Forest',
            title: ''
          },
          'i-i-s-primerr-country-l': {
            caption: 'Country',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-primerr-animal-l': IISPrimerrAnimalLForm,
    'i-i-s-primerr-country-l': IISPrimerrCountryLForm,
    'i-i-s-primerr-forest-l': IISPrimerrForestLForm,
    'i-i-s-primerr-animal-e': IISPrimerrAnimalEForm,
    'i-i-s-primerr-country-e': IISPrimerrCountryEForm,
    'i-i-s-primerr-forest-e': IISPrimerrForestEForm
  },

});

export default translations;
