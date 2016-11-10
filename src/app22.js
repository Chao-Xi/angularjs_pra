var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
                
                var vm=this;

                vm.showFirstItem=true;
                vm.showSecondItem=false;
                vm.hideThirdItem=true;

                vm.isSecondItemShowing=function()
                {
                	return vm.showSecondItem;
                }
            
                });