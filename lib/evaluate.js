var hand;
var valuesArray = [];
var suitsArray = [];

function checkHand(hand){

     var resultString = "";
     for(var i = 0; i < hand.length; i ++){
          if(hand[i].rank=="A"){
            valuesArray[i] =0;
          }else if (hand[i].rank=="K") {
            valuesArray[i] =10;
          }else if(hand[i].rank=="Q"){
            valuesArray[i] =11;
          }else if (hand[i].rank=="J") {
            valuesArray[i] =12;
          }else{
            valuesArray[i] = hand[i].rank-1;
          }
        suitsArray[i] = hand[i].suit;
     }
     console.log(duplicateCards())
     switch(duplicateCards()){
          case "2":
               resultString = "1 Pair";
               break;
           case "22":
               resultString = "2 Pairs";
               break;
          /* case "222":
              resultString= "3 Pairs";
              break;
             case "2222":
                  resultString= "4 Pairs";
                  break;*/
          case "3":
               resultString = "3 of a Kind";
               break;
          case "23":
               resultString = "Full House";
           break;
          case "32":
               resultString = "Full House";
               break;
          case "4":
               resultString = "4 of a Kind";
               break;
          /*case "5":
               resultString = "5 of a Kind";
               break;*/
          default:
               if(isStraight()){
                    resultString = "Straight";
               }
               if(isAceStraight()){
                    resultString = "Ace Straight";
               }
               break;
     }
     if(isFlush()){
          if(resultString){
               resultString += " and Flush";
          }
          else{
               resultString = "Flush";
          }
     }
     if(!resultString){
          resultString = "nothing...";
     }
     this.hand.eval=resultString;
    return resultString;
}
function isFlush(){
  console.log(suitsArray[0]);
     for(var i = 0; i < 4; i ++){
          if(suitsArray[i] != suitsArray[i+1]){
            console.log(suitsArray[i+1]);
               return false;
          }
     }
     return true;
}

function isStraight(){
     var lowest = getLowest();
     for(var i = 1; i < 5; i++){
          if(occurrencesOf(lowest + i) != 1){
               return false
          }
     }
     return true;
}

function isAceStraight(){
     var lowest = 9;
     for(var i = 1; i < 4; i++){
          if(occurrencesOf(lowest + i) != 1){
               return false
          }
     }
     return occurrencesOf(0) == 1;
}

function getLowest(){
     var min = 12;
     for(var i = 0; i < valuesArray.length; i++){
          min = Math.min(min, valuesArray[i]);
     }
     return min;
}

function duplicateCards(){//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     var occurrencesFound = [];
     var result = "";
     for(var i = 0; i < valuesArray.length; i++){
          var occurrences = occurrencesOf(valuesArray[i]);
          if(occurrences > 1 && occurrencesFound.indexOf(valuesArray[i]) == -1){
               result += occurrences;
               occurrencesFound.push(valuesArray[i]);
          }
     }
     return result;
}

/*function occurrencesOf(n){
  var occur=0;
  for(var i=0;i<valuesArray.length;i++){
    if(valuesArray[i]==n){
      occur++;
    }
  }
  return occur;

}*/
function occurrencesOf(n){
     var count = 0;
     var index = 0;
     do{
          index = valuesArray.indexOf(n, index) + 1;
          if(index == 0){
               break;
          }
          else{
               count ++;
          }
     } while(index < valuesArray.length);
     return count;
}
