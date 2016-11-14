var app=angular.module('myApp',[]);
app.controller('MainController',function($scope)
     {
        $scope.showUser=false;
        $scope.user={
             name:'John Smith',
             age:35,
             isActive:true
        };

        $scope.hobbies='snowboarding, biking, cooking'
       }
  )
