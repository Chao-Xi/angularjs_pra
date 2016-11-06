var app=angular.module("myApp",[]);
app.controller('MainController',function(){
    this.fruitList=['banana','papaya','pear','grape'];
    this.user={
                name:"John Smith",
                favoriteFruit:'Watermelon',
                isActive:true
              }
});

app.filter('yesorno',function(){
    return function(value)
    {
      if(value==true)
       {
        return "yes";
       }else if(value==false)
       {
        return "no";
       }else{
        return "unknown";
       }
    }   

})