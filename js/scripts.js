// Working array
// var sentenceArray = [];


$(document).ready(function() {
  $(".userInput").submit(function(event){
    var sentence = $("input#userSentence").val();
    // Working array
    // sentenceArray.push(sentence);

    // Array we want to change
    var words = sentence.split(' ');
    var test = [];

    words.forEach(function(word) {
      if (word.length > 4) {
        test.push(word);
      }
    });

    // // Array we loop through
    // var cloneWords = words.slice();


    // var threeChar = words.map(function(word){
    //   return word.length > 4;
    // });




    console.log(test);

    // $(".output").text($("input#userSentence").val());

    // Working array
    // console.log(sentenceArray);


    event.preventDefault();
  });
});
