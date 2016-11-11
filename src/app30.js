var app=angular.module('myApp',[]);

app.controller('MainController',function(){
                
                this.enableStyle=function ()
                {
                	this.style1={
                		color:'red',
                		fontSize:'20px'
                	}

                	this.style2={
                		color:'blue',
                		fontSize:'10px'
                	}
                }
               

               this.disableStyle=function ()
               {
               	this.style1=null;
               	this.style2=null;
               }
                });