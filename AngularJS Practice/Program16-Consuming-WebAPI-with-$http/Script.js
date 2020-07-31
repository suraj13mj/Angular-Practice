/// <reference path="node_modules/angular/angular.js"
var app = angular
                .module("module",[])
                .controller("emp_controller", function($scope, $http){
                    $http.get('https://localhost:44347/api/employees')
                         .then(function(response){
                            $scope.Employee = response.data;
                         }); 
                });