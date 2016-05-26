function Deck() {
    this.contents = new Array(52);
    initialize(this.contents);
    this.select=select;
    this.shuffle=shuffle;
  };


function initialize(array){
  //array=[];
  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9",
                        "10", "J", "Q", "K");
  var suits = new Array("Club", "Diamond", "Heart", "Spade");
  var i, j, k;
i=0;
    for (j = 0; j < suits.length; j++){
      for (k = 0; k < ranks.length; k++){
      array[i] = new Card(ranks[k], suits[j], i);
      i++;
    }
  }
}

function select(num){
  var ret =_.sample(this.contents, num)
  this.contents=_.difference(this.contents, ret);
  console.log(this.contents.length);
  return  ret;
}

function shuffle(list){
  return _.shuffle(list);
}
