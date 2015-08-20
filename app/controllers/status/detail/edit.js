import Ember from 'ember';

export default Ember.Controller.extend({

  isLoading: false,
  buttonText: 'Save',
  actions: {
    saveData: function() {
      var self = this;

      this.model.save().then(function() { 
        self.set('isLoading', false); 
      });
    },

    updateDate: function(newDate, fieldName) {
      this.model.set(fieldName, newDate);
    }
  }
});
