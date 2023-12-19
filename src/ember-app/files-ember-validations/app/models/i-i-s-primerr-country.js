import {
  defineNamespace,
  defineProjections,
  Model as CountryMixin
} from '../mixins/regenerated/models/i-i-s-primerr-country';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CountryMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
