var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
                
                var vm=this;

                vm.clickCount=0;

                vm.updateClickCount=function(amount)
                {
                   vm.clickCount+=amount; 
                }
            
                });