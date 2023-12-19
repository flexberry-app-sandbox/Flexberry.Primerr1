import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  coordinates: DS.attr('string'),
  name: DS.attr('string'),
  country: DS.belongsTo('i-i-s-primerr-country', { inverse: null, async: false })
});

export let ValidationRules = {
  coordinates: {
    descriptionKey: 'models.i-i-s-primerr-forest.validations.coordinates.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-primerr-forest.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  country: {
    descriptionKey: 'models.i-i-s-primerr-forest.validations.country.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ForestE', 'i-i-s-primerr-forest', {
    name: attr('Name', { index: 0 }),
    coordinates: attr('Coor', { index: 1 })
  });

  modelClass.defineProjection('ForestL', 'i-i-s-primerr-forest', {
    name: attr('Name', { index: 0 }),
    coordinates: attr('Coordinates', { index: 1 })
  });
};
