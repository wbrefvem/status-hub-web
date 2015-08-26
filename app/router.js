import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.resource('status', function() {
    this.route('detail', { path: ':status_id' }, function() {
      this.route('edit');
      this.route('delete');
    });
  });
  this.route('application_loading');
});

export default Router;
