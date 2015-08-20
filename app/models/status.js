import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr('isoDate'),
  endDate: DS.attr('isoDate'),
  destinations: DS.hasMany('destination', { async: true })
});
