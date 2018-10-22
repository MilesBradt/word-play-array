// Working array
var sentenceArray = [];

$(document).ready(function() {
  $(".userInput").submit(function(event){
    var sentence = $("input#userSentence").val();
    // Working array
    // sentenceArray.push(sentence);

    var words = sentence.split(' ');
    sentenceArray.push(words);
    console.log(sentenceArray);

    // $(".output").text($("input#userSentence").val());

    // Working array
    // console.log(sentenceArray);


    event.preventDefault();
  });
});
