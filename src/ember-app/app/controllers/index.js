import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.primerr.caption'),
          title: i18n.t('forms.application.sitemap.primerr.title'),
          children: [{
            link: 'i-i-s-primerr-animal-l',
            caption: i18n.t('forms.application.sitemap.primerr.i-i-s-primerr-animal-l.caption'),
            title: i18n.t('forms.application.sitemap.primerr.i-i-s-primerr-animal-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-primerr-forest-l',
            caption: i18n.t('forms.application.sitemap.primerr.i-i-s-primerr-forest-l.caption'),
            title: i18n.t('forms.application.sitemap.primerr.i-i-s-primerr-forest-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-primerr-country-l',
            caption: i18n.t('forms.application.sitemap.primerr.i-i-s-primerr-country-l.caption'),
            title: i18n.t('forms.application.sitemap.primerr.i-i-s-primerr-country-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})