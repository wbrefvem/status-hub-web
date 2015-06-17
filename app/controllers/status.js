import Ember from "ember";


export default Ember.ObjectController.extend({
  save: function() {
    console.log('Firing save...');
    this.model.save();
    return true;
  }
});
