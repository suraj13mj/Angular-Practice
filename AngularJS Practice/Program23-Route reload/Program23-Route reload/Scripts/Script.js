/// <reference path="angular.js" />
/// <reference path="angular-route.js" />


var app = angular
    .module("myModule", ["ngRoute", "ngResource"])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.caseInsensitiveMatch = true;

        $routeProvider
            .when("/", {
                templateUrl: "Templates/Home.html",
                //controller: "homeController"
            })
            .when("/login", {
                templateUrl: "Templates/Login.html",
                //controller: "loginController"
            })
            .when("/employees", {
                templateUrl: "Templates/Employees.html",
                controller: "empController",
                controllerAs: "empCtrl"
            })
            .when("/dashboard", {
                templateUrl: "Templates/Dashboard.html",
                controller: "emp_controller",
            })
            .when("/registration", {
                templateUrl: "Templates/Registration.html",
                controller: "reg_controller"
            })
        $locationProvider.html5Mode(true);
    })

    .controller("reg_controller", function ($http, $log, $route, $scope) {
        $scope.closeAlert = $(document).ready(function () {
            //Close the bootstrap alert
            $('#linkClose').click(function () {
                $('#divError').hide('fade');
            });
        });

        $scope.registerEmp = function ($http, $scope) {
            //$(document).ready(function () {
            //    $('#btnRegister').click(function () {
            $('#successModel').modal('show');
            //    });
            //})
            //$http({
            //    url: "https://localhost:44313/api/register",
            //    method: 'POST',
            //    data: {
            //        email: emp.email,
            //        password: emp.password,
            //        confirmPassword: emp.confirmPassword
            //    }
            //}, $(document).ready(function () {
            //        $('#successModal').modal('show');
            //}),$(document).ready(function (jqXHR) {
            //        $('#divErrorText').text(jqXHR.responseText);
            //        $('#divError').show('fade');
            //}))
        }


    })


    .controller("empController", function ($http, $log, $route) {
        var vm = this;

        $http({
            url: "https://localhost:44313/api/employees",
            method: "GET",
        })
        .then(function (response) {
            vm.employees = response.data;
            $log.info(response);
        }, function (response) {
            $log.info(response);
        })

        vm.reloadEmployee = function () {
            $route.reload();
        }
    })


    .controller("emp_controller", function ($scope, $resource, $log) {
        $scope.emp = {};

        $scope.getEmployees = function () {
            var request = $resource("https://localhost:44313/api/employees");
            $scope.emps = request.query();
        }

        $scope.addEmployee = function () {
            var request = $resource("https://localhost:44313/api/employees");
            request.save($scope.emp,
                function (data) {        // success function 
                    $scope.error = "Successfully Added Employee [" + $scope.emp.Name + "]";
                    $scope.emp = {};
                    $scope.getEmployees();
                    $log.info(data);
                }
                ,
                function (data) {       // error function
                    $scope.error = "Sorry! Could not add  Employee [" + $scope.emp.Name + "]";
                    $log.info(data);
                }
            );
        };


        $scope.deleteEmployee = function (id) {
            var res = confirm("Do you really want to delete Employee [" + id + "]?");
            if (!res)
                return;

            var request = $resource("https://localhost:44313/api/employees");
            request.delete({ id: id },
                function (data) {        // success function 
                    $scope.error = "Successfully Deleted Employee [" + id + "]";
                    $scope.getEmployees(); // refresh
                }
                ,
                function (data) {       // error function
                    $scope.error = "Sorry! Could not delete contact [" + id + "]";
                }
            );
        };


        $scope.updateEmployee = function () {

            // create a custom action with name update
            var request = $resource("https://localhost:44313/api/employees/:ID",
                { ID: $scope.emp.ID },
                { update: { method: 'put' } }
            );
            // call custom action update to make PUT request 
            request.update($scope.emp,
                function (data) {        // success function 
                    $scope.error = "Successfully Updated Employee [" + $scope.emp.ID + "]";
                    $log.info(data);
                }
                ,
                function (data) {       // error function
                    $scope.error = "Sorry! Could not update Employee [" + $scope.emp.ID + "]";
                    $log.info(data);
                }
            );


        };


        $scope.editEmployee = function (ID) {
            for (var idx in $scope.emps) {
                if ($scope.emps[idx].ID == ID) {
                    $scope.emp = $scope.emps[idx];
                    return;
                }
            }
        };

        $scope.clear = function () {
            $scope.emp = {};
            $scope.error = "";
        }

        // call getContacts() on load to get contacts displayed initially
        $scope.getEmployees();



        $scope.sortColumn = 'ID';
        $scope.reverseSort = false;

        $scope.ColumnSort = function (column) {
            $scope.reverseSort = $scope.sortColumn == column ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        };

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? "arrow-down" : "arrow-up"
            }
            else {
                return ""
            }
        };
    })

    


/*
  $route.reload()

  1. Whenever we refresh i.e reload a page all the data and file i.e files related to web application are reloaded from the server
  2. This uses more internet data to reload all the files and data from the server

  3. Suppose if we add a Employee into the database, for this change to be reflected on the view we have reload entire web application
  4. This causes data wastage.
  5. Instead we can only reload that particular file of the web application using $route.reload() method.
  6. Here we have provided a button in Employees tab in order invoke $route.reload() so that only Employees.html is reloaded.

  This $route.reload() has to be defined in the controller whose path is to be reloaded.
*/
