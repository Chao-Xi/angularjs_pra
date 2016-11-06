var app=angular.module("myApp",[]);
app.controller('MainController',function(){
  this.user={};

  this.submitForm=function(form)
  {
    if(form.$valid)
    {
     window.alert("Passed");
    }else
    {
      window.alert('Failed');
    } 	
  }
});
