$(document).ready(function() {
  $(".userInput").submit(function(event){
    var sentence = $("input#userSentence").val();

    var words = sentence.split(' ');
    var test = [];

    // forEach
    // words.forEach(function(word) {
    //   if (word.length >= 3) {
    //     test.push(word);
    //   }
    // });


    // Filter
    const filterWords = words.filter(word => word.length >= 3);

    var reverseFilter = filterWords.reverse();
    var countedRFilter = reverseFilter.reduce(function(allWords, reverse) {
      if (reverse in allWords) {
        allWords[reverse]++;
      }
      else {
        allWords[reverse] = 1;
      }
      return allWords;
    }, {});


    console.log(countedRFilter);
    $(".output").text(reverseFilter.join(' '));

    // $(".output").text(list);
    // var reverse = test.reverse();
    //
    // $(".output").text(reverse.join(' '));
    //
    // console.log(test);
    // console.log(reverse);
    event.preventDefault();
  });
});
