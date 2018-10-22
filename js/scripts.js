$(document).ready(function() {
  $(".userInput").submit(function(event){
    var sentence = $("input#userSentence").val();

    var words = sentence.split(' ');
    var test = [];

    words.forEach(function(word) {
      if (word.length >= 3) {
        test.push(word);
      }
    });

    var reverse = test.reverse().toString();
    $(".output").text(reverse);

    console.log(test);
    console.log(reverse);
    event.preventDefault();
  });
});
