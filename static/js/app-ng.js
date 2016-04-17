"use strict"; 

angular.module('thisApp',[

  // 'thisApp.service'
])
.controller('appCtrl', ['$scope', function($scope){
  $scope.message = 'This message is from your controller';
 

  $scope.makeNumbers = function(){    
    for (var i = 0; i < $scope.numItems; i++){     
      $scope.dataset[i] = {num: i+1, category: $scope.projectsList[Math.floor(Math.random()*5)]};    
    }  
  };
  $scope.makeNumbers();

}])


