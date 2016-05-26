


 var s=new Deck();
var handNum=5;
 console.log(s);
 console.log(s.contents);
  var tempList=s.select(handNum);
  var tempList_2=s.select(handNum);
  console.log(getWinner(tempList, tempList_2));

//  console.log("===================");
function getWinner(hand_A, hand_B){
  var handRankMap = {};
      handRankMap["Ace Straight and Flush"] = 10;
      handRankMap["Ace Straight"] = 9;
      handRankMap["Straight"] = 8;
      handRankMap["Flush"] = 7;
      handRankMap["4 of a Kind"] = 6;
      handRankMap["Full House"] = 5;
      handRankMap["3 of a Kind"] = 4;
      handRankMap["2 Pairs"] = 3;
      handRankMap["1 Pair"] = 2;
      console.log(hand_A.eval);

}
