var app=angular.module("myApp",[]);
app.controller("MainController",function(){
  this.users=[ {
              "Name":"John",
              "Account":"Checking",
              "Balance":1232.43,
              "Gender":"M"},
               
               {
              "Name":"Mary",
              "Account":"Checking",
              "Balance":1342.43,
              "Gender":"F",
               },            

               {
              "Name":"Barry",
              "Account":"Checking",
              "Balance":12432.43,
              "Gender":"M",
               },  

               {
              "Name":"Martha",
              "Account":"Checking",
              "Balance":3246.43,
              "Gender":"F",
               },  

               {
              "Name":"Tom",
              "Account":"saving",
              "Balance":32232.43,
              "Gender":"M",
               }];
})