/// <reference path="angular-route.js" />
/// <reference path="angular.js" />

var app = angular
    .module("myModule", ["ngRoute"])                            //routing functionality are present in ngRoute module
    .config(function ($routeProvider ,$locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/Home.html",
                controller: "homeController"
            })
            .when("/teams", {
                templateUrl: "Templates/Teams.html",
                controller: "teamsController"
            })
            .when("/employees", {
                templateUrl: "Templates/Employees.html",
                controller: "employeesController"
            })
            .when("/employees/:id", {
                templateUrl: "Templates/EmployeeDetails.html",
                controller: "employeeDetailsController"
            })
            .otherwise({
                redirectTo : "/home"
            })

        $locationProvider.html5Mode(true);               //We use $locationProvider to enable html5 mode
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Indian Premier League";
    })
    .controller("teamsController", function ($scope) {
        $scope.teams = ["Royal Challengers Bangalore", "Chennai Super Kings", "Mumbai Indians", "Kolkata Knight Riders",
            "Delhi Capitals", "Sunrisers Hyderabad", "Kings XI Punjab", "Rajasthan Royals"]
    })
    .controller("employeesController", function ($scope, $http) {
        $http.get("https://localhost:44347/api/employees")
            .then(function (response) {
                $scope.Employee = response.data;
            })
    })
    .controller("employeeDetailsController", function ($scope, $http, $log, $routeParams) {
        $http({
            url: "https://localhost:44347/api/employees",
            params: { id: $routeParams.id },
            method: "GET"
        }).then(function (response) {
            $scope.employee = response.data;
            $log.info(response);
        }, function (response) {
                $log.info(response);
        })
    });



/*
  In order to remove #! from the url we have to enable html5 mode

  1. We have to inject $locationProvider in config method of angular & set $locationProvider.html5Mode(true)
  2. Remove all #! from all the href
  3. Include a URL rewrite rule in web.config so that all request are redirected to index.html
  4. Include a base href to the location of our single page application i.e index.html
     <base href="/" />
*/


/*
 
 -> Here we encounter reload problem when we refresh EmployeeDetails.html becoz there is problem loading Style.css, other pages work fine
 -> In order to resolve this we need to place <base href="/" /> at the top in head section.
 -> This resolves the loading of Style.css of EmployeeDetails.html

*/
