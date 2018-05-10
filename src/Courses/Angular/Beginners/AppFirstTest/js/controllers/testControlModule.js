angular.module("TestModule", [])

.controller("TestCont",["$scope", "Calculations", function($scope, Calculations){
    $scope.lname = "Nunes";
    $scope.mValue = 3;
    $scope.expo = function() {
        $scope.mValue = Calculations.expo($scope.mValue);
    };

    $scope.Hithere = function() {
        Calculations.Hello();
    };
    Calculations.Done();
    $scope.hei = Calculations.Yo();
}])

.factory("Calculations", function() {
    var calculations = {};

    calculations.expo = function(a) {
        console.log(a);
        return a * a;
    };


    calculations.Hello = function() {
        return console.log("Hello");
    }

    calculations.Yo = function() {
        return console.log("Yep!");
    }

    calculations.Done = function() {
        return console.log("Sure!");
    }

    return calculations;
});