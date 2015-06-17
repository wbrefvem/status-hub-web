import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  contact: DS.belongsTo('contact', { async: true }),
});
