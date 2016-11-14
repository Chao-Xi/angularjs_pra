var app=angular.module('myApp',[]);

app.directive('tstRollover',function(){
               return {
                scope:{
                        label:'@'
                      },
                templateUrl:'index45-2.html',
                replace:true,
                link:function(scope,element,attrs)
                {
                  var oringinalColor=element.css('background-color');
                  element.bind('mouseover',function()
                  {
                    element.css('background-color',attrs.activeColor);
                  });

                  element.bind('mouseout',function(){
                    element.css('background-color',oringinalColor)});
                }
              }
              });
   

app.controller('MainController',function($scope)
     {
       }
  )
