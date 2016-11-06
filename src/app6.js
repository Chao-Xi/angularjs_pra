"use strict"
var app=angular.module('myApp',[]);

app.controller('ParentController',function(){
    this.message="Hello from the ParentController";
});

app.controller('FirstChild',function(){
     this.message="Hello from the second first child";
 });

app.controller(' ',function($interval, $scope)
{
    this.message="Hello from the second child";
    this.value=1;

    $interval(function(){
       this.value=Math.round(Math.random()*10000)+1;
     }.bind(this),2000);
    
    $scope.$watch('second.value',function(newValue, oldValue)
     {
        console.log('New:',newValue,' Old',oldValue);
     }); 

 }); 