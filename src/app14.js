var app=angular.module('myApp',[]);
app.controller('MainController',function(){
       
                this.items=[
                              {name:'Banana',type:'fruits'},  
                              {name:'Cherries',type:'fruits'}, 
                              {name:'Oranges',type:'fruits'},    
                              {name:'Chicken',type:'meats'},  
                              {name:'Pork',type:'meats'}, 
                              {name:'Watermelon',type:'fruits'}, 
                              {name:'Breed',type:'grains'},  
                              {name:'Milk',type:'diary'}, 
                              {name:'Yoguart',type:'diary'}, 
                              
                           ]; 

                      this.selectedType="";     
                });