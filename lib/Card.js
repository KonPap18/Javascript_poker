function Card(rank, suit, id) {
    if(id>-1){
      this.id=id;
    }else{
      this.id=-1;
    }
    this.suit = suit;
    this.rank = rank;

}
Card.prototype.toString=function(){
  return this.rank+this.suit;
};
Card.prototype.getRank=function(){
  return this.rank;
};
