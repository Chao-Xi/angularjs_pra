var app=angular.module('myApp',[]);
app.factory('AppModel',function(){
    var model={};
    model.user={ name:'John Smith' };
    model.sayHello=function()
    {
    	alert('Hello from Angularjs factory');
    };

    return model;
});

app.service('AppModel',function(){
	this.user={name:'John Swift'};
	this.sayHello=function()
	{
		alert('Hello from angularjs service')
	}
});
//factory它是一个可注入的function，它和service的区别就是：factory是普通function=>model
//而service是一个构造器(constructor)，这样Angular在调用service时会用new关键字，而调用factory时只是调用普通的function，
//所以factory可以返回任何东西，而service可以不返回(可查阅new关键字的作用)

app.controller('MainController',['AppModel', function(AppModel){ this.model=AppModel }]);
app.controller('FirstController',['AppModel', function(AppModel){ this.model=AppModel;  this.user={name:'Kevin Xi'}; }]);
app.controller('SecondController',['AppModel', function(AppModel){ this.model=AppModel;  this.user={name:'Allan Wake'}; }]);