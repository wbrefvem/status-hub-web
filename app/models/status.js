import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr('string'),
  endDate: DS.attr('string'),
  url: DS.attr('string')
});
