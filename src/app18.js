var app=angular.module('myApp',[]);

app.controller('MainController',function($scope){
               //this.data={name:'john', age:32};
               this.data=new Date;
               this.results=[];
                
               var isObject="Is Object? "+angular.isObject(this.data); 
               var isArray="Is Array? "+angular.isArray(this.data); 
               var isString="Is String? "+angular.isString(this.data); 
               var isNumber="Is Number? "+angular.isNumber(this.data); 
               var isDate="Is Date? "+angular.isDate(this.data); 
               var isElement="Is Element? "+angular.isElement(this.data); 
               var isDefined="Is Defined? "+angular.isDefined(this.data); 
               var isUndefined="Is Undefined? "+angular.isUndefined(this.data); 
               
               this.results.push(isObject, isArray, isString, isNumber, isDate, isElement, isDefined, isUndefined);   

                });