import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['status/detail'],

  isLoading: false,
  buttonText: 'Save',
  actions: {
    saveData: function() {
      var self = this;

      this.model.save().then(function() { 
        self.set('isLoading', false); 
      });
    }
  }
});
