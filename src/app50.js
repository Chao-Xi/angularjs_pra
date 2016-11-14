var app=angular.module('myApp',[]);

app.factory('$exceptionHandler',function(){
       return function(exception, cause)
       {
        alert("Oops, an error occured");
        console.log('Oops an error occured')
       }      
});

app.controller('MainController',function()
     {
        this.throwError=function()
        {
          throw new Error('This is a sample exception');
        }
     }
  )
