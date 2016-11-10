var app=angular.module('myApp',[]);

app.run(function($rootScope){
                
              $rootScope.userModel={
               	name:'John Smith',
               	age:33
               };
               
               $rootScope.sayHello=function()
               {
               	return "Hello from angularjs root scope";
               }

                });

app.controller('MainController',function($scope){
                
               $scope.userModel={
               	name:'Kevin Xi',
               	age:26
               };
               
               $scope.sayHello=function()
               {
               	return "Hello from angularjs child scope";
               }
    
                });