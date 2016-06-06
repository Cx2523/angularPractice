angular.module('quoteApp').controller('quoteCNTRL',function($scope,quoteSRVC){

  $scope.getNewQuote = function(){
    //console.log("you just called the controller function");
    var quote = $scope.quote;
    quoteSRVC.addQuote(quote);
  }
});
