var app=angular.module('myApp',[]);
app.directive('tstThermometer',function(){
    return {
        scope: {temperature:"@"},
        templateUrl:'index53-2.html',
        link:function(scope,element,attrs)
        {
           attrs.$observe('temperature',function(newValue)
           {
             var temp=attrs.temperature;
             if(temp<45)
             {
               element.addClass('freezing');
               element.removeClass('normal');
               element.removeClass('hot');
             }else if(temp>=45 && temp<=85)
             { 
               element.removeClass('freezing');
               element.addClass('normal');
               element.removeClass('hot');
             }else
             {
               element.removeClass('freezing');
               element.removeClass('normal');
               element.addClass('hot');
             }
           }); 
        }
    }
});


app.controller('MainController', function(){ 
    this.currentTemperature=78; 
   });
