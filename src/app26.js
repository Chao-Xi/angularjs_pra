var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
               
                 this.mouseOverCount=0; 
                 this.mouseMoveCount=0;
                 this.mouseX=0;
                 this.mouseY=0;

                 this.doMouseOver=function(event)
                 {
                 	console.log(event);
                 	this.mouseOverCount++;
                 }; 

                 this.doMouseMove=function(event)
                 {
                 	 console.log(event);
                 	 this.mouseMoveCount++;
                         this.mouseX=event.offsetX;
                         this.mouseY=event.offsetY;
                 }
             
                });