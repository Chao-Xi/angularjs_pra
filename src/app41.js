var app=angular.module('myApp',[]);

app.directive('tstHotArea',function(){
               //camel method to name the directive and my-directive used in .html
                  return function(scope,element,attrs)
                  {
                    element.bind('mouseover',function()
                     {
                         element.addClass('area-on');
                     });

                      element.bind('mouseout',function()
                     {
                         element.removeClass('area-on');
                     });
                  }
              });

app.controller('MainController',function()
     {
        


     }
  )
