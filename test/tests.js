QUnit.test("basic hand evaluation", function( assert ) {
  var HA=new Card("A", "Heart");
  var HK=new Card("K", "Heart");
  var HQ=new Card("Q", "Heart");
  var HJ=new Card("J", "Heart");
  var H10=new Card("10", "Heart"); //για κεντα χρωμα στον ασσο

  var C10=new Card("10", "Club");
  var SQ=new Card("Q", "Spade"); ///για κεντα στον ασσο


  var H9=new Card("9", "Heart");
  var H8=new Card("8", "Heart");
  var H7=new Card("7", "Heart");
  var H6=new Card("6", "Heart");//για κεντα χρωμα

  var D6=new Card("6", "Diamond");

  var D10 =new Card("10", "Diamond"); //για φουλ και three of a kind
  var S10 =new Card("10", "Spade");//για four of a kind
var Straight_flush=[H6,H7,H8,H9,H10];
var Straight_flush_MIX=[H7,H10,H8,H9,H6];
var Four_of_a_kind=[S10, D10, C10,H10];
var Full_house=[H10,D10,C10, H6, D6];
var Flush=[HA,HK,H9,H6,HQ];
var Straight=[H7,H8,H9,S10,D6];
var Three_of_a_kind=[S10, D10,H10, H9, H8]
var Two_pair=[H10, D10, H6, D6, H8];
var royal_straight=[HA,HK,SQ,HJ,D10];
var royal_flush=[HA,HK,HQ,HJ,H10];
var royal_flush_MIX=[HA,HQ,H10,HJ,HK];

    assert.equal(checkHand(Straight_flush), "Straight and Flush");
    assert.equal(checkHand(Straight_flush_MIX), "Straight and Flush");
    assert.equal(checkHand(Four_of_a_kind), "4 of a Kind");
    assert.equal(checkHand(Full_house), "Full House");
    assert.equal(checkHand(Flush), "Flush");
    assert.equal(checkHand(Straight), "Straight");
    assert.equal(checkHand(Three_of_a_kind), "3 of a Kind");
    assert.equal(checkHand(Two_pair), "2 Pairs");
    assert.equal(checkHand(royal_straight), "Ace Straight");
    assert.equal(checkHand(royal_flush), "Ace Straight and Flush");
    assert.equal(checkHand(royal_flush_MIX), "Ace Straight and Flush");



  });
