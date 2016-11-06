"use strict"
var app=angular.module('myApp',[]);
app.service('SharedService',function(){
	return {name: 'Billy Joe'};
})

app.controller('FirstController',function($scope,SharedService){
     $scope.model=SharedService;
});

app.controller('SecondController',function($scope,SharedService){
     $scope.model=SharedService;
});