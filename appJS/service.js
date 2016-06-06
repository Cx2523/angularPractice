angular.module('quoteApp').service('quoteSRVC', function(){
  var quoteSet = [];

  // this.getNewQuote = function(quote){
  //     return quote;
  // };

  this.addQuote = function(quote){
    console.log("Here is quoteSet in the Service before the push: ")
    console.log(quoteSet);

    quoteSet.push(quote);

    console.log("Here is quoteSet in the Service after the push: ")
    console.log(quoteSet);
  };
});
