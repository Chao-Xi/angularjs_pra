var app=angular.module('myApp',[]);
app.controller('MainController',function($scope)
     {
        this.names=['knicks','nets','jets','mets','yankee','ranger'];

        this.getType=function(value)
        {
            return typeof(value);
        }
       }
  )
