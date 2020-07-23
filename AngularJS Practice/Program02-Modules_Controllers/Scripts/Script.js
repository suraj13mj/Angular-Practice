/// <reference path="angular.js" />             
//provide intellisense

//1. Creating modules                            // We use Angular objects module method
var myApp = angular.module("myModule",[]);       //1st Param: Module name  //2nd Param: Dependencies on other external modules 


//2. Creating Controller
var myControl = function($scope) {
    $scope.message = "Hello World";
};


//3. Registering the controller with the module
myApp.controller("myController",myControl);     //1st Param: Controller name   //2nd Param: Controller function variable



//Instead of step 2 and 3, we can do both together
myApp.controller("myController1", function($scope){
    $scope.message = "AngularJS Tutorial";
});



//Using method chainging we can create all 3 in single step

var myApp = angular
                .module("myMdl",[])
                .controller("myCtrl", function($scope) {
                    var student = {
                        firstName : "Suraj",
                        lastName : "Janmane",
                        rollNo : "10"
                    };
                    $scope.Student = student;
                });