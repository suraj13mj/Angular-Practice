/// <reference path="angular.js" />
/// <reference path="angular-route.js" />

var app = angular
    .module("myModule", ["ngRoute"])

    .config(function ($routeProvider, $locationProvider) {

        //$routeProvider.caseInsensitiveMatch = true;

        $routeProvider
            .when("/home", {
                templateUrl: "Templates/Home.html",
                controller: "homeController as homeCtrl",
                caseInsensitiveMatch: true
            })
            .when("/teams", {
                templateUrl: "Templates/Teams.html",
                controller: "teamsController",
                controllerAs: "teamsCtrl",                              //We can also use controllerAs property to set the alias name
                caseInsensitiveMatch: true
            })
            .when("/employees", {
                templateUrl: "Templates/Employees.html",
                controller: "employeesController",
                controllerAs: "empCtrl"
            })
            .when("/employees/:id", {
                templateUrl: "Templates/EmployeeDetails.html",
                controller: "employeeDetailsController as empDetailsCtrl"
            })
            .when("/inlinetemplate", {
                template: "<h1>Inline Template in action</h1> <br> <p> Hello World </p>"
            })
            .otherwise({
                redirectTo: "/home"
            })

        $locationProvider.html5Mode(true);
    })


    .controller("homeController", function () {
        this.message = "Controller As";
    })


    .controller("teamsController", function () {
        this.teams = ["Royal Challengers Bangalore", "Chennai Super Kings", "Mumbai Indians", "Kolkata Knight Riders",
            "Delhi Capitals", "Sunrisers Hyderabad", "Kings XI Punjab", "Rajasthan Royals"];
    })


    .controller("employeesController", function ($http, $log) {
        var vm = this;

        $http({
            url: "https://localhost:44347/api/employees",
            method: "GET"
        }).then(function (response) {
            vm.employees = response.data;
            $log.info(response);
        }, function (response) {
            vm.error = response.data;
            $log.info(response);
        })
    })
    /*
     
        1. Using 'this' keyword inside 'then' function doesn't work
        2. When data is fetched from api after Async operation, at that point 'this' doesn't refer to instance of Controller.
        3. Instead it points to window object.
        4. Because here the this keyword doesn't point to the instance 

        Thus we store that reference in a variable (vm i.e view_model) and use that to point to the controller
    */


    .controller("employeeDetailsController", function ($http, $log, $routeParams) {
        var vm = this;

        $http({
            url: "https://localhost:44347/api/employees",
            method: "GET",
            params: { id: $routeParams.id }
        }).then(function (response) {
            vm.employee = response.data;
            $log.info(response)
        }, function (response) {
            vm.error = response.data;
            $log.info(response);
        })
    })

    //Controller this keyword demo

    .controller("thisDemoController", function () {
        this.message = "Demo of this keyword";
    })



/*  caseInsensitiveMatch
 
    1. All the routes are bydefault case sensitive
    2. We can make routes case insensitive by setting the caseInsensitiveMatch property to true
    3. We can set this for each route or set it globally for all routes on $routeProvider

*/

/*  inline Template
 
    1. To use inline Templates we use 'template' property
    2. For templates in separate html file we use 'templateUrl' property
 
 */