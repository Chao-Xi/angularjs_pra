var app=angular.module("AddName",[]);
app.controller('GreetCtrl',function($scope){
    $scope.name="Taylor";
    console.log($scope.name);
});

app.controller('ListCtrl',function($scope){
    $scope.names=['Alex','Billy','Cara','Dan'];
    console.log($scope.names);
})