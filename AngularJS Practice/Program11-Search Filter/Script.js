
var app = angular
                .module("module",[])
                .controller("myController", function($scope){
                    var employee = [
                        { "empNo":101,"empName":"Ramesh","empSalary":"10000","empDept":"Development"},
                        { "empNo":102,"empName":"Sudarshan","empSalary":"20000","empDept":"Testing"},
                        { "empNo":103,"empName":"Vinayak","empSalary":"30000","empDept":"Quality Assurance"},
                        { "empNo":104,"empName":"Karan","empSalary":"40000","empDept":"UX Design"},
                        { "empNo":105,"empName":"Jatin","empSalary":"50000","empDept":"Development"}
                    ]
                    $scope.Employee = employee;

                    $scope.custom_search = function(item){          //item is a Employee object
                        if($scope.searchText4 == undefined){
                            return true;
                        }
                        else {
                            if((item.empName.toLowerCase().indexOf($scope.searchText4.toLowerCase()) != -1) || 
                            (item.empDept.toLowerCase().indexOf($scope.searchText4.toLowerCase()) != -1)){
                                return true;
                            }
                        }

                        return false;
                    }
                });

                //custom search is done for each row, for which ever row we return that row is displayed
                //If nothing is typed in Search box then all rows are displayed
                //If none of the match is found then returns false for each row and thus no row is displayed