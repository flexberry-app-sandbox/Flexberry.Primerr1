import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Primerr',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Primerr',
          title: 'Primerr'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
