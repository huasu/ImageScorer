"use strict"; 

var myApp = angular.module('thisApp',[
//'ngMaterial'
'ui.bootstrap'

  // 'thisApp.service'
]);

myApp.controller('appCtrl', ['$scope', function($scope){
  $scope.message = 'This message is from your controller';
 

  $scope.makeNumbers = function(){    
    for (var i = 0; i < $scope.numItems; i++){     
      $scope.dataset[i] = {num: i+1, category: $scope.projectsList[Math.floor(Math.random()*5)]};    
    }  
  };
  $scope.makeNumbers();

  $scope.typeahead_values = ['The', 'quick', 'brown', 'fox','jumped', 'over', 'the', 'lazy', 'dog'];
  
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
}]);

