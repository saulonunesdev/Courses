angular.module("RouterModule", [])

.controller("RouterController",["$scope", function($scope){
    $scope.fname = "Saulo";
    $scope.Person = {};
    $scope.Person.Fname = "Ana";
    $scope.Person.Lname = "Carolina";
    $scope.TestObject = {};
    $scope.TestObject.Title = "Main Page";
    $scope.TestObject.SubTitle = "Sub Title";
    $scope.TestObject.bindOutPut = 2;

    $scope.timesTwo = function () {
        $scope.TestObject.bindOutPut *= 2;
        console.log($scope.TestObject.bindOutPut);
    };
}])

.controller("ControllerTest",["$scope", function($scope){
    $scope.SecondPage = "Second Page Test";
}])

.directive("snWelcomeMessage", function() {
    return{
        restrict: "E",
        template: "<div>How Are You</div>"
    }
});