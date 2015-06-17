import DS from 'ember-data';

export default DS.Model.extend({
  department: DS.belongsTo('department', { async: true }),
  date: DS.attr('date'),
  message: DS.attr('string'),
  state: DS.attr('string')
});
