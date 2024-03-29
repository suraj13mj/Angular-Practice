/// <reference path="angular.js" />             

var app = angular
                .module("module",[])
                .controller("emp_controller", function($scope){
                    var employee = [
                        {
                            "empName":"Ramesh",
                            "empDOB": new Date("November 23, 1980"),
                            "empGender":"Male",
                            "empSalary":20599.505
                        },
                        {
                            "empName":"Miguel",
                            "empDOB": new Date("May 05, 1970"),
                            "empGender":"Male",
                            "empSalary":55385.986
                        },
                        {
                            "empName":"Marie",
                            "empDOB": new Date("August 15, 1974"),
                            "empGender":"Female",
                            "empSalary":75219.003
                        },
                        {
                            "empName":"Rafael",
                            "empDOB": new Date("October 27, 1979"),
                            "empGender":"Male",
                            "empSalary":58000.505
                        },
                        {
                            "empName":"Don Neto",
                            "empDOB": new Date("December 30, 1983"),
                            "empGender":"Male",
                            "empSalary":25336.585
                        },
                    ];
                    
                    $scope.Employee = employee;
                    $scope.sortColumn = 'empName';
                    $scope.reverseSort = false;

                    $scope.ColumnSort = function(column){
                        $scope.reverseSort = $scope.sortColumn == column ? !$scope.reverseSort : false;
                        $scope.sortColumn = column;
                    };

                    $scope.getSortClass = function(column){
                        if($scope.sortColumn == column){
                            return $scope.reverseSort ? "arrow-down" : "arrow-up"
                        }
                        else{
                            return ""
                        }
                    };
                });










































