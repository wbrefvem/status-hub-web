import Ember from 'ember';

export default Ember.Component.extend({
  value: null,
  name: null,
  change: function(event) {
    this.sendAction('action', event.target.value);
  }
});
