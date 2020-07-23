/// <reference path="angular.js" />             


var myApp = angular.module("myModule", []);

myApp.controller("myController", function($scope){
    var employee = {
        firstName : "Ramesh",
        lastName : "Shetter",
        gender : "Male"
    }
    $scope.Employee = employee;
});