"Use strict";

angular.module('myApp',[]);
angular.module('myApp').controller('MainController',['$scope','$interval',function($scope,$interval)
     {   
        $scope.randomValue=-999;

        $interval(function(){
           $scope.randomValue=Math.round(Math.random()*100000);
        },2000);

        $scope.names=['Alex','Billy','Dave'];

        $scope.qty=20;
        $scope.cost=1.99;

        $scope.pWidth=100;
        
     }
	]);