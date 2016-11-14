var app=angular.module('myApp',[]);
app.controller('MainController',function($location, $anchorScroll)
     {
        this.jumpToTop=function()
        {
        	$location.hash('topLink');
        	$anchorScroll();
        } 

         this.jumpToBottom=function()
        {
        	$location.hash('bottomLink');
        	$anchorScroll();
        } 
     }
  )
