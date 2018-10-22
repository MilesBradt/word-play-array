var suits = ["clubs", "diamonds", "hearts", "spades"];
var cardNumber = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

$(document).ready(function() {
  $(".userInput").submit(function(event) {

    suits.forEach(function(suit) {
      cardNumber.forEach(function(card) {
        $(".output").append("<li>" + card + " " + suit + "</li>");
      });
    });

    event.preventDefault();
  });
});
