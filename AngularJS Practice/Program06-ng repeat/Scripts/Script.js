/// <reference path="angular.js" />             

var app = angular
                .module("module",[])
                .controller("employee_controller", function($scope){
                    var employee = [
                        { "empNo":101,"empName":"Ramesh","empSalary":"10000","empDept":"Development"},
                        { "empNo":102,"empName":"Sudarshan","empSalary":"20000","empDept":"Testing"},
                        { "empNo":103,"empName":"Vinayak","empSalary":"30000","empDept":"Quality Assurance"},
                        { "empNo":104,"empName":"Karan","empSalary":"40000","empDept":"UX Design"},
                        { "empNo":105,"empName":"Jatin","empSalary":"50000","empDept":"Development"}
                    ]
                    $scope.Employee = employee;
                })
                .controller("countries_controller", function($scope){
                    var countries = [
                        {
                            "countryName" : "USA",
                            "countryCities" : ["New York","SanFrancisco","Houstan"]
                        },
                        {
                            "countryName": "Britain",
                            "countryCities" : ["London","Manchester","Bristol"]
                        },
                        {
                            "countryName" : "Australia",
                            "countryCities" : ["Melbourne","Sydney","Adelaide"]
                        }
                    ]
                    $scope.Countries = countries;
                });