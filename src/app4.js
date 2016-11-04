"Use strict";

angular.module('myApp',[]);
   angular.module('myApp').controller('ParentController',['$scope',function($scope)
   {   
      //$scope.name="john smith";
      //model offer the two ways data binding
      $scope.model={
        name:'John smith'
      }
   }
]);

   angular.module('myApp').controller('ChildController',['$scope',function($scope)
   {   

   }
]);
	