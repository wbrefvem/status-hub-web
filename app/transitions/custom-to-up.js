
export default function() {
  this.newElement.parent().css('overflow', 'hidden');
  this.newElement.css('overflow', 'hidden');
  return this.lookup('to-up').apply(this);
}
