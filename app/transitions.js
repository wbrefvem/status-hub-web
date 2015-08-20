
export default function(){
  this.transition(
    this.fromRoute('status.detail.index'),
    this.toRoute('status.detail.edit'),
    this.use('custom-to-down'),
    this.reverse('custom-to-up')
  );
}
