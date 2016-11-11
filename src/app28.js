var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
                 this.standardBind="This is the standard data binding";
                 this.firstTemplateBinding="This is the first template binding";
                 this.secondTemplateBinding="This is the second template binding";
                 this.noBindable="This should not display becasue we used non-bindable";
                });