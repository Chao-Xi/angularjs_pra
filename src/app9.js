var app=angular.module("myApp",[]);
app.controller("MainController",function(){
	this.users={
         firstname:"John",
         lastName:'Smith',
         accountType:{
         	accountId:343434343434,
         	name:'checking'
                      },
    balance:1345.8,      
    gender:"M",
    hobbies:['snowboardding','biking','fishing']
	}
});	
