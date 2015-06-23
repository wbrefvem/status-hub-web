
export default function(){
/*  this.transition(
    this.fromRoute('status.index'),
    this.toRoute('status.detail.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
*/
  this.transition(
    this.fromRoute('detail.index'),
    this.toRoute('detail.edit'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
