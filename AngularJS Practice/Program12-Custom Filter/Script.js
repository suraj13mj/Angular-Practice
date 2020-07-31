

var app = angular
                .module("myModule",[])

                .filter("customfilter_gender", function(){
                    return function(item){
                        switch (item) {
                            case 1:
                                return "Male";
                            case 2:
                                return "Female";
                            case 3:
                                return "Not Disclosed";
                            default:
                                return "Invalid"
                        }
                    }
                })

                .controller("myController", function($scope){
                    var employee = [
                        { "empName":"Ramesh", "empGender":1, "empSalary":20599.505 },
                        { "empName":"Vidhi", "empGender":2, "empSalary":20599.505 },
                        { "empName":"Vinayak", "empGender":3, "empSalary":20599.505 },
                        { "empName":"Geeta", "empGender":2, "empSalary":20599.505 },
                        { "empName":"Rakesh", "empGender":1, "empSalary":20599.505 },
                        { "empName":"Jyothi", "empGender":3, "empSalary":20599.505 } 
                    ]

                    $scope.Employees = employee;
                });

                //Custom filter can be created using filter function present in angularjs
                //Custom filter is a function that returns another function
                //It can also be created in separate file (so that all filter are in one place)
                //We need to reference that filter.js file in index.html