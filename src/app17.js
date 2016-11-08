var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
                 var vm=this;

                 var cities=['Boston','LA','NYC','SF','Las Vegas'];
                 var names=['Alex','Billy','Cassey','Dave','Ellen']

                 vm.comefrom=[];

                 angular.forEach(names,function(name)
                {
                  var randomCity=cities[Math.floor(Math.random()*cities.length)];
                  var sentence=name+' comes from '+randomCity; 
                  vm.comefrom.push(sentence);
                }
                  )
                   
                });