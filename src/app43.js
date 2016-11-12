var app=angular.module('myApp',[]);

app.directive('tstUserView',function(){
               return {
                scope:{
                        item:'='
                      },
                templateUrl:'index43-2.html',
                restrict:'AE' ,
                transclude:true      
                   }
              });

app.controller('MainController',function($scope)
     {
         this.user={
           firstName:'Kevin',
           lastName:'Smith'
         }  
        this.helloMessage="Hello, from angular.js"; 
     }
  )
