import Ember from 'ember';

export default Ember.Controller.extend({

  datePickers: null,
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
    },
    registerElement: function(element) {
      if (this.datePickers === null) {
        this.datePickers = [];
      }
      this.datePickers.push(element);
    }
  },

  refreshDatePickers: function() {
    if (this.datePickers !== null) {
      for (var i = 0; i < this.datePickers.length; i++) {
        let newElement = this.datePickers[i];
        newElement.date = this.get('model').get(newElement.name);
        newElement.boltDatePickerOntoEmber();
      }      
    }
  }.observes('model')
});
