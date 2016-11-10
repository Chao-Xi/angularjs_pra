var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
              
                 this.cars=[
                             {make:'Mazda',model:'Miata',year:2001},
                             {make:'Toyota',model:'Prius',year:2013},
                             {make:'Tesla',model:'S',year:2012},
                             {make:'BMW',model:'325i',year:2015},
                             {make:'Lexus',model:'IS 250',year:2012},
                             {make:'Subaru',model:'Outback',year:2009},
                            ]
               

                });