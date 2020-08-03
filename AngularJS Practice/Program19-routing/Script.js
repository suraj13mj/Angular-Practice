
var app = angular
                .module("myModule", ["ngRoute"])                    //routing functionality are present in ngRoute module
                .config(function ($routeProvider){
                    $routeProvider
                        .when("/", {
                            templateUrl : "Templates/Home.html"
                        })
                        .when("/home", {
                            templateUrl : "Templates/Home.html",
                            controller : "homeController"
                        })
                        .when("/teams", {
                            templateUrl : "Templates/Teams.html",
                            controller : "teamsController"
                        })
                        .when("/employees", {
                            templateUrl : "Templates/Employees.html",
                            controller : "employeesController"
                        })
                        .otherwise({
                            templateUrl : "Templates/Home.html"
                        })
                })
                .controller("homeController", function($scope){
                    $scope.message = "Indian Premier League";
                })
                .controller("teamsController", function($scope){
                    $scope.teams = ["Royal Challengers Bangalore", "Chennai Super Kings", "Mumbai Indians", "Kolkata Knight Riders",
                                    "Delhi Capitals", "Sunrisers Hyderabad", "Kings XI Punjab", "Rajasthan Royals"]
                })
                .controller("employeesController", function($scope, $http){
                    $http.get("https://localhost:44347/api/employees")
                         .then(function(response){
                             $scope.Employee = response.data;
                         })
                })