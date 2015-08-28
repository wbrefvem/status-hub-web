import Ember from 'ember';


export default Ember.Controller.extend({
  destinationChoices: function() {
    return this.store.findAll('destination');
  }.property(),
  destinations: null,
  actions: {
    createStatus: function() {
      var title = this.get('title');
      var description = this.get('description');
      var startDate = this.get('startDate');
      var endDate = this.get('endDate');
      var destinations = this.get('destinations');
      var newStatus = this.store.createRecord('status', {
        title: title,
        description: description,
        startDate: startDate,
        endDate: endDate,
        destinations: destinations
      });
      newStatus.save();
    },
    updateDate: function(newDate, fieldName) {
      this.set(fieldName, newDate);
    },
    triggerSelection: function(selection) {
      var destinations = this.get('destinations');
      if (destinations == null) {
        destinations = [];
      }
      destinations.push(this.store.find('destination', selection));
      this.set('destinations', destinations);
    }
  }
});
