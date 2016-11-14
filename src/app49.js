var app=angular.module('myApp',[]);
app.controller('MainController',function($timeout)
     {
        var vm=this;
        var timeoutPromise=null;
        vm.delay=2000;

        vm.startTimeout=function()
        {
            vm.message='';
            vm.cancelTimeout();
            vm.message+="Staring the time out.....";

            timeoutPromise=$timeout(function(data){
               vm.message='Timeout Complete';
               timeoutPromise=null; 
            },vm.delay,true,{data:'testing123'}); 
        }

        vm.cancelTimeout=function()
        {
           if(timeoutPromise)
           {
            $timeout.cancel(timeoutPromise);
            timeoutPromise=null;
            vm.message="Previous timeout was cancelled";
           }

        }
     }
  )
