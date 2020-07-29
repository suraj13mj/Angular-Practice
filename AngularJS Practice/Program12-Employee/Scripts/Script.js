/// <reference path="angular.js" />             

var app = angular
                .module("module",['ngResource'])
                .controller("emp_controller", function($scope,$resource){
                    $scope.emp = {};

                    $scope.getEmployees = function(){
                        var request = $resource("https://localhost:44367/api/employees");
                        $scope.emps = request.query();
                    }

                    $scope.addEmployee = function () {
                        var request = $resource("https://localhost:44367/api/employees");
                        request.save($scope.emp,   
                               function (data) {        // success function 
                                   $scope.error = "Successfully Added Employee [" + $scope.emp.FirstName + "]";
                                   $scope.emp = {};
                                   $scope.getEmployees();
                               }
                               ,
                               function (data) {       // error function
                                   $scope.error = "Sorry! Could not add  Employee [" + $scope.emp.FirstName + "]";
                               }
                         );
                    };


                    $scope.deleteEmployee = function (id) {
                        var res = confirm("Do you really want to delete Employee [" + id + "]?");
                        if (!res)
                            return;
        
                        var request = $resource("https://localhost:44367/api/employees/:id");
                        request.delete( { id : id },
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
                        var request = $resource("https://localhost:44367/api/employees/:ID",
                              { ID : $scope.emp.ID },
                              { update : { method : 'put'} }
                              );
                        // call custom action update to make PUT request 
                        request.update( $scope.emp,
                              function (data) {        // success function 
                                   $scope.error = "Successfully Updated Employee [" + $scope.emp.ID + "]";
                               }
                               ,
                               function (data) {       // error function
                                   $scope.error = "Sorry! Could not update Employee [" + $scope.emp.ID + "]";
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
                })