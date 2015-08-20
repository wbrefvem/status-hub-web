import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  statuses: DS.hasMany('destination', { async: true })
});
