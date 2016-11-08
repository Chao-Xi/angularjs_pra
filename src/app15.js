var app=angular.module('myApp',[]);
app.config(function($interpolateProvider)
{
  $interpolateProvider.startSymbol('(~'); 
  $interpolateProvider.endSymbol('~)'); 
});

app.controller('MainController',function(){
                this.helloMessage="Hello from Angularjs";      
                });