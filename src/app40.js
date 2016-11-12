var app=angular.module('myApp',[]);

app.directive('myDirective3',function(){
               //camel method to name the directive and my-directive used in .html
      return {
      	      scope:{
      	      	  year:'@',
                  make:'@',
                  model:'@',
                  info:'@'
      	      },
              templateUrl:'index40-2.html',
              restrict:'AE',
              //A->attribute C->class E->element
              controller:function($scope)
              {
                console.log('typeof(year): ',typeof($scope.year));
                console.log('typeof(make): ',typeof($scope.make));
                console.log('typeof(model): ',typeof($scope.model));
                console.log('typeof(info): ',typeof($scope.info));

              }
              };
});

app.controller('MainController',function()
     {
        this.firstItemInfo={
                 horsePower:255,
                 gasoline:'unleaded',
                 doors:4,
                 price:19999 
        }
        
         this.secondItemInfo={
                 horsePower:255,
                 gasoline:'unleaded',
                 doors:4,
                 price:24349 
        }


     }
  )
