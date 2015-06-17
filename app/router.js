import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('status', function() {
    this.route('list');
    this.route('detail', { path: ':status_id' }, function() {
      this.route('edit');
      this.route('delete');
    });
  });
  this.route('contact', function() {
    this.route('list');
    this.route('detail', { path: ':contact_id' }, function() {
      this.route('edit');
      this.route('detail');
    });
  });
  this.route('department', function() {
    this.route('list');
    this.route('detail', { path: ':department_id' }, function() {
      this.route('edit');
      this.route('detail');
    });
  });
});

export default Router;
