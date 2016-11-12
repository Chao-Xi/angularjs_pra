var app=angular.module('myApp',[]);

app.directive('myDirective2',function(){
               //camel method to name the directive and my-directive used in .html
      return {
      	      scope:{
      	      	 generatorFunction:'&',
                 onSave:'&',
                 count:'=?'
      	      },
              templateUrl:'index39-2.html',
              restrict:'E',
              //A->attribute C->class E->element
 
              controller:function($scope)
              {
                if($scope.generatorFunction)
                {
                  $scope.items=$scope.generatorFunction({count:$scope.count});
                }

                $scope._onSave=function()
                {
                  if($scope.onSave)
                   {
                    $scope.onSave();
                   } 
                };
              }
            };
});

app.controller('MainController',function($scope){
                this.randomNumbers=function(count)
                {
                  var results=[];
                  count=count||10;
                  
                  for(var counter=0; counter<count; counter++)
                  {
                    var item=Math.round(Math.random()*1000)+1;
                    results.push(item);
                  } 
                   return results;
                };

                this.sequentialNumbers=function(count)
                {
                  var results=[];
                  count=count||10;
                  
                  for(var counter=0; counter<count; counter++)
                  {
                    results.push(counter);
                  } 
                   return results;
                }   
              
              this.saveFirst=function()
              {
                alert('The first item is saved');

              } 

              this.saveSecond=function()
              {
                alert('The second item is saved');
              } 
                });