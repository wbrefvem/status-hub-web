
export default function(){
  this.transition(
    this.fromRoute('status.detail.index'),
    this.toRoute('status.detail.edit'),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
