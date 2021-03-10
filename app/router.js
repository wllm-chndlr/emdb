import EmberRouter from '@ember/routing/router';
import config from 'emdb/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('movies', { path: '/movies' });
  this.route('movie', { path: 'movies/:id' });
});
