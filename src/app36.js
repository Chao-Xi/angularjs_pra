var app=angular.module('myApp',[]);

app.directive('myDirective',function(){
               //camel method to name the directive and my-directive used in .html
      return {
              template:'Hello, from angularjs',
              restrict:'ACE'
              //A->attribute C->class E->element
            }
});

app.controller('MainController',function(){
                
           
                });