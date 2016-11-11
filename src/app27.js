var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
               
                 this.fullName="john smith";
                 this.fullNameConfirm="";
                 this.message="";

                 this.doChange=function()
                 {
                   if(this.fullName===this.fullNameConfirm)
                   {
                        this.message="Thank you for your confirming your name";
                   } else
                   {
                       this.message=''; 
                   }    
                 }
             
                });