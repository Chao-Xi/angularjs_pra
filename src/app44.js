var app=angular.module('myApp',[]);

app.directive('tstSchoolView',function(){
               return {
                scope:{
                        item:'='
                      },
                templateUrl:'index44-2.html',
                restrict:'E' ,
                controller:function($scope)
                {
                  $scope.courses=[];

                  this.addCourse=function(courseName)
                  {
                    $scope.courses.push(courseName);
                    console.log(courseName+ ' add to curriculum')
                  }
                }
               
                   }
              });
   
   app.directive('tstCourseBiology',function(){
   
           return {
               restrict:'A',
               require:'tstSchoolView',
               link:function (scope,elem, attrs,schoolController)
               {
                console.log('Biology course created');
                schoolController.addCourse('Biology');
               }
              } 
     });

    app.directive('tstCoursePhysics',function(){
   
           return {
               restrict:'A',
               require:'tstSchoolView',
               link:function (scope,elem, attrs,schoolController)
               {
                console.log('physics course created');
                schoolController.addCourse('Physics');
               }
              } 
     });

  app.directive('tstCourseChemistry',function(){
   
           return {
               restrict:'A',
               require:'tstSchoolView',
               link:function (scope,elem, attrs,schoolController)
               {
                console.log('chemistry course created');
                schoolController.addCourse('Chemistry');
               }
              } 
     });
 
app.controller('MainController',function($scope)
     {
       }
  )
