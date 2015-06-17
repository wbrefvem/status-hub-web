import Ember from 'ember';

export default Ember.Route.extend({
/*  beforeModel: function() {
    this.store.find('contact');
    this.store.find('department');
  },*/
  model: function() {
    return this.store.find('status');
  }
});
