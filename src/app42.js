var app=angular.module('myApp',[]);

app.directive('tstVehicleView',function(){
               //camel method to name the directive and my-directive used in .html
                return {
                  scope:{
                    item:'=',
                    //= two way data binding exterior and interior
                  },
                  replace:true,
                  templateUrl:'index42-2.html',
                  restrict:'AE',
                  controller:function($scope){
                    $scope.messsage='';

                    $scope.saveItem=function(){
                      if(!$scope.message)
                      {
                        $scope.message="Item saved";
                      }else
                      {
                        $scope.message="Item saved again";
                      }
                    }
                  }
                }
              });

app.controller('MainController',function($scope)
     {
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

     }
  )
