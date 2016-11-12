var app=angular.module('myApp',[]);

app.directive('myDirective2',function(){
               //camel method to name the directive and my-directive used in .html
      return {
      	      scope:{
      	      	item:"="
      	      },
              templateUrl:'index37-2.html',
              restrict:'AE'
              //A->attribute C->class E->element
            }
});

app.controller('MainController',function($scope){
                
                
                  $scope.firstItem= {
                   year:2012,
                   make:'Telsa',
                   model:'3',
                   price:48995
                }

                  $scope.secondItem= {
                   year:2015,
                   make:'Lexus',
                   model:'IS 250',
                   price:36970
                }
                });