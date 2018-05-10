var app = angular.module("MyApp", ["ngRoute","RouterModule"]);

app.config(function($routeProvider){
    $routeProvider

        .when("/",{
            templateUrl: "views/first.html",
            controller: "RouterController"
        })
        .when("/second",{
            templateUrl: "views/second.html",
            controller: "ControllerTest"
        })
        .otherwise({
            redirectTo: "/"
        })
})