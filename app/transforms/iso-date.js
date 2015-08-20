import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(value) {
    var date = moment(value);
    return date.format('MM/DD/YYYY h:mm A');
  },
  serialize: function(value) {
    var date = moment(value, 'MM/DD/YYYY h:mm A');

    return date.toISOString();
  }
});
