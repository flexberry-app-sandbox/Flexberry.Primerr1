import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-primerr-animal-l');
  this.route('i-i-s-primerr-animal-e',
  { path: 'i-i-s-primerr-animal-e/:id' });
  this.route('i-i-s-primerr-animal-e.new',
  { path: 'i-i-s-primerr-animal-e/new' });
  this.route('i-i-s-primerr-country-l');
  this.route('i-i-s-primerr-country-e',
  { path: 'i-i-s-primerr-country-e/:id' });
  this.route('i-i-s-primerr-country-e.new',
  { path: 'i-i-s-primerr-country-e/new' });
  this.route('i-i-s-primerr-forest-l');
  this.route('i-i-s-primerr-forest-e',
  { path: 'i-i-s-primerr-forest-e/:id' });
  this.route('i-i-s-primerr-forest-e.new',
  { path: 'i-i-s-primerr-forest-e/new' });
});

export default Router;
