var app = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                  var employees = [
                    { 'empName':'Ramesh', 'empGender':'Male', 'empSalary':2059 },
                    { 'empName':'Suresh', 'empGender':'Male', 'empSalary':1000 },
                    { 'empName':'Lavisha', 'empGender':'Female', 'empSalary':5000 },
                    { 'empName':'Aarti', 'empGender':'Female', 'empSalary':6300 },
                    { 'empName':'Jayant', 'empGender':'Male', 'empSalary':7000 }
                 ]

                    $scope.Employees = employees;
                    $scope.ViewType = "EmpTable.html";
                })