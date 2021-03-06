import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  classNames: ['input-group', 'date'],

  didInsertElement: function() {
    var $element = $(this.get('element'));
    var self = this;

    $element.on('click', function() {
      $element.parents('.liquid-child').each(function() {
        $(this).css('overflow', 'visible');
      });
      $element.parents('.liquid-container').each(function() {
        $(this).css('overflow', 'visible');
      });      
    });

    $element.on('dp.change', function(e) {
      self.sendAction('action', e.date.format('MM/DD/YYYY h:mm A'), self.name);
    });

    $element.datetimepicker({
      widgetPositioning: {
        horizontal: 'auto',
        vertical: 'bottom'
      },
      defaultDate: this.date
    });
  }
});
