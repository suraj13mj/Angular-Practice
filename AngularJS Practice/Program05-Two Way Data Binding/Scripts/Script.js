/// <reference path="angular.js" />             

var app = angular
                .module("module",[])
                .controller("name_controller", function($scope){
                    $scope.name = "Suraj M Janmane";
                })
                .controller("employee_controller",function($scope){
                    var employee = {
                        firstName : "Ramesh",
                        lastName : "Raikar",
                        department : "Development"
                    };
                    $scope.employee = employee;
                });