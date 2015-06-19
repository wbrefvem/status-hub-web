import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    detail: function(status) {
      this.transitionToRoute('status.detail', status);
    }
  }
});
