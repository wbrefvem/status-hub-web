
export default function(){
  
  this.transition(
    this.fromRoute('status.detail.index'),
    this.toRoute('status.detail.edit'),
    this.use('custom-to-down'),
    this.reverse('custom-to-up')
  );
  this.transition(
    this.fromRoute('status.index'),
    this.toRoute('status.detail'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
