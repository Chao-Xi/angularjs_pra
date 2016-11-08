var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
                 
                  var vm=this;

                   vm.specialName="David Jones";
                   vm.message='';
                   vm.name="John Smith"       

                   $scope.$watch('main.name',function(newValue, oldValue)
                   {
                   	console.log('newValue:', newValue, ',oldValue', oldValue);

                    if(newValue==vm.specialName)
                    {
                      vm.message="Hello, we\'ve been waaiting for you.";
                    }	
                     else
                   {
                   	vm.message='';
                   }
                  });
                   
                });