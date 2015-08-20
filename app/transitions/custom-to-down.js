
export default function() {
  var self = this;

  return this.lookup('to-down').apply(this).then(function() {
    self.newElement.parent().css('overflow', 'visible');
    self.newElement.css('overflow', 'visible');
  });
}