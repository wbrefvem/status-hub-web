import Ember from "ember";

export default Ember.Controller.extend({
  formattedStartDate: Ember.computed('model.startDate', {
    get: function() {
      var startDate = this.model.get('startDate');
      var newDate = moment(startDate).calendar();
      return newDate;       
    },
/*    set: function(key, value) {
      var datePart = value;
      var timePart = 
    }*/
  }),
    
  startTime: function() {
    var startTime = moment(this.model.get('startDate'));
    return startTime.format('hh:mm:ss');
  }.property('model.startDate'),

  formattedEndDate: function() {
    var endDate = this.model.get('endDate');
    var newDate = moment(endDate).calendar();
    return newDate;      
  }.property('model.endDate'),

  endTime: function() {
    var endTime = moment(this.model.get('endDate'));
    return endTime.format('hh:mm:ss');
  }.property('model.endDate')
});