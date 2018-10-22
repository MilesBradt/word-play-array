var suits = ["clubs", "diamonds", "hearts", "spades"];
var cardNumber = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

$(document).ready(function() {
  $(".userInput").submit(function(event) {

    suits.forEach(function(suit) {
      cardNumber.forEach(function(card) {
        $(".outputForEach").append("<li>" + card + " " + suit + "</li>");
      });
    });

    for (var i = 0; i < cardNumber.length; i += 1) {
      for (var s = 0; s < suits.length; s += 1) {
      $(".outputFor").append("<li>" + " " + cardNumber[i] + " " + suits[s] + "</li>")
      }
    }

    $(".outputFor").fadeIn();
    $(".outputForEach").fadeIn();

    event.preventDefault();
  });
});
